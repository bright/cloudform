"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class GitHubLocation extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::CodeDeploy::GitHubLocation', properties, dependsOn);
    }
}
exports.default = GitHubLocation;
