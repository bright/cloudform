"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class Instances extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::EMR::Instances', properties, dependsOn);
    }
}
exports.default = Instances;
