import { ResourceBase, ResourceTag } from '../resource';
import { Value } from '../internal';
export interface InstanceGroupConfigProperties {
    AutoScalingPolicy?: AutoScalingPolicy;
    BidPrice?: Value<string>;
    Configurations?: Configuration[];
    EbsConfiguration?: EbsConfiguration;
    InstanceCount: Value<number>;
    InstanceType: Value<string>;
    Market?: Value<string>;
    Name?: Value<string>;
}
export declare class InstanceGroupConfig extends ResourceBase {
    constructor(properties: InstanceGroupConfigProperties, dependsOn?: Value<string>);
}
export interface SpotProvisioningSpecificationProperties {
    BlockDurationMinutes?: Value<number>;
    TimeoutAction: Value<string>;
    TimeoutDurationMinutes: Value<number>;
}
export declare class SpotProvisioningSpecification extends ResourceBase {
    constructor(properties: SpotProvisioningSpecificationProperties, dependsOn?: Value<string>);
}
export interface BootstrapActionConfigProperties {
    Name: Value<string>;
    ScriptBootstrapAction: ScriptBootstrapActionConfig;
}
export declare class BootstrapActionConfig extends ResourceBase {
    constructor(properties: BootstrapActionConfigProperties, dependsOn?: Value<string>);
}
export interface ScalingConstraintsProperties {
    MaxCapacity: Value<number>;
    MinCapacity: Value<number>;
}
export declare class ScalingConstraints extends ResourceBase {
    constructor(properties: ScalingConstraintsProperties, dependsOn?: Value<string>);
}
export interface InstanceFleetConfigProperties {
    InstanceTypeConfigs?: InstanceTypeConfig[];
    LaunchSpecifications?: InstanceFleetProvisioningSpecifications;
    Name?: Value<string>;
    TargetOnDemandCapacity?: Value<number>;
    TargetSpotCapacity?: Value<number>;
}
export declare class InstanceFleetConfig extends ResourceBase {
    constructor(properties: InstanceFleetConfigProperties, dependsOn?: Value<string>);
}
export interface JobFlowInstancesConfigProperties {
    AdditionalMasterSecurityGroups?: Value<string>[];
    AdditionalSlaveSecurityGroups?: Value<string>[];
    CoreInstanceFleet?: InstanceFleetConfig;
    CoreInstanceGroup?: InstanceGroupConfig;
    Ec2KeyName?: Value<string>;
    Ec2SubnetId?: Value<string>;
    EmrManagedMasterSecurityGroup?: Value<string>;
    EmrManagedSlaveSecurityGroup?: Value<string>;
    HadoopVersion?: Value<string>;
    MasterInstanceFleet?: InstanceFleetConfig;
    MasterInstanceGroup?: InstanceGroupConfig;
    Placement?: PlacementType;
    ServiceAccessSecurityGroup?: Value<string>;
    TerminationProtected?: Value<boolean>;
}
export declare class JobFlowInstancesConfig extends ResourceBase {
    constructor(properties: JobFlowInstancesConfigProperties, dependsOn?: Value<string>);
}
export interface ScalingActionProperties {
    Market?: Value<string>;
    SimpleScalingPolicyConfiguration: SimpleScalingPolicyConfiguration;
}
export declare class ScalingAction extends ResourceBase {
    constructor(properties: ScalingActionProperties, dependsOn?: Value<string>);
}
export interface SimpleScalingPolicyConfigurationProperties {
    AdjustmentType?: Value<string>;
    CoolDown?: Value<number>;
    ScalingAdjustment: Value<number>;
}
export declare class SimpleScalingPolicyConfiguration extends ResourceBase {
    constructor(properties: SimpleScalingPolicyConfigurationProperties, dependsOn?: Value<string>);
}
export interface ApplicationProperties {
    AdditionalInfo?: {
        [key: string]: Value<string>;
    };
    Args?: Value<string>[];
    Name?: Value<string>;
    Version?: Value<string>;
}
export declare class Application extends ResourceBase {
    constructor(properties: ApplicationProperties, dependsOn?: Value<string>);
}
export interface EbsBlockDeviceConfigProperties {
    VolumeSpecification: VolumeSpecification;
    VolumesPerInstance?: Value<number>;
}
export declare class EbsBlockDeviceConfig extends ResourceBase {
    constructor(properties: EbsBlockDeviceConfigProperties, dependsOn?: Value<string>);
}
export interface PlacementTypeProperties {
    AvailabilityZone: Value<string>;
}
export declare class PlacementType extends ResourceBase {
    constructor(properties: PlacementTypeProperties, dependsOn?: Value<string>);
}
export interface ConfigurationProperties {
    Classification?: Value<string>;
    ConfigurationProperties?: {
        [key: string]: Value<string>;
    };
    Configurations?: Configuration[];
}
export declare class Configuration extends ResourceBase {
    constructor(properties: ConfigurationProperties, dependsOn?: Value<string>);
}
export interface ScriptBootstrapActionConfigProperties {
    Args?: Value<string>[];
    Path: Value<string>;
}
export declare class ScriptBootstrapActionConfig extends ResourceBase {
    constructor(properties: ScriptBootstrapActionConfigProperties, dependsOn?: Value<string>);
}
export interface CloudWatchAlarmDefinitionProperties {
    ComparisonOperator: Value<string>;
    Dimensions?: MetricDimension[];
    EvaluationPeriods?: Value<number>;
    MetricName: Value<string>;
    Namespace?: Value<string>;
    Period: Value<number>;
    Statistic?: Value<string>;
    Threshold: Value<number>;
    Unit?: Value<string>;
}
export declare class CloudWatchAlarmDefinition extends ResourceBase {
    constructor(properties: CloudWatchAlarmDefinitionProperties, dependsOn?: Value<string>);
}
export interface EbsConfigurationProperties {
    EbsBlockDeviceConfigs?: EbsBlockDeviceConfig[];
    EbsOptimized?: Value<boolean>;
}
export declare class EbsConfiguration extends ResourceBase {
    constructor(properties: EbsConfigurationProperties, dependsOn?: Value<string>);
}
export interface ScalingRuleProperties {
    Action: ScalingAction;
    Description?: Value<string>;
    Name: Value<string>;
    Trigger: ScalingTrigger;
}
export declare class ScalingRule extends ResourceBase {
    constructor(properties: ScalingRuleProperties, dependsOn?: Value<string>);
}
export interface InstanceTypeConfigProperties {
    BidPrice?: Value<string>;
    BidPriceAsPercentageOfOnDemandPrice?: Value<number>;
    Configurations?: Configuration[];
    EbsConfiguration?: EbsConfiguration;
    InstanceType: Value<string>;
    WeightedCapacity?: Value<number>;
}
export declare class InstanceTypeConfig extends ResourceBase {
    constructor(properties: InstanceTypeConfigProperties, dependsOn?: Value<string>);
}
export interface MetricDimensionProperties {
    Key: Value<string>;
    Value: Value<string>;
}
export declare class MetricDimension extends ResourceBase {
    constructor(properties: MetricDimensionProperties, dependsOn?: Value<string>);
}
export interface VolumeSpecificationProperties {
    Iops?: Value<number>;
    SizeInGB: Value<number>;
    VolumeType: Value<string>;
}
export declare class VolumeSpecification extends ResourceBase {
    constructor(properties: VolumeSpecificationProperties, dependsOn?: Value<string>);
}
export interface AutoScalingPolicyProperties {
    Constraints: ScalingConstraints;
    Rules: ScalingRule[];
}
export declare class AutoScalingPolicy extends ResourceBase {
    constructor(properties: AutoScalingPolicyProperties, dependsOn?: Value<string>);
}
export interface InstanceFleetProvisioningSpecificationsProperties {
    SpotSpecification: SpotProvisioningSpecification;
}
export declare class InstanceFleetProvisioningSpecifications extends ResourceBase {
    constructor(properties: InstanceFleetProvisioningSpecificationsProperties, dependsOn?: Value<string>);
}
export interface ScalingTriggerProperties {
    CloudWatchAlarmDefinition: CloudWatchAlarmDefinition;
}
export declare class ScalingTrigger extends ResourceBase {
    constructor(properties: ScalingTriggerProperties, dependsOn?: Value<string>);
}
export interface ClusterProperties {
    AdditionalInfo?: any;
    Applications?: Application[];
    AutoScalingRole?: Value<string>;
    BootstrapActions?: BootstrapActionConfig[];
    Configurations?: Configuration[];
    CustomAmiId?: Value<string>;
    EbsRootVolumeSize?: Value<number>;
    Instances: JobFlowInstancesConfig;
    JobFlowRole: Value<string>;
    LogUri?: Value<string>;
    Name: Value<string>;
    ReleaseLabel?: Value<string>;
    ScaleDownBehavior?: Value<string>;
    SecurityConfiguration?: Value<string>;
    ServiceRole: Value<string>;
    Tags?: ResourceTag[];
    VisibleToAllUsers?: Value<boolean>;
}
export default class Cluster extends ResourceBase {
    constructor(properties: ClusterProperties, dependsOn?: Value<string>);
}
