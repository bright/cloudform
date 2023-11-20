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
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeoutConfig = exports.RetryCriteria = exports.RateIncreaseCriteria = exports.PresignedUrlConfig = exports.MaintenanceWindow = exports.JobExecutionsRolloutConfig = exports.JobExecutionsRetryConfig = exports.ExponentialRolloutRate = exports.AbortCriteria = exports.AbortConfig = void 0;
const resource_1 = require("../resource");
class AbortConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AbortConfig = AbortConfig;
class AbortCriteria {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AbortCriteria = AbortCriteria;
class ExponentialRolloutRate {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ExponentialRolloutRate = ExponentialRolloutRate;
class JobExecutionsRetryConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.JobExecutionsRetryConfig = JobExecutionsRetryConfig;
class JobExecutionsRolloutConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.JobExecutionsRolloutConfig = JobExecutionsRolloutConfig;
class MaintenanceWindow {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.MaintenanceWindow = MaintenanceWindow;
class PresignedUrlConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PresignedUrlConfig = PresignedUrlConfig;
class RateIncreaseCriteria {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RateIncreaseCriteria = RateIncreaseCriteria;
class RetryCriteria {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RetryCriteria = RetryCriteria;
class TimeoutConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TimeoutConfig = TimeoutConfig;
class JobTemplate extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::IoT::JobTemplate', properties);
    }
}
exports.default = JobTemplate;
JobTemplate.AbortConfig = AbortConfig;
JobTemplate.AbortCriteria = AbortCriteria;
JobTemplate.ExponentialRolloutRate = ExponentialRolloutRate;
JobTemplate.JobExecutionsRetryConfig = JobExecutionsRetryConfig;
JobTemplate.JobExecutionsRolloutConfig = JobExecutionsRolloutConfig;
JobTemplate.MaintenanceWindow = MaintenanceWindow;
JobTemplate.PresignedUrlConfig = PresignedUrlConfig;
JobTemplate.RateIncreaseCriteria = RateIncreaseCriteria;
JobTemplate.RetryCriteria = RetryCriteria;
JobTemplate.TimeoutConfig = TimeoutConfig;
