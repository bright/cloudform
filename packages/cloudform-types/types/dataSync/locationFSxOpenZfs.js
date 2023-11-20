"use strict";
/* Generated from:
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Protocol = exports.NFS = exports.MountOptions = void 0;
const resource_1 = require("../resource");
class MountOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.MountOptions = MountOptions;
class NFS {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.NFS = NFS;
class Protocol {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Protocol = Protocol;
class LocationFSxOpenZFS extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::DataSync::LocationFSxOpenZFS', properties);
    }
}
exports.default = LocationFSxOpenZFS;
LocationFSxOpenZFS.MountOptions = MountOptions;
LocationFSxOpenZFS.NFS = NFS;
LocationFSxOpenZFS.Protocol = Protocol;
