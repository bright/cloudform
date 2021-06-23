"use strict";
/* Generated from:
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class PrefixLevelStorageMetrics {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PrefixLevelStorageMetrics = PrefixLevelStorageMetrics;
class SelectionCriteria {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SelectionCriteria = SelectionCriteria;
class ActivityMetrics {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ActivityMetrics = ActivityMetrics;
class BucketLevel {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.BucketLevel = BucketLevel;
class BucketsAndRegions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.BucketsAndRegions = BucketsAndRegions;
class DataExport {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DataExport = DataExport;
class AwsOrg {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AwsOrg = AwsOrg;
class PrefixLevel {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PrefixLevel = PrefixLevel;
class S3BucketDestination {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.S3BucketDestination = S3BucketDestination;
class StorageLensConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.StorageLensConfiguration = StorageLensConfiguration;
class AccountLevel {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AccountLevel = AccountLevel;
class StorageLens extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::S3::StorageLens', properties);
    }
}
exports.default = StorageLens;
StorageLens.PrefixLevelStorageMetrics = PrefixLevelStorageMetrics;
StorageLens.SelectionCriteria = SelectionCriteria;
StorageLens.ActivityMetrics = ActivityMetrics;
StorageLens.BucketLevel = BucketLevel;
StorageLens.BucketsAndRegions = BucketsAndRegions;
StorageLens.DataExport = DataExport;
StorageLens.AwsOrg = AwsOrg;
StorageLens.PrefixLevel = PrefixLevel;
StorageLens.S3BucketDestination = S3BucketDestination;
StorageLens.StorageLensConfiguration = StorageLensConfiguration;
StorageLens.AccountLevel = AccountLevel;
