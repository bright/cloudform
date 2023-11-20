"use strict";
/* Generated from:
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableReference = exports.GlueTableReference = exports.ConfiguredTableAnalysisRulePolicyV1 = exports.ConfiguredTableAnalysisRulePolicy = exports.AnalysisRuleList = exports.AnalysisRuleCustom = exports.AnalysisRuleAggregation = exports.AnalysisRule = exports.AggregationConstraint = exports.AggregateColumn = void 0;
const resource_1 = require("../resource");
class AggregateColumn {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AggregateColumn = AggregateColumn;
class AggregationConstraint {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AggregationConstraint = AggregationConstraint;
class AnalysisRule {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AnalysisRule = AnalysisRule;
class AnalysisRuleAggregation {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AnalysisRuleAggregation = AnalysisRuleAggregation;
class AnalysisRuleCustom {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AnalysisRuleCustom = AnalysisRuleCustom;
class AnalysisRuleList {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AnalysisRuleList = AnalysisRuleList;
class ConfiguredTableAnalysisRulePolicy {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ConfiguredTableAnalysisRulePolicy = ConfiguredTableAnalysisRulePolicy;
class ConfiguredTableAnalysisRulePolicyV1 {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ConfiguredTableAnalysisRulePolicyV1 = ConfiguredTableAnalysisRulePolicyV1;
class GlueTableReference {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.GlueTableReference = GlueTableReference;
class TableReference {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TableReference = TableReference;
class ConfiguredTable extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::CleanRooms::ConfiguredTable', properties);
    }
}
exports.default = ConfiguredTable;
ConfiguredTable.AggregateColumn = AggregateColumn;
ConfiguredTable.AggregationConstraint = AggregationConstraint;
ConfiguredTable.AnalysisRule = AnalysisRule;
ConfiguredTable.AnalysisRuleAggregation = AnalysisRuleAggregation;
ConfiguredTable.AnalysisRuleCustom = AnalysisRuleCustom;
ConfiguredTable.AnalysisRuleList = AnalysisRuleList;
ConfiguredTable.ConfiguredTableAnalysisRulePolicy = ConfiguredTableAnalysisRulePolicy;
ConfiguredTable.ConfiguredTableAnalysisRulePolicyV1 = ConfiguredTableAnalysisRulePolicyV1;
ConfiguredTable.GlueTableReference = GlueTableReference;
ConfiguredTable.TableReference = TableReference;
