/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class TargetTrackingConfiguration {
    TargetValue!: Value<number>

    constructor(properties: TargetTrackingConfiguration) {
        Object.assign(this, properties)
    }
}

export class LaunchTemplate {
    LaunchTemplateId?: Value<string>
    LaunchTemplateName?: Value<string>
    Version?: Value<string>

    constructor(properties: LaunchTemplate) {
        Object.assign(this, properties)
    }
}

export class AutoScalingPolicy {
    EstimatedInstanceWarmup?: Value<number>
    TargetTrackingConfiguration!: TargetTrackingConfiguration

    constructor(properties: AutoScalingPolicy) {
        Object.assign(this, properties)
    }
}

export class InstanceDefinition {
    InstanceType!: Value<string>
    WeightedCapacity?: Value<string>

    constructor(properties: InstanceDefinition) {
        Object.assign(this, properties)
    }
}

export interface GameServerGroupProperties {
    AutoScalingPolicy?: AutoScalingPolicy
    BalancingStrategy?: Value<string>
    DeleteOption?: Value<string>
    GameServerGroupName: Value<string>
    GameServerProtectionPolicy?: Value<string>
    InstanceDefinitions: List<InstanceDefinition>
    LaunchTemplate: LaunchTemplate
    MaxSize?: Value<number>
    MinSize?: Value<number>
    RoleArn: Value<string>
    Tags?: List<ResourceTag>
    VpcSubnets?: List<Value<string>>
}

export default class GameServerGroup extends ResourceBase<GameServerGroupProperties> {
    static TargetTrackingConfiguration = TargetTrackingConfiguration
    static LaunchTemplate = LaunchTemplate
    static AutoScalingPolicy = AutoScalingPolicy
    static InstanceDefinition = InstanceDefinition

    constructor(properties: GameServerGroupProperties) {
        super('AWS::GameLift::GameServerGroup', properties)
    }
}
