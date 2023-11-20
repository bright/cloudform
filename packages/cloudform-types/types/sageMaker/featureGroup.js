"use strict";
/* Generated from:
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-3 (https://d2zq80gdmjim8k.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
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
exports.S3StorageConfig = exports.OnlineStoreSecurityConfig = exports.OnlineStoreConfig = exports.OfflineStoreConfig = exports.FeatureDefinition = exports.DataCatalogConfig = void 0;
const resource_1 = require("../resource");
class DataCatalogConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DataCatalogConfig = DataCatalogConfig;
class FeatureDefinition {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.FeatureDefinition = FeatureDefinition;
class OfflineStoreConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.OfflineStoreConfig = OfflineStoreConfig;
class OnlineStoreConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.OnlineStoreConfig = OnlineStoreConfig;
class OnlineStoreSecurityConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.OnlineStoreSecurityConfig = OnlineStoreSecurityConfig;
class S3StorageConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.S3StorageConfig = S3StorageConfig;
class FeatureGroup extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::SageMaker::FeatureGroup', properties);
    }
}
exports.default = FeatureGroup;
FeatureGroup.DataCatalogConfig = DataCatalogConfig;
FeatureGroup.FeatureDefinition = FeatureDefinition;
FeatureGroup.OfflineStoreConfig = OfflineStoreConfig;
FeatureGroup.OnlineStoreConfig = OnlineStoreConfig;
FeatureGroup.OnlineStoreSecurityConfig = OnlineStoreSecurityConfig;
FeatureGroup.S3StorageConfig = S3StorageConfig;
