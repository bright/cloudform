"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class Certificate extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::CertificateManager::Certificate', properties, dependsOn);
    }
}
exports.default = Certificate;
