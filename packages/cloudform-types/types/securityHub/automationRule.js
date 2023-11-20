"use strict";
/* Generated from:
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-3 (https://d2zq80gdmjim8k.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
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
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkflowUpdate = exports.StringFilter = exports.SeverityUpdate = exports.RelatedFinding = exports.NumberFilter = exports.NoteUpdate = exports.MapFilter = exports.DateRange = exports.DateFilter = exports.AutomationRulesFindingFilters = exports.AutomationRulesFindingFieldsUpdate = exports.AutomationRulesAction = void 0;
const resource_1 = require("../resource");
class AutomationRulesAction {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AutomationRulesAction = AutomationRulesAction;
class AutomationRulesFindingFieldsUpdate {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AutomationRulesFindingFieldsUpdate = AutomationRulesFindingFieldsUpdate;
class AutomationRulesFindingFilters {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AutomationRulesFindingFilters = AutomationRulesFindingFilters;
class DateFilter {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DateFilter = DateFilter;
class DateRange {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DateRange = DateRange;
class MapFilter {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.MapFilter = MapFilter;
class NoteUpdate {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.NoteUpdate = NoteUpdate;
class NumberFilter {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.NumberFilter = NumberFilter;
class RelatedFinding {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RelatedFinding = RelatedFinding;
class SeverityUpdate {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SeverityUpdate = SeverityUpdate;
class StringFilter {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.StringFilter = StringFilter;
class WorkflowUpdate {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.WorkflowUpdate = WorkflowUpdate;
class AutomationRule extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::SecurityHub::AutomationRule', properties || {});
    }
}
exports.default = AutomationRule;
AutomationRule.AutomationRulesAction = AutomationRulesAction;
AutomationRule.AutomationRulesFindingFieldsUpdate = AutomationRulesFindingFieldsUpdate;
AutomationRule.AutomationRulesFindingFilters = AutomationRulesFindingFilters;
AutomationRule.DateFilter = DateFilter;
AutomationRule.DateRange = DateRange;
AutomationRule.MapFilter = MapFilter;
AutomationRule.NoteUpdate = NoteUpdate;
AutomationRule.NumberFilter = NumberFilter;
AutomationRule.RelatedFinding = RelatedFinding;
AutomationRule.SeverityUpdate = SeverityUpdate;
AutomationRule.StringFilter = StringFilter;
AutomationRule.WorkflowUpdate = WorkflowUpdate;
