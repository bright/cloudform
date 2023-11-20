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
exports.S3Configuration = exports.ExperimentTemplateTargetFilter = exports.ExperimentTemplateTarget = exports.ExperimentTemplateStopCondition = exports.ExperimentTemplateLogConfiguration = exports.ExperimentTemplateAction = exports.CloudWatchLogsConfiguration = void 0;
const resource_1 = require("../resource");
class CloudWatchLogsConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CloudWatchLogsConfiguration = CloudWatchLogsConfiguration;
class ExperimentTemplateAction {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ExperimentTemplateAction = ExperimentTemplateAction;
class ExperimentTemplateLogConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ExperimentTemplateLogConfiguration = ExperimentTemplateLogConfiguration;
class ExperimentTemplateStopCondition {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ExperimentTemplateStopCondition = ExperimentTemplateStopCondition;
class ExperimentTemplateTarget {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ExperimentTemplateTarget = ExperimentTemplateTarget;
class ExperimentTemplateTargetFilter {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ExperimentTemplateTargetFilter = ExperimentTemplateTargetFilter;
class S3Configuration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.S3Configuration = S3Configuration;
class ExperimentTemplate extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::FIS::ExperimentTemplate', properties);
    }
}
exports.default = ExperimentTemplate;
ExperimentTemplate.CloudWatchLogsConfiguration = CloudWatchLogsConfiguration;
ExperimentTemplate.ExperimentTemplateAction = ExperimentTemplateAction;
ExperimentTemplate.ExperimentTemplateLogConfiguration = ExperimentTemplateLogConfiguration;
ExperimentTemplate.ExperimentTemplateStopCondition = ExperimentTemplateStopCondition;
ExperimentTemplate.ExperimentTemplateTarget = ExperimentTemplateTarget;
ExperimentTemplate.ExperimentTemplateTargetFilter = ExperimentTemplateTargetFilter;
ExperimentTemplate.S3Configuration = S3Configuration;
