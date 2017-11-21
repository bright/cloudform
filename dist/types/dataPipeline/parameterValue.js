"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class ParameterValue extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::DataPipeline::ParameterValue', properties, dependsOn);
    }
}
exports.default = ParameterValue;
