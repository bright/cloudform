"use strict";
/* Generated from:
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectAttributes = exports.RemoveAttributes = exports.Math = exports.Lambda = exports.Filter = exports.DeviceShadowEnrich = exports.DeviceRegistryEnrich = exports.Datastore = exports.Channel = exports.AddAttributes = exports.Activity = void 0;
const resource_1 = require("../resource");
class Activity {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Activity = Activity;
class AddAttributes {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AddAttributes = AddAttributes;
class Channel {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Channel = Channel;
class Datastore {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Datastore = Datastore;
class DeviceRegistryEnrich {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DeviceRegistryEnrich = DeviceRegistryEnrich;
class DeviceShadowEnrich {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DeviceShadowEnrich = DeviceShadowEnrich;
class Filter {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Filter = Filter;
class Lambda {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Lambda = Lambda;
class Math {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Math = Math;
class RemoveAttributes {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RemoveAttributes = RemoveAttributes;
class SelectAttributes {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SelectAttributes = SelectAttributes;
class Pipeline extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::IoTAnalytics::Pipeline', properties);
    }
}
exports.default = Pipeline;
Pipeline.Activity = Activity;
Pipeline.AddAttributes = AddAttributes;
Pipeline.Channel = Channel;
Pipeline.Datastore = Datastore;
Pipeline.DeviceRegistryEnrich = DeviceRegistryEnrich;
Pipeline.DeviceShadowEnrich = DeviceShadowEnrich;
Pipeline.Filter = Filter;
Pipeline.Lambda = Lambda;
Pipeline.Math = Math;
Pipeline.RemoveAttributes = RemoveAttributes;
Pipeline.SelectAttributes = SelectAttributes;
