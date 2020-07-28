"use strict";
/* Generated from:
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * ap-northeast-3 (https://d2zq80gdmjim8k.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class DomainEndpointOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DomainEndpointOptions = DomainEndpointOptions;
class NodeToNodeEncryptionOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.NodeToNodeEncryptionOptions = NodeToNodeEncryptionOptions;
class ElasticsearchClusterConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ElasticsearchClusterConfig = ElasticsearchClusterConfig;
class SnapshotOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SnapshotOptions = SnapshotOptions;
class CognitoOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CognitoOptions = CognitoOptions;
class VPCOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.VPCOptions = VPCOptions;
class MasterUserOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.MasterUserOptions = MasterUserOptions;
class LogPublishingOption {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.LogPublishingOption = LogPublishingOption;
class AdvancedSecurityOptionsInput {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AdvancedSecurityOptionsInput = AdvancedSecurityOptionsInput;
class ZoneAwarenessConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ZoneAwarenessConfig = ZoneAwarenessConfig;
class EBSOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.EBSOptions = EBSOptions;
class EncryptionAtRestOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.EncryptionAtRestOptions = EncryptionAtRestOptions;
class Domain extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::Elasticsearch::Domain', properties || {});
    }
}
exports.default = Domain;
Domain.DomainEndpointOptions = DomainEndpointOptions;
Domain.NodeToNodeEncryptionOptions = NodeToNodeEncryptionOptions;
Domain.ElasticsearchClusterConfig = ElasticsearchClusterConfig;
Domain.SnapshotOptions = SnapshotOptions;
Domain.CognitoOptions = CognitoOptions;
Domain.VPCOptions = VPCOptions;
Domain.MasterUserOptions = MasterUserOptions;
Domain.LogPublishingOption = LogPublishingOption;
Domain.AdvancedSecurityOptionsInput = AdvancedSecurityOptionsInput;
Domain.ZoneAwarenessConfig = ZoneAwarenessConfig;
Domain.EBSOptions = EBSOptions;
Domain.EncryptionAtRestOptions = EncryptionAtRestOptions;
