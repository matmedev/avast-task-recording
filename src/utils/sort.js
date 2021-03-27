export const ascending = (a, b) => {
  return a.metadata.time - b.metadata.time;
};

export const descending = (a, b) => {
  return b.metadata.time - a.metadata.time;
};
