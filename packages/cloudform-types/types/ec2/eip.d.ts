import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface EIPProperties {
    Domain?: Value<string>;
    InstanceId?: Value<string>;
    PublicIpv4Pool?: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class EIP extends ResourceBase<EIPProperties> {
    constructor(properties?: EIPProperties);
}
