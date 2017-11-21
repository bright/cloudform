"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class Alarm extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::CloudWatch::Alarm', properties, dependsOn);
    }
}
exports.default = Alarm;
