"use strict";
/* Generated from:
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SourceConfiguration = exports.ServerSideEncryptionConfiguration = exports.RenderingConfiguration = exports.AppIntegrationsConfiguration = void 0;
const resource_1 = require("../resource");
class AppIntegrationsConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AppIntegrationsConfiguration = AppIntegrationsConfiguration;
class RenderingConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RenderingConfiguration = RenderingConfiguration;
class ServerSideEncryptionConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ServerSideEncryptionConfiguration = ServerSideEncryptionConfiguration;
class SourceConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SourceConfiguration = SourceConfiguration;
class KnowledgeBase extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::Wisdom::KnowledgeBase', properties);
    }
}
exports.default = KnowledgeBase;
KnowledgeBase.AppIntegrationsConfiguration = AppIntegrationsConfiguration;
KnowledgeBase.RenderingConfiguration = RenderingConfiguration;
KnowledgeBase.ServerSideEncryptionConfiguration = ServerSideEncryptionConfiguration;
KnowledgeBase.SourceConfiguration = SourceConfiguration;
