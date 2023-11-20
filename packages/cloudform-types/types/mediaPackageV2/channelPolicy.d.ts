import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface ChannelPolicyProperties {
    Policy: {
        [key: string]: any;
    };
    ChannelName?: Value<string>;
    ChannelGroupName?: Value<string>;
}
export default class ChannelPolicy extends ResourceBase<ChannelPolicyProperties> {
    constructor(properties: ChannelPolicyProperties);
}
