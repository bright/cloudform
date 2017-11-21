"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class Dimension extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::CloudWatch::Dimension', properties, dependsOn);
    }
}
exports.default = Dimension;
