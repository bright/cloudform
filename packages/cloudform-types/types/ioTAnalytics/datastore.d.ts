import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class Column {
    Type: Value<string>;
    Name: Value<string>;
    constructor(properties: Column);
}
export declare class CustomerManagedS3 {
    Bucket: Value<string>;
    RoleArn: Value<string>;
    KeyPrefix?: Value<string>;
    constructor(properties: CustomerManagedS3);
}
export declare class CustomerManagedS3Storage {
    Bucket: Value<string>;
    KeyPrefix?: Value<string>;
    constructor(properties: CustomerManagedS3Storage);
}
export declare class DatastorePartition {
    Partition?: Partition;
    TimestampPartition?: TimestampPartition;
    constructor(properties: DatastorePartition);
}
export declare class DatastorePartitions {
    Partitions?: List<DatastorePartition>;
    constructor(properties: DatastorePartitions);
}
export declare class DatastoreStorage {
    CustomerManagedS3?: CustomerManagedS3;
    ServiceManagedS3?: {
        [key: string]: any;
    };
    IotSiteWiseMultiLayerStorage?: IotSiteWiseMultiLayerStorage;
    constructor(properties: DatastoreStorage);
}
export declare class FileFormatConfiguration {
    ParquetConfiguration?: ParquetConfiguration;
    JsonConfiguration?: {
        [key: string]: any;
    };
    constructor(properties: FileFormatConfiguration);
}
export declare class IotSiteWiseMultiLayerStorage {
    CustomerManagedS3Storage?: CustomerManagedS3Storage;
    constructor(properties: IotSiteWiseMultiLayerStorage);
}
export declare class ParquetConfiguration {
    SchemaDefinition?: SchemaDefinition;
    constructor(properties: ParquetConfiguration);
}
export declare class Partition {
    AttributeName: Value<string>;
    constructor(properties: Partition);
}
export declare class RetentionPeriod {
    NumberOfDays?: Value<number>;
    Unlimited?: Value<boolean>;
    constructor(properties: RetentionPeriod);
}
export declare class SchemaDefinition {
    Columns?: List<Column>;
    constructor(properties: SchemaDefinition);
}
export declare class TimestampPartition {
    AttributeName: Value<string>;
    TimestampFormat?: Value<string>;
    constructor(properties: TimestampPartition);
}
export interface DatastoreProperties {
    DatastoreStorage?: DatastoreStorage;
    FileFormatConfiguration?: FileFormatConfiguration;
    DatastorePartitions?: DatastorePartitions;
    DatastoreName?: Value<string>;
    RetentionPeriod?: RetentionPeriod;
    Tags?: List<ResourceTag>;
}
export default class Datastore extends ResourceBase<DatastoreProperties> {
    static Column: typeof Column;
    static CustomerManagedS3: typeof CustomerManagedS3;
    static CustomerManagedS3Storage: typeof CustomerManagedS3Storage;
    static DatastorePartition: typeof DatastorePartition;
    static DatastorePartitions: typeof DatastorePartitions;
    static DatastoreStorage: typeof DatastoreStorage;
    static FileFormatConfiguration: typeof FileFormatConfiguration;
    static IotSiteWiseMultiLayerStorage: typeof IotSiteWiseMultiLayerStorage;
    static ParquetConfiguration: typeof ParquetConfiguration;
    static Partition: typeof Partition;
    static RetentionPeriod: typeof RetentionPeriod;
    static SchemaDefinition: typeof SchemaDefinition;
    static TimestampPartition: typeof TimestampPartition;
    constructor(properties?: DatastoreProperties);
}
