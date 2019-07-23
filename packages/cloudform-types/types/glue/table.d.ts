import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class Order {
    Column: Value<string>;
    SortOrder: Value<number>;
    constructor(properties: Order);
}
export declare class Column {
    Comment?: Value<string>;
    Type?: Value<string>;
    Name: Value<string>;
    constructor(properties: Column);
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
    SkewedInfo?: SkewedInfo;
    InputFormat?: Value<string>;
    NumberOfBuckets?: Value<number>;
    OutputFormat?: Value<string>;
    Columns?: List<Column>;
    SerdeInfo?: SerdeInfo;
    SortColumns?: List<Order>;
    Compressed?: Value<boolean>;
    Location?: Value<string>;
    constructor(properties: StorageDescriptor);
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
    PartitionKeys?: List<Column>;
    Retention?: Value<number>;
    Name?: Value<string>;
    constructor(properties: TableInput);
}
export declare class SerdeInfo {
    Parameters?: {
        [key: string]: any;
    };
    SerializationLibrary?: Value<string>;
    Name?: Value<string>;
    constructor(properties: SerdeInfo);
}
export interface TableProperties {
    TableInput: TableInput;
    DatabaseName: Value<string>;
    CatalogId: Value<string>;
}
export default class Table extends ResourceBase<TableProperties> {
    static Order: typeof Order;
    static Column: typeof Column;
    static SkewedInfo: typeof SkewedInfo;
    static StorageDescriptor: typeof StorageDescriptor;
    static TableInput: typeof TableInput;
    static SerdeInfo: typeof SerdeInfo;
    constructor(properties: TableProperties);
}
