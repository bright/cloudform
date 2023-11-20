import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class Column {
    Comment?: Value<string>;
    Type?: Value<string>;
    Name: Value<string>;
    constructor(properties: Column);
}
export declare class IcebergInput {
    MetadataOperation?: MetadataOperation;
    Version?: Value<string>;
    constructor(properties: IcebergInput);
}
export declare type MetadataOperation = Value<string>;
export declare class OpenTableFormatInput {
    IcebergInput?: IcebergInput;
    constructor(properties: OpenTableFormatInput);
}
export declare class Order {
    Column: Value<string>;
    SortOrder: Value<number>;
    constructor(properties: Order);
}
export declare class SchemaId {
    RegistryName?: Value<string>;
    SchemaName?: Value<string>;
    SchemaArn?: Value<string>;
    constructor(properties: SchemaId);
}
export declare class SchemaReference {
    SchemaVersionId?: Value<string>;
    SchemaId?: SchemaId;
    SchemaVersionNumber?: Value<number>;
    constructor(properties: SchemaReference);
}
export declare class SerdeInfo {
    Parameters?: {
        [key: string]: any;
    };
    SerializationLibrary?: Value<string>;
    Name?: Value<string>;
    constructor(properties: SerdeInfo);
}
export declare class SkewedInfo {
    SkewedColumnNames?: List<Value<string>>;
    SkewedColumnValues?: List<Value<string>>;
    SkewedColumnValueLocationMaps?: {
        [key: string]: any;
    };
    constructor(properties: SkewedInfo);
}
export declare class StorageDescriptor {
    StoredAsSubDirectories?: Value<boolean>;
    Parameters?: {
        [key: string]: any;
    };
    BucketColumns?: List<Value<string>>;
    NumberOfBuckets?: Value<number>;
    OutputFormat?: Value<string>;
    Columns?: List<Column>;
    SerdeInfo?: SerdeInfo;
    SortColumns?: List<Order>;
    Compressed?: Value<boolean>;
    SchemaReference?: SchemaReference;
    SkewedInfo?: SkewedInfo;
    InputFormat?: Value<string>;
    Location?: Value<string>;
    constructor(properties: StorageDescriptor);
}
export declare class TableIdentifier {
    DatabaseName?: Value<string>;
    Region?: Value<string>;
    CatalogId?: Value<string>;
    Name?: Value<string>;
    constructor(properties: TableIdentifier);
}
export declare class TableInput {
    Owner?: Value<string>;
    ViewOriginalText?: Value<string>;
    Description?: Value<string>;
    TableType?: Value<string>;
    Parameters?: {
        [key: string]: any;
    };
    ViewExpandedText?: Value<string>;
    StorageDescriptor?: StorageDescriptor;
    TargetTable?: TableIdentifier;
    PartitionKeys?: List<Column>;
    Retention?: Value<number>;
    Name?: Value<string>;
    constructor(properties: TableInput);
}
export interface TableProperties {
    TableInput: TableInput;
    OpenTableFormatInput?: OpenTableFormatInput;
    DatabaseName: Value<string>;
    CatalogId: Value<string>;
}
export default class Table extends ResourceBase<TableProperties> {
    static Column: typeof Column;
    static IcebergInput: typeof IcebergInput;
    static OpenTableFormatInput: typeof OpenTableFormatInput;
    static Order: typeof Order;
    static SchemaId: typeof SchemaId;
    static SchemaReference: typeof SchemaReference;
    static SerdeInfo: typeof SerdeInfo;
    static SkewedInfo: typeof SkewedInfo;
    static StorageDescriptor: typeof StorageDescriptor;
    static TableIdentifier: typeof TableIdentifier;
    static TableInput: typeof TableInput;
    constructor(properties: TableProperties);
}
