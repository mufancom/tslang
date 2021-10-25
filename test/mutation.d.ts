import {
  AssertTrue,
  DeepPartial,
  DeepReadonly,
  Default,
  Flatten,
  Intersection,
  IsEqual,
  KeepValueContainingType,
  KeepValueOfKey,
  KeepValueWithType,
  KeyOfValueContainingType,
  KeyOfValueNotContainingType,
  KeyOfValueNotWithType,
  KeyOfValueWithType,
  OmitValueContainingType,
  OmitValueOfKey,
  OmitValueWithType,
  OptionalizeUndefined,
  OptionalizeUndefinedDeep,
  PartialByKey,
  PromiseType,
  ReplaceString,
  ValueContainingType,
  ValueNotContainingType,
  ValueNotOfKey,
  ValueNotWithType,
  ValueOfKey,
  ValueWithType,
} from '../library';

interface TestObject {
  type: 'test-object';
}

type _ =
  | AssertTrue<
      IsEqual<
        KeyOfValueWithType<{foo: string; bar: number}, string | object>,
        'foo'
      >
    >
  | AssertTrue<
      IsEqual<
        KeyOfValueNotWithType<{foo: string; bar: number}, string | object>,
        'bar'
      >
    >
  | AssertTrue<
      IsEqual<
        KeyOfValueContainingType<{foo: string | object; bar: number}, string>,
        'foo'
      >
    >
  | AssertTrue<
      IsEqual<
        KeyOfValueNotContainingType<
          {foo: string | object; bar: number},
          string
        >,
        'bar'
      >
    >
  | AssertTrue<
      IsEqual<
        ValueWithType<{foo: string; bar: number; pia: TestObject}, object>,
        TestObject
      >
    >
  | AssertTrue<
      IsEqual<
        ValueNotWithType<
          {foo: string; bar: number; pia: TestObject},
          string | number
        >,
        TestObject
      >
    >
  | AssertTrue<
      IsEqual<
        ValueContainingType<
          {foo: string; bar: number; pia: TestObject},
          TestObject & {yo: 'ha'}
        >,
        TestObject
      >
    >
  | AssertTrue<
      IsEqual<
        ValueNotContainingType<
          {foo: {x: 'abc'}; bar: {y: 'def'}; pia: TestObject},
          {x: 'abc'} & {y: 'def'}
        >,
        TestObject
      >
    >
  | AssertTrue<IsEqual<ValueOfKey<{foo: string; bar: number}, 'foo'>, string>>
  | AssertTrue<
      IsEqual<ValueNotOfKey<{foo: string; bar: number}, 'bar'>, string>
    >
  | AssertTrue<
      IsEqual<KeepValueOfKey<{foo: string; bar: number}, 'bar'>, {bar: number}>
    >
  | AssertTrue<
      IsEqual<OmitValueOfKey<{foo: string; bar: number}, 'bar'>, {foo: string}>
    >
  | AssertTrue<
      IsEqual<
        KeepValueWithType<{foo: string; bar: number}, number | object>,
        {bar: number}
      >
    >
  | AssertTrue<
      IsEqual<
        OmitValueWithType<{foo: string; bar: number}, number | object>,
        {foo: string}
      >
    >
  | AssertTrue<
      IsEqual<
        KeepValueContainingType<{foo: string; bar: number | object}, number>,
        {bar: number | object}
      >
    >
  | AssertTrue<
      IsEqual<
        OmitValueContainingType<{foo: string; bar: number | object}, number>,
        {foo: string}
      >
    >
  | AssertTrue<
      IsEqual<
        OptionalizeUndefined<{foo: string; bar: string | undefined}>,
        {foo: string; bar?: string | undefined}
      >
    >
  | AssertTrue<
      IsEqual<
        OptionalizeUndefinedDeep<{
          foo: string;
          bar: string | undefined;
          ha: {yo: string | undefined; yoyo: string[]};
        }>,
        {
          foo: string;
          bar?: string | undefined;
          ha: {yo?: string; yoyo: string[]};
        }
      >
    >
  | AssertTrue<
      IsEqual<ReplaceString<'foobaryoha', 'bar', 'barbara'>, 'foobarbarayoha'>
    >
  | AssertTrue<IsEqual<ReplaceString<'foobaryoha', 'foo', ''>, 'baryoha'>>
  | AssertTrue<
      IsEqual<ReplaceString<'foobaryoha', 'yoha', 'yoda'>, 'foobaryoda'>
    >
  | AssertTrue<
      IsEqual<ReplaceString<'foobaryoha', 'biu', 'biubiu'>, 'foobaryoha'>
    >
  | AssertTrue<IsEqual<Default<string, number>, string>>
  | AssertTrue<IsEqual<Default<never, number>, number>>
  | AssertTrue<IsEqual<PromiseType<Promise<number>>, number>>
  | AssertTrue<
      IsEqual<
        DeepReadonly<{foo: {yo: string}; bar: number; pia: {ha: string}[]}>,
        {
          readonly foo: {readonly yo: string};
          readonly bar: number;
          readonly pia: readonly {readonly ha: string}[];
        }
      >
    >
  | AssertTrue<
      IsEqual<Intersection<{a: string} | {b: number}>, {a: string; b: number}>
    >
  | AssertTrue<
      IsEqual<
        Flatten<
          | {a: string; c: string; d?: boolean}
          | {b: number; c: number; d: boolean}
        >,
        {a?: string; b?: number; c: string | number; d?: boolean}
      >
    >
  | AssertTrue<
      IsEqual<
        PartialByKey<{a: string; b: number; c: boolean}, 'a'>,
        {a?: string; b: number; c: boolean}
      >
    >
  | AssertTrue<
      IsEqual<
        DeepPartial<{a: string; b: {e: string; f: number}; c: boolean}>,
        {a?: string; b?: {e?: string; f?: number}; c?: boolean}
      >
    >;
