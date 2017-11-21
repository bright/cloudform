"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class DeliveryStream extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::KinesisFirehose::DeliveryStream', properties, dependsOn);
    }
}
exports.default = DeliveryStream;
