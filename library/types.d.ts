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
