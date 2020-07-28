"use strict";
/* Generated from:
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.EbsInstanceBlockDeviceSpecification = exports.ComponentConfiguration = exports.InstanceBlockDeviceMapping = void 0;
const resource_1 = require("../resource");
class InstanceBlockDeviceMapping {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.InstanceBlockDeviceMapping = InstanceBlockDeviceMapping;
class ComponentConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ComponentConfiguration = ComponentConfiguration;
class EbsInstanceBlockDeviceSpecification {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.EbsInstanceBlockDeviceSpecification = EbsInstanceBlockDeviceSpecification;
class ImageRecipe extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::ImageBuilder::ImageRecipe', properties);
    }
}
exports.default = ImageRecipe;
ImageRecipe.InstanceBlockDeviceMapping = InstanceBlockDeviceMapping;
ImageRecipe.ComponentConfiguration = ComponentConfiguration;
ImageRecipe.EbsInstanceBlockDeviceSpecification = EbsInstanceBlockDeviceSpecification;
