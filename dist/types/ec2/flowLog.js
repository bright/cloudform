"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class FlowLog extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::EC2::FlowLog', properties, dependsOn);
    }
}
exports.default = FlowLog;
