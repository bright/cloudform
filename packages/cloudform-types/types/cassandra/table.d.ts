import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class BillingMode {
    Mode: Value<string>;
    ProvisionedThroughput?: ProvisionedThroughput;
    constructor(properties: BillingMode);
}
export declare class ClusteringKeyColumn {
    OrderBy?: Value<string>;
    Column: Column;
    constructor(properties: ClusteringKeyColumn);
}
export declare class Column {
    ColumnName: Value<string>;
    ColumnType: Value<string>;
    constructor(properties: Column);
}
export declare class EncryptionSpecification {
    EncryptionType: Value<string>;
    KmsKeyIdentifier?: Value<string>;
    constructor(properties: EncryptionSpecification);
}
export declare class ProvisionedThroughput {
    WriteCapacityUnits: Value<number>;
    ReadCapacityUnits: Value<number>;
    constructor(properties: ProvisionedThroughput);
}
export interface TableProperties {
    TableName?: Value<string>;
    PointInTimeRecoveryEnabled?: Value<boolean>;
    ClusteringKeyColumns?: List<ClusteringKeyColumn>;
    ClientSideTimestampsEnabled?: Value<boolean>;
    PartitionKeyColumns: List<Column>;
    BillingMode?: BillingMode;
    DefaultTimeToLive?: Value<number>;
    KeyspaceName: Value<string>;
    EncryptionSpecification?: EncryptionSpecification;
    RegularColumns?: List<Column>;
    Tags?: List<ResourceTag>;
}
export default class Table extends ResourceBase<TableProperties> {
    static BillingMode: typeof BillingMode;
    static ClusteringKeyColumn: typeof ClusteringKeyColumn;
    static Column: typeof Column;
    static EncryptionSpecification: typeof EncryptionSpecification;
    static ProvisionedThroughput: typeof ProvisionedThroughput;
    constructor(properties: TableProperties);
}
