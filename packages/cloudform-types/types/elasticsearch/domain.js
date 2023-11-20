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
exports.ZoneAwarenessConfig = exports.VPCOptions = exports.SnapshotOptions = exports.NodeToNodeEncryptionOptions = exports.MasterUserOptions = exports.LogPublishingOption = exports.EncryptionAtRestOptions = exports.ElasticsearchClusterConfig = exports.EBSOptions = exports.DomainEndpointOptions = exports.ColdStorageOptions = exports.CognitoOptions = exports.AdvancedSecurityOptionsInput = void 0;
const resource_1 = require("../resource");
class AdvancedSecurityOptionsInput {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AdvancedSecurityOptionsInput = AdvancedSecurityOptionsInput;
class CognitoOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CognitoOptions = CognitoOptions;
class ColdStorageOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ColdStorageOptions = ColdStorageOptions;
class DomainEndpointOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DomainEndpointOptions = DomainEndpointOptions;
class EBSOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.EBSOptions = EBSOptions;
class ElasticsearchClusterConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ElasticsearchClusterConfig = ElasticsearchClusterConfig;
class EncryptionAtRestOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.EncryptionAtRestOptions = EncryptionAtRestOptions;
class LogPublishingOption {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.LogPublishingOption = LogPublishingOption;
class MasterUserOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.MasterUserOptions = MasterUserOptions;
class NodeToNodeEncryptionOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.NodeToNodeEncryptionOptions = NodeToNodeEncryptionOptions;
class SnapshotOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SnapshotOptions = SnapshotOptions;
class VPCOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.VPCOptions = VPCOptions;
class ZoneAwarenessConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ZoneAwarenessConfig = ZoneAwarenessConfig;
class Domain extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::Elasticsearch::Domain', properties || {});
    }
}
exports.default = Domain;
Domain.AdvancedSecurityOptionsInput = AdvancedSecurityOptionsInput;
Domain.CognitoOptions = CognitoOptions;
Domain.ColdStorageOptions = ColdStorageOptions;
Domain.DomainEndpointOptions = DomainEndpointOptions;
Domain.EBSOptions = EBSOptions;
Domain.ElasticsearchClusterConfig = ElasticsearchClusterConfig;
Domain.EncryptionAtRestOptions = EncryptionAtRestOptions;
Domain.LogPublishingOption = LogPublishingOption;
Domain.MasterUserOptions = MasterUserOptions;
Domain.NodeToNodeEncryptionOptions = NodeToNodeEncryptionOptions;
Domain.SnapshotOptions = SnapshotOptions;
Domain.VPCOptions = VPCOptions;
Domain.ZoneAwarenessConfig = ZoneAwarenessConfig;
