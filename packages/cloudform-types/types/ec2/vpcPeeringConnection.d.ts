import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface VPCPeeringConnectionProperties {
    PeerOwnerId?: Value<string>;
    PeerRegion?: Value<string>;
    PeerRoleArn?: Value<string>;
    PeerVpcId: Value<string>;
    Tags?: List<ResourceTag>;
    VpcId: Value<string>;
}
export default class VPCPeeringConnection extends ResourceBase<VPCPeeringConnectionProperties> {
    constructor(properties: VPCPeeringConnectionProperties);
}
