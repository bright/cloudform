"use strict";
/* Generated from:
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class Metadata {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Metadata = Metadata;
class EventFilter {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.EventFilter = EventFilter;
class EventIntegrationAssociation {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.EventIntegrationAssociation = EventIntegrationAssociation;
class EventIntegration extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::AppIntegrations::EventIntegration', properties);
    }
}
exports.default = EventIntegration;
EventIntegration.Metadata = Metadata;
EventIntegration.EventFilter = EventFilter;
EventIntegration.EventIntegrationAssociation = EventIntegrationAssociation;
