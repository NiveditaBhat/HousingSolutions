export const capitalize = (item: string) => {
  const lowerCase = item.toLowerCase();
  return lowerCase.replace(/^\w/, (c: string) => c.toUpperCase());
};
