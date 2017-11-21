import {ResourceBase} from '../resource'
import {Value} from '../internal'




export interface HostedZoneConfigProperties {
    Comment?: Value<string>
}

export default class HostedZoneConfig extends ResourceBase {
    constructor(properties: HostedZoneConfigProperties, dependsOn?: Value<string>) {
        super('AWS::Route53::HostedZoneConfig', properties, dependsOn)
    }
}