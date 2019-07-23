import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface APNSChannelProperties {
    BundleId?: Value<string>;
    PrivateKey?: Value<string>;
    Enabled?: Value<boolean>;
    DefaultAuthenticationMethod?: Value<string>;
    TokenKey?: Value<string>;
    ApplicationId: Value<string>;
    TeamId?: Value<string>;
    Certificate?: Value<string>;
    TokenKeyId?: Value<string>;
}
export default class APNSChannel extends ResourceBase<APNSChannelProperties> {
    constructor(properties: APNSChannelProperties);
}
