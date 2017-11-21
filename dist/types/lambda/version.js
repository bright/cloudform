"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class Version extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::Lambda::Version', properties, dependsOn);
    }
}
exports.default = Version;
