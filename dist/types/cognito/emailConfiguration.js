"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class EmailConfiguration extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::Cognito::EmailConfiguration', properties, dependsOn);
    }
}
exports.default = EmailConfiguration;
