/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value} from '../dataTypes'

export interface InstanceGroupConfigProperties {
    AutoScalingPolicy?: AutoScalingPolicy
    BidPrice?: Value<string>
    Configurations?: Configuration[]
    EbsConfiguration?: EbsConfiguration
    InstanceCount: Value<number>
    InstanceType: Value<string>
    Market?: Value<string>
    Name?: Value<string>
}

export class InstanceGroupConfig extends ResourceBase {
    constructor(properties: InstanceGroupConfigProperties, dependsOn?: Value<string>) {
        super('AWS::EMR::InstanceGroupConfig', properties, dependsOn)
    }
}

export interface SpotProvisioningSpecificationProperties {
    BlockDurationMinutes?: Value<number>
    TimeoutAction: Value<string>
    TimeoutDurationMinutes: Value<number>
}

export class SpotProvisioningSpecification extends ResourceBase {
    constructor(properties: SpotProvisioningSpecificationProperties, dependsOn?: Value<string>) {
        super('AWS::EMR::SpotProvisioningSpecification', properties, dependsOn)
    }
}

export interface BootstrapActionConfigProperties {
    Name: Value<string>
    ScriptBootstrapAction: ScriptBootstrapActionConfig
}

export class BootstrapActionConfig extends ResourceBase {
    constructor(properties: BootstrapActionConfigProperties, dependsOn?: Value<string>) {
        super('AWS::EMR::BootstrapActionConfig', properties, dependsOn)
    }
}

export interface ScalingConstraintsProperties {
    MaxCapacity: Value<number>
    MinCapacity: Value<number>
}

export class ScalingConstraints extends ResourceBase {
    constructor(properties: ScalingConstraintsProperties, dependsOn?: Value<string>) {
        super('AWS::EMR::ScalingConstraints', properties, dependsOn)
    }
}

export interface InstanceFleetConfigProperties {
    InstanceTypeConfigs?: InstanceTypeConfig[]
    LaunchSpecifications?: InstanceFleetProvisioningSpecifications
    Name?: Value<string>
    TargetOnDemandCapacity?: Value<number>
    TargetSpotCapacity?: Value<number>
}

export class InstanceFleetConfig extends ResourceBase {
    constructor(properties: InstanceFleetConfigProperties, dependsOn?: Value<string>) {
        super('AWS::EMR::InstanceFleetConfig', properties, dependsOn)
    }
}

export interface JobFlowInstancesConfigProperties {
    AdditionalMasterSecurityGroups?: Value<string>[]
    AdditionalSlaveSecurityGroups?: Value<string>[]
    CoreInstanceFleet?: InstanceFleetConfig
    CoreInstanceGroup?: InstanceGroupConfig
    Ec2KeyName?: Value<string>
    Ec2SubnetId?: Value<string>
    EmrManagedMasterSecurityGroup?: Value<string>
    EmrManagedSlaveSecurityGroup?: Value<string>
    HadoopVersion?: Value<string>
    MasterInstanceFleet?: InstanceFleetConfig
    MasterInstanceGroup?: InstanceGroupConfig
    Placement?: PlacementType
    ServiceAccessSecurityGroup?: Value<string>
    TerminationProtected?: Value<boolean>
}

export class JobFlowInstancesConfig extends ResourceBase {
    constructor(properties: JobFlowInstancesConfigProperties, dependsOn?: Value<string>) {
        super('AWS::EMR::JobFlowInstancesConfig', properties, dependsOn)
    }
}

export interface ScalingActionProperties {
    Market?: Value<string>
    SimpleScalingPolicyConfiguration: SimpleScalingPolicyConfiguration
}

export class ScalingAction extends ResourceBase {
    constructor(properties: ScalingActionProperties, dependsOn?: Value<string>) {
        super('AWS::EMR::ScalingAction', properties, dependsOn)
    }
}

export interface SimpleScalingPolicyConfigurationProperties {
    AdjustmentType?: Value<string>
    CoolDown?: Value<number>
    ScalingAdjustment: Value<number>
}

export class SimpleScalingPolicyConfiguration extends ResourceBase {
    constructor(properties: SimpleScalingPolicyConfigurationProperties, dependsOn?: Value<string>) {
        super('AWS::EMR::SimpleScalingPolicyConfiguration', properties, dependsOn)
    }
}

export interface ApplicationProperties {
    AdditionalInfo?: {[key: string]: Value<string>}
    Args?: Value<string>[]
    Name?: Value<string>
    Version?: Value<string>
}

export class Application extends ResourceBase {
    constructor(properties: ApplicationProperties, dependsOn?: Value<string>) {
        super('AWS::EMR::Application', properties, dependsOn)
    }
}

export interface EbsBlockDeviceConfigProperties {
    VolumeSpecification: VolumeSpecification
    VolumesPerInstance?: Value<number>
}

export class EbsBlockDeviceConfig extends ResourceBase {
    constructor(properties: EbsBlockDeviceConfigProperties, dependsOn?: Value<string>) {
        super('AWS::EMR::EbsBlockDeviceConfig', properties, dependsOn)
    }
}

export interface PlacementTypeProperties {
    AvailabilityZone: Value<string>
}

export class PlacementType extends ResourceBase {
    constructor(properties: PlacementTypeProperties, dependsOn?: Value<string>) {
        super('AWS::EMR::PlacementType', properties, dependsOn)
    }
}

