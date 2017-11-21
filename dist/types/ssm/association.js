"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class Association extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::SSM::Association', properties, dependsOn);
    }
}
exports.default = Association;
