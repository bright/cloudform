"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class EnvironmentVariable extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::CodeBuild::EnvironmentVariable', properties, dependsOn);
    }
}
exports.default = EnvironmentVariable;
