"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class Attribute extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::DataPipeline::Attribute', properties, dependsOn);
    }
}
exports.default = Attribute;
