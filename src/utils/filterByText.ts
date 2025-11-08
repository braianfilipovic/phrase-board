export function filterByText<T>(
  items: T[],
  search: string,
  selector?: (item: T) => string
): T[] {
  if (!search.trim()) return items;

  const lowerSearch = search.toLowerCase();

  return items.filter((item) => {
    const text = selector ? selector(item) : String(item);
    return text.toLowerCase().match(lowerSearch);
  });
}
