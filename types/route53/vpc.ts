import {ResourceBase} from '../resource'
import {Value} from '../internal'




export interface VPCProperties {
    VPCId: Value<string>
    VPCRegion: Value<string>
}

export default class VPC extends ResourceBase {
    constructor(properties: VPCProperties, dependsOn?: Value<string>) {
        super('AWS::Route53::VPC', properties, dependsOn)
    }
}