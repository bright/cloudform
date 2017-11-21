"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class ConfigRule extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::Config::ConfigRule', properties, dependsOn);
    }
}
exports.default = ConfigRule;
