/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
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

export class BillingMode {
    Mode!: Value<string>
    ProvisionedThroughput?: ProvisionedThroughput

    constructor(properties: BillingMode) {
        Object.assign(this, properties)
    }
}

export class ClusteringKeyColumn {
    OrderBy?: Value<string>
    Column!: Column

    constructor(properties: ClusteringKeyColumn) {
        Object.assign(this, properties)
    }
}

export class Column {
    ColumnName!: Value<string>
    ColumnType!: Value<string>

    constructor(properties: Column) {
        Object.assign(this, properties)
    }
}

export class EncryptionSpecification {
    EncryptionType!: Value<string>
    KmsKeyIdentifier?: Value<string>

    constructor(properties: EncryptionSpecification) {
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

export interface TableProperties {
    TableName?: Value<string>
    PointInTimeRecoveryEnabled?: Value<boolean>
    ClusteringKeyColumns?: List<ClusteringKeyColumn>
    ClientSideTimestampsEnabled?: Value<boolean>
    PartitionKeyColumns: List<Column>
    BillingMode?: BillingMode
    DefaultTimeToLive?: Value<number>
    KeyspaceName: Value<string>
    EncryptionSpecification?: EncryptionSpecification
    RegularColumns?: List<Column>
    Tags?: List<ResourceTag>
}

export default class Table extends ResourceBase<TableProperties> {
    static BillingMode = BillingMode
    static ClusteringKeyColumn = ClusteringKeyColumn
    static Column = Column
    static EncryptionSpecification = EncryptionSpecification
    static ProvisionedThroughput = ProvisionedThroughput

    constructor(properties: TableProperties) {
        super('AWS::Cassandra::Table', properties)
    }
}
