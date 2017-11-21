"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class Repository extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::CodeCommit::Repository', properties, dependsOn);
    }
}
exports.default = Repository;
