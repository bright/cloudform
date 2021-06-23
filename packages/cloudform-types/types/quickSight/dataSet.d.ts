import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class JoinKeyProperties {
    UniqueKey?: Value<boolean>;
    constructor(properties: JoinKeyProperties);
}
export declare class UploadSettings {
    ContainsHeader?: Value<boolean>;
    TextQualifier?: Value<string>;
    Format?: Value<string>;
    StartFromRow?: Value<number>;
    Delimiter?: Value<string>;
    constructor(properties: UploadSettings);
}
export declare class ProjectOperation {
    ProjectedColumns: List<Value<string>>;
    constructor(properties: ProjectOperation);
}
export declare class ColumnLevelPermissionRule {
    ColumnNames?: List<Value<string>>;
    Principals?: List<Value<string>>;
    constructor(properties: ColumnLevelPermissionRule);
}
export declare class CreateColumnsOperation {
    Columns: List<CalculatedColumn>;
    constructor(properties: CreateColumnsOperation);
}
export declare class PhysicalTable {
    RelationalTable?: RelationalTable;
    CustomSql?: CustomSql;
    S3Source?: S3Source;
    constructor(properties: PhysicalTable);
}
export declare class ColumnDescription {
    Text?: Value<string>;
    constructor(properties: ColumnDescription);
}
export declare class RenameColumnOperation {
    NewColumnName: Value<string>;
    ColumnName: Value<string>;
    constructor(properties: RenameColumnOperation);
}
export declare class ColumnGroup {
    GeoSpatialColumnGroup?: GeoSpatialColumnGroup;
    constructor(properties: ColumnGroup);
}
export declare class GeoSpatialColumnGroup {
    Columns: List<Value<string>>;
    CountryCode?: Value<string>;
    Name: Value<string>;
    constructor(properties: GeoSpatialColumnGroup);
}
export declare class RelationalTable {
    DataSourceArn: Value<string>;
    InputColumns: List<InputColumn>;
    Schema?: Value<string>;
    Catalog?: Value<string>;
    Name: Value<string>;
    constructor(properties: RelationalTable);
}
export declare class InputColumn {
    Type: Value<string>;
    Name: Value<string>;
    constructor(properties: InputColumn);
}
export declare class RowLevelPermissionDataSet {
    Arn: Value<string>;
    Namespace?: Value<string>;
    PermissionPolicy: Value<string>;
    constructor(properties: RowLevelPermissionDataSet);
}
export declare class FilterOperation {
    ConditionExpression: Value<string>;
    constructor(properties: FilterOperation);
}
export declare class CustomSql {
    DataSourceArn: Value<string>;
    SqlQuery: Value<string>;
    Columns: List<InputColumn>;
    Name: Value<string>;
    constructor(properties: CustomSql);
}
export declare class ResourcePermission {
    Actions: List<Value<string>>;
    Principal: Value<string>;
    constructor(properties: ResourcePermission);
}
export declare class FieldFolder {
    Description?: Value<string>;
    Columns?: List<Value<string>>;
    constructor(properties: FieldFolder);
}
export declare class S3Source {
    DataSourceArn: Value<string>;
    InputColumns: List<InputColumn>;
    UploadSettings?: UploadSettings;
    constructor(properties: S3Source);
}
export declare class LogicalTable {
    Alias: Value<string>;
    DataTransforms?: List<TransformOperation>;
    Source: LogicalTableSource;
    constructor(properties: LogicalTable);
}
export declare class TransformOperation {
    TagColumnOperation?: TagColumnOperation;
    FilterOperation?: FilterOperation;
    CastColumnTypeOperation?: CastColumnTypeOperation;
    CreateColumnsOperation?: CreateColumnsOperation;
    RenameColumnOperation?: RenameColumnOperation;
    ProjectOperation?: ProjectOperation;
    constructor(properties: TransformOperation);
}
export declare class JoinInstruction {
    OnClause: Value<string>;
    Type: Value<string>;
    LeftJoinKeyProperties?: JoinKeyProperties;
    LeftOperand: Value<string>;
    RightOperand: Value<string>;
    RightJoinKeyProperties?: JoinKeyProperties;
    constructor(properties: JoinInstruction);
}
export declare class OutputColumn {
    Type?: Value<string>;
    Description?: Value<string>;
    Name?: Value<string>;
    constructor(properties: OutputColumn);
}
export declare class ColumnTag {
    ColumnGeographicRole?: Value<string>;
    ColumnDescription?: ColumnDescription;
    constructor(properties: ColumnTag);
}
export declare class TagColumnOperation {
    ColumnName: Value<string>;
    Tags: List<ColumnTag>;
    constructor(properties: TagColumnOperation);
}
export declare class IngestionWaitPolicy {
    WaitForSpiceIngestion?: Value<boolean>;
    IngestionWaitTimeInHours?: Value<number>;
    constructor(properties: IngestionWaitPolicy);
}
export declare class CalculatedColumn {
    ColumnId: Value<string>;
    ColumnName: Value<string>;
    Expression: Value<string>;
    constructor(properties: CalculatedColumn);
}
export declare class CastColumnTypeOperation {
    ColumnName: Value<string>;
    Format?: Value<string>;
    NewColumnType: Value<string>;
    constructor(properties: CastColumnTypeOperation);
}
export declare class LogicalTableSource {
    PhysicalTableId?: Value<string>;
    JoinInstruction?: JoinInstruction;
    constructor(properties: LogicalTableSource);
}
export interface DataSetProperties {
    AwsAccountId?: Value<string>;
    ColumnGroups?: List<ColumnGroup>;
    ColumnLevelPermissionRules?: List<ColumnLevelPermissionRule>;
    DataSetId?: Value<string>;
    FieldFolders?: {
        [key: string]: FieldFolder;
    };
    ImportMode?: Value<string>;
    LogicalTableMap?: {
        [key: string]: LogicalTable;
    };
    Name?: Value<string>;
    Permissions?: List<ResourcePermission>;
    PhysicalTableMap?: {
        [key: string]: PhysicalTable;
    };
    RowLevelPermissionDataSet?: RowLevelPermissionDataSet;
    Tags?: List<ResourceTag>;
    IngestionWaitPolicy?: IngestionWaitPolicy;
}
export default class DataSet extends ResourceBase<DataSetProperties> {
    static JoinKeyProperties: typeof JoinKeyProperties;
    static UploadSettings: typeof UploadSettings;
    static ProjectOperation: typeof ProjectOperation;
    static ColumnLevelPermissionRule: typeof ColumnLevelPermissionRule;
    static CreateColumnsOperation: typeof CreateColumnsOperation;
    static PhysicalTable: typeof PhysicalTable;
    static ColumnDescription: typeof ColumnDescription;
    static RenameColumnOperation: typeof RenameColumnOperation;
    static ColumnGroup: typeof ColumnGroup;
    static GeoSpatialColumnGroup: typeof GeoSpatialColumnGroup;
    static RelationalTable: typeof RelationalTable;
    static InputColumn: typeof InputColumn;
    static RowLevelPermissionDataSet: typeof RowLevelPermissionDataSet;
    static FilterOperation: typeof FilterOperation;
    static CustomSql: typeof CustomSql;
    static ResourcePermission: typeof ResourcePermission;
    static FieldFolder: typeof FieldFolder;
    static S3Source: typeof S3Source;
    static LogicalTable: typeof LogicalTable;
    static TransformOperation: typeof TransformOperation;
    static JoinInstruction: typeof JoinInstruction;
    static OutputColumn: typeof OutputColumn;
    static ColumnTag: typeof ColumnTag;
    static TagColumnOperation: typeof TagColumnOperation;
    static IngestionWaitPolicy: typeof IngestionWaitPolicy;
    static CalculatedColumn: typeof CalculatedColumn;
    static CastColumnTypeOperation: typeof CastColumnTypeOperation;
    static LogicalTableSource: typeof LogicalTableSource;
    constructor(properties?: DataSetProperties);
}
