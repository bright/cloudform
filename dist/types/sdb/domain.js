"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class Domain extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::SDB::Domain', properties, dependsOn);
    }
}
exports.default = Domain;
