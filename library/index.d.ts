import {Constructor} from './types';

export * from './assertion';
export * from './comparison';
export * from './types';
export * from './paranoia';
export * from './mutation';

/**
 * Mixin class decorator, applies properties from other class to the decorator
 * target. You still need to use declaration merging to merge mixin interface
 * with the target class.
 *
 * @param constructors Constructors of which the properties will be applied to
 * the target constructor.
 */
export function mixin(constructors: Function[]): ClassDecorator;
