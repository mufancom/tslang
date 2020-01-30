/* eslint-disable @magicspace/scoped-modules */

// @ts-check

/**
 * @typedef {import('./types').Constructor} Constructor
 */

/**
 * @param constructors {Constructor[]}
 * @returns {ClassDecorator}
 */
exports.mixin = function mixin(constructors) {
  return targetConstructor => {
    let targetPrototype = targetConstructor.prototype;

    for (let constructor of constructors) {
      let prototype = constructor.prototype;

      let descriptors = Object.getOwnPropertyDescriptors(prototype);

      delete descriptors.constructor;

      Object.defineProperties(targetPrototype, descriptors);
    }
  };
};
