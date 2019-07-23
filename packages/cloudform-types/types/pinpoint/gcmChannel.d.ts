import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface GCMChannelProperties {
    ApiKey: Value<string>;
    Enabled?: Value<boolean>;
    ApplicationId: Value<string>;
}
export default class GCMChannel extends ResourceBase<GCMChannelProperties> {
    constructor(properties: GCMChannelProperties);
}
