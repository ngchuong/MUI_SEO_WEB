export const getDate = (value) => {
  const date = new Date(value);
  const displayDate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
  return displayDate;
};
