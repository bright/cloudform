"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class Targets extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::Events::Targets', properties, dependsOn);
    }
}
exports.default = Targets;
