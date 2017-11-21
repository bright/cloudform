"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class RecordingGroup extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::Config::RecordingGroup', properties, dependsOn);
    }
}
exports.default = RecordingGroup;
