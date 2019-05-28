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

/**
 * The Author model module.
 * @module model/Author
 * @version 1.0.0
 */
class Author {
    /**
     * Constructs a new <code>Author</code>.
     * @alias module:model/Author
     * @param authorByline {String} 
     */
    constructor(authorByline) { 
        
        Author.initialize(this, authorByline);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, authorByline) { 
        obj['authorByline'] = authorByline;
    }

    /**
     * Constructs a <code>Author</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Author} obj Optional instance to populate.
     * @return {module:model/Author} The populated <code>Author</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Author();

            if (data.hasOwnProperty('authorByline')) {
                obj['authorByline'] = ApiClient.convertToType(data['authorByline'], 'String');
            }
            if (data.hasOwnProperty('authorImage')) {
                obj['authorImage'] = ApiClient.convertToType(data['authorImage'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} authorByline
 */
Author.prototype['authorByline'] = undefined;

/**
 * @member {String} authorImage
 */
Author.prototype['authorImage'] = undefined;






export default Author;
