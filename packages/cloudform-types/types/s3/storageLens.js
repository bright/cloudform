"use strict";
/* Generated from:
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.StorageLensGroupSelectionCriteria = exports.StorageLensGroupLevel = exports.StorageLensConfiguration = exports.SelectionCriteria = exports.SSEKMS = exports.S3BucketDestination = exports.PrefixLevelStorageMetrics = exports.PrefixLevel = exports.Encryption = exports.DetailedStatusCodesMetrics = exports.DataExport = exports.CloudWatchMetrics = exports.BucketsAndRegions = exports.BucketLevel = exports.AwsOrg = exports.AdvancedDataProtectionMetrics = exports.AdvancedCostOptimizationMetrics = exports.ActivityMetrics = exports.AccountLevel = void 0;
const resource_1 = require("../resource");
class AccountLevel {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AccountLevel = AccountLevel;
class ActivityMetrics {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ActivityMetrics = ActivityMetrics;
class AdvancedCostOptimizationMetrics {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AdvancedCostOptimizationMetrics = AdvancedCostOptimizationMetrics;
class AdvancedDataProtectionMetrics {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AdvancedDataProtectionMetrics = AdvancedDataProtectionMetrics;
class AwsOrg {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AwsOrg = AwsOrg;
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
class CloudWatchMetrics {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CloudWatchMetrics = CloudWatchMetrics;
class DataExport {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DataExport = DataExport;
class DetailedStatusCodesMetrics {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DetailedStatusCodesMetrics = DetailedStatusCodesMetrics;
class Encryption {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Encryption = Encryption;
class PrefixLevel {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PrefixLevel = PrefixLevel;
class PrefixLevelStorageMetrics {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PrefixLevelStorageMetrics = PrefixLevelStorageMetrics;
class S3BucketDestination {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.S3BucketDestination = S3BucketDestination;
class SSEKMS {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SSEKMS = SSEKMS;
class SelectionCriteria {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SelectionCriteria = SelectionCriteria;
class StorageLensConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.StorageLensConfiguration = StorageLensConfiguration;
class StorageLensGroupLevel {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.StorageLensGroupLevel = StorageLensGroupLevel;
class StorageLensGroupSelectionCriteria {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.StorageLensGroupSelectionCriteria = StorageLensGroupSelectionCriteria;
class StorageLens extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::S3::StorageLens', properties);
    }
}
exports.default = StorageLens;
StorageLens.AccountLevel = AccountLevel;
StorageLens.ActivityMetrics = ActivityMetrics;
StorageLens.AdvancedCostOptimizationMetrics = AdvancedCostOptimizationMetrics;
StorageLens.AdvancedDataProtectionMetrics = AdvancedDataProtectionMetrics;
StorageLens.AwsOrg = AwsOrg;
StorageLens.BucketLevel = BucketLevel;
StorageLens.BucketsAndRegions = BucketsAndRegions;
StorageLens.CloudWatchMetrics = CloudWatchMetrics;
StorageLens.DataExport = DataExport;
StorageLens.DetailedStatusCodesMetrics = DetailedStatusCodesMetrics;
StorageLens.Encryption = Encryption;
StorageLens.PrefixLevel = PrefixLevel;
StorageLens.PrefixLevelStorageMetrics = PrefixLevelStorageMetrics;
StorageLens.S3BucketDestination = S3BucketDestination;
StorageLens.SSEKMS = SSEKMS;
StorageLens.SelectionCriteria = SelectionCriteria;
StorageLens.StorageLensConfiguration = StorageLensConfiguration;
StorageLens.StorageLensGroupLevel = StorageLensGroupLevel;
StorageLens.StorageLensGroupSelectionCriteria = StorageLensGroupSelectionCriteria;
