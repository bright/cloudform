import {ResourceBase} from '../resource'
import {Value} from '../internal'




export interface IcmpProperties {
    Code?: Value<number>
    Type?: Value<number>
}

export default class Icmp extends ResourceBase {
    constructor(properties: IcmpProperties, dependsOn?: Value<string>) {
        super('AWS::EC2::Icmp', properties, dependsOn)
    }
}