"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class DeliveryChannel extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::Config::DeliveryChannel', properties, dependsOn);
    }
}
exports.default = DeliveryChannel;
