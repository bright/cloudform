import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class MagneticStoreRejectedDataLocation {
    S3Configuration?: S3Configuration;
    constructor(properties: MagneticStoreRejectedDataLocation);
}
export declare class MagneticStoreWriteProperties {
    EnableMagneticStoreWrites: Value<boolean>;
    MagneticStoreRejectedDataLocation?: MagneticStoreRejectedDataLocation;
    constructor(properties: MagneticStoreWriteProperties);
}
export declare class PartitionKey {
    Type: Value<string>;
    EnforcementInRecord?: Value<string>;
    Name?: Value<string>;
    constructor(properties: PartitionKey);
}
export declare class RetentionProperties {
    MagneticStoreRetentionPeriodInDays?: Value<string>;
    MemoryStoreRetentionPeriodInHours?: Value<string>;
    constructor(properties: RetentionProperties);
}
export declare class S3Configuration {
    BucketName: Value<string>;
    KmsKeyId?: Value<string>;
    ObjectKeyPrefix?: Value<string>;
    EncryptionOption: Value<string>;
    constructor(properties: S3Configuration);
}
export declare class Schema {
    CompositePartitionKey?: List<PartitionKey>;
    constructor(properties: Schema);
}
export interface TableProperties {
    TableName?: Value<string>;
    RetentionProperties?: RetentionProperties;
    Schema?: Schema;
    DatabaseName: Value<string>;
    Tags?: List<ResourceTag>;
    MagneticStoreWriteProperties?: MagneticStoreWriteProperties;
}
export default class Table extends ResourceBase<TableProperties> {
    static MagneticStoreRejectedDataLocation: typeof MagneticStoreRejectedDataLocation;
    static MagneticStoreWriteProperties: typeof MagneticStoreWriteProperties;
    static PartitionKey: typeof PartitionKey;
    static RetentionProperties: typeof RetentionProperties;
    static S3Configuration: typeof S3Configuration;
    static Schema: typeof Schema;
    constructor(properties: TableProperties);
}
