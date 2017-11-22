"use strict";
/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class LifecycleHookSpecification extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::AutoScaling::LifecycleHookSpecification', properties, dependsOn);
    }
}
exports.LifecycleHookSpecification = LifecycleHookSpecification;
class NotificationConfiguration extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::AutoScaling::NotificationConfiguration', properties, dependsOn);
    }
}
exports.NotificationConfiguration = NotificationConfiguration;
class MetricsCollection extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::AutoScaling::MetricsCollection', properties, dependsOn);
    }
}
exports.MetricsCollection = MetricsCollection;
class TagProperty extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::AutoScaling::TagProperty', properties, dependsOn);
    }
}
exports.TagProperty = TagProperty;
class AutoScalingGroup extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::AutoScaling::AutoScalingGroup', properties, dependsOn);
    }
}
exports.default = AutoScalingGroup;
