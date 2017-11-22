import { ResourceBase, ResourceTag } from '../resource';
import { Value } from '../internal';
export interface NatGatewayProperties {
    AllocationId: Value<string>;
    SubnetId: Value<string>;
    Tags?: ResourceTag[];
}
export default class NatGateway extends ResourceBase {
    constructor(properties: NatGatewayProperties, dependsOn?: Value<string>);
}
