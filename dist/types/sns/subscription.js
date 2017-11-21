"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class Subscription extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::SNS::Subscription', properties, dependsOn);
    }
}
exports.default = Subscription;
