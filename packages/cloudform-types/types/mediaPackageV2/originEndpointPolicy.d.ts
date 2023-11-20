import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface OriginEndpointPolicyProperties {
    Policy: {
        [key: string]: any;
    };
    ChannelName?: Value<string>;
    OriginEndpointName?: Value<string>;
    ChannelGroupName?: Value<string>;
}
export default class OriginEndpointPolicy extends ResourceBase<OriginEndpointPolicyProperties> {
    constructor(properties: OriginEndpointPolicyProperties);
}
