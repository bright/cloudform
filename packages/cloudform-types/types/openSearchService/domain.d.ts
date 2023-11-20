import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class AdvancedSecurityOptionsInput {
    AnonymousAuthEnabled?: Value<boolean>;
    InternalUserDatabaseEnabled?: Value<boolean>;
    SAMLOptions?: SAMLOptions;
    Enabled?: Value<boolean>;
    AnonymousAuthDisableDate?: Value<string>;
    MasterUserOptions?: MasterUserOptions;
    constructor(properties: AdvancedSecurityOptionsInput);
}
export declare class ClusterConfig {
    InstanceCount?: Value<number>;
    MultiAZWithStandbyEnabled?: Value<boolean>;
    WarmEnabled?: Value<boolean>;
    WarmCount?: Value<number>;
    DedicatedMasterEnabled?: Value<boolean>;
    ZoneAwarenessConfig?: ZoneAwarenessConfig;
    DedicatedMasterCount?: Value<number>;
    InstanceType?: Value<string>;
    WarmType?: Value<string>;
    ZoneAwarenessEnabled?: Value<boolean>;
    DedicatedMasterType?: Value<string>;
    constructor(properties: ClusterConfig);
}
export declare class CognitoOptions {
    UserPoolId?: Value<string>;
    Enabled?: Value<boolean>;
    IdentityPoolId?: Value<string>;
    RoleArn?: Value<string>;
    constructor(properties: CognitoOptions);
}
export declare class DomainEndpointOptions {
    CustomEndpointEnabled?: Value<boolean>;
    EnforceHTTPS?: Value<boolean>;
    CustomEndpointCertificateArn?: Value<string>;
    CustomEndpoint?: Value<string>;
    TLSSecurityPolicy?: Value<string>;
    constructor(properties: DomainEndpointOptions);
}
export declare class EBSOptions {
    EBSEnabled?: Value<boolean>;
    VolumeType?: Value<string>;
    Throughput?: Value<number>;
    Iops?: Value<number>;
    VolumeSize?: Value<number>;
    constructor(properties: EBSOptions);
}
export declare class EncryptionAtRestOptions {
    KmsKeyId?: Value<string>;
    Enabled?: Value<boolean>;
    constructor(properties: EncryptionAtRestOptions);
}
export declare class Idp {
    EntityId: Value<string>;
    MetadataContent: Value<string>;
    constructor(properties: Idp);
}
export declare class LogPublishingOption {
    CloudWatchLogsLogGroupArn?: Value<string>;
    Enabled?: Value<boolean>;
    constructor(properties: LogPublishingOption);
}
export declare class MasterUserOptions {
    MasterUserPassword?: Value<string>;
    MasterUserARN?: Value<string>;
    MasterUserName?: Value<string>;
    constructor(properties: MasterUserOptions);
}
export declare class NodeToNodeEncryptionOptions {
    Enabled?: Value<boolean>;
    constructor(properties: NodeToNodeEncryptionOptions);
}
export declare class OffPeakWindow {
    WindowStartTime?: WindowStartTime;
    constructor(properties: OffPeakWindow);
}
export declare class OffPeakWindowOptions {
    OffPeakWindow?: OffPeakWindow;
    Enabled?: Value<boolean>;
    constructor(properties: OffPeakWindowOptions);
}
export declare class SAMLOptions {
    MasterBackendRole?: Value<string>;
    SubjectKey?: Value<string>;
    Idp?: Idp;
    SessionTimeoutMinutes?: Value<number>;
    RolesKey?: Value<string>;
    Enabled?: Value<boolean>;
    MasterUserName?: Value<string>;
    constructor(properties: SAMLOptions);
}
export declare class ServiceSoftwareOptions {
    NewVersion?: Value<string>;
    UpdateStatus?: Value<string>;
    Description?: Value<string>;
    Cancellable?: Value<boolean>;
    CurrentVersion?: Value<string>;
    AutomatedUpdateDate?: Value<string>;
    UpdateAvailable?: Value<boolean>;
    OptionalDeployment?: Value<boolean>;
    constructor(properties: ServiceSoftwareOptions);
}
export declare class SnapshotOptions {
    AutomatedSnapshotStartHour?: Value<number>;
    constructor(properties: SnapshotOptions);
}
export declare class SoftwareUpdateOptions {
    AutoSoftwareUpdateEnabled?: Value<boolean>;
    constructor(properties: SoftwareUpdateOptions);
}
export declare class VPCOptions {
    SecurityGroupIds?: List<Value<string>>;
    SubnetIds?: List<Value<string>>;
    constructor(properties: VPCOptions);
}
export declare class WindowStartTime {
    Hours: Value<number>;
    Minutes: Value<number>;
    constructor(properties: WindowStartTime);
}
export declare class ZoneAwarenessConfig {
    AvailabilityZoneCount?: Value<number>;
    constructor(properties: ZoneAwarenessConfig);
}
export interface DomainProperties {
    EngineVersion?: Value<string>;
    SoftwareUpdateOptions?: SoftwareUpdateOptions;
    DomainName?: Value<string>;
    LogPublishingOptions?: {
        [key: string]: LogPublishingOption;
    };
    SnapshotOptions?: SnapshotOptions;
    VPCOptions?: VPCOptions;
    NodeToNodeEncryptionOptions?: NodeToNodeEncryptionOptions;
    AccessPolicies?: {
        [key: string]: any;
    };
    DomainEndpointOptions?: DomainEndpointOptions;
    CognitoOptions?: CognitoOptions;
    AdvancedOptions?: {
        [key: string]: Value<string>;
    };
    AdvancedSecurityOptions?: AdvancedSecurityOptionsInput;
    EBSOptions?: EBSOptions;
    EncryptionAtRestOptions?: EncryptionAtRestOptions;
    OffPeakWindowOptions?: OffPeakWindowOptions;
    Tags?: List<ResourceTag>;
    ClusterConfig?: ClusterConfig;
}
export default class Domain extends ResourceBase<DomainProperties> {
    static AdvancedSecurityOptionsInput: typeof AdvancedSecurityOptionsInput;
    static ClusterConfig: typeof ClusterConfig;
    static CognitoOptions: typeof CognitoOptions;
    static DomainEndpointOptions: typeof DomainEndpointOptions;
    static EBSOptions: typeof EBSOptions;
    static EncryptionAtRestOptions: typeof EncryptionAtRestOptions;
    static Idp: typeof Idp;
    static LogPublishingOption: typeof LogPublishingOption;
    static MasterUserOptions: typeof MasterUserOptions;
    static NodeToNodeEncryptionOptions: typeof NodeToNodeEncryptionOptions;
    static OffPeakWindow: typeof OffPeakWindow;
    static OffPeakWindowOptions: typeof OffPeakWindowOptions;
    static SAMLOptions: typeof SAMLOptions;
    static ServiceSoftwareOptions: typeof ServiceSoftwareOptions;
    static SnapshotOptions: typeof SnapshotOptions;
    static SoftwareUpdateOptions: typeof SoftwareUpdateOptions;
    static VPCOptions: typeof VPCOptions;
    static WindowStartTime: typeof WindowStartTime;
    static ZoneAwarenessConfig: typeof ZoneAwarenessConfig;
    constructor(properties?: DomainProperties);
}
