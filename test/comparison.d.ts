import {AssertFalse, AssertTrue, IsCompatible, IsEqual} from '../library';

type _ =
  | AssertTrue<IsEqual<number, number>>
  | AssertTrue<IsEqual<{}, {}>>
  | AssertFalse<IsEqual<{foo?: string}, {}>>
  | AssertFalse<IsEqual<object, string>>
  | AssertTrue<IsCompatible<true, boolean>>
  | AssertFalse<IsCompatible<string, ''>>
  | AssertFalse<IsCompatible<string, number>>;
