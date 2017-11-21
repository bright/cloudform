import {ResourceBase} from '../resource'
import {Value} from '../internal'




export interface PortRangeProperties {
    From?: Value<number>
    To?: Value<number>
}

export default class PortRange extends ResourceBase {
    constructor(properties: PortRangeProperties, dependsOn?: Value<string>) {
        super('AWS::EC2::PortRange', properties, dependsOn)
    }
}