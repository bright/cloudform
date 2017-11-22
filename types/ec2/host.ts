/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase} from '../resource'
import {Value} from '../internal'



export interface HostProperties {
    AutoPlacement?: Value<string>
    AvailabilityZone: Value<string>
    InstanceType: Value<string>
}

export default class Host extends ResourceBase {
    constructor(properties: HostProperties, dependsOn?: Value<string>) {
        super('AWS::EC2::Host', properties, dependsOn)
    }
}