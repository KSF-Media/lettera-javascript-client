/**
 * Lettera
 * <h2>KSF Media's articles service</h2> Changelog for V3: <ul><li>Unified <code>ListArticle</code> and <code>RelatedArticle</code> into a single type <code>ArticleStub</code>. NOTE: In contrast to the old types, <code>ArticleStub.relatedArticles</code> is now an optional value.</li> <li>Added endpoint <code>/article/{uuid}/stub</code></li> <li>Removed deprecated endpoint <code>/article/search</code></li> </ul> 
 *
 * The version of the OpenAPI document: 3.0.0
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
    root.Lettera.Category = factory(root.Lettera.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The Category model module.
   * @module model/Category
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>Category</code>.
   * @alias module:model/Category
   * @class
   * @param id {String} 
   * @param label {String} 
   * @param type {module:model/Category.TypeEnum} 
   */
  var exports = function(id, label, type) {
    var _this = this;

    _this['id'] = id;
    _this['label'] = label;
    _this['type'] = type;
  };

  /**
   * Constructs a <code>Category</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Category} obj Optional instance to populate.
   * @return {module:model/Category} The populated <code>Category</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('label')) {
        obj['label'] = ApiClient.convertToType(data['label'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('url')) {
        obj['url'] = ApiClient.convertToType(data['url'], 'String');
      }
      if (data.hasOwnProperty('subcategories')) {
        obj['subcategories'] = ApiClient.convertToType(data['subcategories'], [Category]);
      }
    }
    return obj;
  }

  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} label
   */
  exports.prototype['label'] = undefined;
  /**
   * @member {module:model/Category.TypeEnum} type
   */
  exports.prototype['type'] = undefined;
  /**
   * @member {String} url
   */
  exports.prototype['url'] = undefined;
  /**
   * @member {Array.<module:model/Category>} subcategories
   */
  exports.prototype['subcategories'] = undefined;


  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "feed"
     * @const
     */
    "feed": "feed",
    /**
     * value: "webview"
     * @const
     */
    "webview": "webview",
    /**
     * value: "link"
     * @const
     */
    "link": "link"  };


  return exports;
}));


