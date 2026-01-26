export type CourseStatus = "Concluído" | "Cursando";
export type CourseType = "Graduação" | "Pós-graduação" | "Detran" | "Complementar" | "Carteira de Habilitação" | "Certificação";

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
  { name: "CNH 'B'", institution: "Detran", type: "Carteira de Habilitação", status: "Cursando" },
  { name: "Ciência de Dados", institution: "Faculdade Líbano", details: "Noite", type: "Pós-graduação", status: "Cursando", schedule: "Noite", finish: "2026" },
  { name: "Robótica e Inteligência Artificial", institution: "Faculdade Líbano", details: "Noite", type: "Pós-graduação", status: "Cursando", schedule: "Noite", finish: "2026" },
  { name: "Análise e Desenvolvimento de Sistemas", institution: "UNICV", details: "EAD", type: "Graduação", status: "Concluído", finish: "2025" },
  { name: "Marketing Digital", institution: "UNICV", details: "EAD", type: "Graduação", status: "Concluído", finish: "2023" },
  { name: "AWS", institution: "Escola da Nuvem", details: "EAD", type: "Complementar", status: "Concluído", finish: "2023" },
  { name: "Desenvolvedor Web", institution: "SENAI - Vila Leopoldina", details: "Semipresencial", type: "Complementar", status: "Concluído", finish: "2022" },
  { name: "Java Fullstack", institution: "Generation Brasil", details: "Semipresencial", type: "Complementar", status: "Concluído", finish: "2022" },
  { name: "Desenvolvedor Web", institution: "PrograMaria", details: "EAD", type: "Complementar", status: "Concluído", finish: "2021" },
];