export interface ConfigurationProperties {
    Classification?: Value<string>
    ConfigurationProperties?: {[key: string]: Value<string>}
    Configurations?: Configuration[]
}

export class Configuration extends ResourceBase {
    constructor(properties: ConfigurationProperties, dependsOn?: Value<string>) {
        super('AWS::EMR::Configuration', properties, dependsOn)
    }
}

export interface ScriptBootstrapActionConfigProperties {
    Args?: Value<string>[]
    Path: Value<string>
}

export class ScriptBootstrapActionConfig extends ResourceBase {
    constructor(properties: ScriptBootstrapActionConfigProperties, dependsOn?: Value<string>) {
        super('AWS::EMR::ScriptBootstrapActionConfig', properties, dependsOn)
    }
}

export interface CloudWatchAlarmDefinitionProperties {
    ComparisonOperator: Value<string>
    Dimensions?: MetricDimension[]
    EvaluationPeriods?: Value<number>
    MetricName: Value<string>
    Namespace?: Value<string>
    Period: Value<number>
    Statistic?: Value<string>
    Threshold: Value<number>
    Unit?: Value<string>
}

export class CloudWatchAlarmDefinition extends ResourceBase {
    constructor(properties: CloudWatchAlarmDefinitionProperties, dependsOn?: Value<string>) {
        super('AWS::EMR::CloudWatchAlarmDefinition', properties, dependsOn)
    }
}

export interface EbsConfigurationProperties {
    EbsBlockDeviceConfigs?: EbsBlockDeviceConfig[]
    EbsOptimized?: Value<boolean>
}

export class EbsConfiguration extends ResourceBase {
    constructor(properties: EbsConfigurationProperties, dependsOn?: Value<string>) {
        super('AWS::EMR::EbsConfiguration', properties, dependsOn)
    }
}

export interface ScalingRuleProperties {
    Action: ScalingAction
    Description?: Value<string>
    Name: Value<string>
    Trigger: ScalingTrigger
}

export class ScalingRule extends ResourceBase {
    constructor(properties: ScalingRuleProperties, dependsOn?: Value<string>) {
        super('AWS::EMR::ScalingRule', properties, dependsOn)
    }
}

export interface InstanceTypeConfigProperties {
    BidPrice?: Value<string>
    BidPriceAsPercentageOfOnDemandPrice?: Value<number>
    Configurations?: Configuration[]
    EbsConfiguration?: EbsConfiguration
    InstanceType: Value<string>
    WeightedCapacity?: Value<number>
}

export class InstanceTypeConfig extends ResourceBase {
    constructor(properties: InstanceTypeConfigProperties, dependsOn?: Value<string>) {
        super('AWS::EMR::InstanceTypeConfig', properties, dependsOn)
    }
}

export interface MetricDimensionProperties {
    Key: Value<string>
    Value: Value<string>
}

export class MetricDimension extends ResourceBase {
    constructor(properties: MetricDimensionProperties, dependsOn?: Value<string>) {
        super('AWS::EMR::MetricDimension', properties, dependsOn)
    }
}

export interface VolumeSpecificationProperties {
    Iops?: Value<number>
    SizeInGB: Value<number>
    VolumeType: Value<string>
}

export class VolumeSpecification extends ResourceBase {
    constructor(properties: VolumeSpecificationProperties, dependsOn?: Value<string>) {
        super('AWS::EMR::VolumeSpecification', properties, dependsOn)
    }
}

export interface AutoScalingPolicyProperties {
    Constraints: ScalingConstraints
    Rules: ScalingRule[]
}

export class AutoScalingPolicy extends ResourceBase {
    constructor(properties: AutoScalingPolicyProperties, dependsOn?: Value<string>) {
        super('AWS::EMR::AutoScalingPolicy', properties, dependsOn)
    }
}

export interface InstanceFleetProvisioningSpecificationsProperties {
    SpotSpecification: SpotProvisioningSpecification
}

export class InstanceFleetProvisioningSpecifications extends ResourceBase {
    constructor(properties: InstanceFleetProvisioningSpecificationsProperties, dependsOn?: Value<string>) {
        super('AWS::EMR::InstanceFleetProvisioningSpecifications', properties, dependsOn)
    }
}

export interface ScalingTriggerProperties {
    CloudWatchAlarmDefinition: CloudWatchAlarmDefinition
}

export class ScalingTrigger extends ResourceBase {
    constructor(properties: ScalingTriggerProperties, dependsOn?: Value<string>) {
        super('AWS::EMR::ScalingTrigger', properties, dependsOn)
    }
}

export interface ClusterProperties {
    AdditionalInfo?: any
    Applications?: Application[]
    AutoScalingRole?: Value<string>
    BootstrapActions?: BootstrapActionConfig[]
    Configurations?: Configuration[]
    CustomAmiId?: Value<string>
    EbsRootVolumeSize?: Value<number>
    Instances: JobFlowInstancesConfig
    JobFlowRole: Value<string>
    LogUri?: Value<string>
    Name: Value<string>
    ReleaseLabel?: Value<string>
    ScaleDownBehavior?: Value<string>
    SecurityConfiguration?: Value<string>
    ServiceRole: Value<string>
    Tags?: ResourceTag[]
    VisibleToAllUsers?: Value<boolean>
}

export default class Cluster extends ResourceBase {
    constructor(properties: ClusterProperties, dependsOn?: Value<string>) {
        super('AWS::EMR::Cluster', properties, dependsOn)
    }
}
