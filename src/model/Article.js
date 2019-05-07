/**
 * Lettera
 * KSF Media's articles service
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import Block from './Block';
import ImageInfo from './ImageInfo';

/**
 * The Article model module.
 * @module model/Article
 * @version 1.0.0
 */
class Article {
    /**
     * Constructs a new <code>Article</code>.
     * @alias module:model/Article
     * @param uuid {String} 
     * @param title {String} 
     * @param tags {Array.<String>} 
     * @param body {Array.<module:model/Block>} 
     * @param premium {Boolean} 
     * @param publishingTime {String} 
     */
    constructor(uuid, title, tags, body, premium, publishingTime) { 
        
        Article.initialize(this, uuid, title, tags, body, premium, publishingTime);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, uuid, title, tags, body, premium, publishingTime) { 
        obj['uuid'] = uuid;
        obj['title'] = title;
        obj['tags'] = tags;
        obj['body'] = body;
        obj['premium'] = premium;
        obj['publishingTime'] = publishingTime;
    }

    /**
     * Constructs a <code>Article</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Article} obj Optional instance to populate.
     * @return {module:model/Article} The populated <code>Article</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Article();

            if (data.hasOwnProperty('uuid')) {
                obj['uuid'] = ApiClient.convertToType(data['uuid'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('authorBylines')) {
                obj['authorBylines'] = ApiClient.convertToType(data['authorBylines'], ['String']);
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
            if (data.hasOwnProperty('externalScripts')) {
                obj['externalScripts'] = ApiClient.convertToType(data['externalScripts'], ['String']);
            }
            if (data.hasOwnProperty('relatedArticles')) {
                obj['relatedArticles'] = ApiClient.convertToType(data['relatedArticles'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} uuid
 */
Article.prototype['uuid'] = undefined;

/**
 * @member {String} title
 */
Article.prototype['title'] = undefined;

/**
 * @member {Array.<String>} authorBylines
 */
Article.prototype['authorBylines'] = undefined;

/**
 * @member {Array.<String>} tags
 */
Article.prototype['tags'] = undefined;

/**
 * @member {String} preamble
 */
Article.prototype['preamble'] = undefined;

/**
 * @member {module:model/ImageInfo} mainImage
 */
Article.prototype['mainImage'] = undefined;

/**
 * @member {Array.<module:model/Block>} body
 */
Article.prototype['body'] = undefined;

/**
 * @member {Boolean} premium
 */
Article.prototype['premium'] = undefined;

/**
 * @member {String} publishingTime
 */
Article.prototype['publishingTime'] = undefined;

/**
 * @member {String} updateTime
 */
Article.prototype['updateTime'] = undefined;

/**
 * @member {Array.<String>} externalScripts
 */
Article.prototype['externalScripts'] = undefined;

/**
 * @member {Array.<String>} relatedArticles
 */
Article.prototype['relatedArticles'] = undefined;






export default Article;

