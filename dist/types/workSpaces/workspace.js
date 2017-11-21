"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class Workspace extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::WorkSpaces::Workspace', properties, dependsOn);
    }
}
exports.default = Workspace;
