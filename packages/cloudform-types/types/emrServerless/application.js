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
exports.WorkerTypeSpecificationInput = exports.WorkerConfiguration = exports.S3MonitoringConfiguration = exports.NetworkConfiguration = exports.MonitoringConfiguration = exports.MaximumAllowedResources = exports.ManagedPersistenceMonitoringConfiguration = exports.InitialCapacityConfigKeyValuePair = exports.InitialCapacityConfig = exports.ImageConfigurationInput = exports.ConfigurationObject = exports.AutoStopConfiguration = exports.AutoStartConfiguration = void 0;
const resource_1 = require("../resource");
class AutoStartConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AutoStartConfiguration = AutoStartConfiguration;
class AutoStopConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AutoStopConfiguration = AutoStopConfiguration;
class ConfigurationObject {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ConfigurationObject = ConfigurationObject;
class ImageConfigurationInput {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ImageConfigurationInput = ImageConfigurationInput;
class InitialCapacityConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.InitialCapacityConfig = InitialCapacityConfig;
class InitialCapacityConfigKeyValuePair {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.InitialCapacityConfigKeyValuePair = InitialCapacityConfigKeyValuePair;
class ManagedPersistenceMonitoringConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ManagedPersistenceMonitoringConfiguration = ManagedPersistenceMonitoringConfiguration;
class MaximumAllowedResources {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.MaximumAllowedResources = MaximumAllowedResources;
class MonitoringConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.MonitoringConfiguration = MonitoringConfiguration;
class NetworkConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.NetworkConfiguration = NetworkConfiguration;
class S3MonitoringConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.S3MonitoringConfiguration = S3MonitoringConfiguration;
class WorkerConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.WorkerConfiguration = WorkerConfiguration;
class WorkerTypeSpecificationInput {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.WorkerTypeSpecificationInput = WorkerTypeSpecificationInput;
class Application extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::EMRServerless::Application', properties);
    }
}
exports.default = Application;
Application.AutoStartConfiguration = AutoStartConfiguration;
Application.AutoStopConfiguration = AutoStopConfiguration;
Application.ConfigurationObject = ConfigurationObject;
Application.ImageConfigurationInput = ImageConfigurationInput;
Application.InitialCapacityConfig = InitialCapacityConfig;
Application.InitialCapacityConfigKeyValuePair = InitialCapacityConfigKeyValuePair;
Application.ManagedPersistenceMonitoringConfiguration = ManagedPersistenceMonitoringConfiguration;
Application.MaximumAllowedResources = MaximumAllowedResources;
Application.MonitoringConfiguration = MonitoringConfiguration;
Application.NetworkConfiguration = NetworkConfiguration;
Application.S3MonitoringConfiguration = S3MonitoringConfiguration;
Application.WorkerConfiguration = WorkerConfiguration;
Application.WorkerTypeSpecificationInput = WorkerTypeSpecificationInput;
