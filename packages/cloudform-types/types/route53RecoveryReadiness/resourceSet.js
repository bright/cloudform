"use strict";
/* Generated from:
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.TargetResource = exports.Resource = exports.R53ResourceRecord = exports.NLBResource = exports.DNSTargetResource = void 0;
const resource_1 = require("../resource");
class DNSTargetResource {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DNSTargetResource = DNSTargetResource;
class NLBResource {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.NLBResource = NLBResource;
class R53ResourceRecord {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.R53ResourceRecord = R53ResourceRecord;
class Resource {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Resource = Resource;
class TargetResource {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TargetResource = TargetResource;
class ResourceSet extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::Route53RecoveryReadiness::ResourceSet', properties);
    }
}
exports.default = ResourceSet;
ResourceSet.DNSTargetResource = DNSTargetResource;
ResourceSet.NLBResource = NLBResource;
ResourceSet.R53ResourceRecord = R53ResourceRecord;
ResourceSet.Resource = Resource;
ResourceSet.TargetResource = TargetResource;
