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
exports.SystemsManagerAgent = exports.InstanceBlockDeviceMapping = exports.EbsInstanceBlockDeviceSpecification = exports.ComponentParameter = exports.ComponentConfiguration = exports.AdditionalInstanceConfiguration = void 0;
const resource_1 = require("../resource");
class AdditionalInstanceConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AdditionalInstanceConfiguration = AdditionalInstanceConfiguration;
class ComponentConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ComponentConfiguration = ComponentConfiguration;
class ComponentParameter {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ComponentParameter = ComponentParameter;
class EbsInstanceBlockDeviceSpecification {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.EbsInstanceBlockDeviceSpecification = EbsInstanceBlockDeviceSpecification;
class InstanceBlockDeviceMapping {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.InstanceBlockDeviceMapping = InstanceBlockDeviceMapping;
class SystemsManagerAgent {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SystemsManagerAgent = SystemsManagerAgent;
class ImageRecipe extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::ImageBuilder::ImageRecipe', properties);
    }
}
exports.default = ImageRecipe;
ImageRecipe.AdditionalInstanceConfiguration = AdditionalInstanceConfiguration;
ImageRecipe.ComponentConfiguration = ComponentConfiguration;
ImageRecipe.ComponentParameter = ComponentParameter;
ImageRecipe.EbsInstanceBlockDeviceSpecification = EbsInstanceBlockDeviceSpecification;
ImageRecipe.InstanceBlockDeviceMapping = InstanceBlockDeviceMapping;
ImageRecipe.SystemsManagerAgent = SystemsManagerAgent;
