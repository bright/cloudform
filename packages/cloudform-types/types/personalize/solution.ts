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
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export class AlgorithmHyperParameterRanges {
    IntegerHyperParameterRanges?: List<IntegerHyperParameterRange>
    CategoricalHyperParameterRanges?: List<CategoricalHyperParameterRange>
    ContinuousHyperParameterRanges?: List<ContinuousHyperParameterRange>

    constructor(properties: AlgorithmHyperParameterRanges) {
        Object.assign(this, properties)
    }
}

export class AutoMLConfig {
    MetricName?: Value<string>
    RecipeList?: List<Value<string>>

    constructor(properties: AutoMLConfig) {
        Object.assign(this, properties)
    }
}

export class CategoricalHyperParameterRange {
    Values?: List<Value<string>>
    Name?: Value<string>

    constructor(properties: CategoricalHyperParameterRange) {
        Object.assign(this, properties)
    }
}

export class ContinuousHyperParameterRange {
    MinValue?: Value<number>
    MaxValue?: Value<number>
    Name?: Value<string>

    constructor(properties: ContinuousHyperParameterRange) {
        Object.assign(this, properties)
    }
}

export class HpoConfig {
    HpoResourceConfig?: HpoResourceConfig
    AlgorithmHyperParameterRanges?: AlgorithmHyperParameterRanges
    HpoObjective?: HpoObjective

    constructor(properties: HpoConfig) {
        Object.assign(this, properties)
    }
}

export class HpoObjective {
    MetricName?: Value<string>
    Type?: Value<string>
    MetricRegex?: Value<string>

    constructor(properties: HpoObjective) {
        Object.assign(this, properties)
    }
}

export class HpoResourceConfig {
    MaxParallelTrainingJobs?: Value<string>
    MaxNumberOfTrainingJobs?: Value<string>

    constructor(properties: HpoResourceConfig) {
        Object.assign(this, properties)
    }
}

export class IntegerHyperParameterRange {
    MinValue?: Value<number>
    MaxValue?: Value<number>
    Name?: Value<string>

    constructor(properties: IntegerHyperParameterRange) {
        Object.assign(this, properties)
    }
}

export class SolutionConfig {
    EventValueThreshold?: Value<string>
    HpoConfig?: HpoConfig
    AlgorithmHyperParameters?: {[key: string]: Value<string>}
    FeatureTransformationParameters?: {[key: string]: Value<string>}
    AutoMLConfig?: AutoMLConfig

    constructor(properties: SolutionConfig) {
        Object.assign(this, properties)
    }
}

export interface SolutionProperties {
    PerformAutoML?: Value<boolean>
    PerformHPO?: Value<boolean>
    EventType?: Value<string>
    DatasetGroupArn: Value<string>
    SolutionConfig?: SolutionConfig
    RecipeArn?: Value<string>
    Name: Value<string>
}

export default class Solution extends ResourceBase<SolutionProperties> {
    static AlgorithmHyperParameterRanges = AlgorithmHyperParameterRanges
    static AutoMLConfig = AutoMLConfig
    static CategoricalHyperParameterRange = CategoricalHyperParameterRange
    static ContinuousHyperParameterRange = ContinuousHyperParameterRange
    static HpoConfig = HpoConfig
    static HpoObjective = HpoObjective
    static HpoResourceConfig = HpoResourceConfig
    static IntegerHyperParameterRange = IntegerHyperParameterRange
    static SolutionConfig = SolutionConfig

    constructor(properties: SolutionProperties) {
        super('AWS::Personalize::Solution', properties)
    }
}
