import {AssertFalse, AssertTrue, IsCompatible, IsEqual} from '../library';

type x = IsCompatible<boolean, false>;

type _ =
  | AssertTrue<IsEqual<number, number>>
  | AssertFalse<IsEqual<object, string>>
  | AssertTrue<IsCompatible<true, boolean>>
  | AssertFalse<IsCompatible<string, ''>>
  | AssertFalse<IsCompatible<string, number>>;
