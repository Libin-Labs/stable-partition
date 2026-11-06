export function stablePartition<T>(
  items: readonly T[],
  predicate: (value: T, index: number) => boolean,
): [T[], T[]] {
  if (!Array.isArray(items) || typeof predicate !== 'function')
    throw new TypeError('Expected array and predicate');
  const yes: T[] = [],
    no: T[] = [];
  items.forEach((value, index) => (predicate(value, index) ? yes : no).push(value));
  return [yes, no];
}
