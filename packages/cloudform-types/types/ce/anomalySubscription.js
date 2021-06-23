"use strict";
/* Generated from:
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class Subscriber {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Subscriber = Subscriber;
class AnomalySubscription extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::CE::AnomalySubscription', properties);
    }
}
exports.default = AnomalySubscription;
AnomalySubscription.Subscriber = Subscriber;
