import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface EIPProperties {
    InstanceId?: Value<string>;
    PublicIpv4Pool?: Value<string>;
    TransferAddress?: Value<string>;
    Domain?: Value<string>;
    Tags?: List<ResourceTag>;
    NetworkBorderGroup?: Value<string>;
}
export default class EIP extends ResourceBase<EIPProperties> {
    constructor(properties?: EIPProperties);
}
