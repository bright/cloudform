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
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.VpcConfig = exports.DocumentReaderConfig = exports.DocumentClassifierOutputDataConfig = exports.DocumentClassifierInputDataConfig = exports.DocumentClassifierDocuments = exports.AugmentedManifestsListItem = void 0;
const resource_1 = require("../resource");
class AugmentedManifestsListItem {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AugmentedManifestsListItem = AugmentedManifestsListItem;
class DocumentClassifierDocuments {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DocumentClassifierDocuments = DocumentClassifierDocuments;
class DocumentClassifierInputDataConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DocumentClassifierInputDataConfig = DocumentClassifierInputDataConfig;
class DocumentClassifierOutputDataConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DocumentClassifierOutputDataConfig = DocumentClassifierOutputDataConfig;
class DocumentReaderConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DocumentReaderConfig = DocumentReaderConfig;
class VpcConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.VpcConfig = VpcConfig;
class DocumentClassifier extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::Comprehend::DocumentClassifier', properties);
    }
}
exports.default = DocumentClassifier;
DocumentClassifier.AugmentedManifestsListItem = AugmentedManifestsListItem;
DocumentClassifier.DocumentClassifierDocuments = DocumentClassifierDocuments;
DocumentClassifier.DocumentClassifierInputDataConfig = DocumentClassifierInputDataConfig;
DocumentClassifier.DocumentClassifierOutputDataConfig = DocumentClassifierOutputDataConfig;
DocumentClassifier.DocumentReaderConfig = DocumentReaderConfig;
DocumentClassifier.VpcConfig = VpcConfig;
