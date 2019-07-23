import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class LustreConfiguration {
    ImportPath?: Value<string>;
    WeeklyMaintenanceStartTime?: Value<string>;
    ImportedFileChunkSize?: Value<number>;
    ExportPath?: Value<string>;
    constructor(properties: LustreConfiguration);
}
export declare class WindowsConfiguration {
    WeeklyMaintenanceStartTime?: Value<string>;
    ActiveDirectoryId?: Value<string>;
    ThroughputCapacity?: Value<number>;
    CopyTagsToBackups?: Value<boolean>;
    DailyAutomaticBackupStartTime?: Value<string>;
    AutomaticBackupRetentionDays?: Value<number>;
    constructor(properties: WindowsConfiguration);
}
export interface FileSystemProperties {
    KmsKeyId?: Value<string>;
    StorageCapacity?: Value<number>;
    FileSystemType?: Value<string>;
    LustreConfiguration?: LustreConfiguration;
    BackupId?: Value<string>;
    SubnetIds?: List<Value<string>>;
    SecurityGroupIds?: List<Value<string>>;
    Tags?: List<ResourceTag>;
    WindowsConfiguration?: WindowsConfiguration;
}
export default class FileSystem extends ResourceBase<FileSystemProperties> {
    static LustreConfiguration: typeof LustreConfiguration;
    static WindowsConfiguration: typeof WindowsConfiguration;
    constructor(properties?: FileSystemProperties);
}
