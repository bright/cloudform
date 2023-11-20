import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class BackupPolicy {
    Status: Value<string>;
    constructor(properties: BackupPolicy);
}
export declare class ElasticFileSystemTag {
    Value: Value<string>;
    Key: Value<string>;
    constructor(properties: ElasticFileSystemTag);
}
export declare class LifecyclePolicy {
    TransitionToIA?: Value<string>;
    TransitionToPrimaryStorageClass?: Value<string>;
    constructor(properties: LifecyclePolicy);
}
export declare class ReplicationConfiguration {
    Destinations?: List<ReplicationDestination>;
    constructor(properties: ReplicationConfiguration);
}
export declare class ReplicationDestination {
    KmsKeyId?: Value<string>;
    AvailabilityZoneName?: Value<string>;
    FileSystemId?: Value<string>;
    Region?: Value<string>;
    constructor(properties: ReplicationDestination);
}
export interface FileSystemProperties {
    KmsKeyId?: Value<string>;
    PerformanceMode?: Value<string>;
    Encrypted?: Value<boolean>;
    BypassPolicyLockoutSafetyCheck?: Value<boolean>;
    FileSystemTags?: List<ElasticFileSystemTag>;
    ProvisionedThroughputInMibps?: Value<number>;
    FileSystemPolicy?: {
        [key: string]: any;
    };
    AvailabilityZoneName?: Value<string>;
    LifecyclePolicies?: List<LifecyclePolicy>;
    ThroughputMode?: Value<string>;
    ReplicationConfiguration?: ReplicationConfiguration;
    BackupPolicy?: BackupPolicy;
}
export default class FileSystem extends ResourceBase<FileSystemProperties> {
    static BackupPolicy: typeof BackupPolicy;
    static ElasticFileSystemTag: typeof ElasticFileSystemTag;
    static LifecyclePolicy: typeof LifecyclePolicy;
    static ReplicationConfiguration: typeof ReplicationConfiguration;
    static ReplicationDestination: typeof ReplicationDestination;
    constructor(properties?: FileSystemProperties);
}
