"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class CustomCookbooksSource extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::OpsWorks::CustomCookbooksSource', properties, dependsOn);
    }
}
exports.default = CustomCookbooksSource;
