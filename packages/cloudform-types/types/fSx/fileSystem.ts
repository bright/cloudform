/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class LustreConfiguration {
    ImportPath?: Value<string>
    WeeklyMaintenanceStartTime?: Value<string>
    ImportedFileChunkSize?: Value<number>
    ExportPath?: Value<string>

    constructor(properties: LustreConfiguration) {
        Object.assign(this, properties)
    }
}

export class WindowsConfiguration {
    WeeklyMaintenanceStartTime?: Value<string>
    ActiveDirectoryId?: Value<string>
    ThroughputCapacity?: Value<number>
    CopyTagsToBackups?: Value<boolean>
    DailyAutomaticBackupStartTime?: Value<string>
    AutomaticBackupRetentionDays?: Value<number>

    constructor(properties: WindowsConfiguration) {
        Object.assign(this, properties)
    }
}

export interface FileSystemProperties {
    KmsKeyId?: Value<string>
    StorageCapacity?: Value<number>
    FileSystemType?: Value<string>
    LustreConfiguration?: LustreConfiguration
    BackupId?: Value<string>
    SubnetIds?: List<Value<string>>
    SecurityGroupIds?: List<Value<string>>
    Tags?: List<ResourceTag>
    WindowsConfiguration?: WindowsConfiguration
}

export default class FileSystem extends ResourceBase<FileSystemProperties> {
    static LustreConfiguration = LustreConfiguration
    static WindowsConfiguration = WindowsConfiguration

    constructor(properties?: FileSystemProperties) {
        super('AWS::FSx::FileSystem', properties || {})
    }
}
