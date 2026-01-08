import type { PortableTextBlock } from '@sanity/types';

export interface SanityImage {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
  alt?: string;
}

export interface SiteSettings {
  _id: string;
  _type: 'siteSettings';
  title: string;
  description: string;
  email: string;
  phone?: string;
  address?: string;
  socialLinks?: {
    linkedin?: string;
    facebook?: string;
    twitter?: string;
  };
}

export interface Page {
  _id: string;
  _type: 'page';
  title: string;
  slug: {
    current: string;
  };
  content: PortableTextBlock[];
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    ogImage?: SanityImage;
  };
}

export interface Testimonial {
  _id: string;
  _type: 'testimonial';
  name: string;
  role?: string;
  quote: string;
  image?: SanityImage;
  featured?: boolean;
}

export interface SpeakingTopic {
  _id: string;
  _type: 'speakingTopic';
  title: string;
  description: string;
  duration?: string;
  audience?: string;
  order?: number;
}

export interface FAQItem {
  _id: string;
  _type: 'faq';
  question: string;
  answer: PortableTextBlock[];
  order?: number;
}

export interface Service {
  _id: string;
  _type: 'service';
  title: string;
  description: string;
  features?: string[];
  image?: SanityImage;
}

