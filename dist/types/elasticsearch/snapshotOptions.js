"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class SnapshotOptions extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::Elasticsearch::SnapshotOptions', properties, dependsOn);
    }
}
exports.default = SnapshotOptions;
