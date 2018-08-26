import {Primitive} from './types';

// Extract keys

export type KeyOfValueWithType<TObject extends object, TValue> = {
  [K in keyof TObject]: TObject[K] extends TValue ? K : never
}[keyof TObject];

export type KeyOfValueNotWithType<TObject extends object, TValue> = {
  [K in keyof TObject]: TObject[K] extends TValue ? never : K
}[keyof TObject];

// Extract values

export type ValueWithType<TObject extends object, TValue> = {
  [K in keyof TObject]: TObject[K] extends TValue ? TObject[K] : never
}[keyof TObject];

export type ValueNotWithType<TObject extends object, TValue> = {
  [K in keyof TObject]: TObject[K] extends TValue ? never : TObject[K]
}[keyof TObject];

// Keep or omit values by keys

export type KeepValueOfKey<
  TObject extends object,
  TKey
> = TObject extends object
  ? Pick<TObject, Extract<keyof TObject, TKey>>
  : never;

export type OmitValueOfKey<
  TObject extends object,
  TKey
> = TObject extends object
  ? Pick<TObject, Exclude<keyof TObject, TKey>>
  : never;

// Keep or omit values with given type

export type KeepValueWithType<TObject extends object, TValue> = {
  [K in KeyOfValueWithType<TObject, TValue>]: TObject[K]
};

export type OmitValueWithType<TObject extends object, TValue> = {
  [K in KeyOfValueNotWithType<TObject, TValue>]: TObject[K]
};

// Miscellaneous

type __DeepReadonly<T> = {readonly [P in keyof T]: DeepReadonly<T[P]>};

export type DeepReadonly<T> = T extends Primitive
  ? T
  : T extends (infer U)[]
    ? ReadonlyArray<__DeepReadonly<U>>
    : __DeepReadonly<T>;
