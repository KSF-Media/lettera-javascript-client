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
* Enum class ArticleType.
* @enum {}
* @readonly
*/
export default class ArticleType {
    
        /**
         * value: "NyhetStor"
         * @const
         */
        "NyhetStor" = "NyhetStor";

    
        /**
         * value: "NyhetLiten"
         * @const
         */
        "NyhetLiten" = "NyhetLiten";

    
        /**
         * value: "NyhetRelaterade"
         * @const
         */
        "NyhetRelaterade" = "NyhetRelaterade";

    
        /**
         * value: "Opinion"
         * @const
         */
        "Opinion" = "Opinion";

    
        /**
         * value: "KatastrofStor"
         * @const
         */
        "KatastrofStor" = "KatastrofStor";

    
        /**
         * value: "KatastrofLiten"
         * @const
         */
        "KatastrofLiten" = "KatastrofLiten";

    
        /**
         * value: "Advertorial"
         * @const
         */
        "Advertorial" = "Advertorial";

    

    /**
    * Returns a <code>ArticleType</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/ArticleType} The enum <code>ArticleType</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

