"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class Artifacts extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::CodeBuild::Artifacts', properties, dependsOn);
    }
}
exports.default = Artifacts;
