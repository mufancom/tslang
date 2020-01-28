/* eslint-disable @magicspace/scoped-modules */

// @ts-check

/**
 * @typedef {import('./types').Constructor} Constructor
 */

/**
 * @param targetConstructor {Constructor}
 * @param constructors {Constructor[]}
 */
exports.mixin = function mixin(targetConstructor, ...constructors) {
  let targetPrototype = targetConstructor.prototype;

  for (let constructor of constructors) {
    let prototype = constructor.prototype;

    Object.defineProperties(
      targetPrototype,
      Object.getOwnPropertyDescriptors(prototype),
    );
  }
};
