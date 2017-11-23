/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase} from '../resource'
import {Value} from '../dataTypes'

export interface S3LocationProperties {
    Bucket: Value<string>
    Key: Value<string>
    RoleArn: Value<string>
}

export class S3Location extends ResourceBase {
    constructor(properties: S3LocationProperties, dependsOn?: Value<string>) {
        super('AWS::GameLift::S3Location', properties, dependsOn)
    }
}

export interface BuildProperties {
    Name?: Value<string>
    StorageLocation?: S3Location
    Version?: Value<string>
}

export default class Build extends ResourceBase {
    constructor(properties: BuildProperties, dependsOn?: Value<string>) {
        super('AWS::GameLift::Build', properties, dependsOn)
    }
}