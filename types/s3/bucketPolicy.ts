/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase} from '../resource'
import {Value} from '../dataTypes'



export interface BucketPolicyProperties {
    Bucket: Value<string>
    PolicyDocument: any
}

export default class BucketPolicy extends ResourceBase {
    constructor(properties: BucketPolicyProperties, dependsOn?: Value<string>) {
        super('AWS::S3::BucketPolicy', properties, dependsOn)
    }
}
