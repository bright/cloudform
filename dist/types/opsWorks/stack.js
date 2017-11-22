"use strict";
/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class Source extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::OpsWorks::Source', properties, dependsOn);
    }
}
exports.Source = Source;
class ChefConfiguration extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::OpsWorks::ChefConfiguration', properties, dependsOn);
    }
}
exports.ChefConfiguration = ChefConfiguration;
class StackConfigurationManager extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::OpsWorks::StackConfigurationManager', properties, dependsOn);
    }
}
exports.StackConfigurationManager = StackConfigurationManager;
class RdsDbInstance extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::OpsWorks::RdsDbInstance', properties, dependsOn);
    }
}
exports.RdsDbInstance = RdsDbInstance;
class ElasticIp extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::OpsWorks::ElasticIp', properties, dependsOn);
    }
}
exports.ElasticIp = ElasticIp;
class Stack extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::OpsWorks::Stack', properties, dependsOn);
    }
}
exports.default = Stack;
