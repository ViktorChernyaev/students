export const RATING_PERFECT = 5;
export const RATING_GOOD = 4;
export const RATING_PASSABLY = 3;
export const RATING_BAD = 2;

export const datePattern = "(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d";
export const ratingPattern = `${RATING_PERFECT}|${RATING_GOOD}|${RATING_PASSABLY}|${RATING_BAD}`;

export enum Rating {
  PERFECT = RATING_PERFECT,
  GOOD = RATING_GOOD,
  PASSABLY = RATING_PASSABLY,
  BAD = RATING_BAD,
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
