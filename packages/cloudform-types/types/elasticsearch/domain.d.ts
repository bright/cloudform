import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
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
    ZoneAwarenessEnabled?: Value<boolean>;
    constructor(properties: ElasticsearchClusterConfig);
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
    DomainName?: Value<string>;
    EBSOptions?: EBSOptions;
    ElasticsearchClusterConfig?: ElasticsearchClusterConfig;
    ElasticsearchVersion?: Value<string>;
    EncryptionAtRestOptions?: EncryptionAtRestOptions;
    NodeToNodeEncryptionOptions?: NodeToNodeEncryptionOptions;
    SnapshotOptions?: SnapshotOptions;
    Tags?: List<ResourceTag>;
    VPCOptions?: VPCOptions;
}
export default class Domain extends ResourceBase<DomainProperties> {
    static NodeToNodeEncryptionOptions: typeof NodeToNodeEncryptionOptions;
    static ElasticsearchClusterConfig: typeof ElasticsearchClusterConfig;
    static SnapshotOptions: typeof SnapshotOptions;
    static VPCOptions: typeof VPCOptions;
    static EBSOptions: typeof EBSOptions;
    static EncryptionAtRestOptions: typeof EncryptionAtRestOptions;
    constructor(properties?: DomainProperties);
}
