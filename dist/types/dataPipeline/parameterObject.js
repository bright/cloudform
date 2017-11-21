"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class ParameterObject extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::DataPipeline::ParameterObject', properties, dependsOn);
    }
}
exports.default = ParameterObject;
