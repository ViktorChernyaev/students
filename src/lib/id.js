import nanoid from "nanoid";

export const addIdToObj = item => {
  return { ...item, i: nanoid() };
};

export const addIdToArr = items => {
  return items.map(item => ({ ...item, i: nanoid() }));
};
