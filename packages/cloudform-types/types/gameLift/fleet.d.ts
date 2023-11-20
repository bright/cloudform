import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class AnywhereConfiguration {
    Cost: Value<string>;
    constructor(properties: AnywhereConfiguration);
}
export declare class CertificateConfiguration {
    CertificateType: Value<string>;
    constructor(properties: CertificateConfiguration);
}
export declare class IpPermission {
    IpRange: Value<string>;
    FromPort: Value<number>;
    ToPort: Value<number>;
    Protocol: Value<string>;
    constructor(properties: IpPermission);
}
export declare class LocationCapacity {
    MinSize: Value<number>;
    DesiredEC2Instances: Value<number>;
    MaxSize: Value<number>;
    constructor(properties: LocationCapacity);
}
export declare class LocationConfiguration {
    LocationCapacity?: LocationCapacity;
    Location: Value<string>;
    constructor(properties: LocationConfiguration);
}
export declare class ResourceCreationLimitPolicy {
    PolicyPeriodInMinutes?: Value<number>;
    NewGameSessionsPerCreator?: Value<number>;
    constructor(properties: ResourceCreationLimitPolicy);
}
export declare class RuntimeConfiguration {
    ServerProcesses?: List<ServerProcess>;
    MaxConcurrentGameSessionActivations?: Value<number>;
    GameSessionActivationTimeoutSeconds?: Value<number>;
    constructor(properties: RuntimeConfiguration);
}
export declare class ScalingPolicy {
    Status?: Value<string>;
    MetricName: Value<string>;
    PolicyType?: Value<string>;
    ComparisonOperator?: Value<string>;
    TargetConfiguration?: TargetConfiguration;
    UpdateStatus?: Value<string>;
    ScalingAdjustment?: Value<number>;
    EvaluationPeriods?: Value<number>;
    Location?: Value<string>;
    Name: Value<string>;
    ScalingAdjustmentType?: Value<string>;
    Threshold?: Value<number>;
    constructor(properties: ScalingPolicy);
}
export declare class ServerProcess {
    ConcurrentExecutions: Value<number>;
    Parameters?: Value<string>;
    LaunchPath: Value<string>;
    constructor(properties: ServerProcess);
}
export declare class TargetConfiguration {
    TargetValue: Value<number>;
    constructor(properties: TargetConfiguration);
}
export interface FleetProperties {
    ScalingPolicies?: List<ScalingPolicy>;
    Description?: Value<string>;
    PeerVpcId?: Value<string>;
    ApplyCapacity?: Value<string>;
    FleetType?: Value<string>;
    EC2InboundPermissions?: List<IpPermission>;
    Locations?: List<LocationConfiguration>;
    NewGameSessionProtectionPolicy?: Value<string>;
    ScriptId?: Value<string>;
    ComputeType?: Value<string>;
    MaxSize?: Value<number>;
    RuntimeConfiguration?: RuntimeConfiguration;
    Name: Value<string>;
    MinSize?: Value<number>;
    PeerVpcAwsAccountId?: Value<string>;
    AnywhereConfiguration?: AnywhereConfiguration;
    InstanceRoleARN?: Value<string>;
    MetricGroups?: List<Value<string>>;
    BuildId?: Value<string>;
    ResourceCreationLimitPolicy?: ResourceCreationLimitPolicy;
    EC2InstanceType?: Value<string>;
    CertificateConfiguration?: CertificateConfiguration;
    InstanceRoleCredentialsProvider?: Value<string>;
    DesiredEC2Instances?: Value<number>;
    LogPaths?: List<Value<string>>;
    ServerLaunchParameters?: Value<string>;
    ServerLaunchPath?: Value<string>;
}
export default class Fleet extends ResourceBase<FleetProperties> {
    static AnywhereConfiguration: typeof AnywhereConfiguration;
    static CertificateConfiguration: typeof CertificateConfiguration;
    static IpPermission: typeof IpPermission;
    static LocationCapacity: typeof LocationCapacity;
    static LocationConfiguration: typeof LocationConfiguration;
    static ResourceCreationLimitPolicy: typeof ResourceCreationLimitPolicy;
    static RuntimeConfiguration: typeof RuntimeConfiguration;
    static ScalingPolicy: typeof ScalingPolicy;
    static ServerProcess: typeof ServerProcess;
    static TargetConfiguration: typeof TargetConfiguration;
    constructor(properties: FleetProperties);
}
