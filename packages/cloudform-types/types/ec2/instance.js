"use strict";
/* Generated from:
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * ap-northeast-3 (https://d2zq80gdmjim8k.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class Volume {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Volume = Volume;
class Ebs {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Ebs = Ebs;
class NoDevice {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.NoDevice = NoDevice;
class CreditSpecification {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CreditSpecification = CreditSpecification;
class ElasticGpuSpecification {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ElasticGpuSpecification = ElasticGpuSpecification;
class NetworkInterface {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.NetworkInterface = NetworkInterface;
class InstanceIpv6Address {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.InstanceIpv6Address = InstanceIpv6Address;
class AssociationParameter {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AssociationParameter = AssociationParameter;
class LaunchTemplateSpecification {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.LaunchTemplateSpecification = LaunchTemplateSpecification;
class LicenseSpecification {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.LicenseSpecification = LicenseSpecification;
class SsmAssociation {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SsmAssociation = SsmAssociation;
class ElasticInferenceAccelerator {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ElasticInferenceAccelerator = ElasticInferenceAccelerator;
class BlockDeviceMapping {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.BlockDeviceMapping = BlockDeviceMapping;
class PrivateIpAddressSpecification {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PrivateIpAddressSpecification = PrivateIpAddressSpecification;
class Instance extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::EC2::Instance', properties || {});
    }
}
Instance.Volume = Volume;
Instance.Ebs = Ebs;
Instance.NoDevice = NoDevice;
Instance.CreditSpecification = CreditSpecification;
Instance.ElasticGpuSpecification = ElasticGpuSpecification;
Instance.NetworkInterface = NetworkInterface;
Instance.InstanceIpv6Address = InstanceIpv6Address;
Instance.AssociationParameter = AssociationParameter;
Instance.LaunchTemplateSpecification = LaunchTemplateSpecification;
Instance.LicenseSpecification = LicenseSpecification;
Instance.SsmAssociation = SsmAssociation;
Instance.ElasticInferenceAccelerator = ElasticInferenceAccelerator;
Instance.BlockDeviceMapping = BlockDeviceMapping;
Instance.PrivateIpAddressSpecification = PrivateIpAddressSpecification;
exports.default = Instance;
