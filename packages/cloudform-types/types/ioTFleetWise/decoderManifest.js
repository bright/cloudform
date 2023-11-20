"use strict";
/* Generated from:
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignalDecodersItems = exports.ObdSignal = exports.ObdInterface = exports.NetworkInterfacesItems = exports.CanSignal = exports.CanInterface = void 0;
const resource_1 = require("../resource");
class CanInterface {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CanInterface = CanInterface;
class CanSignal {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CanSignal = CanSignal;
class NetworkInterfacesItems {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.NetworkInterfacesItems = NetworkInterfacesItems;
class ObdInterface {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ObdInterface = ObdInterface;
class ObdSignal {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ObdSignal = ObdSignal;
class SignalDecodersItems {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SignalDecodersItems = SignalDecodersItems;
class DecoderManifest extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::IoTFleetWise::DecoderManifest', properties);
    }
}
exports.default = DecoderManifest;
DecoderManifest.CanInterface = CanInterface;
DecoderManifest.CanSignal = CanSignal;
DecoderManifest.NetworkInterfacesItems = NetworkInterfacesItems;
DecoderManifest.ObdInterface = ObdInterface;
DecoderManifest.ObdSignal = ObdSignal;
DecoderManifest.SignalDecodersItems = SignalDecodersItems;
