import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface ADMChannelProperties {
    ClientSecret: Value<string>;
    Enabled?: Value<boolean>;
    ClientId: Value<string>;
    ApplicationId: Value<string>;
}
export default class ADMChannel extends ResourceBase<ADMChannelProperties> {
    constructor(properties: ADMChannelProperties);
}
