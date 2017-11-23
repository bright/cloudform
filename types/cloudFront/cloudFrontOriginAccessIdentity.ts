/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase} from '../resource'
import {Value} from '../dataTypes'

export interface CloudFrontOriginAccessIdentityConfigProperties {
    Comment: Value<string>
}

export class CloudFrontOriginAccessIdentityConfig extends ResourceBase {
    constructor(properties: CloudFrontOriginAccessIdentityConfigProperties, dependsOn?: Value<string>) {
        super('AWS::CloudFront::CloudFrontOriginAccessIdentityConfig', properties, dependsOn)
    }
}

export interface CloudFrontOriginAccessIdentityProperties {
    CloudFrontOriginAccessIdentityConfig: CloudFrontOriginAccessIdentityConfig
}

export default class CloudFrontOriginAccessIdentity extends ResourceBase {
    constructor(properties: CloudFrontOriginAccessIdentityProperties, dependsOn?: Value<string>) {
        super('AWS::CloudFront::CloudFrontOriginAccessIdentity', properties, dependsOn)
    }
}