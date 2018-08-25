import {
  AssertFalse,
  AssertTrue,
  IsCompatible,
  IsEqual,
  Nominal,
} from '../library';

type Timestamp = Nominal<number, 'timestamp'>;

type _ =
  | AssertFalse<IsEqual<number, Timestamp>>
  | AssertTrue<IsCompatible<Timestamp, number>>;
