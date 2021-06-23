import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class PartitionInput {
    Parameters?: {
        [key: string]: any;
    };
    StorageDescriptor?: StorageDescriptor;
    Values: List<Value<string>>;
    constructor(properties: PartitionInput);
}
export declare class Order {
    Column: Value<string>;
    SortOrder?: Value<number>;
    constructor(properties: Order);
}
export declare class SchemaReference {
    SchemaId?: SchemaId;
    SchemaVersionNumber?: Value<number>;
    SchameVersionId?: Value<string>;
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
export declare class Column {
    Comment?: Value<string>;
    Type?: Value<string>;
    Name: Value<string>;
    constructor(properties: Column);
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
export declare class SkewedInfo {
    SkewedColumnNames?: List<Value<string>>;
    SkewedColumnValues?: List<Value<string>>;
    SkewedColumnValueLocationMaps?: {
        [key: string]: any;
    };
    constructor(properties: SkewedInfo);
}
export declare class SchemaId {
    RegistryName?: Value<string>;
    SchemaName?: Value<string>;
    SchemaArn?: Value<string>;
    constructor(properties: SchemaId);
}
export interface PartitionProperties {
    TableName: Value<string>;
    DatabaseName: Value<string>;
    CatalogId: Value<string>;
    PartitionInput: PartitionInput;
}
export default class Partition extends ResourceBase<PartitionProperties> {
    static PartitionInput: typeof PartitionInput;
    static Order: typeof Order;
    static SchemaReference: typeof SchemaReference;
    static SerdeInfo: typeof SerdeInfo;
    static Column: typeof Column;
    static StorageDescriptor: typeof StorageDescriptor;
    static SkewedInfo: typeof SkewedInfo;
    static SchemaId: typeof SchemaId;
    constructor(properties: PartitionProperties);
}
