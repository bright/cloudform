import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class ElasticFileSystemTag {
    Key: Value<string>;
    Value: Value<string>;
    constructor(properties: ElasticFileSystemTag);
}
export declare class LifecyclePolicy {
    TransitionToIA: Value<string>;
    constructor(properties: LifecyclePolicy);
}
export interface FileSystemProperties {
    Encrypted?: Value<boolean>;
    FileSystemTags?: List<ElasticFileSystemTag>;
    KmsKeyId?: Value<string>;
    LifecyclePolicies?: List<LifecyclePolicy>;
    PerformanceMode?: Value<string>;
    ProvisionedThroughputInMibps?: Value<number>;
    ThroughputMode?: Value<string>;
}
export default class FileSystem extends ResourceBase<FileSystemProperties> {
    static ElasticFileSystemTag: typeof ElasticFileSystemTag;
    static LifecyclePolicy: typeof LifecyclePolicy;
    constructor(properties?: FileSystemProperties);
}
