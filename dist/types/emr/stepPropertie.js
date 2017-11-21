"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class StepPropertie extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::EMR::StepPropertie', properties, dependsOn);
    }
}
exports.default = StepPropertie;
