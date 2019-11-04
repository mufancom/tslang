import {
  AssertFalse,
  AssertTrue,
  Denominalize,
  DenominalizeDeep,
  IsCompatible,
  IsEqual,
  Nominal,
} from '../library';

type Timestamp = Nominal<number, 'timestamp'>;

type _ =
  | AssertFalse<IsEqual<number, Timestamp>>
  | AssertTrue<IsCompatible<Timestamp, number>>
  | AssertTrue<IsEqual<Denominalize<string>, string>>
  | AssertTrue<IsEqual<Denominalize<Timestamp>, number>>
  | AssertTrue<
      IsEqual<
        DenominalizeDeep<{foo: Timestamp; bar: Timestamp[]}>,
        {foo: number; bar: number[]}
      >
    >;
