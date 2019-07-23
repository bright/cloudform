import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface SMSChannelProperties {
    ShortCode?: Value<string>;
    Enabled?: Value<boolean>;
    ApplicationId: Value<string>;
    SenderId?: Value<string>;
}
export default class SMSChannel extends ResourceBase<SMSChannelProperties> {
    constructor(properties: SMSChannelProperties);
}
