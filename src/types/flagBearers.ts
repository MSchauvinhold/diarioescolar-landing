export interface FlagBearer {
  name: string;
  role: string;
}

export interface FlagGroup {
  type: 'Nacional' | 'Provincial';
  image: string;
  bearers: FlagBearer[];
}

export interface FlagBearersData {
  year: number;
  flags: FlagGroup[];
}
