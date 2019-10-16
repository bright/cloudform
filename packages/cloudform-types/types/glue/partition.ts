/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 6.3.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 6.3.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 6.3.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 6.3.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 6.3.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 6.3.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 6.3.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 6.3.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 6.3.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 6.3.0
 */

import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export class SerdeInfo {
    Parameters?: {[key: string]: any}
    SerializationLibrary?: Value<string>
    Name?: Value<string>

    constructor(properties: SerdeInfo) {
        Object.assign(this, properties)
    }
}

export class Column {
    Comment?: Value<string>
    Type?: Value<string>
    Name!: Value<string>

    constructor(properties: Column) {
        Object.assign(this, properties)
    }
}

export class PartitionInput {
    Parameters?: {[key: string]: any}
    StorageDescriptor?: StorageDescriptor
    Values!: List<Value<string>>

    constructor(properties: PartitionInput) {
        Object.assign(this, properties)
    }
}

export class StorageDescriptor {
    StoredAsSubDirectories?: Value<boolean>
    Parameters?: {[key: string]: any}
    BucketColumns?: List<Value<string>>
    SkewedInfo?: SkewedInfo
    InputFormat?: Value<string>
    NumberOfBuckets?: Value<number>
    OutputFormat?: Value<string>
    Columns?: List<Column>
    SerdeInfo?: SerdeInfo
    SortColumns?: List<Order>
    Compressed?: Value<boolean>
    Location?: Value<string>

    constructor(properties: StorageDescriptor) {
        Object.assign(this, properties)
    }
}

export class Order {
    Column!: Value<string>
    SortOrder?: Value<number>

    constructor(properties: Order) {
        Object.assign(this, properties)
    }
}

export class SkewedInfo {
    SkewedColumnNames?: List<Value<string>>
    SkewedColumnValues?: List<Value<string>>
    SkewedColumnValueLocationMaps?: {[key: string]: any}

    constructor(properties: SkewedInfo) {
        Object.assign(this, properties)
    }
}

export interface PartitionProperties {
    TableName: Value<string>
    DatabaseName: Value<string>
    CatalogId: Value<string>
    PartitionInput: PartitionInput
}

export default class Partition extends ResourceBase<PartitionProperties> {
    static SerdeInfo = SerdeInfo
    static Column = Column
    static PartitionInput = PartitionInput
    static StorageDescriptor = StorageDescriptor
    static Order = Order
    static SkewedInfo = SkewedInfo

    constructor(properties: PartitionProperties) {
        super('AWS::Glue::Partition', properties)
    }
}
