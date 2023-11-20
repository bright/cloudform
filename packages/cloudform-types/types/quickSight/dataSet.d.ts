import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
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
export declare class ColumnDescription {
    Text?: Value<string>;
    constructor(properties: ColumnDescription);
}
export declare class ColumnGroup {
    GeoSpatialColumnGroup?: GeoSpatialColumnGroup;
    constructor(properties: ColumnGroup);
}
export declare class ColumnLevelPermissionRule {
    ColumnNames?: List<Value<string>>;
    Principals?: List<Value<string>>;
    constructor(properties: ColumnLevelPermissionRule);
}
export declare class ColumnTag {
    ColumnGeographicRole?: Value<string>;
    ColumnDescription?: ColumnDescription;
    constructor(properties: ColumnTag);
}
export declare class CreateColumnsOperation {
    Columns: List<CalculatedColumn>;
    constructor(properties: CreateColumnsOperation);
}
export declare class CustomSql {
    DataSourceArn: Value<string>;
    SqlQuery: Value<string>;
    Columns: List<InputColumn>;
    Name: Value<string>;
    constructor(properties: CustomSql);
}
export declare class DataSetRefreshProperties {
    RefreshConfiguration?: RefreshConfiguration;
    constructor(properties: DataSetRefreshProperties);
}
export declare class DataSetUsageConfiguration {
    DisableUseAsImportedSource?: Value<boolean>;
    DisableUseAsDirectQuerySource?: Value<boolean>;
    constructor(properties: DataSetUsageConfiguration);
}
export declare class DatasetParameter {
    IntegerDatasetParameter?: IntegerDatasetParameter;
    DateTimeDatasetParameter?: DateTimeDatasetParameter;
    DecimalDatasetParameter?: DecimalDatasetParameter;
    StringDatasetParameter?: StringDatasetParameter;
    constructor(properties: DatasetParameter);
}
export declare class DateTimeDatasetParameter {
    ValueType: Value<string>;
    TimeGranularity?: Value<string>;
    DefaultValues?: DateTimeDatasetParameterDefaultValues;
    Id: Value<string>;
    Name: Value<string>;
    constructor(properties: DateTimeDatasetParameter);
}
export declare class DateTimeDatasetParameterDefaultValues {
    StaticValues?: List<Value<string>>;
    constructor(properties: DateTimeDatasetParameterDefaultValues);
}
export declare class DecimalDatasetParameter {
    ValueType: Value<string>;
    DefaultValues?: DecimalDatasetParameterDefaultValues;
    Id: Value<string>;
    Name: Value<string>;
    constructor(properties: DecimalDatasetParameter);
}
export declare class DecimalDatasetParameterDefaultValues {
    StaticValues?: List<Value<number>>;
    constructor(properties: DecimalDatasetParameterDefaultValues);
}
export declare class FieldFolder {
    Description?: Value<string>;
    Columns?: List<Value<string>>;
    constructor(properties: FieldFolder);
}
export declare class FilterOperation {
    ConditionExpression: Value<string>;
    constructor(properties: FilterOperation);
}
export declare class GeoSpatialColumnGroup {
    Columns: List<Value<string>>;
    CountryCode?: Value<string>;
    Name: Value<string>;
    constructor(properties: GeoSpatialColumnGroup);
}
export declare class IncrementalRefresh {
    LookbackWindow?: LookbackWindow;
    constructor(properties: IncrementalRefresh);
}
export declare class IngestionWaitPolicy {
    WaitForSpiceIngestion?: Value<boolean>;
    IngestionWaitTimeInHours?: Value<number>;
    constructor(properties: IngestionWaitPolicy);
}
export declare class InputColumn {
    Type: Value<string>;
    Name: Value<string>;
    constructor(properties: InputColumn);
}
export declare class IntegerDatasetParameter {
    ValueType: Value<string>;
    DefaultValues?: IntegerDatasetParameterDefaultValues;
    Id: Value<string>;
    Name: Value<string>;
    constructor(properties: IntegerDatasetParameter);
}
export declare class IntegerDatasetParameterDefaultValues {
    StaticValues?: List<Value<number>>;
    constructor(properties: IntegerDatasetParameterDefaultValues);
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
export declare class JoinKeyProperties {
    UniqueKey?: Value<boolean>;
    constructor(properties: JoinKeyProperties);
}
export declare class LogicalTable {
    Alias: Value<string>;
    DataTransforms?: List<TransformOperation>;
    Source: LogicalTableSource;
    constructor(properties: LogicalTable);
}
export declare class LogicalTableSource {
    PhysicalTableId?: Value<string>;
    JoinInstruction?: JoinInstruction;
    DataSetArn?: Value<string>;
    constructor(properties: LogicalTableSource);
}
export declare class LookbackWindow {
    ColumnName?: Value<string>;
    SizeUnit?: Value<string>;
    Size?: Value<number>;
    constructor(properties: LookbackWindow);
}
export declare class NewDefaultValues {
    DecimalStaticValues?: List<Value<number>>;
    IntegerStaticValues?: List<Value<number>>;
    StringStaticValues?: List<Value<string>>;
    DateTimeStaticValues?: List<Value<string>>;
    constructor(properties: NewDefaultValues);
}
export declare class OutputColumn {
    Type?: Value<string>;
    Description?: Value<string>;
    Name?: Value<string>;
    constructor(properties: OutputColumn);
}
export declare class OverrideDatasetParameterOperation {
    NewDefaultValues?: NewDefaultValues;
    ParameterName: Value<string>;
    NewParameterName?: Value<string>;
    constructor(properties: OverrideDatasetParameterOperation);
}
export declare class PhysicalTable {
    RelationalTable?: RelationalTable;
    CustomSql?: CustomSql;
    S3Source?: S3Source;
    constructor(properties: PhysicalTable);
}
export declare class ProjectOperation {
    ProjectedColumns: List<Value<string>>;
    constructor(properties: ProjectOperation);
}
export declare class RefreshConfiguration {
    IncrementalRefresh?: IncrementalRefresh;
    constructor(properties: RefreshConfiguration);
}
export declare class RelationalTable {
    DataSourceArn: Value<string>;
    InputColumns: List<InputColumn>;
    Schema?: Value<string>;
    Catalog?: Value<string>;
    Name: Value<string>;
    constructor(properties: RelationalTable);
}
export declare class RenameColumnOperation {
    NewColumnName: Value<string>;
    ColumnName: Value<string>;
    constructor(properties: RenameColumnOperation);
}
export declare class ResourcePermission {
    Actions: List<Value<string>>;
    Principal: Value<string>;
    constructor(properties: ResourcePermission);
}
export declare class RowLevelPermissionDataSet {
    Status?: Value<string>;
    FormatVersion?: Value<string>;
    Arn: Value<string>;
    Namespace?: Value<string>;
    PermissionPolicy: Value<string>;
    constructor(properties: RowLevelPermissionDataSet);
}
export declare class RowLevelPermissionTagConfiguration {
    Status?: Value<string>;
    TagRules: List<RowLevelPermissionTagRule>;
    TagRuleConfigurations?: {
        [key: string]: any;
    };
    constructor(properties: RowLevelPermissionTagConfiguration);
}
export declare class RowLevelPermissionTagRule {
    ColumnName: Value<string>;
    TagKey: Value<string>;
    MatchAllValue?: Value<string>;
    TagMultiValueDelimiter?: Value<string>;
    constructor(properties: RowLevelPermissionTagRule);
}
export declare class S3Source {
    DataSourceArn: Value<string>;
    InputColumns: List<InputColumn>;
    UploadSettings?: UploadSettings;
    constructor(properties: S3Source);
}
export declare class StringDatasetParameter {
    ValueType: Value<string>;
    DefaultValues?: StringDatasetParameterDefaultValues;
    Id: Value<string>;
    Name: Value<string>;
    constructor(properties: StringDatasetParameter);
}
export declare class StringDatasetParameterDefaultValues {
    StaticValues?: List<Value<string>>;
    constructor(properties: StringDatasetParameterDefaultValues);
}
export declare class TagColumnOperation {
    ColumnName: Value<string>;
    Tags: List<ColumnTag>;
    constructor(properties: TagColumnOperation);
}
export declare class TransformOperation {
    TagColumnOperation?: TagColumnOperation;
    OverrideDatasetParameterOperation?: OverrideDatasetParameterOperation;
    FilterOperation?: FilterOperation;
    CastColumnTypeOperation?: CastColumnTypeOperation;
    CreateColumnsOperation?: CreateColumnsOperation;
    RenameColumnOperation?: RenameColumnOperation;
    ProjectOperation?: ProjectOperation;
    constructor(properties: TransformOperation);
}
export declare class UploadSettings {
    ContainsHeader?: Value<boolean>;
    TextQualifier?: Value<string>;
    Format?: Value<string>;
    StartFromRow?: Value<number>;
    Delimiter?: Value<string>;
    constructor(properties: UploadSettings);
}
export interface DataSetProperties {
    PhysicalTableMap?: {
        [key: string]: PhysicalTable;
    };
    FieldFolders?: {
        [key: string]: FieldFolder;
    };
    DataSetId?: Value<string>;
    RowLevelPermissionDataSet?: RowLevelPermissionDataSet;
    RowLevelPermissionTagConfiguration?: RowLevelPermissionTagConfiguration;
    IngestionWaitPolicy?: IngestionWaitPolicy;
    DataSetRefreshProperties?: DataSetRefreshProperties;
    ColumnLevelPermissionRules?: List<ColumnLevelPermissionRule>;
    Name?: Value<string>;
    ColumnGroups?: List<ColumnGroup>;
    ImportMode?: Value<string>;
    DatasetParameters?: List<DatasetParameter>;
    LogicalTableMap?: {
        [key: string]: LogicalTable;
    };
    AwsAccountId?: Value<string>;
    Permissions?: List<ResourcePermission>;
    DataSetUsageConfiguration?: DataSetUsageConfiguration;
    Tags?: List<ResourceTag>;
}
export default class DataSet extends ResourceBase<DataSetProperties> {
    static CalculatedColumn: typeof CalculatedColumn;
    static CastColumnTypeOperation: typeof CastColumnTypeOperation;
    static ColumnDescription: typeof ColumnDescription;
    static ColumnGroup: typeof ColumnGroup;
    static ColumnLevelPermissionRule: typeof ColumnLevelPermissionRule;
    static ColumnTag: typeof ColumnTag;
    static CreateColumnsOperation: typeof CreateColumnsOperation;
    static CustomSql: typeof CustomSql;
    static DataSetRefreshProperties: typeof DataSetRefreshProperties;
    static DataSetUsageConfiguration: typeof DataSetUsageConfiguration;
    static DatasetParameter: typeof DatasetParameter;
    static DateTimeDatasetParameter: typeof DateTimeDatasetParameter;
    static DateTimeDatasetParameterDefaultValues: typeof DateTimeDatasetParameterDefaultValues;
    static DecimalDatasetParameter: typeof DecimalDatasetParameter;
    static DecimalDatasetParameterDefaultValues: typeof DecimalDatasetParameterDefaultValues;
    static FieldFolder: typeof FieldFolder;
    static FilterOperation: typeof FilterOperation;
    static GeoSpatialColumnGroup: typeof GeoSpatialColumnGroup;
    static IncrementalRefresh: typeof IncrementalRefresh;
    static IngestionWaitPolicy: typeof IngestionWaitPolicy;
    static InputColumn: typeof InputColumn;
    static IntegerDatasetParameter: typeof IntegerDatasetParameter;
    static IntegerDatasetParameterDefaultValues: typeof IntegerDatasetParameterDefaultValues;
    static JoinInstruction: typeof JoinInstruction;
    static JoinKeyProperties: typeof JoinKeyProperties;
    static LogicalTable: typeof LogicalTable;
    static LogicalTableSource: typeof LogicalTableSource;
    static LookbackWindow: typeof LookbackWindow;
    static NewDefaultValues: typeof NewDefaultValues;
    static OutputColumn: typeof OutputColumn;
    static OverrideDatasetParameterOperation: typeof OverrideDatasetParameterOperation;
    static PhysicalTable: typeof PhysicalTable;
    static ProjectOperation: typeof ProjectOperation;
    static RefreshConfiguration: typeof RefreshConfiguration;
    static RelationalTable: typeof RelationalTable;
    static RenameColumnOperation: typeof RenameColumnOperation;
    static ResourcePermission: typeof ResourcePermission;
    static RowLevelPermissionDataSet: typeof RowLevelPermissionDataSet;
    static RowLevelPermissionTagConfiguration: typeof RowLevelPermissionTagConfiguration;
    static RowLevelPermissionTagRule: typeof RowLevelPermissionTagRule;
    static S3Source: typeof S3Source;
    static StringDatasetParameter: typeof StringDatasetParameter;
    static StringDatasetParameterDefaultValues: typeof StringDatasetParameterDefaultValues;
    static TagColumnOperation: typeof TagColumnOperation;
    static TransformOperation: typeof TransformOperation;
    static UploadSettings: typeof UploadSettings;
    constructor(properties?: DataSetProperties);
}
