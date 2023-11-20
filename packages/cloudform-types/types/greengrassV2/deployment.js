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
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SystemResourceLimits = exports.IoTJobTimeoutConfig = exports.IoTJobRateIncreaseCriteria = exports.IoTJobExponentialRolloutRate = exports.IoTJobExecutionsRolloutConfig = exports.IoTJobAbortCriteria = exports.IoTJobAbortConfig = exports.DeploymentPolicies = exports.DeploymentIoTJobConfiguration = exports.DeploymentConfigurationValidationPolicy = exports.DeploymentComponentUpdatePolicy = exports.ComponentRunWith = exports.ComponentDeploymentSpecification = exports.ComponentConfigurationUpdate = void 0;
const resource_1 = require("../resource");
class ComponentConfigurationUpdate {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ComponentConfigurationUpdate = ComponentConfigurationUpdate;
class ComponentDeploymentSpecification {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ComponentDeploymentSpecification = ComponentDeploymentSpecification;
class ComponentRunWith {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ComponentRunWith = ComponentRunWith;
class DeploymentComponentUpdatePolicy {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DeploymentComponentUpdatePolicy = DeploymentComponentUpdatePolicy;
class DeploymentConfigurationValidationPolicy {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DeploymentConfigurationValidationPolicy = DeploymentConfigurationValidationPolicy;
class DeploymentIoTJobConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DeploymentIoTJobConfiguration = DeploymentIoTJobConfiguration;
class DeploymentPolicies {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DeploymentPolicies = DeploymentPolicies;
class IoTJobAbortConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.IoTJobAbortConfig = IoTJobAbortConfig;
class IoTJobAbortCriteria {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.IoTJobAbortCriteria = IoTJobAbortCriteria;
class IoTJobExecutionsRolloutConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.IoTJobExecutionsRolloutConfig = IoTJobExecutionsRolloutConfig;
class IoTJobExponentialRolloutRate {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.IoTJobExponentialRolloutRate = IoTJobExponentialRolloutRate;
class IoTJobRateIncreaseCriteria {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.IoTJobRateIncreaseCriteria = IoTJobRateIncreaseCriteria;
class IoTJobTimeoutConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.IoTJobTimeoutConfig = IoTJobTimeoutConfig;
class SystemResourceLimits {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SystemResourceLimits = SystemResourceLimits;
class Deployment extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::GreengrassV2::Deployment', properties);
    }
}
exports.default = Deployment;
Deployment.ComponentConfigurationUpdate = ComponentConfigurationUpdate;
Deployment.ComponentDeploymentSpecification = ComponentDeploymentSpecification;
Deployment.ComponentRunWith = ComponentRunWith;
Deployment.DeploymentComponentUpdatePolicy = DeploymentComponentUpdatePolicy;
Deployment.DeploymentConfigurationValidationPolicy = DeploymentConfigurationValidationPolicy;
Deployment.DeploymentIoTJobConfiguration = DeploymentIoTJobConfiguration;
Deployment.DeploymentPolicies = DeploymentPolicies;
Deployment.IoTJobAbortConfig = IoTJobAbortConfig;
Deployment.IoTJobAbortCriteria = IoTJobAbortCriteria;
Deployment.IoTJobExecutionsRolloutConfig = IoTJobExecutionsRolloutConfig;
Deployment.IoTJobExponentialRolloutRate = IoTJobExponentialRolloutRate;
Deployment.IoTJobRateIncreaseCriteria = IoTJobRateIncreaseCriteria;
Deployment.IoTJobTimeoutConfig = IoTJobTimeoutConfig;
Deployment.SystemResourceLimits = SystemResourceLimits;
