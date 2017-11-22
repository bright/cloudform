"use strict";
/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class ShutdownEventConfiguration extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::OpsWorks::ShutdownEventConfiguration', properties, dependsOn);
    }
}
exports.ShutdownEventConfiguration = ShutdownEventConfiguration;
class VolumeConfiguration extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::OpsWorks::VolumeConfiguration', properties, dependsOn);
    }
}
exports.VolumeConfiguration = VolumeConfiguration;
class AutoScalingThresholds extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::OpsWorks::AutoScalingThresholds', properties, dependsOn);
    }
}
exports.AutoScalingThresholds = AutoScalingThresholds;
class Recipes extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::OpsWorks::Recipes', properties, dependsOn);
    }
}
exports.Recipes = Recipes;
class LifecycleEventConfiguration extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::OpsWorks::LifecycleEventConfiguration', properties, dependsOn);
    }
}
exports.LifecycleEventConfiguration = LifecycleEventConfiguration;
class LoadBasedAutoScaling extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::OpsWorks::LoadBasedAutoScaling', properties, dependsOn);
    }
}
exports.LoadBasedAutoScaling = LoadBasedAutoScaling;
class Layer extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::OpsWorks::Layer', properties, dependsOn);
    }
}
exports.default = Layer;
