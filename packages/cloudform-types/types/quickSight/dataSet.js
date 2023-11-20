"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadSettings = exports.TransformOperation = exports.TagColumnOperation = exports.StringDatasetParameterDefaultValues = exports.StringDatasetParameter = exports.S3Source = exports.RowLevelPermissionTagRule = exports.RowLevelPermissionTagConfiguration = exports.RowLevelPermissionDataSet = exports.ResourcePermission = exports.RenameColumnOperation = exports.RelationalTable = exports.RefreshConfiguration = exports.ProjectOperation = exports.PhysicalTable = exports.OverrideDatasetParameterOperation = exports.OutputColumn = exports.NewDefaultValues = exports.LookbackWindow = exports.LogicalTableSource = exports.LogicalTable = exports.JoinKeyProperties = exports.JoinInstruction = exports.IntegerDatasetParameterDefaultValues = exports.IntegerDatasetParameter = exports.InputColumn = exports.IngestionWaitPolicy = exports.IncrementalRefresh = exports.GeoSpatialColumnGroup = exports.FilterOperation = exports.FieldFolder = exports.DecimalDatasetParameterDefaultValues = exports.DecimalDatasetParameter = exports.DateTimeDatasetParameterDefaultValues = exports.DateTimeDatasetParameter = exports.DatasetParameter = exports.DataSetUsageConfiguration = exports.DataSetRefreshProperties = exports.CustomSql = exports.CreateColumnsOperation = exports.ColumnTag = exports.ColumnLevelPermissionRule = exports.ColumnGroup = exports.ColumnDescription = exports.CastColumnTypeOperation = exports.CalculatedColumn = void 0;
const resource_1 = require("../resource");
class CalculatedColumn {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CalculatedColumn = CalculatedColumn;
class CastColumnTypeOperation {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CastColumnTypeOperation = CastColumnTypeOperation;
class ColumnDescription {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ColumnDescription = ColumnDescription;
class ColumnGroup {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ColumnGroup = ColumnGroup;
class ColumnLevelPermissionRule {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ColumnLevelPermissionRule = ColumnLevelPermissionRule;
class ColumnTag {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ColumnTag = ColumnTag;
class CreateColumnsOperation {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CreateColumnsOperation = CreateColumnsOperation;
class CustomSql {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CustomSql = CustomSql;
class DataSetRefreshProperties {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DataSetRefreshProperties = DataSetRefreshProperties;
class DataSetUsageConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DataSetUsageConfiguration = DataSetUsageConfiguration;
class DatasetParameter {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DatasetParameter = DatasetParameter;
class DateTimeDatasetParameter {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DateTimeDatasetParameter = DateTimeDatasetParameter;
class DateTimeDatasetParameterDefaultValues {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DateTimeDatasetParameterDefaultValues = DateTimeDatasetParameterDefaultValues;
class DecimalDatasetParameter {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DecimalDatasetParameter = DecimalDatasetParameter;
class DecimalDatasetParameterDefaultValues {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DecimalDatasetParameterDefaultValues = DecimalDatasetParameterDefaultValues;
class FieldFolder {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.FieldFolder = FieldFolder;
class FilterOperation {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.FilterOperation = FilterOperation;
class GeoSpatialColumnGroup {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.GeoSpatialColumnGroup = GeoSpatialColumnGroup;
class IncrementalRefresh {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.IncrementalRefresh = IncrementalRefresh;
class IngestionWaitPolicy {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.IngestionWaitPolicy = IngestionWaitPolicy;
class InputColumn {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.InputColumn = InputColumn;
class IntegerDatasetParameter {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.IntegerDatasetParameter = IntegerDatasetParameter;
class IntegerDatasetParameterDefaultValues {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.IntegerDatasetParameterDefaultValues = IntegerDatasetParameterDefaultValues;
class JoinInstruction {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.JoinInstruction = JoinInstruction;
class JoinKeyProperties {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.JoinKeyProperties = JoinKeyProperties;
class LogicalTable {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.LogicalTable = LogicalTable;
class LogicalTableSource {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.LogicalTableSource = LogicalTableSource;
class LookbackWindow {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.LookbackWindow = LookbackWindow;
class NewDefaultValues {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.NewDefaultValues = NewDefaultValues;
class OutputColumn {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.OutputColumn = OutputColumn;
class OverrideDatasetParameterOperation {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.OverrideDatasetParameterOperation = OverrideDatasetParameterOperation;
class PhysicalTable {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PhysicalTable = PhysicalTable;
class ProjectOperation {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ProjectOperation = ProjectOperation;
class RefreshConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RefreshConfiguration = RefreshConfiguration;
class RelationalTable {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RelationalTable = RelationalTable;
class RenameColumnOperation {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RenameColumnOperation = RenameColumnOperation;
class ResourcePermission {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ResourcePermission = ResourcePermission;
class RowLevelPermissionDataSet {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RowLevelPermissionDataSet = RowLevelPermissionDataSet;
class RowLevelPermissionTagConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RowLevelPermissionTagConfiguration = RowLevelPermissionTagConfiguration;
class RowLevelPermissionTagRule {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RowLevelPermissionTagRule = RowLevelPermissionTagRule;
class S3Source {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.S3Source = S3Source;
class StringDatasetParameter {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.StringDatasetParameter = StringDatasetParameter;
class StringDatasetParameterDefaultValues {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.StringDatasetParameterDefaultValues = StringDatasetParameterDefaultValues;
class TagColumnOperation {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TagColumnOperation = TagColumnOperation;
class TransformOperation {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TransformOperation = TransformOperation;
class UploadSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.UploadSettings = UploadSettings;
class DataSet extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::QuickSight::DataSet', properties || {});
    }
}
exports.default = DataSet;
DataSet.CalculatedColumn = CalculatedColumn;
DataSet.CastColumnTypeOperation = CastColumnTypeOperation;
DataSet.ColumnDescription = ColumnDescription;
DataSet.ColumnGroup = ColumnGroup;
DataSet.ColumnLevelPermissionRule = ColumnLevelPermissionRule;
DataSet.ColumnTag = ColumnTag;
DataSet.CreateColumnsOperation = CreateColumnsOperation;
DataSet.CustomSql = CustomSql;
DataSet.DataSetRefreshProperties = DataSetRefreshProperties;
DataSet.DataSetUsageConfiguration = DataSetUsageConfiguration;
DataSet.DatasetParameter = DatasetParameter;
DataSet.DateTimeDatasetParameter = DateTimeDatasetParameter;
DataSet.DateTimeDatasetParameterDefaultValues = DateTimeDatasetParameterDefaultValues;
DataSet.DecimalDatasetParameter = DecimalDatasetParameter;
DataSet.DecimalDatasetParameterDefaultValues = DecimalDatasetParameterDefaultValues;
DataSet.FieldFolder = FieldFolder;
DataSet.FilterOperation = FilterOperation;
DataSet.GeoSpatialColumnGroup = GeoSpatialColumnGroup;
DataSet.IncrementalRefresh = IncrementalRefresh;
DataSet.IngestionWaitPolicy = IngestionWaitPolicy;
DataSet.InputColumn = InputColumn;
DataSet.IntegerDatasetParameter = IntegerDatasetParameter;
DataSet.IntegerDatasetParameterDefaultValues = IntegerDatasetParameterDefaultValues;
DataSet.JoinInstruction = JoinInstruction;
DataSet.JoinKeyProperties = JoinKeyProperties;
DataSet.LogicalTable = LogicalTable;
DataSet.LogicalTableSource = LogicalTableSource;
DataSet.LookbackWindow = LookbackWindow;
DataSet.NewDefaultValues = NewDefaultValues;
DataSet.OutputColumn = OutputColumn;
DataSet.OverrideDatasetParameterOperation = OverrideDatasetParameterOperation;
DataSet.PhysicalTable = PhysicalTable;
DataSet.ProjectOperation = ProjectOperation;
DataSet.RefreshConfiguration = RefreshConfiguration;
DataSet.RelationalTable = RelationalTable;
DataSet.RenameColumnOperation = RenameColumnOperation;
DataSet.ResourcePermission = ResourcePermission;
DataSet.RowLevelPermissionDataSet = RowLevelPermissionDataSet;
DataSet.RowLevelPermissionTagConfiguration = RowLevelPermissionTagConfiguration;
DataSet.RowLevelPermissionTagRule = RowLevelPermissionTagRule;
DataSet.S3Source = S3Source;
DataSet.StringDatasetParameter = StringDatasetParameter;
DataSet.StringDatasetParameterDefaultValues = StringDatasetParameterDefaultValues;
DataSet.TagColumnOperation = TagColumnOperation;
DataSet.TransformOperation = TransformOperation;
DataSet.UploadSettings = UploadSettings;
