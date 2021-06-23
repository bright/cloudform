import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class BillingMode {
    Mode: Value<string>;
    ProvisionedThroughput?: ProvisionedThroughput;
    constructor(properties: BillingMode);
}
export declare class Column {
    ColumnName: Value<string>;
    ColumnType: Value<string>;
    constructor(properties: Column);
}
export declare class ClusteringKeyColumn {
    Column: Column;
    OrderBy?: Value<string>;
    constructor(properties: ClusteringKeyColumn);
}
export declare class ProvisionedThroughput {
    ReadCapacityUnits: Value<number>;
    WriteCapacityUnits: Value<number>;
    constructor(properties: ProvisionedThroughput);
}
export interface TableProperties {
    KeyspaceName: Value<string>;
    TableName?: Value<string>;
    RegularColumns?: List<Column>;
    PartitionKeyColumns: List<Column>;
    ClusteringKeyColumns?: List<ClusteringKeyColumn>;
    BillingMode?: BillingMode;
    PointInTimeRecoveryEnabled?: Value<boolean>;
    Tags?: List<ResourceTag>;
}
export default class Table extends ResourceBase<TableProperties> {
    static BillingMode: typeof BillingMode;
    static Column: typeof Column;
    static ClusteringKeyColumn: typeof ClusteringKeyColumn;
    static ProvisionedThroughput: typeof ProvisionedThroughput;
    constructor(properties: TableProperties);
}
