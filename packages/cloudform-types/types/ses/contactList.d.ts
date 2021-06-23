import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class Topic {
    TopicName: Value<string>;
    DisplayName: Value<string>;
    Description?: Value<string>;
    DefaultSubscriptionStatus: Value<string>;
    constructor(properties: Topic);
}
export interface ContactListProperties {
    ContactListName?: Value<string>;
    Description?: Value<string>;
    Topics?: List<Topic>;
    Tags?: List<ResourceTag>;
}
export default class ContactList extends ResourceBase<ContactListProperties> {
    static Topic: typeof Topic;
    constructor(properties?: ContactListProperties);
}
