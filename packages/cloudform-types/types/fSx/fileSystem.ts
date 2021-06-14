/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

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

export class SelfManagedActiveDirectoryConfiguration {
    FileSystemAdministratorsGroup?: Value<string>
    UserName?: Value<string>
    DomainName?: Value<string>
    OrganizationalUnitDistinguishedName?: Value<string>
    Password?: Value<string>

    constructor(properties: SelfManagedActiveDirectoryConfiguration) {
        Object.assign(this, properties)
    }
}

export class WindowsConfiguration {
    WeeklyMaintenanceStartTime?: Value<string>
    ActiveDirectoryId?: Value<string>
    DeploymentType?: Value<string>
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
    FileSystemType: Value<string>
    BackupId?: Value<string>
}

export default class FileSystem extends ResourceBase<FileSystemProperties> {
    static LustreConfiguration = LustreConfiguration
    static SelfManagedActiveDirectoryConfiguration = SelfManagedActiveDirectoryConfiguration
    static WindowsConfiguration = WindowsConfiguration

    constructor(properties: FileSystemProperties) {
        super('AWS::FSx::FileSystem', properties)
    }
}
