"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class Document extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::SSM::Document', properties, dependsOn);
    }
}
exports.default = Document;
