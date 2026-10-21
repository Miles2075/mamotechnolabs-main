export type RouteType =
  | 'home'
  | 'about'
  | 'contact'
  | 'placements'
  | 'hire'
  | 'skill'
  | 'courses'
  | 'course-detail'
  | 'internship'
  | 'final-year'
  | 'visit'
  | 'reviews'
  | 'blog'
  | 'nios';

export interface CourseModule {
  title: string;
  topics: string[];
}

export interface DetailedCourse {
  id: string; // e.g. 'ai', 'ai-tools', 'ds', 'gen-ai', 'ml', 'pe'
  title: string;
  subtitle: string;
  tag: string;
  duration: string;
  badge?: 'New' | 'Trending';
  avgSalary: string;
  rating: number;
  reviewsCount: string;
  description: string;
  fullOverview: string;
  features: string[];
  skills: string[];
  jobRoles: string[];
  tools: { name: string; icon?: string }[];
  syllabus: CourseModule[];
  faqs: { question: string; answer: string }[];
}

export interface CatalogCourse {
  id: string;
  name: string;
  category: string;
  duration: string;
  description: string;
  badges: ('New' | 'Trending')[];
  icon: string;
  detailedSlug?: string;
}

export interface StudentReview {
  id: string;
  name: string;
  roleOrCourse: string;
  type: 'google' | 'youtube' | 'text';
  rating: number;
  date: string;
  reviewText: string;
  avatarText?: string;
  videoThumb?: string;
  youtubeUrl?: string;
}

export interface PlacementRecord {
  id: string;
  studentName: string;
  role: string;
  companyName: string;
  studentImg: string;
  companyLogo: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation?: string;
}

export interface CertificateCategory {
  id: string;
  name: string;
  category: string;
  desc: string;
  badgeCode: string;
  gradientClass: string;
  questions?: QuizQuestion[];
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  date: string;
  image: string;
  excerpt: string;
  readTime: string;
}
