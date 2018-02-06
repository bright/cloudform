"use strict";
/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.13.0 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class LifecycleHookSpecification {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.LifecycleHookSpecification = LifecycleHookSpecification;
class NotificationConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.NotificationConfiguration = NotificationConfiguration;
class MetricsCollection {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.MetricsCollection = MetricsCollection;
class TagProperty {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TagProperty = TagProperty;
class AutoScalingGroup extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::AutoScaling::AutoScalingGroup', properties);
    }
}
exports.default = AutoScalingGroup;
