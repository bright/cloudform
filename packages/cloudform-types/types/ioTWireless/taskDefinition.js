"use strict";
/* Generated from:
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateWirelessGatewayTaskCreate = exports.LoRaWANUpdateGatewayTaskEntry = exports.LoRaWANUpdateGatewayTaskCreate = exports.LoRaWANGatewayVersion = void 0;
const resource_1 = require("../resource");
class LoRaWANGatewayVersion {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.LoRaWANGatewayVersion = LoRaWANGatewayVersion;
class LoRaWANUpdateGatewayTaskCreate {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.LoRaWANUpdateGatewayTaskCreate = LoRaWANUpdateGatewayTaskCreate;
class LoRaWANUpdateGatewayTaskEntry {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.LoRaWANUpdateGatewayTaskEntry = LoRaWANUpdateGatewayTaskEntry;
class UpdateWirelessGatewayTaskCreate {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.UpdateWirelessGatewayTaskCreate = UpdateWirelessGatewayTaskCreate;
class TaskDefinition extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::IoTWireless::TaskDefinition', properties);
    }
}
exports.default = TaskDefinition;
TaskDefinition.LoRaWANGatewayVersion = LoRaWANGatewayVersion;
TaskDefinition.LoRaWANUpdateGatewayTaskCreate = LoRaWANUpdateGatewayTaskCreate;
TaskDefinition.LoRaWANUpdateGatewayTaskEntry = LoRaWANUpdateGatewayTaskEntry;
TaskDefinition.UpdateWirelessGatewayTaskCreate = UpdateWirelessGatewayTaskCreate;
