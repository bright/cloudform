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
exports.Verified = exports.Transferred = exports.TaskSchedule = exports.TaskReportConfig = exports.Skipped = exports.S3 = exports.Overrides = exports.Options = exports.FilterRule = exports.Destination = exports.Deleted = void 0;
const resource_1 = require("../resource");
class Deleted {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Deleted = Deleted;
class Destination {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Destination = Destination;
class FilterRule {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.FilterRule = FilterRule;
class Options {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Options = Options;
class Overrides {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Overrides = Overrides;
class S3 {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.S3 = S3;
class Skipped {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Skipped = Skipped;
class TaskReportConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TaskReportConfig = TaskReportConfig;
class TaskSchedule {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TaskSchedule = TaskSchedule;
class Transferred {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Transferred = Transferred;
class Verified {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Verified = Verified;
class Task extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::DataSync::Task', properties);
    }
}
exports.default = Task;
Task.Deleted = Deleted;
Task.Destination = Destination;
Task.FilterRule = FilterRule;
Task.Options = Options;
Task.Overrides = Overrides;
Task.S3 = S3;
Task.Skipped = Skipped;
Task.TaskReportConfig = TaskReportConfig;
Task.TaskSchedule = TaskSchedule;
Task.Transferred = Transferred;
Task.Verified = Verified;
