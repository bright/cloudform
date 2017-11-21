"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class Source extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::CodeBuild::Source', properties, dependsOn);
    }
}
exports.default = Source;
