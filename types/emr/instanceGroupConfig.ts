/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export interface EbsBlockDeviceConfigProperties {
    VolumeSpecification: VolumeSpecification
    VolumesPerInstance?: Value<number>
}

export class EbsBlockDeviceConfig extends ResourceBase {
    constructor(properties: EbsBlockDeviceConfigProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::EMR::EbsBlockDeviceConfig', properties, dependsOn)
    }
}

export interface ConfigurationProperties {
    Classification?: Value<string>
    ConfigurationProperties?: {[key: string]: Value<string>}
    Configurations?: List<Configuration>
}

export class Configuration extends ResourceBase {
    constructor(properties: ConfigurationProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::EMR::Configuration', properties, dependsOn)
    }
}

export interface MetricDimensionProperties {
    Key: Value<string>
    Value: Value<string>
}

export class MetricDimension extends ResourceBase {
    constructor(properties: MetricDimensionProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::EMR::MetricDimension', properties, dependsOn)
    }
}

export interface SimpleScalingPolicyConfigurationProperties {
    AdjustmentType?: Value<string>
    CoolDown?: Value<number>
    ScalingAdjustment: Value<number>
}

export class SimpleScalingPolicyConfiguration extends ResourceBase {
    constructor(properties: SimpleScalingPolicyConfigurationProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::EMR::SimpleScalingPolicyConfiguration', properties, dependsOn)
    }
}

export interface ScalingRuleProperties {
    Action: ScalingAction
    Description?: Value<string>
    Name: Value<string>
    Trigger: ScalingTrigger
}

export class ScalingRule extends ResourceBase {
    constructor(properties: ScalingRuleProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::EMR::ScalingRule', properties, dependsOn)
    }
}

export interface ScalingActionProperties {
    Market?: Value<string>
    SimpleScalingPolicyConfiguration: SimpleScalingPolicyConfiguration
}

export class ScalingAction extends ResourceBase {
    constructor(properties: ScalingActionProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::EMR::ScalingAction', properties, dependsOn)
    }
}

export interface ScalingTriggerProperties {
    CloudWatchAlarmDefinition: CloudWatchAlarmDefinition
}

export class ScalingTrigger extends ResourceBase {
    constructor(properties: ScalingTriggerProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::EMR::ScalingTrigger', properties, dependsOn)
    }
}

export interface ScalingConstraintsProperties {
    MaxCapacity: Value<number>
    MinCapacity: Value<number>
}

export class ScalingConstraints extends ResourceBase {
    constructor(properties: ScalingConstraintsProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::EMR::ScalingConstraints', properties, dependsOn)
    }
}

export interface CloudWatchAlarmDefinitionProperties {
    ComparisonOperator: Value<string>
    Dimensions?: List<MetricDimension>
    EvaluationPeriods?: Value<number>
    MetricName: Value<string>
    Namespace?: Value<string>
    Period: Value<number>
    Statistic?: Value<string>
    Threshold: Value<number>
    Unit?: Value<string>
}

export class CloudWatchAlarmDefinition extends ResourceBase {
    constructor(properties: CloudWatchAlarmDefinitionProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::EMR::CloudWatchAlarmDefinition', properties, dependsOn)
    }
}

export interface VolumeSpecificationProperties {
    Iops?: Value<number>
    SizeInGB: Value<number>
    VolumeType: Value<string>
}

export class VolumeSpecification extends ResourceBase {
    constructor(properties: VolumeSpecificationProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::EMR::VolumeSpecification', properties, dependsOn)
    }
}

export interface AutoScalingPolicyProperties {
    Constraints: ScalingConstraints
    Rules: List<ScalingRule>
}

export class AutoScalingPolicy extends ResourceBase {
    constructor(properties: AutoScalingPolicyProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::EMR::AutoScalingPolicy', properties, dependsOn)
    }
}

export interface EbsConfigurationProperties {
    EbsBlockDeviceConfigs?: List<EbsBlockDeviceConfig>
    EbsOptimized?: Value<boolean>
}

export class EbsConfiguration extends ResourceBase {
    constructor(properties: EbsConfigurationProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::EMR::EbsConfiguration', properties, dependsOn)
    }
}

export interface InstanceGroupConfigProperties {
    AutoScalingPolicy?: AutoScalingPolicy
    BidPrice?: Value<string>
    Configurations?: List<Configuration>
    EbsConfiguration?: EbsConfiguration
    InstanceCount: Value<number>
    InstanceRole: Value<string>
    InstanceType: Value<string>
    JobFlowId: Value<string>
    Market?: Value<string>
    Name?: Value<string>
}

export default class InstanceGroupConfig extends ResourceBase {
    constructor(properties: InstanceGroupConfigProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::EMR::InstanceGroupConfig', properties, dependsOn)
    }
}
