import { LucideIcon } from "lucide-react";

export interface Project {
  title: string;
  area?: string;
  description: string;
  tags?: string[];
  type: "Profissional" | "Acadêmico";
  status?: string;
  icon: LucideIcon;
  link: string;
}
