import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface EmailChannelProperties {
    ConfigurationSet?: Value<string>;
    FromAddress: Value<string>;
    Enabled?: Value<boolean>;
    ApplicationId: Value<string>;
    Identity: Value<string>;
    RoleArn?: Value<string>;
}
export default class EmailChannel extends ResourceBase<EmailChannelProperties> {
    constructor(properties: EmailChannelProperties);
}
