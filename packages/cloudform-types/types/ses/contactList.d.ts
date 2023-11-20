import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class Topic {
    Description?: Value<string>;
    DisplayName: Value<string>;
    DefaultSubscriptionStatus: Value<string>;
    TopicName: Value<string>;
    constructor(properties: Topic);
}
export interface ContactListProperties {
    Description?: Value<string>;
    Topics?: List<Topic>;
    ContactListName?: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class ContactList extends ResourceBase<ContactListProperties> {
    static Topic: typeof Topic;
    constructor(properties?: ContactListProperties);
}
