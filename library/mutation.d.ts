import {IsEqual} from './comparison';
import {Primitive} from './types';

// Extract keys

type __KeyOfValueWithType<
  TObject extends object,
  TKey extends keyof TObject,
  TValue
> = TKey extends keyof TObject
  ? TObject[TKey] extends TValue
    ? TKey
    : never
  : never;

export type KeyOfValueWithType<
  TObject extends object,
  TValue,
  TDistributeUnion extends boolean = true
> = TDistributeUnion extends true
  ? TObject extends object
    ? __KeyOfValueWithType<TObject, keyof TObject, TValue>
    : never
  : __KeyOfValueWithType<TObject, keyof TObject, TValue>;

type __KeyOfValueNotWithType<
  TObject extends object,
  TKey extends keyof TObject,
  TValue
> = TKey extends keyof TObject
  ? TObject[TKey] extends TValue
    ? never
    : TKey
  : never;

export type KeyOfValueNotWithType<
  TObject extends object,
  TValue,
  TDistributeUnion extends boolean = true
> = TDistributeUnion extends true
  ? TObject extends object
    ? __KeyOfValueNotWithType<TObject, keyof TObject, TValue>
    : never
  : __KeyOfValueNotWithType<TObject, keyof TObject, TValue>;

export type KeyOfUnionValueNotWithType<
  TObject extends object,
  TValue,
  TDistributeUnion extends boolean = true
> = TDistributeUnion extends true
  ? TObject extends object
    ? __KeyOfValueNotWithType<TObject, keyof TObject, TValue>
    : never
  : __KeyOfValueNotWithType<TObject, keyof TObject, TValue>;

type __KeyOfValueContainingType<
  TObject extends object,
  TKey extends keyof TObject,
  TValue
> = TKey extends keyof TObject
  ? TValue extends TObject[TKey]
    ? TKey
    : never
  : never;

export type KeyOfValueContainingType<
  TObject extends object,
  TValue,
  TDistributeUnion extends boolean = true
> = TDistributeUnion extends true
  ? TObject extends object
    ? __KeyOfValueContainingType<TObject, keyof TObject, TValue>
    : never
  : __KeyOfValueContainingType<TObject, keyof TObject, TValue>;

type __KeyOfValueNotContainingType<
  TObject extends object,
  TKey extends keyof TObject,
  TValue
> = TKey extends keyof TObject
  ? TValue extends TObject[TKey]
    ? never
    : TKey
  : never;

export type KeyOfValueNotContainingType<
  TObject extends object,
  TValue,
  TDistributeUnion extends boolean = true
> = TDistributeUnion extends true
  ? TObject extends object
    ? __KeyOfValueNotContainingType<TObject, keyof TObject, TValue>
    : never
  : __KeyOfValueNotContainingType<TObject, keyof TObject, TValue>;

// Extract values

type __ValueWithType<
  TObject extends object,
  TKey extends keyof TObject,
  TValue
> = TKey extends keyof TObject
  ? TObject[TKey] extends TValue
    ? TObject[TKey]
    : never
  : never;

export type ValueWithType<
  TObject extends object,
  TValue,
  TDistributeUnion extends boolean = true
> = TDistributeUnion extends true
  ? TObject extends object
    ? __ValueWithType<TObject, keyof TObject, TValue>
    : never
  : __ValueWithType<TObject, keyof TObject, TValue>;

type __ValueNotWithType<
  TObject extends object,
  TKey extends keyof TObject,
  TValue
> = TKey extends keyof TObject
  ? TObject[TKey] extends TValue
    ? never
    : TObject[TKey]
  : never;

export type ValueNotWithType<
  TObject extends object,
  TValue,
  TDistributeUnion extends boolean = true
> = TDistributeUnion extends true
  ? TObject extends object
    ? __ValueNotWithType<TObject, keyof TObject, TValue>
    : never
  : __ValueNotWithType<TObject, keyof TObject, TValue>;

type __ValueContainingType<
  TObject extends object,
  TKey extends keyof TObject,
  TValue
> = TKey extends keyof TObject
  ? TValue extends TObject[TKey]
    ? TObject[TKey]
    : never
  : never;

export type ValueContainingType<
  TObject extends object,
  TValue,
  TDistributeUnion extends boolean = true
> = TDistributeUnion extends true
  ? TObject extends object
    ? __ValueContainingType<TObject, keyof TObject, TValue>
    : never
  : __ValueContainingType<TObject, keyof TObject, TValue>;

type __ValueNotContainingType<
  TObject extends object,
  TKey extends keyof TObject,
  TValue
> = TKey extends keyof TObject
  ? TValue extends TObject[TKey]
    ? never
    : TObject[TKey]
  : never;

export type ValueNotContainingType<
  TObject extends object,
  TValue,
  TDistributeUnion extends boolean = true
> = TDistributeUnion extends true
  ? TObject extends object
    ? __ValueNotContainingType<TObject, keyof TObject, TValue>
    : never
  : __ValueNotContainingType<TObject, keyof TObject, TValue>;

