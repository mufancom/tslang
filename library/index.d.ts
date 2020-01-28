import {Constructor} from './types';

export * from './assertion';
export * from './comparison';
export * from './types';
export * from './paranoia';
export * from './mutation';

/**
 * https://www.typescriptlang.org/docs/handbook/mixins.html
 * @param targetConstructor Target constructor of which the prototype will be
 * applied with properties from other constructors.
 * @param constructors Constructors of which the properties will be applied to
 * the target constructor.
 */
export function mixin(
  targetConstructor: Constructor,
  constructors: Constructor[],
): void;
