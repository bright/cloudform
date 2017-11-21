"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class MetricFilter extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::Logs::MetricFilter', properties, dependsOn);
    }
}
exports.default = MetricFilter;
