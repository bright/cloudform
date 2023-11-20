"use strict";
/* Generated from:
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuiteDefinitionConfiguration = exports.DeviceUnderTest = void 0;
const resource_1 = require("../resource");
class DeviceUnderTest {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DeviceUnderTest = DeviceUnderTest;
class SuiteDefinitionConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SuiteDefinitionConfiguration = SuiteDefinitionConfiguration;
class SuiteDefinition extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::IoTCoreDeviceAdvisor::SuiteDefinition', properties);
    }
}
exports.default = SuiteDefinition;
SuiteDefinition.DeviceUnderTest = DeviceUnderTest;
SuiteDefinition.SuiteDefinitionConfiguration = SuiteDefinitionConfiguration;
