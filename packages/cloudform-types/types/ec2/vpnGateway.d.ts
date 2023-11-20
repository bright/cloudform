import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface VPNGatewayProperties {
    Type: Value<string>;
    AmazonSideAsn?: Value<number>;
    Tags?: List<ResourceTag>;
}
export default class VPNGateway extends ResourceBase<VPNGatewayProperties> {
    constructor(properties: VPNGatewayProperties);
}
