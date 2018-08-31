// tslint:disable:class-name variable-name

declare class __Type<T> {
  protected _: T;
}

export type Nominal<T, TName> = T & __Type<TName>;

export class EmptyObjectPatch {
  protected _?: unknown;
}
