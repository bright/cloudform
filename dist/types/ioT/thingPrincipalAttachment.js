"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class ThingPrincipalAttachment extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::IoT::ThingPrincipalAttachment', properties, dependsOn);
    }
}
exports.default = ThingPrincipalAttachment;
