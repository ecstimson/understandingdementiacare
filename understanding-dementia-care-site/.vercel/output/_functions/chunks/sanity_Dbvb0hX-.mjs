import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const client = createClient({
  projectId: undefined                                        ,
  dataset: undefined                                     ,
  useCdn: true,
  apiVersion: "2024-01-01",
  token: undefined                                
});
imageUrlBuilder(client);

export { client as c };
