"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class SslConfiguration extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::OpsWorks::SslConfiguration', properties, dependsOn);
    }
}
exports.default = SslConfiguration;
