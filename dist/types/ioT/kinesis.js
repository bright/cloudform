"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class Kinesis extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::IoT::Kinesis', properties, dependsOn);
    }
}
exports.default = Kinesis;
