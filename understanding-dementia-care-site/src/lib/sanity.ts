import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID;
const dataset = import.meta.env.PUBLIC_SANITY_DATASET || 'production';

// Check if Sanity is properly configured (not using placeholder values)
export const isSanityConfigured = projectId && projectId !== 'temp' && projectId.length > 5;

export const client = isSanityConfigured 
  ? createClient({
      projectId,
      dataset,
      useCdn: true,
      apiVersion: '2024-01-01',
      token: import.meta.env.SANITY_API_TOKEN,
    })
  : null;

const builder = client ? imageUrlBuilder(client) : null;

export function urlFor(source: SanityImageSource) {
  if (!builder) return { url: () => '' };
  return builder.image(source);
}

// Safe fetch function that returns empty array if Sanity isn't configured
export async function safeFetch<T>(query: string): Promise<T[]> {
  if (!client) {
    return [] as T[];
  }
  try {
    return await client.fetch<T[]>(query);
  } catch (error) {
    console.warn('Sanity fetch failed:', error);
    return [] as T[];
  }
}

