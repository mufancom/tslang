import {IsEqual} from './comparison';
import {Primitive} from './types';

// Extract keys

type __KeyOfValueWithType<
  TObject extends object,
  TKey extends keyof TObject,
  TValue
> = TKey extends keyof TObject
  ? TObject[TKey] extends TValue ? TKey : never
  : never;

export type KeyOfValueWithType<
  TObject extends object,
  TValue
> = __KeyOfValueWithType<TObject, keyof TObject, TValue>;

type __KeyOfValueNotWithType<
  TObject extends object,
  TKey extends keyof TObject,
  TValue
> = TKey extends keyof TObject
  ? TObject[TKey] extends TValue ? never : TKey
  : never;

export type KeyOfValueNotWithType<
  TObject extends object,
  TValue
> = __KeyOfValueNotWithType<TObject, keyof TObject, TValue>;

type __KeyOfValueContainingType<
  TObject extends object,
  TKey extends keyof TObject,
  TValue
> = TKey extends keyof TObject
  ? TValue extends TObject[TKey] ? TKey : never
  : never;

export type KeyOfValueContainingType<
  TObject extends object,
  TValue
> = __KeyOfValueContainingType<TObject, keyof TObject, TValue>;

type __KeyOfValueNotContainingType<
  TObject extends object,
  TKey extends keyof TObject,
  TValue
> = TKey extends keyof TObject
  ? TValue extends TObject[TKey] ? never : TKey
  : never;

export type KeyOfValueNotContainingType<
  TObject extends object,
  TValue
> = __KeyOfValueNotContainingType<TObject, keyof TObject, TValue>;

// Extract values

type __ValueWithType<
  TObject extends object,
  TKey extends keyof TObject,
  TValue
> = TKey extends keyof TObject
  ? TObject[TKey] extends TValue ? TObject[TKey] : never
  : never;

export type ValueWithType<TObject extends object, TValue> = __ValueWithType<
  TObject,
  keyof TObject,
  TValue
>;

type __ValueNotWithType<
  TObject extends object,
  TKey extends keyof TObject,
  TValue
> = TKey extends keyof TObject
  ? TObject[TKey] extends TValue ? never : TObject[TKey]
  : never;

export type ValueNotWithType<
  TObject extends object,
  TValue
> = __ValueNotWithType<TObject, keyof TObject, TValue>;

type __ValueContainingType<
  TObject extends object,
  TKey extends keyof TObject,
  TValue
> = TKey extends keyof TObject
  ? TValue extends TObject[TKey] ? TObject[TKey] : never
  : never;

export type ValueContainingType<
  TObject extends object,
  TValue
> = __ValueContainingType<TObject, keyof TObject, TValue>;

type __ValueNotContainingType<
  TObject extends object,
  TKey extends keyof TObject,
  TValue
> = TKey extends keyof TObject
  ? TValue extends TObject[TKey] ? never : TObject[TKey]
  : never;

export type ValueNotContainingType<
  TObject extends object,
  TValue
> = __ValueNotContainingType<TObject, keyof TObject, TValue>;

export type ValueOfKey<
  TObject extends object,
  TKey extends keyof TObject
> = TKey extends keyof TObject ? TObject[TKey] : never;

export type ValueNotOfKey<
  TObject extends object,
  TKey extends keyof TObject
> = ValueOfKey<TObject, Exclude<keyof TObject, TKey>>;

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

export type KeepValueContainingType<TObject extends object, TValue> = {
  [K in KeyOfValueContainingType<TObject, TValue>]: TObject[K]
};

export type OmitValueContainingType<TObject extends object, TValue> = {
  [K in KeyOfValueNotContainingType<TObject, TValue>]: TObject[K]
};

// Optionalize values

export type OptionalizeUndefined<TObject extends object> = Partial<
  KeepValueContainingType<TObject, undefined>
> &
  OmitValueContainingType<TObject, undefined>;

// Miscellaneous

export type Default<T, TDefault> = IsEqual<T, never> extends true
  ? TDefault
  : T;

export type PromiseType<
  TPromise extends Promise<any>
> = TPromise extends Promise<infer T> ? T : never;

type __DeepReadonly<T> = {readonly [P in keyof T]: DeepReadonly<T[P]>};

export type DeepReadonly<T> = T extends Primitive
  ? T
  : T extends (infer U)[]
    ? ReadonlyArray<__DeepReadonly<U>>
    : __DeepReadonly<T>;
