import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface SignalingChannelProperties {
    Type?: Value<string>;
    MessageTtlSeconds?: Value<number>;
    Tags?: List<ResourceTag>;
    Name?: Value<string>;
}
export default class SignalingChannel extends ResourceBase<SignalingChannelProperties> {
    constructor(properties?: SignalingChannelProperties);
}
