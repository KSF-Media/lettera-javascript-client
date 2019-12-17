/**
 * Lettera
 * KSF Media's articles service
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import ArticleType from './ArticleType';
import ArticleTypeDetails from './ArticleTypeDetails';
import Author from './Author';
import ImageInfo from './ImageInfo';
import Paper from './Paper';
import RelatedArticle from './RelatedArticle';

/**
 * The ListArticle model module.
 * @module model/ListArticle
 * @version 1.0.0
 */
class ListArticle {
    /**
     * Constructs a new <code>ListArticle</code>.
     * @alias module:model/ListArticle
     * @param uuid {String} 
     * @param title {String} 
     * @param authors {Array.<module:model/Author>} 
     * @param tags {Array.<String>} 
     * @param premium {Boolean} 
     * @param publishingTime {String} 
     * @param relatedArticles {Array.<module:model/RelatedArticle>} 
     * @param articleType {module:model/ArticleType} 
     * @param paper {module:model/Paper} 
     */
    constructor(uuid, title, authors, tags, premium, publishingTime, relatedArticles, articleType, paper) { 
        
        ListArticle.initialize(this, uuid, title, authors, tags, premium, publishingTime, relatedArticles, articleType, paper);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, uuid, title, authors, tags, premium, publishingTime, relatedArticles, articleType, paper) { 
        obj['uuid'] = uuid;
        obj['title'] = title;
        obj['authors'] = authors;
        obj['tags'] = tags;
        obj['premium'] = premium;
        obj['publishingTime'] = publishingTime;
        obj['relatedArticles'] = relatedArticles;
        obj['articleType'] = articleType;
        obj['paper'] = paper;
    }

    /**
     * Constructs a <code>ListArticle</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListArticle} obj Optional instance to populate.
     * @return {module:model/ListArticle} The populated <code>ListArticle</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListArticle();

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
            if (data.hasOwnProperty('listImage')) {
                obj['listImage'] = ImageInfo.constructFromObject(data['listImage']);
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
            if (data.hasOwnProperty('relatedArticles')) {
                obj['relatedArticles'] = ApiClient.convertToType(data['relatedArticles'], [RelatedArticle]);
            }
            if (data.hasOwnProperty('articleType')) {
                obj['articleType'] = ArticleType.constructFromObject(data['articleType']);
            }
            if (data.hasOwnProperty('articleTypeDetails')) {
                obj['articleTypeDetails'] = ArticleTypeDetails.constructFromObject(data['articleTypeDetails']);
            }
            if (data.hasOwnProperty('paper')) {
                obj['paper'] = Paper.constructFromObject(data['paper']);
            }
            if (data.hasOwnProperty('shareUrl')) {
                obj['shareUrl'] = ApiClient.convertToType(data['shareUrl'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} uuid
 */
ListArticle.prototype['uuid'] = undefined;

/**
 * @member {String} title
 */
ListArticle.prototype['title'] = undefined;

/**
 * @member {Array.<module:model/Author>} authors
 */
ListArticle.prototype['authors'] = undefined;

/**
 * @member {Array.<String>} tags
 */
ListArticle.prototype['tags'] = undefined;

/**
 * @member {String} preamble
 */
ListArticle.prototype['preamble'] = undefined;

/**
 * @member {module:model/ImageInfo} listImage
 */
ListArticle.prototype['listImage'] = undefined;

/**
 * @member {Boolean} premium
 */
ListArticle.prototype['premium'] = undefined;

/**
 * @member {String} publishingTime
 */
ListArticle.prototype['publishingTime'] = undefined;

/**
 * @member {String} updateTime
 */
ListArticle.prototype['updateTime'] = undefined;

/**
 * @member {Array.<module:model/RelatedArticle>} relatedArticles
 */
ListArticle.prototype['relatedArticles'] = undefined;

/**
 * @member {module:model/ArticleType} articleType
 */
ListArticle.prototype['articleType'] = undefined;

/**
 * @member {module:model/ArticleTypeDetails} articleTypeDetails
 */
ListArticle.prototype['articleTypeDetails'] = undefined;

/**
 * @member {module:model/Paper} paper
 */
ListArticle.prototype['paper'] = undefined;

/**
 * @member {String} shareUrl
 */
ListArticle.prototype['shareUrl'] = undefined;






export default ListArticle;

