import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
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
export declare class CertificateConfiguration {
    CertificateType: Value<string>;
    constructor(properties: CertificateConfiguration);
}
export declare class RuntimeConfiguration {
    GameSessionActivationTimeoutSeconds?: Value<number>;
    MaxConcurrentGameSessionActivations?: Value<number>;
    ServerProcesses?: List<ServerProcess>;
    constructor(properties: RuntimeConfiguration);
}
export interface FleetProperties {
    BuildId?: Value<string>;
    CertificateConfiguration?: CertificateConfiguration;
    Description?: Value<string>;
    DesiredEC2Instances?: Value<number>;
    EC2InboundPermissions?: List<IpPermission>;
    EC2InstanceType: Value<string>;
    FleetType?: Value<string>;
    InstanceRoleARN?: Value<string>;
    LogPaths?: List<Value<string>>;
    MaxSize?: Value<number>;
    MetricGroups?: List<Value<string>>;
    MinSize?: Value<number>;
    Name: Value<string>;
    NewGameSessionProtectionPolicy?: Value<string>;
    PeerVpcAwsAccountId?: Value<string>;
    PeerVpcId?: Value<string>;
    ResourceCreationLimitPolicy?: ResourceCreationLimitPolicy;
    RuntimeConfiguration?: RuntimeConfiguration;
    ScriptId?: Value<string>;
    ServerLaunchParameters?: Value<string>;
    ServerLaunchPath?: Value<string>;
}
export default class Fleet extends ResourceBase<FleetProperties> {
    static IpPermission: typeof IpPermission;
    static ServerProcess: typeof ServerProcess;
    static ResourceCreationLimitPolicy: typeof ResourceCreationLimitPolicy;
    static CertificateConfiguration: typeof CertificateConfiguration;
    static RuntimeConfiguration: typeof RuntimeConfiguration;
    constructor(properties: FleetProperties);
}
