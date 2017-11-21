"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class OptionSettings extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::RDS::OptionSettings', properties, dependsOn);
    }
}
exports.default = OptionSettings;
