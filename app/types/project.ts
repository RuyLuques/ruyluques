import { LucideIcon } from "lucide-react";

export type ProjectType = "Profissional" | "Acadêmico" | "Social";

export interface Project {
  title: string;
  area?: string;
  description: string;
  tags?: string[];
  type: ProjectType;
  status?: string; 
  icon: LucideIcon;
  link: string;
  images?: string[];
}
