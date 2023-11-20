/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class AutoScalingPolicy {
    TargetTrackingConfiguration!: TargetTrackingConfiguration
    EstimatedInstanceWarmup?: Value<number>

    constructor(properties: AutoScalingPolicy) {
        Object.assign(this, properties)
    }
}

export class InstanceDefinition {
    WeightedCapacity?: Value<string>
    InstanceType!: Value<string>

    constructor(properties: InstanceDefinition) {
        Object.assign(this, properties)
    }
}

export class LaunchTemplate {
    LaunchTemplateName?: Value<string>
    Version?: Value<string>
    LaunchTemplateId?: Value<string>

    constructor(properties: LaunchTemplate) {
        Object.assign(this, properties)
    }
}

export class TargetTrackingConfiguration {
    TargetValue!: Value<number>

    constructor(properties: TargetTrackingConfiguration) {
        Object.assign(this, properties)
    }
}

export interface GameServerGroupProperties {
    AutoScalingPolicy?: AutoScalingPolicy
    MinSize?: Value<number>
    DeleteOption?: Value<string>
    BalancingStrategy?: Value<string>
    GameServerGroupName: Value<string>
    LaunchTemplate?: LaunchTemplate
    GameServerProtectionPolicy?: Value<string>
    VpcSubnets?: List<Value<string>>
    MaxSize?: Value<number>
    InstanceDefinitions: List<InstanceDefinition>
    RoleArn: Value<string>
    Tags?: List<ResourceTag>
}

export default class GameServerGroup extends ResourceBase<GameServerGroupProperties> {
    static AutoScalingPolicy = AutoScalingPolicy
    static InstanceDefinition = InstanceDefinition
    static LaunchTemplate = LaunchTemplate
    static TargetTrackingConfiguration = TargetTrackingConfiguration

    constructor(properties: GameServerGroupProperties) {
        super('AWS::GameLift::GameServerGroup', properties)
    }
}
