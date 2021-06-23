"use strict";
/* Generated from:
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class Greengrass {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Greengrass = Greengrass;
class GatewayCapabilitySummary {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.GatewayCapabilitySummary = GatewayCapabilitySummary;
class GatewayPlatform {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.GatewayPlatform = GatewayPlatform;
class Gateway extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::IoTSiteWise::Gateway', properties);
    }
}
exports.default = Gateway;
Gateway.Greengrass = Greengrass;
Gateway.GatewayCapabilitySummary = GatewayCapabilitySummary;
Gateway.GatewayPlatform = GatewayPlatform;
