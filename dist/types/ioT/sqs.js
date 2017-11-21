"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class Sqs extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::IoT::Sqs', properties, dependsOn);
    }
}
exports.default = Sqs;
