export type CourseStatus = "Concluído" | "Cursando";
export type CourseType = "Graduação" | "Pós-graduação" | "Detran";

export interface Course {
  name: string;
  type: CourseType;
  status: CourseStatus;
  schedule?: string;
  finish?: string;
}

export const courses: Course[] = [
  { name: "Marketing Digital", type: "Graduação", status: "Concluído", finish: "2023" },
  { name: "Análise e Desenvolvimento de Sistemas", type: "Graduação", status: "Concluído", finish: "2025" },
  { name: "Ciência de Dados", type: "Pós-graduação", status: "Cursando", schedule: "Noite", finish: "05/2026" },
  { name: "Robótica e Inteligência Artificial", type: "Pós-graduação", status: "Cursando", schedule: "Noite", finish: "05/2026" },
  { name: "CNH 'B'", type: "Detran", status: "Cursando" },
];
