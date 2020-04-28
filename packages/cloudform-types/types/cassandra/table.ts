/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0
 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export class BillingMode {
    Mode!: Value<string>
    ProvisionedThroughput?: ProvisionedThroughput

    constructor(properties: BillingMode) {
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

export class ClusteringKeyColumn {
    Column!: Column
    OrderBy?: Value<string>

    constructor(properties: ClusteringKeyColumn) {
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

export interface TableProperties {
    KeyspaceName: Value<string>
    TableName?: Value<string>
    RegularColumns?: List<Column>
    PartitionKeyColumns: List<Column>
    ClusteringKeyColumns?: List<ClusteringKeyColumn>
    BillingMode?: BillingMode
}

export default class Table extends ResourceBase<TableProperties> {
    static BillingMode = BillingMode
    static Column = Column
    static ClusteringKeyColumn = ClusteringKeyColumn
    static ProvisionedThroughput = ProvisionedThroughput

    constructor(properties: TableProperties) {
        super('AWS::Cassandra::Table', properties)
    }
}
