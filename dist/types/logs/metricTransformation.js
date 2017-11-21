"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class MetricTransformation extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::Logs::MetricTransformation', properties, dependsOn);
    }
}
exports.default = MetricTransformation;
