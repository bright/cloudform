"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class Target extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::SSM::Target', properties, dependsOn);
    }
}
exports.default = Target;
