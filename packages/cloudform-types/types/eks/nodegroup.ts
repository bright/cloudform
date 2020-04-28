/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class ScalingConfig {
    MinSize?: Value<number>
    DesiredSize?: Value<number>
    MaxSize?: Value<number>

    constructor(properties: ScalingConfig) {
        Object.assign(this, properties)
    }
}

export class RemoteAccess {
    SourceSecurityGroups?: List<Value<string>>
    Ec2SshKey!: Value<string>

    constructor(properties: RemoteAccess) {
        Object.assign(this, properties)
    }
}

export interface NodegroupProperties {
    ScalingConfig?: ScalingConfig
    Labels?: {[key: string]: any}
    ReleaseVersion?: Value<string>
    NodegroupName?: Value<string>
    Subnets: List<Value<string>>
    NodeRole: Value<string>
    AmiType?: Value<string>
    ForceUpdateEnabled?: Value<boolean>
    Version?: Value<string>
    RemoteAccess?: RemoteAccess
    DiskSize?: Value<number>
    ClusterName: Value<string>
    InstanceTypes?: List<Value<string>>
    Tags?: {[key: string]: any}
}

export default class Nodegroup extends ResourceBase<NodegroupProperties> {
    static ScalingConfig = ScalingConfig
    static RemoteAccess = RemoteAccess

    constructor(properties: NodegroupProperties) {
        super('AWS::EKS::Nodegroup', properties)
    }
}
