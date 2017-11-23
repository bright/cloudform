/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export interface VpcSettingsProperties {
    SubnetIds: List<Value<string>>
    VpcId: Value<string>
}

export class VpcSettings extends ResourceBase {
    constructor(properties: VpcSettingsProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::DirectoryService::VpcSettings', properties, dependsOn)
    }
}

export interface SimpleADProperties {
    CreateAlias?: Value<boolean>
    Description?: Value<string>
    EnableSso?: Value<boolean>
    Name: Value<string>
    Password: Value<string>
    ShortName?: Value<string>
    Size: Value<string>
    VpcSettings: VpcSettings
}

export default class SimpleAD extends ResourceBase {
    constructor(properties: SimpleADProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::DirectoryService::SimpleAD', properties, dependsOn)
    }
}
