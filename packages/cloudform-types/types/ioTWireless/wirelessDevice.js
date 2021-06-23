"use strict";
/* Generated from:
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
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
class SessionKeysAbpV11 {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SessionKeysAbpV11 = SessionKeysAbpV11;
class AbpV10x {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AbpV10x = AbpV10x;
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
class OtaaV10x {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.OtaaV10x = OtaaV10x;
class WirelessDevice extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::IoTWireless::WirelessDevice', properties);
    }
}
exports.default = WirelessDevice;
WirelessDevice.AbpV11 = AbpV11;
WirelessDevice.LoRaWANDevice = LoRaWANDevice;
WirelessDevice.SessionKeysAbpV11 = SessionKeysAbpV11;
WirelessDevice.AbpV10x = AbpV10x;
WirelessDevice.OtaaV11 = OtaaV11;
WirelessDevice.SessionKeysAbpV10x = SessionKeysAbpV10x;
WirelessDevice.OtaaV10x = OtaaV10x;
