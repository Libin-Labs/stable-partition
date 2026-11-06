import assert from 'node:assert/strict';
import test from 'node:test';
import * as api from '../dist/esm/index.js';
test('partitions by predicate', () => {
  assert.deepEqual(
    api.stablePartition([1, 2, 3, 4], (x) => x % 2 === 0),
    [
      [2, 4],
      [1, 3],
    ],
  );
});
test('preserves relative order', () => {
  assert.deepEqual(
    api.stablePartition(['b', 'a', 'c'], (x) => x !== 'a'),
    [['b', 'c'], ['a']],
  );
});
test('passes original index', () => {
  assert.deepEqual(
    api.stablePartition(['a', 'b', 'c'], (_, i) => i === 1),
    [['b'], ['a', 'c']],
  );
});
test('handles empty array', () => {
  assert.deepEqual(
    api.stablePartition([], () => true),
    [[], []],
  );
});
test('does not mutate source', () => {
  const a = [1, 2];
  api.stablePartition(a, Boolean);
  assert.deepEqual(a, [1, 2]);
});
test('rejects non-function predicate', () => {
  assert.throws(() => api.stablePartition([1], 3), TypeError);
});
