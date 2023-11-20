import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class EmergencyContact {
    ContactNotes?: Value<string>;
    PhoneNumber?: Value<string>;
    EmailAddress: Value<string>;
    constructor(properties: EmergencyContact);
}
export interface ProactiveEngagementProperties {
    ProactiveEngagementStatus: Value<string>;
    EmergencyContactList: List<EmergencyContact>;
}
export default class ProactiveEngagement extends ResourceBase<ProactiveEngagementProperties> {
    static EmergencyContact: typeof EmergencyContact;
    constructor(properties: ProactiveEngagementProperties);
}
