/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase} from '../resource'
import {Value} from '../dataTypes'



export interface InstanceProfileProperties {
    InstanceProfileName?: Value<string>
    Path?: Value<string>
    Roles: Value<string>[]
}

export default class InstanceProfile extends ResourceBase {
    constructor(properties: InstanceProfileProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::IAM::InstanceProfile', properties, dependsOn)
    }
}
