"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class Scope extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::Config::Scope', properties, dependsOn);
    }
}
exports.default = Scope;
