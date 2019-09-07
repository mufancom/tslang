export type IsEqual<TA, TB> = [TA, keyof TA] extends [TB, keyof TB]
  ? ([TB, keyof TB] extends [TA, keyof TA] ? true : false)
  : false;

export type IsCompatible<T, TComparison> = T extends TComparison ? true : false;
