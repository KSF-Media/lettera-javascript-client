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


import ApiClient from './ApiClient';
import Alignment from './model/Alignment';
import Article from './model/Article';
import Block from './model/Block';
import BlockShortcodeError from './model/BlockShortcodeError';
import FactInfo from './model/FactInfo';
import ImageInfo from './model/ImageInfo';
import ArticlesApi from './api/ArticlesApi';
import ListsApi from './api/ListsApi';


/**
* KSF_Medias_articles_service.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var Lettera = require('index'); // See note below*.
* var xxxSvc = new Lettera.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new Lettera.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new Lettera.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new Lettera.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 1.0.0
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The Alignment model constructor.
     * @property {module:model/Alignment}
     */
    Alignment,

    /**
     * The Article model constructor.
     * @property {module:model/Article}
     */
    Article,

    /**
     * The Block model constructor.
     * @property {module:model/Block}
     */
    Block,

    /**
     * The BlockShortcodeError model constructor.
     * @property {module:model/BlockShortcodeError}
     */
    BlockShortcodeError,

    /**
     * The FactInfo model constructor.
     * @property {module:model/FactInfo}
     */
    FactInfo,

    /**
     * The ImageInfo model constructor.
     * @property {module:model/ImageInfo}
     */
    ImageInfo,

    /**
    * The ArticlesApi service constructor.
    * @property {module:api/ArticlesApi}
    */
    ArticlesApi,

    /**
    * The ListsApi service constructor.
    * @property {module:api/ListsApi}
    */
    ListsApi
};
