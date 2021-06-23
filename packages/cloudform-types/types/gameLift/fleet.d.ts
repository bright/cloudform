import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class LocationCapacity {
    DesiredEC2Instances: Value<number>;
    MinSize: Value<number>;
    MaxSize: Value<number>;
    constructor(properties: LocationCapacity);
}
export declare class CertificateConfiguration {
    CertificateType: Value<string>;
    constructor(properties: CertificateConfiguration);
}
export declare class LocationConfiguration {
    Location: Value<string>;
    LocationCapacity?: LocationCapacity;
    constructor(properties: LocationConfiguration);
}
export declare class IpPermission {
    FromPort: Value<number>;
    IpRange: Value<string>;
    Protocol: Value<string>;
    ToPort: Value<number>;
    constructor(properties: IpPermission);
}
export declare class ServerProcess {
    ConcurrentExecutions: Value<number>;
    LaunchPath: Value<string>;
    Parameters?: Value<string>;
    constructor(properties: ServerProcess);
}
export declare class ResourceCreationLimitPolicy {
    NewGameSessionsPerCreator?: Value<number>;
    PolicyPeriodInMinutes?: Value<number>;
    constructor(properties: ResourceCreationLimitPolicy);
}
export declare class RuntimeConfiguration {
    GameSessionActivationTimeoutSeconds?: Value<number>;
    MaxConcurrentGameSessionActivations?: Value<number>;
    ServerProcesses?: List<ServerProcess>;
    constructor(properties: RuntimeConfiguration);
}
export interface FleetProperties {
    CertificateConfiguration?: CertificateConfiguration;
    Description?: Value<string>;
    DesiredEC2Instances?: Value<number>;
    EC2InboundPermissions?: List<IpPermission>;
    EC2InstanceType?: Value<string>;
    FleetType?: Value<string>;
    InstanceRoleARN?: Value<string>;
    Locations?: List<LocationConfiguration>;
    MaxSize?: Value<number>;
    MetricGroups?: List<Value<string>>;
    MinSize?: Value<number>;
    Name?: Value<string>;
    NewGameSessionProtectionPolicy?: Value<string>;
    PeerVpcAwsAccountId?: Value<string>;
    PeerVpcId?: Value<string>;
    ResourceCreationLimitPolicy?: ResourceCreationLimitPolicy;
    BuildId?: Value<string>;
    ScriptId?: Value<string>;
    RuntimeConfiguration?: RuntimeConfiguration;
    LogPaths?: List<Value<string>>;
    ServerLaunchParameters?: Value<string>;
    ServerLaunchPath?: Value<string>;
}
export default class Fleet extends ResourceBase<FleetProperties> {
    static LocationCapacity: typeof LocationCapacity;
    static CertificateConfiguration: typeof CertificateConfiguration;
    static LocationConfiguration: typeof LocationConfiguration;
    static IpPermission: typeof IpPermission;
    static ServerProcess: typeof ServerProcess;
    static ResourceCreationLimitPolicy: typeof ResourceCreationLimitPolicy;
    static RuntimeConfiguration: typeof RuntimeConfiguration;
    constructor(properties?: FleetProperties);
}
