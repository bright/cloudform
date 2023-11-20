"use strict";
/* Generated from:
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.S3Destination = exports.DataDeliveryObject = exports.AppConfigResourceObject = void 0;
const resource_1 = require("../resource");
class AppConfigResourceObject {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AppConfigResourceObject = AppConfigResourceObject;
class DataDeliveryObject {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DataDeliveryObject = DataDeliveryObject;
class S3Destination {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.S3Destination = S3Destination;
class Project extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::Evidently::Project', properties);
    }
}
exports.default = Project;
Project.AppConfigResourceObject = AppConfigResourceObject;
Project.DataDeliveryObject = DataDeliveryObject;
Project.S3Destination = S3Destination;
