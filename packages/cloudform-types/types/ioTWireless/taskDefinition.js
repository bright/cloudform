"use strict";
/* Generated from:
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class UpdateWirelessGatewayTaskCreate {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.UpdateWirelessGatewayTaskCreate = UpdateWirelessGatewayTaskCreate;
class LoRaWANUpdateGatewayTaskEntry {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.LoRaWANUpdateGatewayTaskEntry = LoRaWANUpdateGatewayTaskEntry;
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
class TaskDefinition extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::IoTWireless::TaskDefinition', properties);
    }
}
exports.default = TaskDefinition;
TaskDefinition.UpdateWirelessGatewayTaskCreate = UpdateWirelessGatewayTaskCreate;
TaskDefinition.LoRaWANUpdateGatewayTaskEntry = LoRaWANUpdateGatewayTaskEntry;
TaskDefinition.LoRaWANGatewayVersion = LoRaWANGatewayVersion;
TaskDefinition.LoRaWANUpdateGatewayTaskCreate = LoRaWANUpdateGatewayTaskCreate;
