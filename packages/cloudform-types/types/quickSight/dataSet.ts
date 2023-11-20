/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class CalculatedColumn {
    ColumnId!: Value<string>
    ColumnName!: Value<string>
    Expression!: Value<string>

    constructor(properties: CalculatedColumn) {
        Object.assign(this, properties)
    }
}

export class CastColumnTypeOperation {
    ColumnName!: Value<string>
    Format?: Value<string>
    NewColumnType!: Value<string>

    constructor(properties: CastColumnTypeOperation) {
        Object.assign(this, properties)
    }
}

export class ColumnDescription {
    Text?: Value<string>

    constructor(properties: ColumnDescription) {
        Object.assign(this, properties)
    }
}

export class ColumnGroup {
    GeoSpatialColumnGroup?: GeoSpatialColumnGroup

    constructor(properties: ColumnGroup) {
        Object.assign(this, properties)
    }
}

export class ColumnLevelPermissionRule {
    ColumnNames?: List<Value<string>>
    Principals?: List<Value<string>>

    constructor(properties: ColumnLevelPermissionRule) {
        Object.assign(this, properties)
    }
}

export class ColumnTag {
    ColumnGeographicRole?: Value<string>
    ColumnDescription?: ColumnDescription

    constructor(properties: ColumnTag) {
        Object.assign(this, properties)
    }
}

export class CreateColumnsOperation {
    Columns!: List<CalculatedColumn>

    constructor(properties: CreateColumnsOperation) {
        Object.assign(this, properties)
    }
}

export class CustomSql {
    DataSourceArn!: Value<string>
    SqlQuery!: Value<string>
    Columns!: List<InputColumn>
    Name!: Value<string>

    constructor(properties: CustomSql) {
        Object.assign(this, properties)
    }
}

export class DataSetRefreshProperties {
    RefreshConfiguration?: RefreshConfiguration

    constructor(properties: DataSetRefreshProperties) {
        Object.assign(this, properties)
    }
}

export class DataSetUsageConfiguration {
    DisableUseAsImportedSource?: Value<boolean>
    DisableUseAsDirectQuerySource?: Value<boolean>

    constructor(properties: DataSetUsageConfiguration) {
        Object.assign(this, properties)
    }
}

export class DatasetParameter {
    IntegerDatasetParameter?: IntegerDatasetParameter
    DateTimeDatasetParameter?: DateTimeDatasetParameter
    DecimalDatasetParameter?: DecimalDatasetParameter
    StringDatasetParameter?: StringDatasetParameter

    constructor(properties: DatasetParameter) {
        Object.assign(this, properties)
    }
}

export class DateTimeDatasetParameter {
    ValueType!: Value<string>
    TimeGranularity?: Value<string>
    DefaultValues?: DateTimeDatasetParameterDefaultValues
    Id!: Value<string>
    Name!: Value<string>

    constructor(properties: DateTimeDatasetParameter) {
        Object.assign(this, properties)
    }
}

export class DateTimeDatasetParameterDefaultValues {
    StaticValues?: List<Value<string>>

    constructor(properties: DateTimeDatasetParameterDefaultValues) {
        Object.assign(this, properties)
    }
}

export class DecimalDatasetParameter {
    ValueType!: Value<string>
    DefaultValues?: DecimalDatasetParameterDefaultValues
    Id!: Value<string>
    Name!: Value<string>

    constructor(properties: DecimalDatasetParameter) {
        Object.assign(this, properties)
    }
}

export class DecimalDatasetParameterDefaultValues {
    StaticValues?: List<Value<number>>

    constructor(properties: DecimalDatasetParameterDefaultValues) {
        Object.assign(this, properties)
    }
}

export class FieldFolder {
    Description?: Value<string>
    Columns?: List<Value<string>>

    constructor(properties: FieldFolder) {
        Object.assign(this, properties)
    }
}

export class FilterOperation {
    ConditionExpression!: Value<string>

    constructor(properties: FilterOperation) {
        Object.assign(this, properties)
    }
}

export class GeoSpatialColumnGroup {
    Columns!: List<Value<string>>
    CountryCode?: Value<string>
    Name!: Value<string>

    constructor(properties: GeoSpatialColumnGroup) {
        Object.assign(this, properties)
    }
}

export class IncrementalRefresh {
    LookbackWindow?: LookbackWindow

    constructor(properties: IncrementalRefresh) {
        Object.assign(this, properties)
    }
}

export class IngestionWaitPolicy {
    WaitForSpiceIngestion?: Value<boolean>
    IngestionWaitTimeInHours?: Value<number>

    constructor(properties: IngestionWaitPolicy) {
        Object.assign(this, properties)
    }
}

export class InputColumn {
    Type!: Value<string>
    Name!: Value<string>

    constructor(properties: InputColumn) {
        Object.assign(this, properties)
    }
}

export class IntegerDatasetParameter {
    ValueType!: Value<string>
    DefaultValues?: IntegerDatasetParameterDefaultValues
    Id!: Value<string>
    Name!: Value<string>

