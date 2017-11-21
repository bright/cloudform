"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class ClientCertificate extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::ApiGateway::ClientCertificate', properties, dependsOn);
    }
}
exports.default = ClientCertificate;
