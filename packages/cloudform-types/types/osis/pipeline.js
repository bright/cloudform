"use strict";
/* Generated from:
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.VpcOptions = exports.VpcEndpoint = exports.LogPublishingOptions = exports.CloudWatchLogDestination = void 0;
const resource_1 = require("../resource");
class CloudWatchLogDestination {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CloudWatchLogDestination = CloudWatchLogDestination;
class LogPublishingOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.LogPublishingOptions = LogPublishingOptions;
class VpcEndpoint {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.VpcEndpoint = VpcEndpoint;
class VpcOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.VpcOptions = VpcOptions;
class Pipeline extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::OSIS::Pipeline', properties);
    }
}
exports.default = Pipeline;
Pipeline.CloudWatchLogDestination = CloudWatchLogDestination;
Pipeline.LogPublishingOptions = LogPublishingOptions;
Pipeline.VpcEndpoint = VpcEndpoint;
Pipeline.VpcOptions = VpcOptions;
