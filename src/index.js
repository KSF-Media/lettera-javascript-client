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


import ApiClient from './ApiClient';
import Alignment from './model/Alignment';
import Article from './model/Article';
import ArticleType from './model/ArticleType';
import Author from './model/Author';
import Block from './model/Block';
import CategoryHierarchy from './model/CategoryHierarchy';
import EventType from './model/EventType';
import FactInfo from './model/FactInfo';
import ImageInfo from './model/ImageInfo';
import ListArticle from './model/ListArticle';
import Notification from './model/Notification';
import RelatedArticle from './model/RelatedArticle';
import ArticlesApi from './api/ArticlesApi';
import CategoriesApi from './api/CategoriesApi';
import ListsApi from './api/ListsApi';
import NotifiersApi from './api/NotifiersApi';


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
     * The ArticleType model constructor.
     * @property {module:model/ArticleType}
     */
    ArticleType,

    /**
     * The Author model constructor.
     * @property {module:model/Author}
     */
    Author,

    /**
     * The Block model constructor.
     * @property {module:model/Block}
     */
    Block,

    /**
     * The CategoryHierarchy model constructor.
     * @property {module:model/CategoryHierarchy}
     */
    CategoryHierarchy,

    /**
     * The EventType model constructor.
     * @property {module:model/EventType}
     */
    EventType,

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
     * The ListArticle model constructor.
     * @property {module:model/ListArticle}
     */
    ListArticle,

    /**
     * The Notification model constructor.
     * @property {module:model/Notification}
     */
    Notification,

    /**
     * The RelatedArticle model constructor.
     * @property {module:model/RelatedArticle}
     */
    RelatedArticle,

    /**
    * The ArticlesApi service constructor.
    * @property {module:api/ArticlesApi}
    */
    ArticlesApi,

    /**
    * The CategoriesApi service constructor.
    * @property {module:api/CategoriesApi}
    */
    CategoriesApi,

    /**
    * The ListsApi service constructor.
    * @property {module:api/ListsApi}
    */
    ListsApi,

    /**
    * The NotifiersApi service constructor.
    * @property {module:api/NotifiersApi}
    */
    NotifiersApi
};