export type ValueOfKey<
  TObject extends object,
  TKey extends keyof TObject,
  TDistributeUnion extends boolean = true
> = TDistributeUnion extends true
  ? TObject extends object
    ? TKey extends keyof TObject
      ? TObject[TKey]
      : never
    : never
  : TObject[TKey];

export type ValueNotOfKey<
  TObject extends object,
  TKey extends keyof TObject,
  TDistributeUnion extends boolean = true
> = ValueOfKey<TObject, Exclude<keyof TObject, TKey>, TDistributeUnion>;

// Keep or omit values by keys

export type KeepValueOfKey<
  TObject extends object,
  TKey extends keyof TObject,
  TDistributeUnion extends boolean = true
> = TDistributeUnion extends true
  ? TObject extends object
    ? Pick<TObject, Extract<keyof TObject, TKey>>
    : never
  : Pick<TObject, Extract<keyof TObject, TKey>>;

export type OmitValueOfKey<
  TObject extends object,
  TKey extends keyof TObject,
  TDistributeUnion extends boolean = true
> = TDistributeUnion extends true
  ? TObject extends object
    ? Pick<TObject, Exclude<keyof TObject, TKey>>
    : never
  : Pick<TObject, Exclude<keyof TObject, TKey>>;

// Keep or omit values with given type

export type KeepValueWithType<
  TObject extends object,
  TValue,
  TDistributeUnion extends boolean = true
> = TDistributeUnion extends true
  ? TObject extends object
    ? {[K in KeyOfValueWithType<TObject, TValue>]: TObject[K]}
    : never
  : {[K in KeyOfValueWithType<TObject, TValue, false>]: TObject[K]};

export type OmitValueWithType<
  TObject extends object,
  TValue,
  TDistributeUnion extends boolean = true
> = TDistributeUnion extends true
  ? TObject extends object
    ? {[K in KeyOfValueNotWithType<TObject, TValue>]: TObject[K]}
    : never
  : {[K in KeyOfValueNotWithType<TObject, TValue, false>]: TObject[K]};

export type KeepValueContainingType<
  TObject extends object,
  TValue,
  TDistributeUnion extends boolean = true
> = TDistributeUnion extends true
  ? TObject extends object
    ? {[K in KeyOfValueContainingType<TObject, TValue>]: TObject[K]}
    : never
  : {[K in KeyOfValueContainingType<TObject, TValue, false>]: TObject[K]};

export type OmitValueContainingType<
  TObject extends object,
  TValue,
  TDistributeUnion extends boolean = true
> = TDistributeUnion extends true
  ? TObject extends object
    ? {[K in KeyOfValueNotContainingType<TObject, TValue>]: TObject[K]}
    : never
  : {[K in KeyOfValueNotContainingType<TObject, TValue, false>]: TObject[K]};

// Optionalize values

export type OptionalizeUndefined<
  TObject extends object,
  TDistributeUnion extends boolean = true
> = Partial<KeepValueContainingType<TObject, undefined, TDistributeUnion>> &
  OmitValueContainingType<TObject, undefined, TDistributeUnion>;

export type OptionalizeUndefinedDeep<T> = T extends object
  ? {
      [K in KeyOfValueContainingType<T, undefined>]?: OptionalizeUndefinedDeep<
        T[K]
      >;
    } &
      {
        [K in KeyOfValueNotContainingType<
          T,
          undefined
        >]: OptionalizeUndefinedDeep<T[K]>;
      }
  : T;

// Miscellaneous

export type Default<T, TDefault> = IsEqual<T, never> extends true
  ? TDefault
  : T;

export type PromiseType<
  TPromise extends Promise<any>
> = TPromise extends Promise<infer T> ? T : never;

export type DeepReadonly<T> = {readonly [P in keyof T]: DeepReadonly<T[P]>};

export type Intersection<TUnion> = (TUnion extends any
? (_: TUnion) => void
: never) extends (_: infer T) => void
  ? T
  : never;

type __ObjectUnionNonGeneralKey<TObjectUnion extends object> = Exclude<
  TObjectUnion extends object ? keyof TObjectUnion : never,
  keyof TObjectUnion
>;

type __FlattenObject<
  TObjectUnion extends object,
  TGeneralKey extends keyof TObjectUnion = keyof TObjectUnion
> = {[TKey in TGeneralKey]: TObjectUnion[TKey]} &
  {
    [TKey in __ObjectUnionNonGeneralKey<
      TObjectUnion
    >]?: TObjectUnion extends object
      ? TKey extends keyof TObjectUnion
        ? TObjectUnion[TKey]
        : never
      : never;
  };

export type Flatten<TUnion> =
  | __FlattenObject<Extract<TUnion, object>>
  | Exclude<TUnion, object>;

export type PartialByKey<
  TObject extends object,
  TKey extends keyof TObject
> = Omit<TObject, TKey> & Partial<Pick<TObject, TKey>>;
