import * as api from '@lp-labs/stable-partition';
import { stablePartition } from '@lp-labs/stable-partition';
console.log(stablePartition([1, 2, 3, 4], (value) => value % 2 === 0));
// @ts-expect-error invalid argument must be rejected by declarations
api.stablePartition([1], 'predicate');
