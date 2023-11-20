/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class MagneticStoreRejectedDataLocation {
    S3Configuration?: S3Configuration

    constructor(properties: MagneticStoreRejectedDataLocation) {
        Object.assign(this, properties)
    }
}

export class MagneticStoreWriteProperties {
    EnableMagneticStoreWrites!: Value<boolean>
    MagneticStoreRejectedDataLocation?: MagneticStoreRejectedDataLocation

    constructor(properties: MagneticStoreWriteProperties) {
        Object.assign(this, properties)
    }
}

export class PartitionKey {
    Type!: Value<string>
    EnforcementInRecord?: Value<string>
    Name?: Value<string>

    constructor(properties: PartitionKey) {
        Object.assign(this, properties)
    }
}

export class RetentionProperties {
    MagneticStoreRetentionPeriodInDays?: Value<string>
    MemoryStoreRetentionPeriodInHours?: Value<string>

    constructor(properties: RetentionProperties) {
        Object.assign(this, properties)
    }
}

export class S3Configuration {
    BucketName!: Value<string>
    KmsKeyId?: Value<string>
    ObjectKeyPrefix?: Value<string>
    EncryptionOption!: Value<string>

    constructor(properties: S3Configuration) {
        Object.assign(this, properties)
    }
}

export class Schema {
    CompositePartitionKey?: List<PartitionKey>

    constructor(properties: Schema) {
        Object.assign(this, properties)
    }
}

export interface TableProperties {
    TableName?: Value<string>
    RetentionProperties?: RetentionProperties
    Schema?: Schema
    DatabaseName: Value<string>
    Tags?: List<ResourceTag>
    MagneticStoreWriteProperties?: MagneticStoreWriteProperties
}

export default class Table extends ResourceBase<TableProperties> {
    static MagneticStoreRejectedDataLocation = MagneticStoreRejectedDataLocation
    static MagneticStoreWriteProperties = MagneticStoreWriteProperties
    static PartitionKey = PartitionKey
    static RetentionProperties = RetentionProperties
    static S3Configuration = S3Configuration
    static Schema = Schema

    constructor(properties: TableProperties) {
        super('AWS::Timestream::Table', properties)
    }
}
