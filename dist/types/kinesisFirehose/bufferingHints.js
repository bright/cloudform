"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class BufferingHints extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::KinesisFirehose::BufferingHints', properties, dependsOn);
    }
}
exports.default = BufferingHints;
