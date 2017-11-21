"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class SqlInjectionMatchTuples extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::WAF::SqlInjectionMatchTuples', properties, dependsOn);
    }
}
exports.default = SqlInjectionMatchTuples;
