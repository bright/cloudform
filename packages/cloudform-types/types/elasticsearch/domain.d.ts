import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class AdvancedSecurityOptionsInput {
    AnonymousAuthEnabled?: Value<boolean>;
    Enabled?: Value<boolean>;
    InternalUserDatabaseEnabled?: Value<boolean>;
    MasterUserOptions?: MasterUserOptions;
    constructor(properties: AdvancedSecurityOptionsInput);
}
export declare class CognitoOptions {
    Enabled?: Value<boolean>;
    IdentityPoolId?: Value<string>;
    RoleArn?: Value<string>;
    UserPoolId?: Value<string>;
    constructor(properties: CognitoOptions);
}
export declare class ColdStorageOptions {
    Enabled?: Value<boolean>;
    constructor(properties: ColdStorageOptions);
}
export declare class DomainEndpointOptions {
    CustomEndpoint?: Value<string>;
    CustomEndpointCertificateArn?: Value<string>;
    CustomEndpointEnabled?: Value<boolean>;
    EnforceHTTPS?: Value<boolean>;
    TLSSecurityPolicy?: Value<string>;
    constructor(properties: DomainEndpointOptions);
}
export declare class EBSOptions {
    EBSEnabled?: Value<boolean>;
    Iops?: Value<number>;
    VolumeSize?: Value<number>;
    VolumeType?: Value<string>;
    constructor(properties: EBSOptions);
}
export declare class ElasticsearchClusterConfig {
    ColdStorageOptions?: ColdStorageOptions;
    DedicatedMasterCount?: Value<number>;
    DedicatedMasterEnabled?: Value<boolean>;
    DedicatedMasterType?: Value<string>;
    InstanceCount?: Value<number>;
    InstanceType?: Value<string>;
    WarmCount?: Value<number>;
    WarmEnabled?: Value<boolean>;
    WarmType?: Value<string>;
    ZoneAwarenessConfig?: ZoneAwarenessConfig;
    ZoneAwarenessEnabled?: Value<boolean>;
    constructor(properties: ElasticsearchClusterConfig);
}
export declare class EncryptionAtRestOptions {
    Enabled?: Value<boolean>;
    KmsKeyId?: Value<string>;
    constructor(properties: EncryptionAtRestOptions);
}
export declare class LogPublishingOption {
    CloudWatchLogsLogGroupArn?: Value<string>;
    Enabled?: Value<boolean>;
    constructor(properties: LogPublishingOption);
}
export declare class MasterUserOptions {
    MasterUserARN?: Value<string>;
    MasterUserName?: Value<string>;
    MasterUserPassword?: Value<string>;
    constructor(properties: MasterUserOptions);
}
export declare class NodeToNodeEncryptionOptions {
    Enabled?: Value<boolean>;
    constructor(properties: NodeToNodeEncryptionOptions);
}
export declare class SnapshotOptions {
    AutomatedSnapshotStartHour?: Value<number>;
    constructor(properties: SnapshotOptions);
}
export declare class VPCOptions {
    SecurityGroupIds?: List<Value<string>>;
    SubnetIds?: List<Value<string>>;
    constructor(properties: VPCOptions);
}
export declare class ZoneAwarenessConfig {
    AvailabilityZoneCount?: Value<number>;
    constructor(properties: ZoneAwarenessConfig);
}
export interface DomainProperties {
    AccessPolicies?: {
        [key: string]: any;
    };
    AdvancedOptions?: {
        [key: string]: Value<string>;
    };
    AdvancedSecurityOptions?: AdvancedSecurityOptionsInput;
    CognitoOptions?: CognitoOptions;
    DomainEndpointOptions?: DomainEndpointOptions;
    DomainName?: Value<string>;
    EBSOptions?: EBSOptions;
    ElasticsearchClusterConfig?: ElasticsearchClusterConfig;
    ElasticsearchVersion?: Value<string>;
    EncryptionAtRestOptions?: EncryptionAtRestOptions;
    LogPublishingOptions?: {
        [key: string]: LogPublishingOption;
    };
    NodeToNodeEncryptionOptions?: NodeToNodeEncryptionOptions;
    SnapshotOptions?: SnapshotOptions;
    Tags?: List<ResourceTag>;
    VPCOptions?: VPCOptions;
}
export default class Domain extends ResourceBase<DomainProperties> {
    static AdvancedSecurityOptionsInput: typeof AdvancedSecurityOptionsInput;
    static CognitoOptions: typeof CognitoOptions;
    static ColdStorageOptions: typeof ColdStorageOptions;
    static DomainEndpointOptions: typeof DomainEndpointOptions;
    static EBSOptions: typeof EBSOptions;
    static ElasticsearchClusterConfig: typeof ElasticsearchClusterConfig;
    static EncryptionAtRestOptions: typeof EncryptionAtRestOptions;
    static LogPublishingOption: typeof LogPublishingOption;
    static MasterUserOptions: typeof MasterUserOptions;
    static NodeToNodeEncryptionOptions: typeof NodeToNodeEncryptionOptions;
    static SnapshotOptions: typeof SnapshotOptions;
    static VPCOptions: typeof VPCOptions;
    static ZoneAwarenessConfig: typeof ZoneAwarenessConfig;
    constructor(properties?: DomainProperties);
}
