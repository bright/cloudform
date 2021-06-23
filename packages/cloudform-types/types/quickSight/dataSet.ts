/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class JoinKeyProperties {
    UniqueKey?: Value<boolean>

    constructor(properties: JoinKeyProperties) {
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

export class ProjectOperation {
    ProjectedColumns!: List<Value<string>>

    constructor(properties: ProjectOperation) {
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

export class CreateColumnsOperation {
    Columns!: List<CalculatedColumn>

    constructor(properties: CreateColumnsOperation) {
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

export class ColumnDescription {
    Text?: Value<string>

    constructor(properties: ColumnDescription) {
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

export class ColumnGroup {
    GeoSpatialColumnGroup?: GeoSpatialColumnGroup

    constructor(properties: ColumnGroup) {
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

export class InputColumn {
    Type!: Value<string>
    Name!: Value<string>

    constructor(properties: InputColumn) {
        Object.assign(this, properties)
    }
}

export class RowLevelPermissionDataSet {
    Arn!: Value<string>
    Namespace?: Value<string>
    PermissionPolicy!: Value<string>

    constructor(properties: RowLevelPermissionDataSet) {
        Object.assign(this, properties)
    }
}

export class FilterOperation {
    ConditionExpression!: Value<string>

    constructor(properties: FilterOperation) {
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

export class ResourcePermission {
    Actions!: List<Value<string>>
    Principal!: Value<string>

    constructor(properties: ResourcePermission) {
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

export class S3Source {
    DataSourceArn!: Value<string>
    InputColumns!: List<InputColumn>
    UploadSettings?: UploadSettings

    constructor(properties: S3Source) {
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

export class TransformOperation {
    TagColumnOperation?: TagColumnOperation
    FilterOperation?: FilterOperation
    CastColumnTypeOperation?: CastColumnTypeOperation
    CreateColumnsOperation?: CreateColumnsOperation
    RenameColumnOperation?: RenameColumnOperation
    ProjectOperation?: ProjectOperation

    constructor(properties: TransformOperation) {
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

export class OutputColumn {
    Type?: Value<string>
    Description?: Value<string>
    Name?: Value<string>

    constructor(properties: OutputColumn) {
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

export class TagColumnOperation {
    ColumnName!: Value<string>
    Tags!: List<ColumnTag>

    constructor(properties: TagColumnOperation) {
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

export class LogicalTableSource {
    PhysicalTableId?: Value<string>
    JoinInstruction?: JoinInstruction

    constructor(properties: LogicalTableSource) {
        Object.assign(this, properties)
    }
}

export interface DataSetProperties {
    AwsAccountId?: Value<string>
    ColumnGroups?: List<ColumnGroup>
    ColumnLevelPermissionRules?: List<ColumnLevelPermissionRule>
    DataSetId?: Value<string>
    FieldFolders?: {[key: string]: FieldFolder}
    ImportMode?: Value<string>
    LogicalTableMap?: {[key: string]: LogicalTable}
    Name?: Value<string>
    Permissions?: List<ResourcePermission>
    PhysicalTableMap?: {[key: string]: PhysicalTable}
    RowLevelPermissionDataSet?: RowLevelPermissionDataSet
    Tags?: List<ResourceTag>
    IngestionWaitPolicy?: IngestionWaitPolicy
}

export default class DataSet extends ResourceBase<DataSetProperties> {
    static JoinKeyProperties = JoinKeyProperties
    static UploadSettings = UploadSettings
    static ProjectOperation = ProjectOperation
    static ColumnLevelPermissionRule = ColumnLevelPermissionRule
    static CreateColumnsOperation = CreateColumnsOperation
    static PhysicalTable = PhysicalTable
    static ColumnDescription = ColumnDescription
    static RenameColumnOperation = RenameColumnOperation
    static ColumnGroup = ColumnGroup
    static GeoSpatialColumnGroup = GeoSpatialColumnGroup
    static RelationalTable = RelationalTable
    static InputColumn = InputColumn
    static RowLevelPermissionDataSet = RowLevelPermissionDataSet
    static FilterOperation = FilterOperation
    static CustomSql = CustomSql
    static ResourcePermission = ResourcePermission
    static FieldFolder = FieldFolder
    static S3Source = S3Source
    static LogicalTable = LogicalTable
    static TransformOperation = TransformOperation
    static JoinInstruction = JoinInstruction
    static OutputColumn = OutputColumn
    static ColumnTag = ColumnTag
    static TagColumnOperation = TagColumnOperation
    static IngestionWaitPolicy = IngestionWaitPolicy
    static CalculatedColumn = CalculatedColumn
    static CastColumnTypeOperation = CastColumnTypeOperation
    static LogicalTableSource = LogicalTableSource

    constructor(properties?: DataSetProperties) {
        super('AWS::QuickSight::DataSet', properties || {})
    }
}
