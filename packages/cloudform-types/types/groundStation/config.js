"use strict";
/* Generated from:
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class S3RecordingConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.S3RecordingConfig = S3RecordingConfig;
class UplinkEchoConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.UplinkEchoConfig = UplinkEchoConfig;
class DataflowEndpointConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DataflowEndpointConfig = DataflowEndpointConfig;
class AntennaDownlinkConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AntennaDownlinkConfig = AntennaDownlinkConfig;
class DemodulationConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DemodulationConfig = DemodulationConfig;
class AntennaDownlinkDemodDecodeConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AntennaDownlinkDemodDecodeConfig = AntennaDownlinkDemodDecodeConfig;
class UplinkSpectrumConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.UplinkSpectrumConfig = UplinkSpectrumConfig;
class Frequency {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Frequency = Frequency;
class SpectrumConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SpectrumConfig = SpectrumConfig;
class FrequencyBandwidth {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.FrequencyBandwidth = FrequencyBandwidth;
class TrackingConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TrackingConfig = TrackingConfig;
class ConfigData {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ConfigData = ConfigData;
class AntennaUplinkConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AntennaUplinkConfig = AntennaUplinkConfig;
class DecodeConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DecodeConfig = DecodeConfig;
class Eirp {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Eirp = Eirp;
class Config extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::GroundStation::Config', properties);
    }
}
exports.default = Config;
Config.S3RecordingConfig = S3RecordingConfig;
Config.UplinkEchoConfig = UplinkEchoConfig;
Config.DataflowEndpointConfig = DataflowEndpointConfig;
Config.AntennaDownlinkConfig = AntennaDownlinkConfig;
Config.DemodulationConfig = DemodulationConfig;
Config.AntennaDownlinkDemodDecodeConfig = AntennaDownlinkDemodDecodeConfig;
Config.UplinkSpectrumConfig = UplinkSpectrumConfig;
Config.Frequency = Frequency;
Config.SpectrumConfig = SpectrumConfig;
Config.FrequencyBandwidth = FrequencyBandwidth;
Config.TrackingConfig = TrackingConfig;
Config.ConfigData = ConfigData;
Config.AntennaUplinkConfig = AntennaUplinkConfig;
Config.DecodeConfig = DecodeConfig;
Config.Eirp = Eirp;
