"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class Topic extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::SNS::Topic', properties, dependsOn);
    }
}
exports.default = Topic;
