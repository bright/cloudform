"use strict";
/* Generated from:
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Schema = exports.S3Configuration = exports.RetentionProperties = exports.PartitionKey = exports.MagneticStoreWriteProperties = exports.MagneticStoreRejectedDataLocation = void 0;
const resource_1 = require("../resource");
class MagneticStoreRejectedDataLocation {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.MagneticStoreRejectedDataLocation = MagneticStoreRejectedDataLocation;
class MagneticStoreWriteProperties {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.MagneticStoreWriteProperties = MagneticStoreWriteProperties;
class PartitionKey {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PartitionKey = PartitionKey;
class RetentionProperties {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RetentionProperties = RetentionProperties;
class S3Configuration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.S3Configuration = S3Configuration;
class Schema {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Schema = Schema;
class Table extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::Timestream::Table', properties);
    }
}
exports.default = Table;
Table.MagneticStoreRejectedDataLocation = MagneticStoreRejectedDataLocation;
Table.MagneticStoreWriteProperties = MagneticStoreWriteProperties;
Table.PartitionKey = PartitionKey;
Table.RetentionProperties = RetentionProperties;
Table.S3Configuration = S3Configuration;
Table.Schema = Schema;
