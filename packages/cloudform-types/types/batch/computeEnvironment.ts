/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 7.1.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 7.1.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 7.1.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 7.1.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 7.1.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 7.1.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 7.1.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 7.1.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 7.1.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 7.1.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 7.1.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 7.1.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 7.1.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 7.1.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 7.1.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class LaunchTemplateSpecification {
    LaunchTemplateName?: Value<string>
    Version?: Value<string>
    LaunchTemplateId?: Value<string>

    constructor(properties: LaunchTemplateSpecification) {
        Object.assign(this, properties)
    }
}

export class ComputeResources {
    SpotIamFleetRole?: Value<string>
    MaxvCpus!: Value<number>
    BidPercentage?: Value<number>
    SecurityGroupIds?: List<Value<string>>
    Subnets!: List<Value<string>>
    Type!: Value<string>
    AllocationStrategy?: Value<string>
    MinvCpus!: Value<number>
    LaunchTemplate?: LaunchTemplateSpecification
    ImageId?: Value<string>
    InstanceRole!: Value<string>
    InstanceTypes!: List<Value<string>>
    Ec2KeyPair?: Value<string>
    PlacementGroup?: Value<string>
    Tags?: {[key: string]: any}
    DesiredvCpus?: Value<number>

    constructor(properties: ComputeResources) {
        Object.assign(this, properties)
    }
}

export interface ComputeEnvironmentProperties {
    Type: Value<string>
    ServiceRole: Value<string>
    ComputeEnvironmentName?: Value<string>
    ComputeResources?: ComputeResources
    State?: Value<string>
}

export default class ComputeEnvironment extends ResourceBase<ComputeEnvironmentProperties> {
    static LaunchTemplateSpecification = LaunchTemplateSpecification
    static ComputeResources = ComputeResources

    constructor(properties: ComputeEnvironmentProperties) {
        super('AWS::Batch::ComputeEnvironment', properties)
    }
}
