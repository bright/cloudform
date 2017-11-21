import {ResourceBase} from '../resource'
import {Value} from '../internal'




export interface SubnetCidrBlockProperties {
    Ipv6CidrBlock: Value<string>
    SubnetId: Value<string>
}

export default class SubnetCidrBlock extends ResourceBase {
    constructor(properties: SubnetCidrBlockProperties, dependsOn?: Value<string>) {
        super('AWS::EC2::SubnetCidrBlock', properties, dependsOn)
    }
}