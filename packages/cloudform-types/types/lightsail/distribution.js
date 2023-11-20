"use strict";
/* Generated from:
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryStringObject = exports.InputOrigin = exports.HeaderObject = exports.CookieObject = exports.CacheSettings = exports.CacheBehaviorPerPath = exports.CacheBehavior = void 0;
const resource_1 = require("../resource");
class CacheBehavior {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CacheBehavior = CacheBehavior;
class CacheBehaviorPerPath {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CacheBehaviorPerPath = CacheBehaviorPerPath;
class CacheSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CacheSettings = CacheSettings;
class CookieObject {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CookieObject = CookieObject;
class HeaderObject {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.HeaderObject = HeaderObject;
class InputOrigin {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.InputOrigin = InputOrigin;
class QueryStringObject {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.QueryStringObject = QueryStringObject;
class Distribution extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::Lightsail::Distribution', properties);
    }
}
exports.default = Distribution;
Distribution.CacheBehavior = CacheBehavior;
Distribution.CacheBehaviorPerPath = CacheBehaviorPerPath;
Distribution.CacheSettings = CacheSettings;
Distribution.CookieObject = CookieObject;
Distribution.HeaderObject = HeaderObject;
Distribution.InputOrigin = InputOrigin;
Distribution.QueryStringObject = QueryStringObject;
