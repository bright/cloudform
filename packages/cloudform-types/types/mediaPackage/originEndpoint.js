"use strict";
/* Generated from:
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
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
exports.StreamSelection = exports.SpekeKeyProvider = exports.MssPackage = exports.MssEncryption = exports.HlsPackage = exports.HlsManifest = exports.HlsEncryption = exports.EncryptionContractConfiguration = exports.DashPackage = exports.DashEncryption = exports.CmafPackage = exports.CmafEncryption = exports.Authorization = void 0;
const resource_1 = require("../resource");
class Authorization {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Authorization = Authorization;
class CmafEncryption {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CmafEncryption = CmafEncryption;
class CmafPackage {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CmafPackage = CmafPackage;
class DashEncryption {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DashEncryption = DashEncryption;
class DashPackage {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DashPackage = DashPackage;
class EncryptionContractConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.EncryptionContractConfiguration = EncryptionContractConfiguration;
class HlsEncryption {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.HlsEncryption = HlsEncryption;
class HlsManifest {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.HlsManifest = HlsManifest;
class HlsPackage {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.HlsPackage = HlsPackage;
class MssEncryption {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.MssEncryption = MssEncryption;
class MssPackage {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.MssPackage = MssPackage;
class SpekeKeyProvider {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SpekeKeyProvider = SpekeKeyProvider;
class StreamSelection {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.StreamSelection = StreamSelection;
class OriginEndpoint extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::MediaPackage::OriginEndpoint', properties);
    }
}
exports.default = OriginEndpoint;
OriginEndpoint.Authorization = Authorization;
OriginEndpoint.CmafEncryption = CmafEncryption;
OriginEndpoint.CmafPackage = CmafPackage;
OriginEndpoint.DashEncryption = DashEncryption;
OriginEndpoint.DashPackage = DashPackage;
OriginEndpoint.EncryptionContractConfiguration = EncryptionContractConfiguration;
OriginEndpoint.HlsEncryption = HlsEncryption;
OriginEndpoint.HlsManifest = HlsManifest;
OriginEndpoint.HlsPackage = HlsPackage;
OriginEndpoint.MssEncryption = MssEncryption;
OriginEndpoint.MssPackage = MssPackage;
OriginEndpoint.SpekeKeyProvider = SpekeKeyProvider;
OriginEndpoint.StreamSelection = StreamSelection;
