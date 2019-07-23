import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface BaiduChannelProperties {
    SecretKey: Value<string>;
    ApiKey: Value<string>;
    Enabled?: Value<boolean>;
    ApplicationId: Value<string>;
}
export default class BaiduChannel extends ResourceBase<BaiduChannelProperties> {
    constructor(properties: BaiduChannelProperties);
}
