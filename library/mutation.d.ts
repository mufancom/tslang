import {Primitive} from './types';

// Extract keys

export type KeyOfValueWithType<T extends object, TValue> = {
  [K in keyof T]: T[K] extends TValue ? K : never
}[keyof T];

export type KeyOfValueNotWithType<T extends object, TValue> = {
  [K in keyof T]: T[K] extends TValue ? never : K
}[keyof T];

// Keep or omit values by keys

export type KeepValueOfKey<
  T extends object,
  TKey extends keyof T
> = T extends object ? Pick<T, Extract<keyof T, TKey>> : never;

export type OmitValueOfKey<
  T extends object,
  TKey extends keyof T
> = T extends object ? Pick<T, Exclude<keyof T, TKey>> : never;

// Keep or omit values with given type

export type KeepValueWithType<T extends object, TValue> = {
  [K in KeyOfValueWithType<T, TValue>]: T[K]
};

export type OmitValueWithType<T extends object, TValue> = {
  [K in KeyOfValueNotWithType<T, TValue>]: T[K]
};

// Miscellaneous

type __DeepReadonly<T> = {readonly [P in keyof T]: DeepReadonly<T[P]>};

export type DeepReadonly<T> = T extends Primitive
  ? T
  : T extends (infer U)[]
    ? ReadonlyArray<__DeepReadonly<U>>
    : __DeepReadonly<T>;
