export interface FlagBearer {
  name: string;
  role: string;
}

export interface FlagBearersData {
  year: number;
  image: string;
  bearers: FlagBearer[];
}
