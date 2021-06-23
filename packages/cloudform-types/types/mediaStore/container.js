"use strict";
/* Generated from:
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class MetricPolicy {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.MetricPolicy = MetricPolicy;
class MetricPolicyRule {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.MetricPolicyRule = MetricPolicyRule;
class CorsRule {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CorsRule = CorsRule;
class Container extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::MediaStore::Container', properties);
    }
}
exports.default = Container;
Container.MetricPolicy = MetricPolicy;
Container.MetricPolicyRule = MetricPolicyRule;
Container.CorsRule = CorsRule;
