"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class RecordSetGroup extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::Route53::RecordSetGroup', properties, dependsOn);
    }
}
exports.default = RecordSetGroup;
