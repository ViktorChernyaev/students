export enum Rating {
  PERFECT,
  GOOD,
  BAD,
  VERY_BAD,
};

export interface Student {
  i?: string;
  name: string;
  date: string;
  rating: Rating;
};

export interface Inputvalue {
  name: string;
  value: string;
};
