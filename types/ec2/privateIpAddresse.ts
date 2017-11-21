import {ResourceBase} from '../resource'
import {Value} from '../internal'




export interface PrivateIpAddresseProperties {
    PrivateIpAddress: Value<string>
    Primary: Value<boolean>
}

export default class PrivateIpAddresse extends ResourceBase {
    constructor(properties: PrivateIpAddresseProperties, dependsOn?: Value<string>) {
        super('AWS::EC2::PrivateIpAddresse', properties, dependsOn)
    }
}