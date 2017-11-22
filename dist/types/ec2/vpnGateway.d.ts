import { ResourceBase, ResourceTag } from '../resource';
import { Value } from '../internal';
export interface VPNGatewayProperties {
    AmazonSideAsn?: Value<number>;
    Tags?: ResourceTag[];
    Type: Value<string>;
}
export default class VPNGateway extends ResourceBase {
    constructor(properties: VPNGatewayProperties, dependsOn?: Value<string>);
}
