"use strict";
/* Generated from:
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThumbnailConfiguration = exports.S3DestinationConfiguration = exports.RenditionConfiguration = exports.DestinationConfiguration = void 0;
const resource_1 = require("../resource");
class DestinationConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DestinationConfiguration = DestinationConfiguration;
class RenditionConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RenditionConfiguration = RenditionConfiguration;
class S3DestinationConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.S3DestinationConfiguration = S3DestinationConfiguration;
class ThumbnailConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ThumbnailConfiguration = ThumbnailConfiguration;
class RecordingConfiguration extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::IVS::RecordingConfiguration', properties);
    }
}
exports.default = RecordingConfiguration;
RecordingConfiguration.DestinationConfiguration = DestinationConfiguration;
RecordingConfiguration.RenditionConfiguration = RenditionConfiguration;
RecordingConfiguration.S3DestinationConfiguration = S3DestinationConfiguration;
RecordingConfiguration.ThumbnailConfiguration = ThumbnailConfiguration;
