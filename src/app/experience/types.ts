export interface Job {
  role: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
  tech: {
    [category: string]: string[];
  };
}