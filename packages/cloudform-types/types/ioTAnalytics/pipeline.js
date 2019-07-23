"use strict";
/* Generated from:
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class DeviceShadowEnrich {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DeviceShadowEnrich = DeviceShadowEnrich;
class Lambda {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Lambda = Lambda;
class SelectAttributes {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SelectAttributes = SelectAttributes;
class Channel {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Channel = Channel;
class Filter {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Filter = Filter;
class Activity {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Activity = Activity;
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
class Datastore {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Datastore = Datastore;
class AddAttributes {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AddAttributes = AddAttributes;
class DeviceRegistryEnrich {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DeviceRegistryEnrich = DeviceRegistryEnrich;
class Pipeline extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::IoTAnalytics::Pipeline', properties);
    }
}
Pipeline.DeviceShadowEnrich = DeviceShadowEnrich;
Pipeline.Lambda = Lambda;
Pipeline.SelectAttributes = SelectAttributes;
Pipeline.Channel = Channel;
Pipeline.Filter = Filter;
Pipeline.Activity = Activity;
Pipeline.Math = Math;
Pipeline.RemoveAttributes = RemoveAttributes;
Pipeline.Datastore = Datastore;
Pipeline.AddAttributes = AddAttributes;
Pipeline.DeviceRegistryEnrich = DeviceRegistryEnrich;
exports.default = Pipeline;