    constructor(properties: IntegerDatasetParameter) {
        Object.assign(this, properties)
    }
}

export class IntegerDatasetParameterDefaultValues {
    StaticValues?: List<Value<number>>

    constructor(properties: IntegerDatasetParameterDefaultValues) {
        Object.assign(this, properties)
    }
}

export class JoinInstruction {
    OnClause!: Value<string>
    Type!: Value<string>
    LeftJoinKeyProperties?: JoinKeyProperties
    LeftOperand!: Value<string>
    RightOperand!: Value<string>
    RightJoinKeyProperties?: JoinKeyProperties

    constructor(properties: JoinInstruction) {
        Object.assign(this, properties)
    }
}

export class JoinKeyProperties {
    UniqueKey?: Value<boolean>

    constructor(properties: JoinKeyProperties) {
        Object.assign(this, properties)
    }
}

export class LogicalTable {
    Alias!: Value<string>
    DataTransforms?: List<TransformOperation>
    Source!: LogicalTableSource

    constructor(properties: LogicalTable) {
        Object.assign(this, properties)
    }
}

export class LogicalTableSource {
    PhysicalTableId?: Value<string>
    JoinInstruction?: JoinInstruction
    DataSetArn?: Value<string>

    constructor(properties: LogicalTableSource) {
        Object.assign(this, properties)
    }
}

export class LookbackWindow {
    ColumnName?: Value<string>
    SizeUnit?: Value<string>
    Size?: Value<number>

    constructor(properties: LookbackWindow) {
        Object.assign(this, properties)
    }
}

export class NewDefaultValues {
    DecimalStaticValues?: List<Value<number>>
    IntegerStaticValues?: List<Value<number>>
    StringStaticValues?: List<Value<string>>
    DateTimeStaticValues?: List<Value<string>>

    constructor(properties: NewDefaultValues) {
        Object.assign(this, properties)
    }
}

export class OutputColumn {
    Type?: Value<string>
    Description?: Value<string>
    Name?: Value<string>

    constructor(properties: OutputColumn) {
        Object.assign(this, properties)
    }
}

export class OverrideDatasetParameterOperation {
    NewDefaultValues?: NewDefaultValues
    ParameterName!: Value<string>
    NewParameterName?: Value<string>

    constructor(properties: OverrideDatasetParameterOperation) {
        Object.assign(this, properties)
    }
}

export class PhysicalTable {
    RelationalTable?: RelationalTable
    CustomSql?: CustomSql
    S3Source?: S3Source

    constructor(properties: PhysicalTable) {
        Object.assign(this, properties)
    }
}

export class ProjectOperation {
    ProjectedColumns!: List<Value<string>>

    constructor(properties: ProjectOperation) {
        Object.assign(this, properties)
    }
}

export class RefreshConfiguration {
    IncrementalRefresh?: IncrementalRefresh

    constructor(properties: RefreshConfiguration) {
        Object.assign(this, properties)
    }
}

export class RelationalTable {
    DataSourceArn!: Value<string>
    InputColumns!: List<InputColumn>
    Schema?: Value<string>
    Catalog?: Value<string>
    Name!: Value<string>

    constructor(properties: RelationalTable) {
        Object.assign(this, properties)
    }
}

export class RenameColumnOperation {
    NewColumnName!: Value<string>
    ColumnName!: Value<string>

    constructor(properties: RenameColumnOperation) {
        Object.assign(this, properties)
    }
}

export class ResourcePermission {
    Actions!: List<Value<string>>
    Principal!: Value<string>

    constructor(properties: ResourcePermission) {
        Object.assign(this, properties)
    }
}

export class RowLevelPermissionDataSet {
    Status?: Value<string>
    FormatVersion?: Value<string>
    Arn!: Value<string>
    Namespace?: Value<string>
    PermissionPolicy!: Value<string>

    constructor(properties: RowLevelPermissionDataSet) {
        Object.assign(this, properties)
    }
}

export class RowLevelPermissionTagConfiguration {
    Status?: Value<string>
    TagRules!: List<RowLevelPermissionTagRule>
    TagRuleConfigurations?: {[key: string]: any}

    constructor(properties: RowLevelPermissionTagConfiguration) {
        Object.assign(this, properties)
    }
}

export class RowLevelPermissionTagRule {
    ColumnName!: Value<string>
    TagKey!: Value<string>
    MatchAllValue?: Value<string>
    TagMultiValueDelimiter?: Value<string>

    constructor(properties: RowLevelPermissionTagRule) {
        Object.assign(this, properties)
    }
}

export class S3Source {
    DataSourceArn!: Value<string>
    InputColumns!: List<InputColumn>
    UploadSettings?: UploadSettings

    constructor(properties: S3Source) {
        Object.assign(this, properties)
    }
}

export class StringDatasetParameter {
    ValueType!: Value<string>
    DefaultValues?: StringDatasetParameterDefaultValues
    Id!: Value<string>
    Name!: Value<string>

    constructor(properties: StringDatasetParameter) {
        Object.assign(this, properties)
    }
}

