/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class CloudWatchLogDestination {
    LogGroup?: Value<string>

    constructor(properties: CloudWatchLogDestination) {
        Object.assign(this, properties)
    }
}

export class LogPublishingOptions {
    CloudWatchLogDestination?: CloudWatchLogDestination
    IsLoggingEnabled?: Value<boolean>

    constructor(properties: LogPublishingOptions) {
        Object.assign(this, properties)
    }
}

export class VpcEndpoint {
    VpcId?: Value<string>
    VpcOptions?: VpcOptions
    VpcEndpointId?: Value<string>

    constructor(properties: VpcEndpoint) {
        Object.assign(this, properties)
    }
}

export class VpcOptions {
    SecurityGroupIds?: List<Value<string>>
    SubnetIds?: List<Value<string>>

    constructor(properties: VpcOptions) {
        Object.assign(this, properties)
    }
}

export interface PipelineProperties {
    PipelineConfigurationBody: Value<string>
    MinUnits: Value<number>
    PipelineName: Value<string>
    VpcOptions?: VpcOptions
    MaxUnits: Value<number>
    LogPublishingOptions?: LogPublishingOptions
    Tags?: List<ResourceTag>
}

export default class Pipeline extends ResourceBase<PipelineProperties> {
    static CloudWatchLogDestination = CloudWatchLogDestination
    static LogPublishingOptions = LogPublishingOptions
    static VpcEndpoint = VpcEndpoint
    static VpcOptions = VpcOptions

    constructor(properties: PipelineProperties) {
        super('AWS::OSIS::Pipeline', properties)
    }
}
