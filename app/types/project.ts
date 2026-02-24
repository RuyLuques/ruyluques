import { LucideIcon } from "lucide-react";
export type ProjectLinkType = "url" | "pdf";
export type ProjectType = "Automação" | "Programação" | "Dados" | "Pessoas" | "Design";


export interface Project {
  title: string;
  description: string;
  tags?: string[];
  type: ProjectType;
  status?: string; 
  icon: LucideIcon;
  link: string;
  linkType?: ProjectLinkType;
  images?: string[];
}
