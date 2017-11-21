"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class LoginProfile extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::IAM::LoginProfile', properties, dependsOn);
    }
}
exports.default = LoginProfile;
