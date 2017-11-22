"use strict";
/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class ApplicationResourceLifecycleConfig extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::ElasticBeanstalk::ApplicationResourceLifecycleConfig', properties, dependsOn);
    }
}
exports.ApplicationResourceLifecycleConfig = ApplicationResourceLifecycleConfig;
class ApplicationVersionLifecycleConfig extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::ElasticBeanstalk::ApplicationVersionLifecycleConfig', properties, dependsOn);
    }
}
exports.ApplicationVersionLifecycleConfig = ApplicationVersionLifecycleConfig;
class MaxCountRule extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::ElasticBeanstalk::MaxCountRule', properties, dependsOn);
    }
}
exports.MaxCountRule = MaxCountRule;
class MaxAgeRule extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::ElasticBeanstalk::MaxAgeRule', properties, dependsOn);
    }
}
exports.MaxAgeRule = MaxAgeRule;
class Application extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::ElasticBeanstalk::Application', properties, dependsOn);
    }
}
exports.default = Application;
