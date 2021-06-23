"use strict";
/* Generated from:
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class ComponentPlatform {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ComponentPlatform = ComponentPlatform;
class LambdaContainerParams {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.LambdaContainerParams = LambdaContainerParams;
class LambdaVolumeMount {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.LambdaVolumeMount = LambdaVolumeMount;
class LambdaFunctionRecipeSource {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.LambdaFunctionRecipeSource = LambdaFunctionRecipeSource;
class ComponentDependencyRequirement {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ComponentDependencyRequirement = ComponentDependencyRequirement;
class LambdaDeviceMount {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.LambdaDeviceMount = LambdaDeviceMount;
class LambdaLinuxProcessParams {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.LambdaLinuxProcessParams = LambdaLinuxProcessParams;
class LambdaEventSource {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.LambdaEventSource = LambdaEventSource;
class LambdaExecutionParameters {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.LambdaExecutionParameters = LambdaExecutionParameters;
class ComponentVersion extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::GreengrassV2::ComponentVersion', properties || {});
    }
}
exports.default = ComponentVersion;
ComponentVersion.ComponentPlatform = ComponentPlatform;
ComponentVersion.LambdaContainerParams = LambdaContainerParams;
ComponentVersion.LambdaVolumeMount = LambdaVolumeMount;
ComponentVersion.LambdaFunctionRecipeSource = LambdaFunctionRecipeSource;
ComponentVersion.ComponentDependencyRequirement = ComponentDependencyRequirement;
ComponentVersion.LambdaDeviceMount = LambdaDeviceMount;
ComponentVersion.LambdaLinuxProcessParams = LambdaLinuxProcessParams;
ComponentVersion.LambdaEventSource = LambdaEventSource;
ComponentVersion.LambdaExecutionParameters = LambdaExecutionParameters;
