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
exports.StreamSelection = exports.SpekeKeyProvider = exports.MssPackage = exports.MssManifest = exports.MssEncryption = exports.HlsPackage = exports.HlsManifest = exports.HlsEncryption = exports.EncryptionContractConfiguration = exports.DashPackage = exports.DashManifest = exports.DashEncryption = exports.CmafPackage = exports.CmafEncryption = void 0;
const resource_1 = require("../resource");
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
class DashManifest {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DashManifest = DashManifest;
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
class MssManifest {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.MssManifest = MssManifest;
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
class PackagingConfiguration extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::MediaPackage::PackagingConfiguration', properties);
    }
}
exports.default = PackagingConfiguration;
PackagingConfiguration.CmafEncryption = CmafEncryption;
PackagingConfiguration.CmafPackage = CmafPackage;
PackagingConfiguration.DashEncryption = DashEncryption;
PackagingConfiguration.DashManifest = DashManifest;
PackagingConfiguration.DashPackage = DashPackage;
PackagingConfiguration.EncryptionContractConfiguration = EncryptionContractConfiguration;
PackagingConfiguration.HlsEncryption = HlsEncryption;
PackagingConfiguration.HlsManifest = HlsManifest;
PackagingConfiguration.HlsPackage = HlsPackage;
PackagingConfiguration.MssEncryption = MssEncryption;
PackagingConfiguration.MssManifest = MssManifest;
PackagingConfiguration.MssPackage = MssPackage;
PackagingConfiguration.SpekeKeyProvider = SpekeKeyProvider;
PackagingConfiguration.StreamSelection = StreamSelection;
