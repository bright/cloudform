"use strict";
/* Generated from:
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.5.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.5.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.5.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.5.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.5.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.5.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.5.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class User {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.User = User;
class MaintenanceWindow {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.MaintenanceWindow = MaintenanceWindow;
class ConfigurationId {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ConfigurationId = ConfigurationId;
class Broker extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::AmazonMQ::Broker', properties);
    }
}
Broker.User = User;
Broker.MaintenanceWindow = MaintenanceWindow;
Broker.ConfigurationId = ConfigurationId;
exports.default = Broker;
