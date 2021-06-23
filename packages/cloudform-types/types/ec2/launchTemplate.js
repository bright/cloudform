"use strict";
/* Generated from:
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-northeast-3 (https://d2zq80gdmjim8k.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class BlockDeviceMapping {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.BlockDeviceMapping = BlockDeviceMapping;
class SpotOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SpotOptions = SpotOptions;
class ElasticGpuSpecification {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ElasticGpuSpecification = ElasticGpuSpecification;
class TagSpecification {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TagSpecification = TagSpecification;
class Ebs {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Ebs = Ebs;
class EnclaveOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.EnclaveOptions = EnclaveOptions;
class LaunchTemplateData {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.LaunchTemplateData = LaunchTemplateData;
class MetadataOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.MetadataOptions = MetadataOptions;
class CapacityReservationSpecification {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CapacityReservationSpecification = CapacityReservationSpecification;
class CapacityReservationTarget {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CapacityReservationTarget = CapacityReservationTarget;
class CpuOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CpuOptions = CpuOptions;
class PrivateIpAdd {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PrivateIpAdd = PrivateIpAdd;
class IamInstanceProfile {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.IamInstanceProfile = IamInstanceProfile;
class LicenseSpecification {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.LicenseSpecification = LicenseSpecification;
class HibernationOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.HibernationOptions = HibernationOptions;
class InstanceMarketOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.InstanceMarketOptions = InstanceMarketOptions;
class CreditSpecification {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CreditSpecification = CreditSpecification;
class Monitoring {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Monitoring = Monitoring;
class Placement {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Placement = Placement;
class Ipv6Add {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Ipv6Add = Ipv6Add;
class NetworkInterface {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.NetworkInterface = NetworkInterface;
class LaunchTemplateElasticInferenceAccelerator {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.LaunchTemplateElasticInferenceAccelerator = LaunchTemplateElasticInferenceAccelerator;
class LaunchTemplateTagSpecification {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.LaunchTemplateTagSpecification = LaunchTemplateTagSpecification;
class LaunchTemplate extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::EC2::LaunchTemplate', properties || {});
    }
}
exports.default = LaunchTemplate;
LaunchTemplate.BlockDeviceMapping = BlockDeviceMapping;
LaunchTemplate.SpotOptions = SpotOptions;
LaunchTemplate.ElasticGpuSpecification = ElasticGpuSpecification;
LaunchTemplate.TagSpecification = TagSpecification;
LaunchTemplate.Ebs = Ebs;
LaunchTemplate.EnclaveOptions = EnclaveOptions;
LaunchTemplate.LaunchTemplateData = LaunchTemplateData;
LaunchTemplate.MetadataOptions = MetadataOptions;
LaunchTemplate.CapacityReservationSpecification = CapacityReservationSpecification;
LaunchTemplate.CapacityReservationTarget = CapacityReservationTarget;
LaunchTemplate.CpuOptions = CpuOptions;
LaunchTemplate.PrivateIpAdd = PrivateIpAdd;
LaunchTemplate.IamInstanceProfile = IamInstanceProfile;
LaunchTemplate.LicenseSpecification = LicenseSpecification;
LaunchTemplate.HibernationOptions = HibernationOptions;
LaunchTemplate.InstanceMarketOptions = InstanceMarketOptions;
LaunchTemplate.CreditSpecification = CreditSpecification;
LaunchTemplate.Monitoring = Monitoring;
LaunchTemplate.Placement = Placement;
LaunchTemplate.Ipv6Add = Ipv6Add;
LaunchTemplate.NetworkInterface = NetworkInterface;
LaunchTemplate.LaunchTemplateElasticInferenceAccelerator = LaunchTemplateElasticInferenceAccelerator;
LaunchTemplate.LaunchTemplateTagSpecification = LaunchTemplateTagSpecification;
