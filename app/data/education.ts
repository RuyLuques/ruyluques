export type CourseStatus = "Concluído" | "Cursando";
export type CourseType = "Graduação" | "Pós-graduação" | "Tecnólogo" | "Complementar" | "Carteira de Habilitação" | "Certificação";

export interface Course {
  name: string;
  type: CourseType;
  status: CourseStatus;
  schedule?: string;
  finish?: string;
  institution?: string;
  details?: string;
}

export const courses: Course[] = [
  { name: "Engenharia de Software", institution: "UNICV", details: "EAD", type: "Graduação", status: "Cursando", finish: "2029" },
  { name: "Análise e Desenvolvimento de Sistemas", institution: "UNICV", details: "EAD", type: "Tecnólogo", status: "Concluído", finish: "2025" },
  { name: "Marketing Digital", institution: "UNICV", details: "EAD", type: "Tecnólogo", status: "Concluído", finish: "2023" },
  { name: "AWS", institution: "Escola da Nuvem", details: "EAD", type: "Complementar", status: "Concluído", finish: "2023" },
  { name: "Desenvolvedor Web", institution: "SENAI - Vila Leopoldina", details: "Semipresencial", type: "Complementar", status: "Concluído", finish: "2022" },
  { name: "Java Fullstack", institution: "Generation Brasil", details: "Semipresencial", type: "Complementar", status: "Concluído", finish: "2022" },
  { name: "Desenvolvedor Web", institution: "PrograMaria", details: "EAD", type: "Complementar", status: "Concluído", finish: "2021" },
];
