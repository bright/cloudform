/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.15.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.15.0,
 * ap-northeast-3 (https://d2zq80gdmjim8k.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.15.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.15.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.15.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.15.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.15.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.15.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.15.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.15.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.15.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.15.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.15.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.15.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.15.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.15.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class TimeToLiveSpecification {
    AttributeName!: Value<string>
    Enabled!: Value<boolean>

    constructor(properties: TimeToLiveSpecification) {
        Object.assign(this, properties)
    }
}

export class AttributeDefinition {
    AttributeName!: Value<string>
    AttributeType!: Value<string>

    constructor(properties: AttributeDefinition) {
        Object.assign(this, properties)
    }
}

export class LocalSecondaryIndex {
    IndexName!: Value<string>
    KeySchema!: List<KeySchema>
    Projection!: Projection

    constructor(properties: LocalSecondaryIndex) {
        Object.assign(this, properties)
    }
}

export class ProvisionedThroughput {
    ReadCapacityUnits!: Value<number>
    WriteCapacityUnits!: Value<number>

    constructor(properties: ProvisionedThroughput) {
        Object.assign(this, properties)
    }
}

export class GlobalSecondaryIndex {
    IndexName!: Value<string>
    KeySchema!: List<KeySchema>
    Projection!: Projection
    ProvisionedThroughput?: ProvisionedThroughput

    constructor(properties: GlobalSecondaryIndex) {
        Object.assign(this, properties)
    }
}

export class KeySchema {
    AttributeName!: Value<string>
    KeyType!: Value<string>

    constructor(properties: KeySchema) {
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

export class PointInTimeRecoverySpecification {
    PointInTimeRecoveryEnabled?: Value<boolean>

    constructor(properties: PointInTimeRecoverySpecification) {
        Object.assign(this, properties)
    }
}

export class SSESpecification {
    SSEEnabled!: Value<boolean>

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

export interface TableProperties {
    AttributeDefinitions?: List<AttributeDefinition>
    GlobalSecondaryIndexes?: List<GlobalSecondaryIndex>
    KeySchema: List<KeySchema>
    LocalSecondaryIndexes?: List<LocalSecondaryIndex>
    PointInTimeRecoverySpecification?: PointInTimeRecoverySpecification
    ProvisionedThroughput?: ProvisionedThroughput
    SSESpecification?: SSESpecification
    StreamSpecification?: StreamSpecification
    TableName?: Value<string>
    Tags?: ResourceTag[]
    TimeToLiveSpecification?: TimeToLiveSpecification
}

export default class Table extends ResourceBase {
    static TimeToLiveSpecification = TimeToLiveSpecification
    static AttributeDefinition = AttributeDefinition
    static LocalSecondaryIndex = LocalSecondaryIndex
    static ProvisionedThroughput = ProvisionedThroughput
    static GlobalSecondaryIndex = GlobalSecondaryIndex
    static KeySchema = KeySchema
    static Projection = Projection
    static PointInTimeRecoverySpecification = PointInTimeRecoverySpecification
    static SSESpecification = SSESpecification
    static StreamSpecification = StreamSpecification

    constructor(properties?: TableProperties) {
        super('AWS::DynamoDB::Table', properties)
    }
}
