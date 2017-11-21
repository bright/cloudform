"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class ConfigSnapshotDeliveryProperties extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::Config::ConfigSnapshotDeliveryProperties', properties, dependsOn);
    }
}
exports.default = ConfigSnapshotDeliveryProperties;
