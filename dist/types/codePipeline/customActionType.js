"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class CustomActionType extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::CodePipeline::CustomActionType', properties, dependsOn);
    }
}
exports.default = CustomActionType;
