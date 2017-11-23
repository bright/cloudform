/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export interface SourceBundleProperties {
    S3Bucket: Value<string>
    S3Key: Value<string>
}

export class SourceBundle extends ResourceBase {
    constructor(properties: SourceBundleProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::ElasticBeanstalk::SourceBundle', properties, dependsOn)
    }
}

export interface ApplicationVersionProperties {
    ApplicationName: Value<string>
    Description?: Value<string>
    SourceBundle: SourceBundle
}

export default class ApplicationVersion extends ResourceBase {
    constructor(properties: ApplicationVersionProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::ElasticBeanstalk::ApplicationVersion', properties, dependsOn)
    }
}
