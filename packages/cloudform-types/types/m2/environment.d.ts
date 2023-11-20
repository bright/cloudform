import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class EfsStorageConfiguration {
    MountPoint: Value<string>;
    FileSystemId: Value<string>;
    constructor(properties: EfsStorageConfiguration);
}
export declare class FsxStorageConfiguration {
    MountPoint: Value<string>;
    FileSystemId: Value<string>;
    constructor(properties: FsxStorageConfiguration);
}
export declare class HighAvailabilityConfig {
    DesiredCapacity: Value<number>;
    constructor(properties: HighAvailabilityConfig);
}
export declare class StorageConfiguration {
    Efs?: EfsStorageConfiguration;
    Fsx?: FsxStorageConfiguration;
    constructor(properties: StorageConfiguration);
}
export interface EnvironmentProperties {
    Description?: Value<string>;
    EngineVersion?: Value<string>;
    KmsKeyId?: Value<string>;
    HighAvailabilityConfig?: HighAvailabilityConfig;
    PreferredMaintenanceWindow?: Value<string>;
    SecurityGroupIds?: List<Value<string>>;
    SubnetIds?: List<Value<string>>;
    Name: Value<string>;
    EngineType: Value<string>;
    PubliclyAccessible?: Value<boolean>;
    InstanceType: Value<string>;
    StorageConfigurations?: List<StorageConfiguration>;
    Tags?: {
        [key: string]: Value<string>;
    };
}
export default class Environment extends ResourceBase<EnvironmentProperties> {
    static EfsStorageConfiguration: typeof EfsStorageConfiguration;
    static FsxStorageConfiguration: typeof FsxStorageConfiguration;
    static HighAvailabilityConfig: typeof HighAvailabilityConfig;
    static StorageConfiguration: typeof StorageConfiguration;
    constructor(properties: EnvironmentProperties);
}
