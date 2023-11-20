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
exports.Volume = exports.SsmAssociation = exports.PrivateIpAddressSpecification = exports.PrivateDnsNameOptions = exports.NoDevice = exports.NetworkInterface = exports.LicenseSpecification = exports.LaunchTemplateSpecification = exports.InstanceIpv6Address = exports.HibernationOptions = exports.EnclaveOptions = exports.ElasticInferenceAccelerator = exports.ElasticGpuSpecification = exports.Ebs = exports.CreditSpecification = exports.CpuOptions = exports.BlockDeviceMapping = exports.AssociationParameter = void 0;
const resource_1 = require("../resource");
class AssociationParameter {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AssociationParameter = AssociationParameter;
class BlockDeviceMapping {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.BlockDeviceMapping = BlockDeviceMapping;
class CpuOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CpuOptions = CpuOptions;
class CreditSpecification {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CreditSpecification = CreditSpecification;
class Ebs {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Ebs = Ebs;
class ElasticGpuSpecification {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ElasticGpuSpecification = ElasticGpuSpecification;
class ElasticInferenceAccelerator {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ElasticInferenceAccelerator = ElasticInferenceAccelerator;
class EnclaveOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.EnclaveOptions = EnclaveOptions;
class HibernationOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.HibernationOptions = HibernationOptions;
class InstanceIpv6Address {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.InstanceIpv6Address = InstanceIpv6Address;
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
class NetworkInterface {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.NetworkInterface = NetworkInterface;
class NoDevice {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.NoDevice = NoDevice;
class PrivateDnsNameOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PrivateDnsNameOptions = PrivateDnsNameOptions;
class PrivateIpAddressSpecification {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PrivateIpAddressSpecification = PrivateIpAddressSpecification;
class SsmAssociation {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SsmAssociation = SsmAssociation;
class Volume {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Volume = Volume;
class Instance extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::EC2::Instance', properties || {});
    }
}
exports.default = Instance;
Instance.AssociationParameter = AssociationParameter;
Instance.BlockDeviceMapping = BlockDeviceMapping;
Instance.CpuOptions = CpuOptions;
Instance.CreditSpecification = CreditSpecification;
Instance.Ebs = Ebs;
Instance.ElasticGpuSpecification = ElasticGpuSpecification;
Instance.ElasticInferenceAccelerator = ElasticInferenceAccelerator;
Instance.EnclaveOptions = EnclaveOptions;
Instance.HibernationOptions = HibernationOptions;
Instance.InstanceIpv6Address = InstanceIpv6Address;
Instance.LaunchTemplateSpecification = LaunchTemplateSpecification;
Instance.LicenseSpecification = LicenseSpecification;
Instance.NetworkInterface = NetworkInterface;
Instance.NoDevice = NoDevice;
Instance.PrivateDnsNameOptions = PrivateDnsNameOptions;
Instance.PrivateIpAddressSpecification = PrivateIpAddressSpecification;
Instance.SsmAssociation = SsmAssociation;
Instance.Volume = Volume;
