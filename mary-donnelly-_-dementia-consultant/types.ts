export interface NavItem {
  label: string;
  path: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Topic {
  title: string;
  description: string;
  audience: 'Families' | 'Professionals' | 'General';
}