"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class EncryptionConfiguration extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::KinesisFirehose::EncryptionConfiguration', properties, dependsOn);
    }
}
exports.default = EncryptionConfiguration;
