"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class EBSOptions extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::Elasticsearch::EBSOptions', properties, dependsOn);
    }
}
exports.default = EBSOptions;
