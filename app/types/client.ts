export type ClientType = "CLT" | "PJ" | "Voluntário" | "Temporário";

export interface ClientDescription {
  period: string;
  responsibilities: string[];
  results?: string[];
  tags?: string[];
}

export interface Client {
  name: string;
  logo: string;
  role?: string;
  type?: ClientType;
  desc: ClientDescription;
}

