/**
 * Project type definitions
 */

export interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  technologies: string[];
  link?: string;
  github?: string;
  featured?: boolean;
}

export interface Social {
  platform: string;
  url: string;
  icon?: string;
}
