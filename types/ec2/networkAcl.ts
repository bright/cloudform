import {ResourceBase, ResourceTag} from '../resource'
import {Value} from '../internal'




export interface NetworkAclProperties {
    VpcId: Value<string>
    Tags?: ResourceTag[]
}

export default class NetworkAcl extends ResourceBase {
    constructor(properties: NetworkAclProperties, dependsOn?: Value<string>) {
        super('AWS::EC2::NetworkAcl', properties, dependsOn)
    }
}