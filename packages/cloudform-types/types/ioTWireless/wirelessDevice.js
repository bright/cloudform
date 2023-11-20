"use strict";
/* Generated from:
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionKeysAbpV11 = exports.SessionKeysAbpV10x = exports.OtaaV11 = exports.OtaaV10x = exports.LoRaWANDevice = exports.AbpV11 = exports.AbpV10x = void 0;
const resource_1 = require("../resource");
class AbpV10x {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AbpV10x = AbpV10x;
class AbpV11 {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AbpV11 = AbpV11;
class LoRaWANDevice {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.LoRaWANDevice = LoRaWANDevice;
class OtaaV10x {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.OtaaV10x = OtaaV10x;
class OtaaV11 {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.OtaaV11 = OtaaV11;
class SessionKeysAbpV10x {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SessionKeysAbpV10x = SessionKeysAbpV10x;
class SessionKeysAbpV11 {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SessionKeysAbpV11 = SessionKeysAbpV11;
class WirelessDevice extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::IoTWireless::WirelessDevice', properties);
    }
}
exports.default = WirelessDevice;
WirelessDevice.AbpV10x = AbpV10x;
WirelessDevice.AbpV11 = AbpV11;
WirelessDevice.LoRaWANDevice = LoRaWANDevice;
WirelessDevice.OtaaV10x = OtaaV10x;
WirelessDevice.OtaaV11 = OtaaV11;
WirelessDevice.SessionKeysAbpV10x = SessionKeysAbpV10x;
WirelessDevice.SessionKeysAbpV11 = SessionKeysAbpV11;
