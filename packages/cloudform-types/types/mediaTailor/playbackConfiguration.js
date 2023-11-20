"use strict";
/* Generated from:
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManifestProcessingRules = exports.LivePreRollConfiguration = exports.HlsConfiguration = exports.DashConfiguration = exports.CdnConfiguration = exports.Bumper = exports.AvailSuppression = exports.AdMarkerPassthrough = void 0;
const resource_1 = require("../resource");
class AdMarkerPassthrough {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AdMarkerPassthrough = AdMarkerPassthrough;
class AvailSuppression {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AvailSuppression = AvailSuppression;
class Bumper {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Bumper = Bumper;
class CdnConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CdnConfiguration = CdnConfiguration;
class DashConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DashConfiguration = DashConfiguration;
class HlsConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.HlsConfiguration = HlsConfiguration;
class LivePreRollConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.LivePreRollConfiguration = LivePreRollConfiguration;
class ManifestProcessingRules {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ManifestProcessingRules = ManifestProcessingRules;
class PlaybackConfiguration extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::MediaTailor::PlaybackConfiguration', properties);
    }
}
exports.default = PlaybackConfiguration;
PlaybackConfiguration.AdMarkerPassthrough = AdMarkerPassthrough;
PlaybackConfiguration.AvailSuppression = AvailSuppression;
PlaybackConfiguration.Bumper = Bumper;
PlaybackConfiguration.CdnConfiguration = CdnConfiguration;
PlaybackConfiguration.DashConfiguration = DashConfiguration;
PlaybackConfiguration.HlsConfiguration = HlsConfiguration;
PlaybackConfiguration.LivePreRollConfiguration = LivePreRollConfiguration;
PlaybackConfiguration.ManifestProcessingRules = ManifestProcessingRules;
