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
    define(['ApiClient', 'model/ArticleStub', 'model/ArticleType', 'model/ArticleTypeDetails', 'model/Author', 'model/Block', 'model/ImageInfo', 'model/Paper'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ArticleStub'), require('./ArticleType'), require('./ArticleTypeDetails'), require('./Author'), require('./Block'), require('./ImageInfo'), require('./Paper'));
  } else {
    // Browser globals (root is window)
    if (!root.Lettera) {
      root.Lettera = {};
    }
    root.Lettera.Article = factory(root.Lettera.ApiClient, root.Lettera.ArticleStub, root.Lettera.ArticleType, root.Lettera.ArticleTypeDetails, root.Lettera.Author, root.Lettera.Block, root.Lettera.ImageInfo, root.Lettera.Paper);
  }
}(this, function(ApiClient, ArticleStub, ArticleType, ArticleTypeDetails, Author, Block, ImageInfo, Paper) {
  'use strict';



  /**
   * The Article model module.
   * @module model/Article
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>Article</code>.
   * @alias module:model/Article
   * @class
   * @param uuid {String} 
   * @param title {String} 
   * @param authors {Array.<module:model/Author>} 
   * @param tags {Array.<String>} 
   * @param body {Array.<module:model/Block>} 
   * @param premium {Boolean} 
   * @param publishingTime {String} 
   * @param articleType {module:model/ArticleType} 
   * @param relatedArticles {Array.<module:model/ArticleStub>} 
   * @param paper {module:model/Paper} 
   */
  var exports = function(uuid, title, authors, tags, body, premium, publishingTime, articleType, relatedArticles, paper) {
    var _this = this;

    _this['uuid'] = uuid;
    _this['title'] = title;
    _this['authors'] = authors;
    _this['tags'] = tags;
    _this['body'] = body;
    _this['premium'] = premium;
    _this['publishingTime'] = publishingTime;
    _this['articleType'] = articleType;
    _this['relatedArticles'] = relatedArticles;
    _this['paper'] = paper;
  };

  /**
   * Constructs a <code>Article</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Article} obj Optional instance to populate.
   * @return {module:model/Article} The populated <code>Article</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('uuid')) {
        obj['uuid'] = ApiClient.convertToType(data['uuid'], 'String');
      }
      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
      }
      if (data.hasOwnProperty('authors')) {
        obj['authors'] = ApiClient.convertToType(data['authors'], [Author]);
      }
      if (data.hasOwnProperty('tags')) {
        obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
      }
      if (data.hasOwnProperty('preamble')) {
        obj['preamble'] = ApiClient.convertToType(data['preamble'], 'String');
      }
      if (data.hasOwnProperty('mainImage')) {
        obj['mainImage'] = ImageInfo.constructFromObject(data['mainImage']);
      }
      if (data.hasOwnProperty('listImage')) {
        obj['listImage'] = ImageInfo.constructFromObject(data['listImage']);
      }
      if (data.hasOwnProperty('body')) {
        obj['body'] = ApiClient.convertToType(data['body'], [Block]);
      }
      if (data.hasOwnProperty('premium')) {
        obj['premium'] = ApiClient.convertToType(data['premium'], 'Boolean');
      }
      if (data.hasOwnProperty('publishingTime')) {
        obj['publishingTime'] = ApiClient.convertToType(data['publishingTime'], 'String');
      }
      if (data.hasOwnProperty('updateTime')) {
        obj['updateTime'] = ApiClient.convertToType(data['updateTime'], 'String');
      }
      if (data.hasOwnProperty('articleType')) {
        obj['articleType'] = ArticleType.constructFromObject(data['articleType']);
      }
      if (data.hasOwnProperty('articleTypeDetails')) {
        obj['articleTypeDetails'] = ArticleTypeDetails.constructFromObject(data['articleTypeDetails']);
      }
      if (data.hasOwnProperty('externalScripts')) {
        obj['externalScripts'] = ApiClient.convertToType(data['externalScripts'], ['String']);
      }
      if (data.hasOwnProperty('relatedArticles')) {
        obj['relatedArticles'] = ApiClient.convertToType(data['relatedArticles'], [ArticleStub]);
      }
      if (data.hasOwnProperty('shareUrl')) {
        obj['shareUrl'] = ApiClient.convertToType(data['shareUrl'], 'String');
      }
      if (data.hasOwnProperty('paper')) {
        obj['paper'] = Paper.constructFromObject(data['paper']);
      }
      if (data.hasOwnProperty('analyticsCategory')) {
        obj['analyticsCategory'] = ApiClient.convertToType(data['analyticsCategory'], 'String');
      }
      if (data.hasOwnProperty('analyticsSection')) {
        obj['analyticsSection'] = ApiClient.convertToType(data['analyticsSection'], 'String');
      }
      if (data.hasOwnProperty('articlePriority')) {
        obj['articlePriority'] = ApiClient.convertToType(data['articlePriority'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {String} uuid
   */
  exports.prototype['uuid'] = undefined;
  /**
   * @member {String} title
   */
  exports.prototype['title'] = undefined;
  /**
   * @member {Array.<module:model/Author>} authors
   */
  exports.prototype['authors'] = undefined;
  /**
   * @member {Array.<String>} tags
   */
  exports.prototype['tags'] = undefined;
  /**
   * @member {String} preamble
   */
  exports.prototype['preamble'] = undefined;
  /**
   * @member {module:model/ImageInfo} mainImage
   */
  exports.prototype['mainImage'] = undefined;
  /**
   * @member {module:model/ImageInfo} listImage
   */
  exports.prototype['listImage'] = undefined;
  /**
   * @member {Array.<module:model/Block>} body
   */
  exports.prototype['body'] = undefined;
  /**
   * @member {Boolean} premium
   */
  exports.prototype['premium'] = undefined;
  /**
   * @member {String} publishingTime
   */
  exports.prototype['publishingTime'] = undefined;
  /**
   * @member {String} updateTime
   */
  exports.prototype['updateTime'] = undefined;
  /**
   * @member {module:model/ArticleType} articleType
   */
  exports.prototype['articleType'] = undefined;
  /**
   * @member {module:model/ArticleTypeDetails} articleTypeDetails
   */
  exports.prototype['articleTypeDetails'] = undefined;
  /**
   * @member {Array.<String>} externalScripts
   */
  exports.prototype['externalScripts'] = undefined;
  /**
   * @member {Array.<module:model/ArticleStub>} relatedArticles
   */
  exports.prototype['relatedArticles'] = undefined;
  /**
   * @member {String} shareUrl
   */
  exports.prototype['shareUrl'] = undefined;
  /**
   * @member {module:model/Paper} paper
   */
  exports.prototype['paper'] = undefined;
  /**
   * @member {String} analyticsCategory
   */
  exports.prototype['analyticsCategory'] = undefined;
  /**
   * @member {String} analyticsSection
   */
  exports.prototype['analyticsSection'] = undefined;
  /**
   * @member {Number} articlePriority
   */
  exports.prototype['articlePriority'] = undefined;



  return exports;
}));


