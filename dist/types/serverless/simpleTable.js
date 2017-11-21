"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class SimpleTable extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::Serverless::SimpleTable', properties, dependsOn);
    }
}
exports.default = SimpleTable;
