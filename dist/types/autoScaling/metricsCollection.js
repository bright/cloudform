"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class MetricsCollection extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::AutoScaling::MetricsCollection', properties, dependsOn);
    }
}
exports.default = MetricsCollection;
