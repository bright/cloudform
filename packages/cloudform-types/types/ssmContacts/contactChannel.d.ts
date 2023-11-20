import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface ContactChannelProperties {
    ChannelName: Value<string>;
    ChannelAddress: Value<string>;
    ContactId: Value<string>;
    ChannelType: Value<string>;
    DeferActivation?: Value<boolean>;
}
export default class ContactChannel extends ResourceBase<ContactChannelProperties> {
    constructor(properties: ContactChannelProperties);
}
