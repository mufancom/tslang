export type IsEqual<TA, TB> = [TA, TB] extends [TB, TA] ? true : false;

export type IsCompatible<T, TComparison> = T extends TComparison ? true : false;
