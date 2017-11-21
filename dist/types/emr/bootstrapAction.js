"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class BootstrapAction extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::EMR::BootstrapAction', properties, dependsOn);
    }
}
exports.default = BootstrapAction;
