declare const __nominal_name: unique symbol;
declare const __nominal_type: unique symbol;

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
type __Type<TName, T> = {
  [__nominal_name]: TName;
  [__nominal_type]: T;
};

export type Nominal<T, TName> = T & __Type<TName, T>;

export type Denominalize<T> = T extends __Type<any, infer TDenominalized>
  ? TDenominalized
  : T;

export type DenominalizeDeep<T> = T extends __Type<any, infer TDenominalized>
  ? TDenominalized
  : {[TKey in keyof T]: DenominalizeDeep<T[TKey]>};

export class EmptyObjectPatch {
  protected _?: unknown;
}
