"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class OptionConfigurations extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::RDS::OptionConfigurations', properties, dependsOn);
    }
}
exports.default = OptionConfigurations;
