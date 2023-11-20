"use strict";
/* Generated from:
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProviderProperties = exports.IntermediateSourceConfiguration = exports.IdMappingWorkflowOutputSource = exports.IdMappingWorkflowInputSource = exports.IdMappingTechniques = void 0;
const resource_1 = require("../resource");
class IdMappingTechniques {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.IdMappingTechniques = IdMappingTechniques;
class IdMappingWorkflowInputSource {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.IdMappingWorkflowInputSource = IdMappingWorkflowInputSource;
class IdMappingWorkflowOutputSource {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.IdMappingWorkflowOutputSource = IdMappingWorkflowOutputSource;
class IntermediateSourceConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.IntermediateSourceConfiguration = IntermediateSourceConfiguration;
class ProviderProperties {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ProviderProperties = ProviderProperties;
class IdMappingWorkflow extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::EntityResolution::IdMappingWorkflow', properties);
    }
}
exports.default = IdMappingWorkflow;
IdMappingWorkflow.IdMappingTechniques = IdMappingTechniques;
IdMappingWorkflow.IdMappingWorkflowInputSource = IdMappingWorkflowInputSource;
IdMappingWorkflow.IdMappingWorkflowOutputSource = IdMappingWorkflowOutputSource;
IdMappingWorkflow.IntermediateSourceConfiguration = IntermediateSourceConfiguration;
IdMappingWorkflow.ProviderProperties = ProviderProperties;
