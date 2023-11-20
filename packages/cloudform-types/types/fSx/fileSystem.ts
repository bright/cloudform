/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-3 (https://d2zq80gdmjim8k.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class AuditLogConfiguration {
    FileAccessAuditLogLevel!: Value<string>
    FileShareAccessAuditLogLevel!: Value<string>
    AuditLogDestination?: Value<string>

    constructor(properties: AuditLogConfiguration) {
        Object.assign(this, properties)
    }
}

export class ClientConfigurations {
    Options?: List<Value<string>>
    Clients?: Value<string>

    constructor(properties: ClientConfigurations) {
        Object.assign(this, properties)
    }
}

export class DiskIopsConfiguration {
    Mode?: Value<string>
    Iops?: Value<number>

    constructor(properties: DiskIopsConfiguration) {
        Object.assign(this, properties)
    }
}

export class LustreConfiguration {
    DataCompressionType?: Value<string>
    DriveCacheType?: Value<string>
    ImportPath?: Value<string>
    WeeklyMaintenanceStartTime?: Value<string>
    AutoImportPolicy?: Value<string>
    ImportedFileChunkSize?: Value<number>
    DeploymentType?: Value<string>
    DailyAutomaticBackupStartTime?: Value<string>
    CopyTagsToBackups?: Value<boolean>
    ExportPath?: Value<string>
    PerUnitStorageThroughput?: Value<number>
    AutomaticBackupRetentionDays?: Value<number>

    constructor(properties: LustreConfiguration) {
        Object.assign(this, properties)
    }
}

export class NfsExports {
    ClientConfigurations?: List<ClientConfigurations>

    constructor(properties: NfsExports) {
        Object.assign(this, properties)
    }
}

export class OntapConfiguration {
    FsxAdminPassword?: Value<string>
    RouteTableIds?: List<Value<string>>
    WeeklyMaintenanceStartTime?: Value<string>
    DiskIopsConfiguration?: DiskIopsConfiguration
    DeploymentType!: Value<string>
    DailyAutomaticBackupStartTime?: Value<string>
    ThroughputCapacity?: Value<number>
    AutomaticBackupRetentionDays?: Value<number>
    EndpointIpAddressRange?: Value<string>
    PreferredSubnetId?: Value<string>

    constructor(properties: OntapConfiguration) {
        Object.assign(this, properties)
    }
}

export class OpenZFSConfiguration {
    Options?: List<Value<string>>
    CopyTagsToVolumes?: Value<boolean>
    DeploymentType!: Value<string>
    ThroughputCapacity?: Value<number>
    RootVolumeConfiguration?: RootVolumeConfiguration
    EndpointIpAddressRange?: Value<string>
    RouteTableIds?: List<Value<string>>
    WeeklyMaintenanceStartTime?: Value<string>
    DiskIopsConfiguration?: DiskIopsConfiguration
    DailyAutomaticBackupStartTime?: Value<string>
    CopyTagsToBackups?: Value<boolean>
    AutomaticBackupRetentionDays?: Value<number>
    PreferredSubnetId?: Value<string>

    constructor(properties: OpenZFSConfiguration) {
        Object.assign(this, properties)
    }
}

export class RootVolumeConfiguration {
    ReadOnly?: Value<boolean>
    DataCompressionType?: Value<string>
    NfsExports?: List<NfsExports>
    CopyTagsToSnapshots?: Value<boolean>
    RecordSizeKiB?: Value<number>
    UserAndGroupQuotas?: List<UserAndGroupQuotas>

    constructor(properties: RootVolumeConfiguration) {
        Object.assign(this, properties)
    }
}

export class SelfManagedActiveDirectoryConfiguration {
    FileSystemAdministratorsGroup?: Value<string>
    UserName?: Value<string>
    DomainName?: Value<string>
    OrganizationalUnitDistinguishedName?: Value<string>
    DnsIps?: List<Value<string>>
    Password?: Value<string>

    constructor(properties: SelfManagedActiveDirectoryConfiguration) {
        Object.assign(this, properties)
    }
}

export class UserAndGroupQuotas {
    Type?: Value<string>
    Id?: Value<number>
    StorageCapacityQuotaGiB?: Value<number>

    constructor(properties: UserAndGroupQuotas) {
        Object.assign(this, properties)
    }
}

export class WindowsConfiguration {
    SelfManagedActiveDirectoryConfiguration?: SelfManagedActiveDirectoryConfiguration
    AuditLogConfiguration?: AuditLogConfiguration
    WeeklyMaintenanceStartTime?: Value<string>
    ActiveDirectoryId?: Value<string>
    DiskIopsConfiguration?: DiskIopsConfiguration
    DeploymentType?: Value<string>
    Aliases?: List<Value<string>>
    ThroughputCapacity!: Value<number>
    CopyTagsToBackups?: Value<boolean>
    DailyAutomaticBackupStartTime?: Value<string>
    AutomaticBackupRetentionDays?: Value<number>
    PreferredSubnetId?: Value<string>

    constructor(properties: WindowsConfiguration) {
        Object.assign(this, properties)
    }
}

export interface FileSystemProperties {
    StorageType?: Value<string>
    KmsKeyId?: Value<string>
    StorageCapacity?: Value<number>
    LustreConfiguration?: LustreConfiguration
    BackupId?: Value<string>
    OntapConfiguration?: OntapConfiguration
    SubnetIds: List<Value<string>>
    SecurityGroupIds?: List<Value<string>>
    WindowsConfiguration?: WindowsConfiguration
    FileSystemTypeVersion?: Value<string>
    OpenZFSConfiguration?: OpenZFSConfiguration
    FileSystemType: Value<string>
    Tags?: List<ResourceTag>
}

export default class FileSystem extends ResourceBase<FileSystemProperties> {
    static AuditLogConfiguration = AuditLogConfiguration
    static ClientConfigurations = ClientConfigurations
    static DiskIopsConfiguration = DiskIopsConfiguration
    static LustreConfiguration = LustreConfiguration
    static NfsExports = NfsExports
    static OntapConfiguration = OntapConfiguration
    static OpenZFSConfiguration = OpenZFSConfiguration
    static RootVolumeConfiguration = RootVolumeConfiguration
    static SelfManagedActiveDirectoryConfiguration = SelfManagedActiveDirectoryConfiguration
    static UserAndGroupQuotas = UserAndGroupQuotas
    static WindowsConfiguration = WindowsConfiguration

    constructor(properties: FileSystemProperties) {
        super('AWS::FSx::FileSystem', properties)
    }
}
