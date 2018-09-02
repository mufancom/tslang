export type IsEqual<TA, TB> = [TA] extends [TB]
  ? ([TB] extends [TA] ? true : false)
  : false;

export type IsCompatible<T, TComparison> = T extends TComparison ? true : false;
