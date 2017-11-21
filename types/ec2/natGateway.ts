import {ResourceBase} from '../resource'
import {Value} from '../internal'




export interface NatGatewayProperties {
    AllocationId: Value<string>
    SubnetId?: Value<string>
}

export default class NatGateway extends ResourceBase {
    constructor(properties: NatGatewayProperties, dependsOn?: Value<string>) {
        super('AWS::EC2::NatGateway', properties, dependsOn)
    }
}