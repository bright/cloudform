"use strict";
/* Generated from:
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.S3Destination = exports.NotificationChannel = exports.KinesisVideoStream = exports.KinesisDataStream = exports.FaceSearchSettings = exports.DataSharingPreference = exports.ConnectedHomeSettings = exports.BoundingBox = void 0;
const resource_1 = require("../resource");
class BoundingBox {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.BoundingBox = BoundingBox;
class ConnectedHomeSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ConnectedHomeSettings = ConnectedHomeSettings;
class DataSharingPreference {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DataSharingPreference = DataSharingPreference;
class FaceSearchSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.FaceSearchSettings = FaceSearchSettings;
class KinesisDataStream {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.KinesisDataStream = KinesisDataStream;
class KinesisVideoStream {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.KinesisVideoStream = KinesisVideoStream;
class NotificationChannel {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.NotificationChannel = NotificationChannel;
class S3Destination {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.S3Destination = S3Destination;
class StreamProcessor extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::Rekognition::StreamProcessor', properties);
    }
}
exports.default = StreamProcessor;
StreamProcessor.BoundingBox = BoundingBox;
StreamProcessor.ConnectedHomeSettings = ConnectedHomeSettings;
StreamProcessor.DataSharingPreference = DataSharingPreference;
StreamProcessor.FaceSearchSettings = FaceSearchSettings;
StreamProcessor.KinesisDataStream = KinesisDataStream;
StreamProcessor.KinesisVideoStream = KinesisVideoStream;
StreamProcessor.NotificationChannel = NotificationChannel;
StreamProcessor.S3Destination = S3Destination;
