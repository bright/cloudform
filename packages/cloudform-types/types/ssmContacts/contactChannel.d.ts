import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface ContactChannelProperties {
    ContactId: Value<string>;
    ChannelName: Value<string>;
    ChannelType: Value<string>;
    DeferActivation?: Value<boolean>;
    ChannelAddress: Value<string>;
}
export default class ContactChannel extends ResourceBase<ContactChannelProperties> {
    constructor(properties: ContactChannelProperties);
}
