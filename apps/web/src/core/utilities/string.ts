export const shortenString = (value: string, limit: number = 100) =>
  value.length > limit ? `${value.slice(0, limit)}...` : value;
