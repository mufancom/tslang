// tslint:disable:class-name variable-name interface-over-type-literal

type __Type<T> = {
  __type: T;
};

export type Nominal<T, TName> = T & __Type<TName>;

export class EmptyObjectPatch {
  protected _?: unknown;
}
