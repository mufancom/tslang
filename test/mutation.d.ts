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
} from '../library';

type Foo = string;

type _ =
  | AssertTrue<
      IsEqual<KeyOfValueWithType<{foo: string; bar: number}, string>, 'foo'>
    >
  | AssertTrue<
      IsEqual<KeyOfValueNotWithType<{foo: string; bar: number}, string>, 'bar'>
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
