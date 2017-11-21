"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class Application extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::EMR::Application', properties, dependsOn);
    }
}
exports.default = Application;
