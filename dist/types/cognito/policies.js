"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class Policies extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::Cognito::Policies', properties, dependsOn);
    }
}
exports.default = Policies;
