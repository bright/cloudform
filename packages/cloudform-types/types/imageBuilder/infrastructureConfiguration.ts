/* Generated from: 
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class S3Logs {
    S3BucketName?: Value<string>
    S3KeyPrefix?: Value<string>

    constructor(properties: S3Logs) {
        Object.assign(this, properties)
    }
}

export class Logging {
    S3Logs?: S3Logs

    constructor(properties: Logging) {
        Object.assign(this, properties)
    }
}

export interface InfrastructureConfigurationProperties {
    Name: Value<string>
    Description?: Value<string>
    InstanceTypes?: List<Value<string>>
    SecurityGroupIds?: List<Value<string>>
    Logging?: Logging
    SubnetId?: Value<string>
    KeyPair?: Value<string>
    TerminateInstanceOnFailure?: Value<boolean>
    InstanceProfileName: Value<string>
    SnsTopicArn?: Value<string>
    Tags?: {[key: string]: Value<string>}
}

export default class InfrastructureConfiguration extends ResourceBase<InfrastructureConfigurationProperties> {
    static S3Logs = S3Logs
    static Logging = Logging

    constructor(properties: InfrastructureConfigurationProperties) {
        super('AWS::ImageBuilder::InfrastructureConfiguration', properties)
    }
}
