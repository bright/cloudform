import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class FileFormatConfiguration {
    ParquetConfiguration?: ParquetConfiguration;
    JsonConfiguration?: JsonConfiguration;
    constructor(properties: FileFormatConfiguration);
}
export declare class ServiceManagedS3 {
    constructor(properties: ServiceManagedS3);
}
export declare class RetentionPeriod {
    NumberOfDays?: Value<number>;
    Unlimited?: Value<boolean>;
    constructor(properties: RetentionPeriod);
}
export declare class CustomerManagedS3 {
    Bucket: Value<string>;
    RoleArn: Value<string>;
    KeyPrefix?: Value<string>;
    constructor(properties: CustomerManagedS3);
}
export declare class SchemaDefinition {
    Columns?: List<Column>;
    constructor(properties: SchemaDefinition);
}
export declare class Column {
    Type: Value<string>;
    Name: Value<string>;
    constructor(properties: Column);
}
export declare class ParquetConfiguration {
    SchemaDefinition?: SchemaDefinition;
    constructor(properties: ParquetConfiguration);
}
export declare class DatastoreStorage {
    CustomerManagedS3?: CustomerManagedS3;
    ServiceManagedS3?: ServiceManagedS3;
    constructor(properties: DatastoreStorage);
}
export declare class JsonConfiguration {
    constructor(properties: JsonConfiguration);
}
export interface DatastoreProperties {
    DatastoreStorage?: DatastoreStorage;
    FileFormatConfiguration?: FileFormatConfiguration;
    DatastoreName?: Value<string>;
    RetentionPeriod?: RetentionPeriod;
    Tags?: List<ResourceTag>;
}
export default class Datastore extends ResourceBase<DatastoreProperties> {
    static FileFormatConfiguration: typeof FileFormatConfiguration;
    static ServiceManagedS3: typeof ServiceManagedS3;
    static RetentionPeriod: typeof RetentionPeriod;
    static CustomerManagedS3: typeof CustomerManagedS3;
    static SchemaDefinition: typeof SchemaDefinition;
    static Column: typeof Column;
    static ParquetConfiguration: typeof ParquetConfiguration;
    static DatastoreStorage: typeof DatastoreStorage;
    static JsonConfiguration: typeof JsonConfiguration;
    constructor(properties?: DatastoreProperties);
}
