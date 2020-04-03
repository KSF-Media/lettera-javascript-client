/**
 * Lettera
 * KSF Media's articles service
 *
 * The version of the OpenAPI document: 2.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import BoxInfo from './BoxInfo';
import ImageInfo from './ImageInfo';

/**
 * The Block model module.
 * @module model/Block
 * @version 2.0.0
 */
class Block {
    /**
     * Constructs a new <code>Block</code>.
     * @alias module:model/Block
     */
    constructor() { 
        
        Block.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Block</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Block} obj Optional instance to populate.
     * @return {module:model/Block} The populated <code>Block</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Block();

            if (data.hasOwnProperty('paragraph')) {
                obj['paragraph'] = ApiClient.convertToType(data['paragraph'], 'String');
            }
            if (data.hasOwnProperty('html')) {
                obj['html'] = ApiClient.convertToType(data['html'], 'String');
            }
            if (data.hasOwnProperty('image')) {
                obj['image'] = ImageInfo.constructFromObject(data['image']);
            }
            if (data.hasOwnProperty('box')) {
                obj['box'] = BoxInfo.constructFromObject(data['box']);
            }
            if (data.hasOwnProperty('headline')) {
                obj['headline'] = ApiClient.convertToType(data['headline'], 'String');
            }
            if (data.hasOwnProperty('footnote')) {
                obj['footnote'] = ApiClient.convertToType(data['footnote'], 'String');
            }
            if (data.hasOwnProperty('question')) {
                obj['question'] = ApiClient.convertToType(data['question'], 'String');
            }
            if (data.hasOwnProperty('quote')) {
                obj['quote'] = ApiClient.convertToType(data['quote'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} paragraph
 */
Block.prototype['paragraph'] = undefined;

/**
 * @member {String} html
 */
Block.prototype['html'] = undefined;

/**
 * @member {module:model/ImageInfo} image
 */
Block.prototype['image'] = undefined;

/**
 * @member {module:model/BoxInfo} box
 */
Block.prototype['box'] = undefined;

/**
 * @member {String} headline
 */
Block.prototype['headline'] = undefined;

/**
 * @member {String} footnote
 */
Block.prototype['footnote'] = undefined;

/**
 * @member {String} question
 */
Block.prototype['question'] = undefined;

/**
 * @member {String} quote
 */
Block.prototype['quote'] = undefined;






export default Block;

