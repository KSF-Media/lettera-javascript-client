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
    define(['ApiClient', 'model/BlockShortcodeError', 'model/ImageInfo'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./BlockShortcodeError'), require('./ImageInfo'));
  } else {
    // Browser globals (root is window)
    if (!root.Lettera) {
      root.Lettera = {};
    }
    root.Lettera.Block = factory(root.Lettera.ApiClient, root.Lettera.BlockShortcodeError, root.Lettera.ImageInfo);
  }
}(this, function(ApiClient, BlockShortcodeError, ImageInfo) {
  'use strict';



  /**
   * The Block model module.
   * @module model/Block
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>Block</code>.
   * @alias module:model/Block
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>Block</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Block} obj Optional instance to populate.
   * @return {module:model/Block} The populated <code>Block</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('paragraph')) {
        obj['paragraph'] = ApiClient.convertToType(data['paragraph'], 'String');
      }
      if (data.hasOwnProperty('html')) {
        obj['html'] = ApiClient.convertToType(data['html'], 'String');
      }
      if (data.hasOwnProperty('image')) {
        obj['image'] = ImageInfo.constructFromObject(data['image']);
      }
      if (data.hasOwnProperty('headline')) {
        obj['headline'] = ApiClient.convertToType(data['headline'], 'String');
      }
      if (data.hasOwnProperty('shortcodeError')) {
        obj['shortcodeError'] = BlockShortcodeError.constructFromObject(data['shortcodeError']);
      }
      if (data.hasOwnProperty('instagramEmbed')) {
        obj['instagramEmbed'] = ApiClient.convertToType(data['instagramEmbed'], 'String');
      }
      if (data.hasOwnProperty('infogramEmbed')) {
        obj['infogramEmbed'] = ApiClient.convertToType(data['infogramEmbed'], [Object]);
      }
      if (data.hasOwnProperty('twitterEmbed')) {
        obj['twitterEmbed'] = ApiClient.convertToType(data['twitterEmbed'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} paragraph
   */
  exports.prototype['paragraph'] = undefined;
  /**
   * @member {String} html
   */
  exports.prototype['html'] = undefined;
  /**
   * @member {module:model/ImageInfo} image
   */
  exports.prototype['image'] = undefined;
  /**
   * @member {String} headline
   */
  exports.prototype['headline'] = undefined;
  /**
   * @member {module:model/BlockShortcodeError} shortcodeError
   */
  exports.prototype['shortcodeError'] = undefined;
  /**
   * @member {String} instagramEmbed
   */
  exports.prototype['instagramEmbed'] = undefined;
  /**
   * @member {Array.<Object>} infogramEmbed
   */
  exports.prototype['infogramEmbed'] = undefined;
  /**
   * @member {String} twitterEmbed
   */
  exports.prototype['twitterEmbed'] = undefined;



  return exports;
}));


