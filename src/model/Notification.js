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
import EventType from './EventType';

/**
 * The Notification model module.
 * @module model/Notification
 * @version 1.0.0
 */
class Notification {
    /**
     * Constructs a new <code>Notification</code>.
     * @alias module:model/Notification
     * @param contentType {String} 
     * @param eventtype {module:model/EventType} 
     * @param uuid {String} 
     */
    constructor(contentType, eventtype, uuid) { 
        
        Notification.initialize(this, contentType, eventtype, uuid);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, contentType, eventtype, uuid) { 
        obj['contentType'] = contentType;
        obj['eventtype'] = eventtype;
        obj['uuid'] = uuid;
    }

    /**
     * Constructs a <code>Notification</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Notification} obj Optional instance to populate.
     * @return {module:model/Notification} The populated <code>Notification</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Notification();

            if (data.hasOwnProperty('contentType')) {
                obj['contentType'] = ApiClient.convertToType(data['contentType'], 'String');
            }
            if (data.hasOwnProperty('eventid')) {
                obj['eventid'] = ApiClient.convertToType(data['eventid'], 'Number');
            }
            if (data.hasOwnProperty('eventtype')) {
                obj['eventtype'] = EventType.constructFromObject(data['eventtype']);
            }
            if (data.hasOwnProperty('uuid')) {
                obj['uuid'] = ApiClient.convertToType(data['uuid'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} contentType
 */
Notification.prototype['contentType'] = undefined;

/**
 * @member {Number} eventid
 */
Notification.prototype['eventid'] = undefined;

/**
 * @member {module:model/EventType} eventtype
 */
Notification.prototype['eventtype'] = undefined;

/**
 * @member {String} uuid
 */
Notification.prototype['uuid'] = undefined;






export default Notification;

