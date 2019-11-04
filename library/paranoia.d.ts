// tslint:disable: interface-over-type-literal

import {Primitive} from './types';

declare const __type: unique symbol;

type __Type<T> = {
  [__type]: T;
};

export type Nominal<T, TName> = T & __Type<TName>;

export type Denominalize<T> = T extends Nominal<infer TDenominalized, any>
  ? TDenominalized
  : T;

export type DenominalizeDeep<T> = T extends Nominal<infer TDenominalized, any>
  ? TDenominalized
  : {[TKey in keyof T]: DenominalizeDeep<T[TKey]>};

export class EmptyObjectPatch {
  protected _?: unknown;
}
