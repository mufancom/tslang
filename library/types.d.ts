export type Primitive =
  | undefined
  | null
  | boolean
  | string
  | number
  | bigint
  | symbol;

export interface Dict<T> {
  [K: string]: T;
}

export type Constructor<T extends object = object> = new (...args: any[]) => T;

export interface PlainObject {
  [key: string]: unknown;
}

export type JSONValue = Primitive | JSONObject | JSONValue[];

export interface JSONObject {
  [key: string]: JSONValue;
}
