"use strict";
/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class SqlInjectionMatchTuple extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::WAF::SqlInjectionMatchTuple', properties, dependsOn);
    }
}
exports.SqlInjectionMatchTuple = SqlInjectionMatchTuple;
class FieldToMatch extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::WAF::FieldToMatch', properties, dependsOn);
    }
}
exports.FieldToMatch = FieldToMatch;
class SqlInjectionMatchSet extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::WAF::SqlInjectionMatchSet', properties, dependsOn);
    }
}
exports.default = SqlInjectionMatchSet;
