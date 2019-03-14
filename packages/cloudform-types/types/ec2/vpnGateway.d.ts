import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface VPNGatewayProperties {
    AmazonSideAsn?: Value<number>;
    Tags?: List<ResourceTag>;
    Type: Value<string>;
}
export default class VPNGateway extends ResourceBase<VPNGatewayProperties> {
    constructor(properties: VPNGatewayProperties);
}
