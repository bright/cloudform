import { ResourceBase, ResourceTag } from '../resource';
import { Value } from '../internal';
export interface VPCPeeringConnectionProperties {
    PeerOwnerId?: Value<string>;
    PeerRoleArn?: Value<string>;
    PeerVpcId: Value<string>;
    Tags?: ResourceTag[];
    VpcId: Value<string>;
}
export default class VPCPeeringConnection extends ResourceBase {
    constructor(properties: VPCPeeringConnectionProperties, dependsOn?: Value<string>);
}
