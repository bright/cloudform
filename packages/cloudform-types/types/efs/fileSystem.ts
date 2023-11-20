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
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export class BackupPolicy {
    Status!: Value<string>

    constructor(properties: BackupPolicy) {
        Object.assign(this, properties)
    }
}

export class ElasticFileSystemTag {
    Value!: Value<string>
    Key!: Value<string>

    constructor(properties: ElasticFileSystemTag) {
        Object.assign(this, properties)
    }
}

export class LifecyclePolicy {
    TransitionToIA?: Value<string>
    TransitionToPrimaryStorageClass?: Value<string>

    constructor(properties: LifecyclePolicy) {
        Object.assign(this, properties)
    }
}

export class ReplicationConfiguration {
    Destinations?: List<ReplicationDestination>

    constructor(properties: ReplicationConfiguration) {
        Object.assign(this, properties)
    }
}

export class ReplicationDestination {
    KmsKeyId?: Value<string>
    AvailabilityZoneName?: Value<string>
    FileSystemId?: Value<string>
    Region?: Value<string>

    constructor(properties: ReplicationDestination) {
        Object.assign(this, properties)
    }
}

export interface FileSystemProperties {
    KmsKeyId?: Value<string>
    PerformanceMode?: Value<string>
    Encrypted?: Value<boolean>
    BypassPolicyLockoutSafetyCheck?: Value<boolean>
    FileSystemTags?: List<ElasticFileSystemTag>
    ProvisionedThroughputInMibps?: Value<number>
    FileSystemPolicy?: {[key: string]: any}
    AvailabilityZoneName?: Value<string>
    LifecyclePolicies?: List<LifecyclePolicy>
    ThroughputMode?: Value<string>
    ReplicationConfiguration?: ReplicationConfiguration
    BackupPolicy?: BackupPolicy
}

export default class FileSystem extends ResourceBase<FileSystemProperties> {
    static BackupPolicy = BackupPolicy
    static ElasticFileSystemTag = ElasticFileSystemTag
    static LifecyclePolicy = LifecyclePolicy
    static ReplicationConfiguration = ReplicationConfiguration
    static ReplicationDestination = ReplicationDestination

    constructor(properties?: FileSystemProperties) {
        super('AWS::EFS::FileSystem', properties || {})
    }
}
