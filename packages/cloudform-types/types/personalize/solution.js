"use strict";
/* Generated from:
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SolutionConfig = exports.IntegerHyperParameterRange = exports.HpoResourceConfig = exports.HpoObjective = exports.HpoConfig = exports.ContinuousHyperParameterRange = exports.CategoricalHyperParameterRange = exports.AutoMLConfig = exports.AlgorithmHyperParameterRanges = void 0;
const resource_1 = require("../resource");
class AlgorithmHyperParameterRanges {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AlgorithmHyperParameterRanges = AlgorithmHyperParameterRanges;
class AutoMLConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AutoMLConfig = AutoMLConfig;
class CategoricalHyperParameterRange {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CategoricalHyperParameterRange = CategoricalHyperParameterRange;
class ContinuousHyperParameterRange {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ContinuousHyperParameterRange = ContinuousHyperParameterRange;
class HpoConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.HpoConfig = HpoConfig;
class HpoObjective {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.HpoObjective = HpoObjective;
class HpoResourceConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.HpoResourceConfig = HpoResourceConfig;
class IntegerHyperParameterRange {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.IntegerHyperParameterRange = IntegerHyperParameterRange;
class SolutionConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SolutionConfig = SolutionConfig;
class Solution extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::Personalize::Solution', properties);
    }
}
exports.default = Solution;
Solution.AlgorithmHyperParameterRanges = AlgorithmHyperParameterRanges;
Solution.AutoMLConfig = AutoMLConfig;
Solution.CategoricalHyperParameterRange = CategoricalHyperParameterRange;
Solution.ContinuousHyperParameterRange = ContinuousHyperParameterRange;
Solution.HpoConfig = HpoConfig;
Solution.HpoObjective = HpoObjective;
Solution.HpoResourceConfig = HpoResourceConfig;
Solution.IntegerHyperParameterRange = IntegerHyperParameterRange;
Solution.SolutionConfig = SolutionConfig;
