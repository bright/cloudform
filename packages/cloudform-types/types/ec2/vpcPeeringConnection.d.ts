import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface VPCPeeringConnectionProperties {
    PeerRoleArn?: Value<string>;
    VpcId: Value<string>;
    PeerVpcId: Value<string>;
    PeerRegion?: Value<string>;
    PeerOwnerId?: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class VPCPeeringConnection extends ResourceBase<VPCPeeringConnectionProperties> {
    constructor(properties: VPCPeeringConnectionProperties);
}
