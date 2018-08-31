import {
  AssertTrue,
  DeepReadonly,
  IsEqual,
  KeepValueOfKey,
  KeepValueWithType,
  KeyOfValueNotWithType,
  KeyOfValueWithType,
  OmitValueOfKey,
  OmitValueWithType,
  Primitive,
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
      IsEqual<KeyOfValueWithType<{foo: string; bar: number}, string>, 'foo'>
    >
  | AssertTrue<
      IsEqual<KeyOfValueNotWithType<{foo: string; bar: number}, string>, 'bar'>
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
        KeepValueWithType<{foo: string; bar: number}, number>,
        {bar: number}
      >
    >
  | AssertTrue<
      IsEqual<
        OmitValueWithType<{foo: string; bar: number}, number>,
        {foo: string}
      >
    >
  | AssertTrue<
      IsEqual<
        DeepReadonly<{foo: {yo: string}; bar: number}>,
        {readonly foo: {readonly yo: string}; readonly bar: number}
      >
    >;
