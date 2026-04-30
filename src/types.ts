export interface Department {
  id: string;
  title: string;
  description: string;
  image: string;
  overview: string;
  vision: string;
  mission: string;
  duration: string;
  subjects: string[];
  careers: string[];
  headOfDept: {
    name: string;
    image: string;
    role: string;
    gender: "male" | "female";
  };
  gallery: string[];
  videoUrl?: string;
  headWord?: string;
  objectives?: string[];
  isProgram?: boolean;
  categorizedObjectives?: {
    title: string;
    items: string[];
  }[];
}

export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: string;
  videoUrl?: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  avatar: string;
  gender: "male" | "female";
}

export interface VideoCard {
  id: number;
  title: string;
  role: string;
  thumbnail: string;
  videoUrl: string;
}
