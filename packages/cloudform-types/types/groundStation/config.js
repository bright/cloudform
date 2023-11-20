"use strict";
/* Generated from:
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.UplinkSpectrumConfig = exports.UplinkEchoConfig = exports.TrackingConfig = exports.SpectrumConfig = exports.S3RecordingConfig = exports.FrequencyBandwidth = exports.Frequency = exports.Eirp = exports.DemodulationConfig = exports.DecodeConfig = exports.DataflowEndpointConfig = exports.ConfigData = exports.AntennaUplinkConfig = exports.AntennaDownlinkDemodDecodeConfig = exports.AntennaDownlinkConfig = void 0;
const resource_1 = require("../resource");
class AntennaDownlinkConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AntennaDownlinkConfig = AntennaDownlinkConfig;
class AntennaDownlinkDemodDecodeConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AntennaDownlinkDemodDecodeConfig = AntennaDownlinkDemodDecodeConfig;
class AntennaUplinkConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AntennaUplinkConfig = AntennaUplinkConfig;
class ConfigData {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ConfigData = ConfigData;
class DataflowEndpointConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DataflowEndpointConfig = DataflowEndpointConfig;
class DecodeConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DecodeConfig = DecodeConfig;
class DemodulationConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DemodulationConfig = DemodulationConfig;
class Eirp {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Eirp = Eirp;
class Frequency {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Frequency = Frequency;
class FrequencyBandwidth {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.FrequencyBandwidth = FrequencyBandwidth;
class S3RecordingConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.S3RecordingConfig = S3RecordingConfig;
class SpectrumConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SpectrumConfig = SpectrumConfig;
class TrackingConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TrackingConfig = TrackingConfig;
class UplinkEchoConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.UplinkEchoConfig = UplinkEchoConfig;
class UplinkSpectrumConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.UplinkSpectrumConfig = UplinkSpectrumConfig;
class Config extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::GroundStation::Config', properties);
    }
}
exports.default = Config;
Config.AntennaDownlinkConfig = AntennaDownlinkConfig;
Config.AntennaDownlinkDemodDecodeConfig = AntennaDownlinkDemodDecodeConfig;
Config.AntennaUplinkConfig = AntennaUplinkConfig;
Config.ConfigData = ConfigData;
Config.DataflowEndpointConfig = DataflowEndpointConfig;
Config.DecodeConfig = DecodeConfig;
Config.DemodulationConfig = DemodulationConfig;
Config.Eirp = Eirp;
Config.Frequency = Frequency;
Config.FrequencyBandwidth = FrequencyBandwidth;
Config.S3RecordingConfig = S3RecordingConfig;
Config.SpectrumConfig = SpectrumConfig;
Config.TrackingConfig = TrackingConfig;
Config.UplinkEchoConfig = UplinkEchoConfig;
Config.UplinkSpectrumConfig = UplinkSpectrumConfig;
