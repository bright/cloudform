"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class Project extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::CodeBuild::Project', properties, dependsOn);
    }
}
exports.default = Project;
