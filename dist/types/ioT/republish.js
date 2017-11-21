"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class Republish extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::IoT::Republish', properties, dependsOn);
    }
}
exports.default = Republish;
