"use strict";
/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class MaintenanceWindowLambdaParameters extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::SSM::MaintenanceWindowLambdaParameters', properties, dependsOn);
    }
}
exports.MaintenanceWindowLambdaParameters = MaintenanceWindowLambdaParameters;
class NotificationConfig extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::SSM::NotificationConfig', properties, dependsOn);
    }
}
exports.NotificationConfig = NotificationConfig;
class MaintenanceWindowAutomationParameters extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::SSM::MaintenanceWindowAutomationParameters', properties, dependsOn);
    }
}
exports.MaintenanceWindowAutomationParameters = MaintenanceWindowAutomationParameters;
class TaskInvocationParameters extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::SSM::TaskInvocationParameters', properties, dependsOn);
    }
}
exports.TaskInvocationParameters = TaskInvocationParameters;
class LoggingInfo extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::SSM::LoggingInfo', properties, dependsOn);
    }
}
exports.LoggingInfo = LoggingInfo;
class Target extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::SSM::Target', properties, dependsOn);
    }
}
exports.Target = Target;
class MaintenanceWindowStepFunctionsParameters extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::SSM::MaintenanceWindowStepFunctionsParameters', properties, dependsOn);
    }
}
exports.MaintenanceWindowStepFunctionsParameters = MaintenanceWindowStepFunctionsParameters;
class MaintenanceWindowRunCommandParameters extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::SSM::MaintenanceWindowRunCommandParameters', properties, dependsOn);
    }
}
exports.MaintenanceWindowRunCommandParameters = MaintenanceWindowRunCommandParameters;
class MaintenanceWindowTask extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::SSM::MaintenanceWindowTask', properties, dependsOn);
    }
}
exports.default = MaintenanceWindowTask;
