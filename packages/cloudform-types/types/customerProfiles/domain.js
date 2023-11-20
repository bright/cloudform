"use strict";
/* Generated from:
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.S3ExportingConfig = exports.RuleBasedMatching = exports.MatchingRule = exports.Matching = exports.JobSchedule = exports.ExportingConfig = exports.DomainStats = exports.Consolidation = exports.ConflictResolution = exports.AutoMerging = exports.AttributeTypesSelector = void 0;
const resource_1 = require("../resource");
class AttributeTypesSelector {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AttributeTypesSelector = AttributeTypesSelector;
class AutoMerging {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AutoMerging = AutoMerging;
class ConflictResolution {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ConflictResolution = ConflictResolution;
class Consolidation {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Consolidation = Consolidation;
class DomainStats {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DomainStats = DomainStats;
class ExportingConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ExportingConfig = ExportingConfig;
class JobSchedule {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.JobSchedule = JobSchedule;
class Matching {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Matching = Matching;
class MatchingRule {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.MatchingRule = MatchingRule;
class RuleBasedMatching {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RuleBasedMatching = RuleBasedMatching;
class S3ExportingConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.S3ExportingConfig = S3ExportingConfig;
class Domain extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::CustomerProfiles::Domain', properties);
    }
}
exports.default = Domain;
Domain.AttributeTypesSelector = AttributeTypesSelector;
Domain.AutoMerging = AutoMerging;
Domain.ConflictResolution = ConflictResolution;
Domain.Consolidation = Consolidation;
Domain.DomainStats = DomainStats;
Domain.ExportingConfig = ExportingConfig;
Domain.JobSchedule = JobSchedule;
Domain.Matching = Matching;
Domain.MatchingRule = MatchingRule;
Domain.RuleBasedMatching = RuleBasedMatching;
Domain.S3ExportingConfig = S3ExportingConfig;
