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
exports.TaskInvocationParameters = exports.Target = exports.NotificationConfig = exports.MaintenanceWindowStepFunctionsParameters = exports.MaintenanceWindowRunCommandParameters = exports.MaintenanceWindowLambdaParameters = exports.MaintenanceWindowAutomationParameters = exports.LoggingInfo = exports.CloudWatchOutputConfig = void 0;
const resource_1 = require("../resource");
class CloudWatchOutputConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CloudWatchOutputConfig = CloudWatchOutputConfig;
class LoggingInfo {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.LoggingInfo = LoggingInfo;
class MaintenanceWindowAutomationParameters {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.MaintenanceWindowAutomationParameters = MaintenanceWindowAutomationParameters;
class MaintenanceWindowLambdaParameters {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.MaintenanceWindowLambdaParameters = MaintenanceWindowLambdaParameters;
class MaintenanceWindowRunCommandParameters {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.MaintenanceWindowRunCommandParameters = MaintenanceWindowRunCommandParameters;
class MaintenanceWindowStepFunctionsParameters {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.MaintenanceWindowStepFunctionsParameters = MaintenanceWindowStepFunctionsParameters;
class NotificationConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.NotificationConfig = NotificationConfig;
class Target {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Target = Target;
class TaskInvocationParameters {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TaskInvocationParameters = TaskInvocationParameters;
class MaintenanceWindowTask extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::SSM::MaintenanceWindowTask', properties);
    }
}
exports.default = MaintenanceWindowTask;
MaintenanceWindowTask.CloudWatchOutputConfig = CloudWatchOutputConfig;
MaintenanceWindowTask.LoggingInfo = LoggingInfo;
MaintenanceWindowTask.MaintenanceWindowAutomationParameters = MaintenanceWindowAutomationParameters;
MaintenanceWindowTask.MaintenanceWindowLambdaParameters = MaintenanceWindowLambdaParameters;
MaintenanceWindowTask.MaintenanceWindowRunCommandParameters = MaintenanceWindowRunCommandParameters;
MaintenanceWindowTask.MaintenanceWindowStepFunctionsParameters = MaintenanceWindowStepFunctionsParameters;
MaintenanceWindowTask.NotificationConfig = NotificationConfig;
MaintenanceWindowTask.Target = Target;
MaintenanceWindowTask.TaskInvocationParameters = TaskInvocationParameters;
