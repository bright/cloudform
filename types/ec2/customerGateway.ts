import {ResourceBase, ResourceTag} from '../resource'
import {Value} from '../internal'




export interface CustomerGatewayProperties {
    Type: Value<string>
    IpAddress: Value<string>
    BgpAsn: Value<number>
    Tags?: ResourceTag[]
}

export default class CustomerGateway extends ResourceBase {
    constructor(properties: CustomerGatewayProperties, dependsOn?: Value<string>) {
        super('AWS::EC2::CustomerGateway', properties, dependsOn)
    }
}