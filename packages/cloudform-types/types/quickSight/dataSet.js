"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class JoinKeyProperties {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.JoinKeyProperties = JoinKeyProperties;
class UploadSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.UploadSettings = UploadSettings;
class ProjectOperation {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ProjectOperation = ProjectOperation;
class ColumnLevelPermissionRule {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ColumnLevelPermissionRule = ColumnLevelPermissionRule;
class CreateColumnsOperation {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CreateColumnsOperation = CreateColumnsOperation;
class PhysicalTable {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PhysicalTable = PhysicalTable;
class ColumnDescription {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ColumnDescription = ColumnDescription;
class RenameColumnOperation {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RenameColumnOperation = RenameColumnOperation;
class ColumnGroup {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ColumnGroup = ColumnGroup;
class GeoSpatialColumnGroup {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.GeoSpatialColumnGroup = GeoSpatialColumnGroup;
class RelationalTable {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RelationalTable = RelationalTable;
class InputColumn {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.InputColumn = InputColumn;
class RowLevelPermissionDataSet {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RowLevelPermissionDataSet = RowLevelPermissionDataSet;
class FilterOperation {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.FilterOperation = FilterOperation;
class CustomSql {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CustomSql = CustomSql;
class ResourcePermission {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ResourcePermission = ResourcePermission;
class FieldFolder {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.FieldFolder = FieldFolder;
class S3Source {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.S3Source = S3Source;
class LogicalTable {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.LogicalTable = LogicalTable;
class TransformOperation {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TransformOperation = TransformOperation;
class JoinInstruction {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.JoinInstruction = JoinInstruction;
class OutputColumn {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.OutputColumn = OutputColumn;
class ColumnTag {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ColumnTag = ColumnTag;
class TagColumnOperation {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TagColumnOperation = TagColumnOperation;
class IngestionWaitPolicy {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.IngestionWaitPolicy = IngestionWaitPolicy;
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
class LogicalTableSource {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.LogicalTableSource = LogicalTableSource;
class DataSet extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::QuickSight::DataSet', properties || {});
    }
}
exports.default = DataSet;
DataSet.JoinKeyProperties = JoinKeyProperties;
DataSet.UploadSettings = UploadSettings;
DataSet.ProjectOperation = ProjectOperation;
DataSet.ColumnLevelPermissionRule = ColumnLevelPermissionRule;
DataSet.CreateColumnsOperation = CreateColumnsOperation;
DataSet.PhysicalTable = PhysicalTable;
DataSet.ColumnDescription = ColumnDescription;
DataSet.RenameColumnOperation = RenameColumnOperation;
DataSet.ColumnGroup = ColumnGroup;
DataSet.GeoSpatialColumnGroup = GeoSpatialColumnGroup;
DataSet.RelationalTable = RelationalTable;
DataSet.InputColumn = InputColumn;
DataSet.RowLevelPermissionDataSet = RowLevelPermissionDataSet;
DataSet.FilterOperation = FilterOperation;
DataSet.CustomSql = CustomSql;
DataSet.ResourcePermission = ResourcePermission;
DataSet.FieldFolder = FieldFolder;
DataSet.S3Source = S3Source;
DataSet.LogicalTable = LogicalTable;
DataSet.TransformOperation = TransformOperation;
DataSet.JoinInstruction = JoinInstruction;
DataSet.OutputColumn = OutputColumn;
DataSet.ColumnTag = ColumnTag;
DataSet.TagColumnOperation = TagColumnOperation;
DataSet.IngestionWaitPolicy = IngestionWaitPolicy;
DataSet.CalculatedColumn = CalculatedColumn;
DataSet.CastColumnTypeOperation = CastColumnTypeOperation;
DataSet.LogicalTableSource = LogicalTableSource;
