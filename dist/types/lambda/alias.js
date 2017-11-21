"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class Alias extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::Lambda::Alias', properties, dependsOn);
    }
}
exports.default = Alias;
