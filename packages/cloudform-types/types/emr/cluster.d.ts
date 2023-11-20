import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class Application {
    AdditionalInfo?: {
        [key: string]: Value<string>;
    };
    Args?: List<Value<string>>;
    Name?: Value<string>;
    Version?: Value<string>;
    constructor(properties: Application);
}
export declare class AutoScalingPolicy {
    Constraints: ScalingConstraints;
    Rules: List<ScalingRule>;
    constructor(properties: AutoScalingPolicy);
}
export declare class AutoTerminationPolicy {
    IdleTimeout?: Value<number>;
    constructor(properties: AutoTerminationPolicy);
}
export declare class BootstrapActionConfig {
    Name: Value<string>;
    ScriptBootstrapAction: ScriptBootstrapActionConfig;
    constructor(properties: BootstrapActionConfig);
}
export declare class CloudWatchAlarmDefinition {
    ComparisonOperator: Value<string>;
    Dimensions?: List<MetricDimension>;
    EvaluationPeriods?: Value<number>;
    MetricName: Value<string>;
    Namespace?: Value<string>;
    Period: Value<number>;
    Statistic?: Value<string>;
    Threshold: Value<number>;
    Unit?: Value<string>;
    constructor(properties: CloudWatchAlarmDefinition);
}
export declare class ComputeLimits {
    MaximumCapacityUnits: Value<number>;
    MaximumCoreCapacityUnits?: Value<number>;
    MaximumOnDemandCapacityUnits?: Value<number>;
    MinimumCapacityUnits: Value<number>;
    UnitType: Value<string>;
    constructor(properties: ComputeLimits);
}
export declare class Configuration {
    Classification?: Value<string>;
    ConfigurationProperties?: {
        [key: string]: Value<string>;
    };
    Configurations?: List<Configuration>;
    constructor(properties: Configuration);
}
export declare class EbsBlockDeviceConfig {
    VolumeSpecification: VolumeSpecification;
    VolumesPerInstance?: Value<number>;
    constructor(properties: EbsBlockDeviceConfig);
}
export declare class EbsConfiguration {
    EbsBlockDeviceConfigs?: List<EbsBlockDeviceConfig>;
    EbsOptimized?: Value<boolean>;
    constructor(properties: EbsConfiguration);
}
export declare class HadoopJarStepConfig {
    Args?: List<Value<string>>;
    Jar: Value<string>;
    MainClass?: Value<string>;
    StepProperties?: List<KeyValue>;
    constructor(properties: HadoopJarStepConfig);
}
export declare class InstanceFleetConfig {
    InstanceTypeConfigs?: List<InstanceTypeConfig>;
    LaunchSpecifications?: InstanceFleetProvisioningSpecifications;
    Name?: Value<string>;
    TargetOnDemandCapacity?: Value<number>;
    TargetSpotCapacity?: Value<number>;
    constructor(properties: InstanceFleetConfig);
}
export declare class InstanceFleetProvisioningSpecifications {
    OnDemandSpecification?: OnDemandProvisioningSpecification;
    SpotSpecification?: SpotProvisioningSpecification;
    constructor(properties: InstanceFleetProvisioningSpecifications);
}
export declare class InstanceGroupConfig {
    AutoScalingPolicy?: AutoScalingPolicy;
    BidPrice?: Value<string>;
    Configurations?: List<Configuration>;
    CustomAmiId?: Value<string>;
    EbsConfiguration?: EbsConfiguration;
    InstanceCount: Value<number>;
    InstanceType: Value<string>;
    Market?: Value<string>;
    Name?: Value<string>;
    constructor(properties: InstanceGroupConfig);
}
export declare class InstanceTypeConfig {
    BidPrice?: Value<string>;
    BidPriceAsPercentageOfOnDemandPrice?: Value<number>;
    Configurations?: List<Configuration>;
    CustomAmiId?: Value<string>;
    EbsConfiguration?: EbsConfiguration;
    InstanceType: Value<string>;
    WeightedCapacity?: Value<number>;
    constructor(properties: InstanceTypeConfig);
}
export declare class JobFlowInstancesConfig {
    AdditionalMasterSecurityGroups?: List<Value<string>>;
    AdditionalSlaveSecurityGroups?: List<Value<string>>;
    CoreInstanceFleet?: InstanceFleetConfig;
    CoreInstanceGroup?: InstanceGroupConfig;
    Ec2KeyName?: Value<string>;
    Ec2SubnetId?: Value<string>;
    Ec2SubnetIds?: List<Value<string>>;
    EmrManagedMasterSecurityGroup?: Value<string>;
    EmrManagedSlaveSecurityGroup?: Value<string>;
    HadoopVersion?: Value<string>;
    KeepJobFlowAliveWhenNoSteps?: Value<boolean>;
    MasterInstanceFleet?: InstanceFleetConfig;
    MasterInstanceGroup?: InstanceGroupConfig;
    Placement?: PlacementType;
    ServiceAccessSecurityGroup?: Value<string>;
    TaskInstanceFleets?: List<InstanceFleetConfig>;
    TaskInstanceGroups?: List<InstanceGroupConfig>;
    TerminationProtected?: Value<boolean>;
    constructor(properties: JobFlowInstancesConfig);
}
export declare class KerberosAttributes {
    ADDomainJoinPassword?: Value<string>;
    ADDomainJoinUser?: Value<string>;
    CrossRealmTrustPrincipalPassword?: Value<string>;
    KdcAdminPassword: Value<string>;
    Realm: Value<string>;
    constructor(properties: KerberosAttributes);
}
export declare class KeyValue {
    Key?: Value<string>;
    Value?: Value<string>;
    constructor(properties: KeyValue);
}
export declare class ManagedScalingPolicy {
    ComputeLimits?: ComputeLimits;
    constructor(properties: ManagedScalingPolicy);
}
export declare class MetricDimension {
    Key: Value<string>;
    Value: Value<string>;
    constructor(properties: MetricDimension);
}
export declare class OnDemandProvisioningSpecification {
    AllocationStrategy: Value<string>;
    constructor(properties: OnDemandProvisioningSpecification);
}
export declare class PlacementType {
    AvailabilityZone: Value<string>;
    constructor(properties: PlacementType);
}
export declare class ScalingAction {
    Market?: Value<string>;
    SimpleScalingPolicyConfiguration: SimpleScalingPolicyConfiguration;
    constructor(properties: ScalingAction);
}
export declare class ScalingConstraints {
    MaxCapacity: Value<number>;
    MinCapacity: Value<number>;
    constructor(properties: ScalingConstraints);
}
export declare class ScalingRule {
    Action: ScalingAction;
    Description?: Value<string>;
    Name: Value<string>;
    Trigger: ScalingTrigger;
    constructor(properties: ScalingRule);
}
export declare class ScalingTrigger {
    CloudWatchAlarmDefinition: CloudWatchAlarmDefinition;
    constructor(properties: ScalingTrigger);
}
export declare class ScriptBootstrapActionConfig {
    Args?: List<Value<string>>;
    Path: Value<string>;
    constructor(properties: ScriptBootstrapActionConfig);
}
export declare class SimpleScalingPolicyConfiguration {
    AdjustmentType?: Value<string>;
    CoolDown?: Value<number>;
    ScalingAdjustment: Value<number>;
    constructor(properties: SimpleScalingPolicyConfiguration);
}
export declare class SpotProvisioningSpecification {
    AllocationStrategy?: Value<string>;
    BlockDurationMinutes?: Value<number>;
    TimeoutAction: Value<string>;
    TimeoutDurationMinutes: Value<number>;
    constructor(properties: SpotProvisioningSpecification);
}
export declare class StepConfig {
    ActionOnFailure?: Value<string>;
    HadoopJarStep: HadoopJarStepConfig;
    Name: Value<string>;
    constructor(properties: StepConfig);
}
export declare class VolumeSpecification {
    Iops?: Value<number>;
    SizeInGB: Value<number>;
    Throughput?: Value<number>;
    VolumeType: Value<string>;
    constructor(properties: VolumeSpecification);
}
export interface ClusterProperties {
    AdditionalInfo?: {
        [key: string]: any;
    };
    Applications?: List<Application>;
    AutoScalingRole?: Value<string>;
    AutoTerminationPolicy?: AutoTerminationPolicy;
    BootstrapActions?: List<BootstrapActionConfig>;
    Configurations?: List<Configuration>;
    CustomAmiId?: Value<string>;
    EbsRootVolumeSize?: Value<number>;
    Instances: JobFlowInstancesConfig;
    JobFlowRole: Value<string>;
    KerberosAttributes?: KerberosAttributes;
    LogEncryptionKmsKeyId?: Value<string>;
    LogUri?: Value<string>;
    ManagedScalingPolicy?: ManagedScalingPolicy;
    Name: Value<string>;
    OSReleaseLabel?: Value<string>;
    ReleaseLabel?: Value<string>;
    ScaleDownBehavior?: Value<string>;
    SecurityConfiguration?: Value<string>;
    ServiceRole: Value<string>;
    StepConcurrencyLevel?: Value<number>;
    Steps?: List<StepConfig>;
    Tags?: List<ResourceTag>;
    VisibleToAllUsers?: Value<boolean>;
}
export default class Cluster extends ResourceBase<ClusterProperties> {
    static Application: typeof Application;
    static AutoScalingPolicy: typeof AutoScalingPolicy;
    static AutoTerminationPolicy: typeof AutoTerminationPolicy;
    static BootstrapActionConfig: typeof BootstrapActionConfig;
    static CloudWatchAlarmDefinition: typeof CloudWatchAlarmDefinition;
    static ComputeLimits: typeof ComputeLimits;
    static Configuration: typeof Configuration;
    static EbsBlockDeviceConfig: typeof EbsBlockDeviceConfig;
    static EbsConfiguration: typeof EbsConfiguration;
    static HadoopJarStepConfig: typeof HadoopJarStepConfig;
    static InstanceFleetConfig: typeof InstanceFleetConfig;
    static InstanceFleetProvisioningSpecifications: typeof InstanceFleetProvisioningSpecifications;
    static InstanceGroupConfig: typeof InstanceGroupConfig;
    static InstanceTypeConfig: typeof InstanceTypeConfig;
    static JobFlowInstancesConfig: typeof JobFlowInstancesConfig;
    static KerberosAttributes: typeof KerberosAttributes;
    static KeyValue: typeof KeyValue;
    static ManagedScalingPolicy: typeof ManagedScalingPolicy;
    static MetricDimension: typeof MetricDimension;
    static OnDemandProvisioningSpecification: typeof OnDemandProvisioningSpecification;
    static PlacementType: typeof PlacementType;
    static ScalingAction: typeof ScalingAction;
    static ScalingConstraints: typeof ScalingConstraints;
    static ScalingRule: typeof ScalingRule;
    static ScalingTrigger: typeof ScalingTrigger;
    static ScriptBootstrapActionConfig: typeof ScriptBootstrapActionConfig;
    static SimpleScalingPolicyConfiguration: typeof SimpleScalingPolicyConfiguration;
    static SpotProvisioningSpecification: typeof SpotProvisioningSpecification;
    static StepConfig: typeof StepConfig;
    static VolumeSpecification: typeof VolumeSpecification;
    constructor(properties: ClusterProperties);
}
