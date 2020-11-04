/**
 * Lettera
 * KSF Media's articles service
 *
 * The version of the OpenAPI document: 2.0.0
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 4.0.1-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.Lettera) {
      root.Lettera = {};
    }
    root.Lettera.BoxType = factory(root.Lettera.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * Enum class BoxType.
   * @enum {}
   * @readonly
   */
  var exports = {
    /**
     * value: "fact"
     * @const
     */
    "fact": "fact",
    /**
     * value: "review"
     * @const
     */
    "review": "review"  };

  /**
   * Returns a <code>BoxType</code> enum value from a Javascript object name.
   * @param {Object} data The plain JavaScript object containing the name of the enum value.
   * @return {module:model/BoxType} The enum <code>BoxType</code> value.
   */
  exports.constructFromObject = function(object) {
    return object;
  }

  return exports;
}));


