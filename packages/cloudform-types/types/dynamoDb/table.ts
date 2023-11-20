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

export class AttributeDefinition {
    AttributeType!: Value<string>
    AttributeName!: Value<string>

    constructor(properties: AttributeDefinition) {
        Object.assign(this, properties)
    }
}

export class ContributorInsightsSpecification {
    Enabled!: Value<boolean>

    constructor(properties: ContributorInsightsSpecification) {
        Object.assign(this, properties)
    }
}

export class Csv {
    Delimiter?: Value<string>
    HeaderList?: List<Value<string>>

    constructor(properties: Csv) {
        Object.assign(this, properties)
    }
}

export class GlobalSecondaryIndex {
    IndexName!: Value<string>
    ContributorInsightsSpecification?: ContributorInsightsSpecification
    Projection!: Projection
    ProvisionedThroughput?: ProvisionedThroughput
    KeySchema!: List<KeySchema>

    constructor(properties: GlobalSecondaryIndex) {
        Object.assign(this, properties)
    }
}

export class ImportSourceSpecification {
    S3BucketSource!: S3BucketSource
    InputFormat!: Value<string>
    InputFormatOptions?: InputFormatOptions
    InputCompressionType?: Value<string>

    constructor(properties: ImportSourceSpecification) {
        Object.assign(this, properties)
    }
}

export class InputFormatOptions {
    Csv?: Csv

    constructor(properties: InputFormatOptions) {
        Object.assign(this, properties)
    }
}

export class KeySchema {
    KeyType!: Value<string>
    AttributeName!: Value<string>

    constructor(properties: KeySchema) {
        Object.assign(this, properties)
    }
}

export class KinesisStreamSpecification {
    StreamArn!: Value<string>

    constructor(properties: KinesisStreamSpecification) {
        Object.assign(this, properties)
    }
}

export class LocalSecondaryIndex {
    IndexName!: Value<string>
    Projection!: Projection
    KeySchema!: List<KeySchema>

    constructor(properties: LocalSecondaryIndex) {
        Object.assign(this, properties)
    }
}

export class PointInTimeRecoverySpecification {
    PointInTimeRecoveryEnabled?: Value<boolean>

    constructor(properties: PointInTimeRecoverySpecification) {
        Object.assign(this, properties)
    }
}

export class Projection {
    NonKeyAttributes?: List<Value<string>>
    ProjectionType?: Value<string>

    constructor(properties: Projection) {
        Object.assign(this, properties)
    }
}

export class ProvisionedThroughput {
    WriteCapacityUnits!: Value<number>
    ReadCapacityUnits!: Value<number>

    constructor(properties: ProvisionedThroughput) {
        Object.assign(this, properties)
    }
}

export class S3BucketSource {
    S3Bucket!: Value<string>
    S3KeyPrefix?: Value<string>
    S3BucketOwner?: Value<string>

    constructor(properties: S3BucketSource) {
        Object.assign(this, properties)
    }
}

export class SSESpecification {
    SSEEnabled!: Value<boolean>
    SSEType?: Value<string>
    KMSMasterKeyId?: Value<string>

    constructor(properties: SSESpecification) {
        Object.assign(this, properties)
    }
}

export class StreamSpecification {
    StreamViewType!: Value<string>

    constructor(properties: StreamSpecification) {
        Object.assign(this, properties)
    }
}

export class TimeToLiveSpecification {
    Enabled!: Value<boolean>
    AttributeName?: Value<string>

    constructor(properties: TimeToLiveSpecification) {
        Object.assign(this, properties)
    }
}

export interface TableProperties {
    SSESpecification?: SSESpecification
    KinesisStreamSpecification?: KinesisStreamSpecification
    StreamSpecification?: StreamSpecification
    ContributorInsightsSpecification?: ContributorInsightsSpecification
    ImportSourceSpecification?: ImportSourceSpecification
    PointInTimeRecoverySpecification?: PointInTimeRecoverySpecification
    ProvisionedThroughput?: ProvisionedThroughput
    TableName?: Value<string>
    AttributeDefinitions?: List<AttributeDefinition>
    BillingMode?: Value<string>
    GlobalSecondaryIndexes?: List<GlobalSecondaryIndex>
    KeySchema: List<KeySchema>
    LocalSecondaryIndexes?: List<LocalSecondaryIndex>
    DeletionProtectionEnabled?: Value<boolean>
    TableClass?: Value<string>
    Tags?: List<ResourceTag>
    TimeToLiveSpecification?: TimeToLiveSpecification
}

export default class Table extends ResourceBase<TableProperties> {
    static AttributeDefinition = AttributeDefinition
    static ContributorInsightsSpecification = ContributorInsightsSpecification
    static Csv = Csv
    static GlobalSecondaryIndex = GlobalSecondaryIndex
    static ImportSourceSpecification = ImportSourceSpecification
    static InputFormatOptions = InputFormatOptions
    static KeySchema = KeySchema
    static KinesisStreamSpecification = KinesisStreamSpecification
    static LocalSecondaryIndex = LocalSecondaryIndex
    static PointInTimeRecoverySpecification = PointInTimeRecoverySpecification
    static Projection = Projection
    static ProvisionedThroughput = ProvisionedThroughput
    static S3BucketSource = S3BucketSource
    static SSESpecification = SSESpecification
    static StreamSpecification = StreamSpecification
    static TimeToLiveSpecification = TimeToLiveSpecification

    constructor(properties: TableProperties) {
        super('AWS::DynamoDB::Table', properties)
    }
}
