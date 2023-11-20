import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class AuditLogConfiguration {
    FileAccessAuditLogLevel: Value<string>;
    FileShareAccessAuditLogLevel: Value<string>;
    AuditLogDestination?: Value<string>;
    constructor(properties: AuditLogConfiguration);
}
export declare class ClientConfigurations {
    Options?: List<Value<string>>;
    Clients?: Value<string>;
    constructor(properties: ClientConfigurations);
}
export declare class DiskIopsConfiguration {
    Mode?: Value<string>;
    Iops?: Value<number>;
    constructor(properties: DiskIopsConfiguration);
}
export declare class LustreConfiguration {
    DataCompressionType?: Value<string>;
    DriveCacheType?: Value<string>;
    ImportPath?: Value<string>;
    WeeklyMaintenanceStartTime?: Value<string>;
    AutoImportPolicy?: Value<string>;
    ImportedFileChunkSize?: Value<number>;
    DeploymentType?: Value<string>;
    DailyAutomaticBackupStartTime?: Value<string>;
    CopyTagsToBackups?: Value<boolean>;
    ExportPath?: Value<string>;
    PerUnitStorageThroughput?: Value<number>;
    AutomaticBackupRetentionDays?: Value<number>;
    constructor(properties: LustreConfiguration);
}
export declare class NfsExports {
    ClientConfigurations?: List<ClientConfigurations>;
    constructor(properties: NfsExports);
}
export declare class OntapConfiguration {
    FsxAdminPassword?: Value<string>;
    RouteTableIds?: List<Value<string>>;
    WeeklyMaintenanceStartTime?: Value<string>;
    DiskIopsConfiguration?: DiskIopsConfiguration;
    DeploymentType: Value<string>;
    DailyAutomaticBackupStartTime?: Value<string>;
    ThroughputCapacity?: Value<number>;
    AutomaticBackupRetentionDays?: Value<number>;
    EndpointIpAddressRange?: Value<string>;
    PreferredSubnetId?: Value<string>;
    constructor(properties: OntapConfiguration);
}
export declare class OpenZFSConfiguration {
    Options?: List<Value<string>>;
    CopyTagsToVolumes?: Value<boolean>;
    DeploymentType: Value<string>;
    ThroughputCapacity?: Value<number>;
    RootVolumeConfiguration?: RootVolumeConfiguration;
    EndpointIpAddressRange?: Value<string>;
    RouteTableIds?: List<Value<string>>;
    WeeklyMaintenanceStartTime?: Value<string>;
    DiskIopsConfiguration?: DiskIopsConfiguration;
    DailyAutomaticBackupStartTime?: Value<string>;
    CopyTagsToBackups?: Value<boolean>;
    AutomaticBackupRetentionDays?: Value<number>;
    PreferredSubnetId?: Value<string>;
    constructor(properties: OpenZFSConfiguration);
}
export declare class RootVolumeConfiguration {
    ReadOnly?: Value<boolean>;
    DataCompressionType?: Value<string>;
    NfsExports?: List<NfsExports>;
    CopyTagsToSnapshots?: Value<boolean>;
    RecordSizeKiB?: Value<number>;
    UserAndGroupQuotas?: List<UserAndGroupQuotas>;
    constructor(properties: RootVolumeConfiguration);
}
export declare class SelfManagedActiveDirectoryConfiguration {
    FileSystemAdministratorsGroup?: Value<string>;
    UserName?: Value<string>;
    DomainName?: Value<string>;
    OrganizationalUnitDistinguishedName?: Value<string>;
    DnsIps?: List<Value<string>>;
    Password?: Value<string>;
    constructor(properties: SelfManagedActiveDirectoryConfiguration);
}
export declare class UserAndGroupQuotas {
    Type?: Value<string>;
    Id?: Value<number>;
    StorageCapacityQuotaGiB?: Value<number>;
    constructor(properties: UserAndGroupQuotas);
}
export declare class WindowsConfiguration {
    SelfManagedActiveDirectoryConfiguration?: SelfManagedActiveDirectoryConfiguration;
    AuditLogConfiguration?: AuditLogConfiguration;
    WeeklyMaintenanceStartTime?: Value<string>;
    ActiveDirectoryId?: Value<string>;
    DiskIopsConfiguration?: DiskIopsConfiguration;
    DeploymentType?: Value<string>;
    Aliases?: List<Value<string>>;
    ThroughputCapacity: Value<number>;
    CopyTagsToBackups?: Value<boolean>;
    DailyAutomaticBackupStartTime?: Value<string>;
    AutomaticBackupRetentionDays?: Value<number>;
    PreferredSubnetId?: Value<string>;
    constructor(properties: WindowsConfiguration);
}
export interface FileSystemProperties {
    StorageType?: Value<string>;
    KmsKeyId?: Value<string>;
    StorageCapacity?: Value<number>;
    LustreConfiguration?: LustreConfiguration;
    BackupId?: Value<string>;
    OntapConfiguration?: OntapConfiguration;
    SubnetIds: List<Value<string>>;
    SecurityGroupIds?: List<Value<string>>;
    WindowsConfiguration?: WindowsConfiguration;
    FileSystemTypeVersion?: Value<string>;
    OpenZFSConfiguration?: OpenZFSConfiguration;
    FileSystemType: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class FileSystem extends ResourceBase<FileSystemProperties> {
    static AuditLogConfiguration: typeof AuditLogConfiguration;
    static ClientConfigurations: typeof ClientConfigurations;
    static DiskIopsConfiguration: typeof DiskIopsConfiguration;
    static LustreConfiguration: typeof LustreConfiguration;
    static NfsExports: typeof NfsExports;
    static OntapConfiguration: typeof OntapConfiguration;
    static OpenZFSConfiguration: typeof OpenZFSConfiguration;
    static RootVolumeConfiguration: typeof RootVolumeConfiguration;
    static SelfManagedActiveDirectoryConfiguration: typeof SelfManagedActiveDirectoryConfiguration;
    static UserAndGroupQuotas: typeof UserAndGroupQuotas;
    static WindowsConfiguration: typeof WindowsConfiguration;
    constructor(properties: FileSystemProperties);
}
