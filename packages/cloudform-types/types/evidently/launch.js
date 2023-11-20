"use strict";
/* Generated from:
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.StepConfig = exports.SegmentOverride = exports.MetricDefinitionObject = exports.LaunchGroupObject = exports.GroupToWeight = exports.ExecutionStatusObject = void 0;
const resource_1 = require("../resource");
class ExecutionStatusObject {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ExecutionStatusObject = ExecutionStatusObject;
class GroupToWeight {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.GroupToWeight = GroupToWeight;
class LaunchGroupObject {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.LaunchGroupObject = LaunchGroupObject;
class MetricDefinitionObject {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.MetricDefinitionObject = MetricDefinitionObject;
class SegmentOverride {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SegmentOverride = SegmentOverride;
class StepConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.StepConfig = StepConfig;
class Launch extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::Evidently::Launch', properties);
    }
}
exports.default = Launch;
Launch.ExecutionStatusObject = ExecutionStatusObject;
Launch.GroupToWeight = GroupToWeight;
Launch.LaunchGroupObject = LaunchGroupObject;
Launch.MetricDefinitionObject = MetricDefinitionObject;
Launch.SegmentOverride = SegmentOverride;
Launch.StepConfig = StepConfig;
