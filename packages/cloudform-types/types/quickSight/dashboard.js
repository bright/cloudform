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
class SheetControlsOption {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SheetControlsOption = SheetControlsOption;
class ResourcePermission {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ResourcePermission = ResourcePermission;
class DashboardSourceEntity {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DashboardSourceEntity = DashboardSourceEntity;
class Parameters {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Parameters = Parameters;
class DashboardSourceTemplate {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DashboardSourceTemplate = DashboardSourceTemplate;
class DataSetReference {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DataSetReference = DataSetReference;
class StringParameter {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.StringParameter = StringParameter;
class IntegerParameter {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.IntegerParameter = IntegerParameter;
class ExportToCSVOption {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ExportToCSVOption = ExportToCSVOption;
class DashboardPublishOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DashboardPublishOptions = DashboardPublishOptions;
class DecimalParameter {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DecimalParameter = DecimalParameter;
class DateTimeParameter {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DateTimeParameter = DateTimeParameter;
class AdHocFilteringOption {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AdHocFilteringOption = AdHocFilteringOption;
class Dashboard extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::QuickSight::Dashboard', properties);
    }
}
exports.default = Dashboard;
Dashboard.SheetControlsOption = SheetControlsOption;
Dashboard.ResourcePermission = ResourcePermission;
Dashboard.DashboardSourceEntity = DashboardSourceEntity;
Dashboard.Parameters = Parameters;
Dashboard.DashboardSourceTemplate = DashboardSourceTemplate;
Dashboard.DataSetReference = DataSetReference;
Dashboard.StringParameter = StringParameter;
Dashboard.IntegerParameter = IntegerParameter;
Dashboard.ExportToCSVOption = ExportToCSVOption;
Dashboard.DashboardPublishOptions = DashboardPublishOptions;
Dashboard.DecimalParameter = DecimalParameter;
Dashboard.DateTimeParameter = DateTimeParameter;
Dashboard.AdHocFilteringOption = AdHocFilteringOption;
