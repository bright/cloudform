"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class Firehose extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::IoT::Firehose', properties, dependsOn);
    }
}
exports.default = Firehose;
