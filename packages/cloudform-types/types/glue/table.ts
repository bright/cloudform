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

export class Column {
    Comment?: Value<string>
    Type?: Value<string>
    Name!: Value<string>

    constructor(properties: Column) {
        Object.assign(this, properties)
    }
}

export class IcebergInput {
    MetadataOperation?: MetadataOperation
    Version?: Value<string>

    constructor(properties: IcebergInput) {
        Object.assign(this, properties)
    }
}

export type MetadataOperation = Value<string>

export class OpenTableFormatInput {
    IcebergInput?: IcebergInput

    constructor(properties: OpenTableFormatInput) {
        Object.assign(this, properties)
    }
}

export class Order {
    Column!: Value<string>
    SortOrder!: Value<number>

    constructor(properties: Order) {
        Object.assign(this, properties)
    }
}

export class SchemaId {
    RegistryName?: Value<string>
    SchemaName?: Value<string>
    SchemaArn?: Value<string>

    constructor(properties: SchemaId) {
        Object.assign(this, properties)
    }
}

export class SchemaReference {
    SchemaVersionId?: Value<string>
    SchemaId?: SchemaId
    SchemaVersionNumber?: Value<number>

    constructor(properties: SchemaReference) {
        Object.assign(this, properties)
    }
}

export class SerdeInfo {
    Parameters?: {[key: string]: any}
    SerializationLibrary?: Value<string>
    Name?: Value<string>

    constructor(properties: SerdeInfo) {
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

export class StorageDescriptor {
    StoredAsSubDirectories?: Value<boolean>
    Parameters?: {[key: string]: any}
    BucketColumns?: List<Value<string>>
    NumberOfBuckets?: Value<number>
    OutputFormat?: Value<string>
    Columns?: List<Column>
    SerdeInfo?: SerdeInfo
    SortColumns?: List<Order>
    Compressed?: Value<boolean>
    SchemaReference?: SchemaReference
    SkewedInfo?: SkewedInfo
    InputFormat?: Value<string>
    Location?: Value<string>

    constructor(properties: StorageDescriptor) {
        Object.assign(this, properties)
    }
}

export class TableIdentifier {
    DatabaseName?: Value<string>
    Region?: Value<string>
    CatalogId?: Value<string>
    Name?: Value<string>

    constructor(properties: TableIdentifier) {
        Object.assign(this, properties)
    }
}

export class TableInput {
    Owner?: Value<string>
    ViewOriginalText?: Value<string>
    Description?: Value<string>
    TableType?: Value<string>
    Parameters?: {[key: string]: any}
    ViewExpandedText?: Value<string>
    StorageDescriptor?: StorageDescriptor
    TargetTable?: TableIdentifier
    PartitionKeys?: List<Column>
    Retention?: Value<number>
    Name?: Value<string>

    constructor(properties: TableInput) {
        Object.assign(this, properties)
    }
}

export interface TableProperties {
    TableInput: TableInput
    OpenTableFormatInput?: OpenTableFormatInput
    DatabaseName: Value<string>
    CatalogId: Value<string>
}

export default class Table extends ResourceBase<TableProperties> {
    static Column = Column
    static IcebergInput = IcebergInput
    static OpenTableFormatInput = OpenTableFormatInput
    static Order = Order
    static SchemaId = SchemaId
    static SchemaReference = SchemaReference
    static SerdeInfo = SerdeInfo
    static SkewedInfo = SkewedInfo
    static StorageDescriptor = StorageDescriptor
    static TableIdentifier = TableIdentifier
    static TableInput = TableInput

    constructor(properties: TableProperties) {
        super('AWS::Glue::Table', properties)
    }
}
