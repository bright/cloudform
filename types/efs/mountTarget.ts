/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase} from '../resource'
import {Value} from '../dataTypes'



export interface MountTargetProperties {
    FileSystemId: Value<string>
    IpAddress?: Value<string>
    SecurityGroups: Value<string>[]
    SubnetId: Value<string>
}

export default class MountTarget extends ResourceBase {
    constructor(properties: MountTargetProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::EFS::MountTarget', properties, dependsOn)
    }
}
