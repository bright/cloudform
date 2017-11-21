"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class InviteMessageTemplate extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::Cognito::InviteMessageTemplate', properties, dependsOn);
    }
}
exports.default = InviteMessageTemplate;
