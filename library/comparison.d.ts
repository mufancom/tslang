export type IsEqual<TA, TB> = [TA, TB, keyof TA, keyof TB] extends [
  TB,
  TA,
  keyof TB,
  keyof TA,
]
  ? true
  : false;

export type IsCompatible<T, TComparison> = T extends TComparison ? true : false;
