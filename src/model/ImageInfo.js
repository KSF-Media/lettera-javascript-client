/**
 * Lettera
 * KSF Media's articles service
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 4.0.0-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Alignment'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Alignment'));
  } else {
    // Browser globals (root is window)
    if (!root.Lettera) {
      root.Lettera = {};
    }
    root.Lettera.ImageInfo = factory(root.Lettera.ApiClient, root.Lettera.Alignment);
  }
}(this, function(ApiClient, Alignment) {
  'use strict';



  /**
   * The ImageInfo model module.
   * @module model/ImageInfo
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ImageInfo</code>.
   * @alias module:model/ImageInfo
   * @class
   * @param url {String} 
   * @param thumb {String} 
   */
  var exports = function(url, thumb) {
    var _this = this;

    _this['url'] = url;
    _this['thumb'] = thumb;
  };

  /**
   * Constructs a <code>ImageInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ImageInfo} obj Optional instance to populate.
   * @return {module:model/ImageInfo} The populated <code>ImageInfo</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('url')) {
        obj['url'] = ApiClient.convertToType(data['url'], 'String');
      }
      if (data.hasOwnProperty('thumb')) {
        obj['thumb'] = ApiClient.convertToType(data['thumb'], 'String');
      }
      if (data.hasOwnProperty('caption')) {
        obj['caption'] = ApiClient.convertToType(data['caption'], 'String');
      }
      if (data.hasOwnProperty('alignment')) {
        obj['alignment'] = Alignment.constructFromObject(data['alignment']);
      }
    }
    return obj;
  }

  /**
   * @member {String} url
   */
  exports.prototype['url'] = undefined;
  /**
   * @member {String} thumb
   */
  exports.prototype['thumb'] = undefined;
  /**
   * @member {String} caption
   */
  exports.prototype['caption'] = undefined;
  /**
   * @member {module:model/Alignment} alignment
   */
  exports.prototype['alignment'] = undefined;



  return exports;
}));


