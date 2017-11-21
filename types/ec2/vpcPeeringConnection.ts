import {ResourceBase, ResourceTag} from '../resource'
import {Value} from '../internal'




export interface VPCPeeringConnectionProperties {
    PeerOwnerId?: Value<string>
    PeerRoleArn: Value<string>
    PeerVpcId: Value<string>
    VpcId: Value<string>
    Tags?: ResourceTag[]
}

export default class VPCPeeringConnection extends ResourceBase {
    constructor(properties: VPCPeeringConnectionProperties, dependsOn?: Value<string>) {
        super('AWS::EC2::VPCPeeringConnection', properties, dependsOn)
    }
}