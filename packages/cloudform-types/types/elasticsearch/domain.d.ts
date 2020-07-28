import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class DomainEndpointOptions {
    EnforceHTTPS?: Value<boolean>;
    TLSSecurityPolicy?: Value<string>;
    constructor(properties: DomainEndpointOptions);
}
export declare class NodeToNodeEncryptionOptions {
    Enabled?: Value<boolean>;
    constructor(properties: NodeToNodeEncryptionOptions);
}
export declare class ElasticsearchClusterConfig {
    DedicatedMasterCount?: Value<number>;
    DedicatedMasterEnabled?: Value<boolean>;
    DedicatedMasterType?: Value<string>;
    InstanceCount?: Value<number>;
    InstanceType?: Value<string>;
    ZoneAwarenessConfig?: ZoneAwarenessConfig;
    ZoneAwarenessEnabled?: Value<boolean>;
    constructor(properties: ElasticsearchClusterConfig);
}
export declare class SnapshotOptions {
    AutomatedSnapshotStartHour?: Value<number>;
    constructor(properties: SnapshotOptions);
}
export declare class CognitoOptions {
    Enabled?: Value<boolean>;
    IdentityPoolId?: Value<string>;
    RoleArn?: Value<string>;
    UserPoolId?: Value<string>;
    constructor(properties: CognitoOptions);
}
export declare class VPCOptions {
    SecurityGroupIds?: List<Value<string>>;
    SubnetIds?: List<Value<string>>;
    constructor(properties: VPCOptions);
}
export declare class MasterUserOptions {
    MasterUserARN?: Value<string>;
    MasterUserName?: Value<string>;
    MasterUserPassword?: Value<string>;
    constructor(properties: MasterUserOptions);
}
export declare class LogPublishingOption {
    CloudWatchLogsLogGroupArn?: Value<string>;
    Enabled?: Value<boolean>;
    constructor(properties: LogPublishingOption);
}
export declare class AdvancedSecurityOptionsInput {
    Enabled?: Value<boolean>;
    InternalUserDatabaseEnabled?: Value<boolean>;
    MasterUserOptions?: MasterUserOptions;
    constructor(properties: AdvancedSecurityOptionsInput);
}
export declare class ZoneAwarenessConfig {
    AvailabilityZoneCount?: Value<number>;
    constructor(properties: ZoneAwarenessConfig);
}
export declare class EBSOptions {
    EBSEnabled?: Value<boolean>;
    Iops?: Value<number>;
    VolumeSize?: Value<number>;
    VolumeType?: Value<string>;
    constructor(properties: EBSOptions);
}
export declare class EncryptionAtRestOptions {
    Enabled?: Value<boolean>;
    KmsKeyId?: Value<string>;
    constructor(properties: EncryptionAtRestOptions);
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
    static DomainEndpointOptions: typeof DomainEndpointOptions;
    static NodeToNodeEncryptionOptions: typeof NodeToNodeEncryptionOptions;
    static ElasticsearchClusterConfig: typeof ElasticsearchClusterConfig;
    static SnapshotOptions: typeof SnapshotOptions;
    static CognitoOptions: typeof CognitoOptions;
    static VPCOptions: typeof VPCOptions;
    static MasterUserOptions: typeof MasterUserOptions;
    static LogPublishingOption: typeof LogPublishingOption;
    static AdvancedSecurityOptionsInput: typeof AdvancedSecurityOptionsInput;
    static ZoneAwarenessConfig: typeof ZoneAwarenessConfig;
    static EBSOptions: typeof EBSOptions;
    static EncryptionAtRestOptions: typeof EncryptionAtRestOptions;
    constructor(properties?: DomainProperties);
}
