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
exports.ZoneAwarenessConfig = exports.WindowStartTime = exports.VPCOptions = exports.SoftwareUpdateOptions = exports.SnapshotOptions = exports.ServiceSoftwareOptions = exports.SAMLOptions = exports.OffPeakWindowOptions = exports.OffPeakWindow = exports.NodeToNodeEncryptionOptions = exports.MasterUserOptions = exports.LogPublishingOption = exports.Idp = exports.EncryptionAtRestOptions = exports.EBSOptions = exports.DomainEndpointOptions = exports.CognitoOptions = exports.ClusterConfig = exports.AdvancedSecurityOptionsInput = void 0;
const resource_1 = require("../resource");
class AdvancedSecurityOptionsInput {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AdvancedSecurityOptionsInput = AdvancedSecurityOptionsInput;
class ClusterConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ClusterConfig = ClusterConfig;
class CognitoOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CognitoOptions = CognitoOptions;
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
class EncryptionAtRestOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.EncryptionAtRestOptions = EncryptionAtRestOptions;
class Idp {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Idp = Idp;
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
class OffPeakWindow {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.OffPeakWindow = OffPeakWindow;
class OffPeakWindowOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.OffPeakWindowOptions = OffPeakWindowOptions;
class SAMLOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SAMLOptions = SAMLOptions;
class ServiceSoftwareOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ServiceSoftwareOptions = ServiceSoftwareOptions;
class SnapshotOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SnapshotOptions = SnapshotOptions;
class SoftwareUpdateOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SoftwareUpdateOptions = SoftwareUpdateOptions;
class VPCOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.VPCOptions = VPCOptions;
class WindowStartTime {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.WindowStartTime = WindowStartTime;
class ZoneAwarenessConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ZoneAwarenessConfig = ZoneAwarenessConfig;
class Domain extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::OpenSearchService::Domain', properties || {});
    }
}
exports.default = Domain;
Domain.AdvancedSecurityOptionsInput = AdvancedSecurityOptionsInput;
Domain.ClusterConfig = ClusterConfig;
Domain.CognitoOptions = CognitoOptions;
Domain.DomainEndpointOptions = DomainEndpointOptions;
Domain.EBSOptions = EBSOptions;
Domain.EncryptionAtRestOptions = EncryptionAtRestOptions;
Domain.Idp = Idp;
Domain.LogPublishingOption = LogPublishingOption;
Domain.MasterUserOptions = MasterUserOptions;
Domain.NodeToNodeEncryptionOptions = NodeToNodeEncryptionOptions;
Domain.OffPeakWindow = OffPeakWindow;
Domain.OffPeakWindowOptions = OffPeakWindowOptions;
Domain.SAMLOptions = SAMLOptions;
Domain.ServiceSoftwareOptions = ServiceSoftwareOptions;
Domain.SnapshotOptions = SnapshotOptions;
Domain.SoftwareUpdateOptions = SoftwareUpdateOptions;
Domain.VPCOptions = VPCOptions;
Domain.WindowStartTime = WindowStartTime;
Domain.ZoneAwarenessConfig = ZoneAwarenessConfig;
