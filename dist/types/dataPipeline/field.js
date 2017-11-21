"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class Field extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::DataPipeline::Field', properties, dependsOn);
    }
}
exports.default = Field;
