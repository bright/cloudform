"use strict";
/* Generated from:
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.RuleBasedProperties = exports.Rule = exports.ResolutionTechniques = exports.ProviderProperties = exports.OutputSource = exports.OutputAttribute = exports.IntermediateSourceConfiguration = exports.InputSource = void 0;
const resource_1 = require("../resource");
class InputSource {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.InputSource = InputSource;
class IntermediateSourceConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.IntermediateSourceConfiguration = IntermediateSourceConfiguration;
class OutputAttribute {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.OutputAttribute = OutputAttribute;
class OutputSource {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.OutputSource = OutputSource;
class ProviderProperties {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ProviderProperties = ProviderProperties;
class ResolutionTechniques {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ResolutionTechniques = ResolutionTechniques;
class Rule {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Rule = Rule;
class RuleBasedProperties {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RuleBasedProperties = RuleBasedProperties;
class MatchingWorkflow extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::EntityResolution::MatchingWorkflow', properties);
    }
}
exports.default = MatchingWorkflow;
MatchingWorkflow.InputSource = InputSource;
MatchingWorkflow.IntermediateSourceConfiguration = IntermediateSourceConfiguration;
MatchingWorkflow.OutputAttribute = OutputAttribute;
MatchingWorkflow.OutputSource = OutputSource;
MatchingWorkflow.ProviderProperties = ProviderProperties;
MatchingWorkflow.ResolutionTechniques = ResolutionTechniques;
MatchingWorkflow.Rule = Rule;
MatchingWorkflow.RuleBasedProperties = RuleBasedProperties;