export class StringDatasetParameterDefaultValues {
    StaticValues?: List<Value<string>>

    constructor(properties: StringDatasetParameterDefaultValues) {
        Object.assign(this, properties)
    }
}

export class TagColumnOperation {
    ColumnName!: Value<string>
    Tags!: List<ColumnTag>

    constructor(properties: TagColumnOperation) {
        Object.assign(this, properties)
    }
}

export class TransformOperation {
    TagColumnOperation?: TagColumnOperation
    OverrideDatasetParameterOperation?: OverrideDatasetParameterOperation
    FilterOperation?: FilterOperation
    CastColumnTypeOperation?: CastColumnTypeOperation
    CreateColumnsOperation?: CreateColumnsOperation
    RenameColumnOperation?: RenameColumnOperation
    ProjectOperation?: ProjectOperation

    constructor(properties: TransformOperation) {
        Object.assign(this, properties)
    }
}

export class UploadSettings {
    ContainsHeader?: Value<boolean>
    TextQualifier?: Value<string>
    Format?: Value<string>
    StartFromRow?: Value<number>
    Delimiter?: Value<string>

    constructor(properties: UploadSettings) {
        Object.assign(this, properties)
    }
}

export interface DataSetProperties {
    PhysicalTableMap?: {[key: string]: PhysicalTable}
    FieldFolders?: {[key: string]: FieldFolder}
    DataSetId?: Value<string>
    RowLevelPermissionDataSet?: RowLevelPermissionDataSet
    RowLevelPermissionTagConfiguration?: RowLevelPermissionTagConfiguration
    IngestionWaitPolicy?: IngestionWaitPolicy
    DataSetRefreshProperties?: DataSetRefreshProperties
    ColumnLevelPermissionRules?: List<ColumnLevelPermissionRule>
    Name?: Value<string>
    ColumnGroups?: List<ColumnGroup>
    ImportMode?: Value<string>
    DatasetParameters?: List<DatasetParameter>
    LogicalTableMap?: {[key: string]: LogicalTable}
    AwsAccountId?: Value<string>
    Permissions?: List<ResourcePermission>
    DataSetUsageConfiguration?: DataSetUsageConfiguration
    Tags?: List<ResourceTag>
}

export default class DataSet extends ResourceBase<DataSetProperties> {
    static CalculatedColumn = CalculatedColumn
    static CastColumnTypeOperation = CastColumnTypeOperation
    static ColumnDescription = ColumnDescription
    static ColumnGroup = ColumnGroup
    static ColumnLevelPermissionRule = ColumnLevelPermissionRule
    static ColumnTag = ColumnTag
    static CreateColumnsOperation = CreateColumnsOperation
    static CustomSql = CustomSql
    static DataSetRefreshProperties = DataSetRefreshProperties
    static DataSetUsageConfiguration = DataSetUsageConfiguration
    static DatasetParameter = DatasetParameter
    static DateTimeDatasetParameter = DateTimeDatasetParameter
    static DateTimeDatasetParameterDefaultValues = DateTimeDatasetParameterDefaultValues
    static DecimalDatasetParameter = DecimalDatasetParameter
    static DecimalDatasetParameterDefaultValues = DecimalDatasetParameterDefaultValues
    static FieldFolder = FieldFolder
    static FilterOperation = FilterOperation
    static GeoSpatialColumnGroup = GeoSpatialColumnGroup
    static IncrementalRefresh = IncrementalRefresh
    static IngestionWaitPolicy = IngestionWaitPolicy
    static InputColumn = InputColumn
    static IntegerDatasetParameter = IntegerDatasetParameter
    static IntegerDatasetParameterDefaultValues = IntegerDatasetParameterDefaultValues
    static JoinInstruction = JoinInstruction
    static JoinKeyProperties = JoinKeyProperties
    static LogicalTable = LogicalTable
    static LogicalTableSource = LogicalTableSource
    static LookbackWindow = LookbackWindow
    static NewDefaultValues = NewDefaultValues
    static OutputColumn = OutputColumn
    static OverrideDatasetParameterOperation = OverrideDatasetParameterOperation
    static PhysicalTable = PhysicalTable
    static ProjectOperation = ProjectOperation
    static RefreshConfiguration = RefreshConfiguration
    static RelationalTable = RelationalTable
    static RenameColumnOperation = RenameColumnOperation
    static ResourcePermission = ResourcePermission
    static RowLevelPermissionDataSet = RowLevelPermissionDataSet
    static RowLevelPermissionTagConfiguration = RowLevelPermissionTagConfiguration
    static RowLevelPermissionTagRule = RowLevelPermissionTagRule
    static S3Source = S3Source
    static StringDatasetParameter = StringDatasetParameter
    static StringDatasetParameterDefaultValues = StringDatasetParameterDefaultValues
    static TagColumnOperation = TagColumnOperation
    static TransformOperation = TransformOperation
    static UploadSettings = UploadSettings

    constructor(properties?: DataSetProperties) {
        super('AWS::QuickSight::DataSet', properties || {})
    }
}
