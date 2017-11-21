import {ResourceBase} from '../resource'
import {Value} from '../internal'




export interface EIPAssociationProperties {
    AllocationId?: Value<string>
    EIP?: Value<string>
    InstanceId?: Value<string>
    NetworkInterfaceId?: Value<string>
    PrivateIpAddress?: Value<string>
}

export default class EIPAssociation extends ResourceBase {
    constructor(properties: EIPAssociationProperties, dependsOn?: Value<string>) {
        super('AWS::EC2::EIPAssociation', properties, dependsOn)
    }
}