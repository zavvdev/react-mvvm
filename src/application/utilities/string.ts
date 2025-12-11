export function shortenString(value: string, limit: number = 100) {
  return value.length > limit ? `${value.slice(0, limit)}...` : value;
}
