import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class AlgorithmHyperParameterRanges {
    IntegerHyperParameterRanges?: List<IntegerHyperParameterRange>;
    CategoricalHyperParameterRanges?: List<CategoricalHyperParameterRange>;
    ContinuousHyperParameterRanges?: List<ContinuousHyperParameterRange>;
    constructor(properties: AlgorithmHyperParameterRanges);
}
export declare class AutoMLConfig {
    MetricName?: Value<string>;
    RecipeList?: List<Value<string>>;
    constructor(properties: AutoMLConfig);
}
export declare class CategoricalHyperParameterRange {
    Values?: List<Value<string>>;
    Name?: Value<string>;
    constructor(properties: CategoricalHyperParameterRange);
}
export declare class ContinuousHyperParameterRange {
    MinValue?: Value<number>;
    MaxValue?: Value<number>;
    Name?: Value<string>;
    constructor(properties: ContinuousHyperParameterRange);
}
export declare class HpoConfig {
    HpoResourceConfig?: HpoResourceConfig;
    AlgorithmHyperParameterRanges?: AlgorithmHyperParameterRanges;
    HpoObjective?: HpoObjective;
    constructor(properties: HpoConfig);
}
export declare class HpoObjective {
    MetricName?: Value<string>;
    Type?: Value<string>;
    MetricRegex?: Value<string>;
    constructor(properties: HpoObjective);
}
export declare class HpoResourceConfig {
    MaxParallelTrainingJobs?: Value<string>;
    MaxNumberOfTrainingJobs?: Value<string>;
    constructor(properties: HpoResourceConfig);
}
export declare class IntegerHyperParameterRange {
    MinValue?: Value<number>;
    MaxValue?: Value<number>;
    Name?: Value<string>;
    constructor(properties: IntegerHyperParameterRange);
}
export declare class SolutionConfig {
    EventValueThreshold?: Value<string>;
    HpoConfig?: HpoConfig;
    AlgorithmHyperParameters?: {
        [key: string]: Value<string>;
    };
    FeatureTransformationParameters?: {
        [key: string]: Value<string>;
    };
    AutoMLConfig?: AutoMLConfig;
    constructor(properties: SolutionConfig);
}
export interface SolutionProperties {
    PerformAutoML?: Value<boolean>;
    PerformHPO?: Value<boolean>;
    EventType?: Value<string>;
    DatasetGroupArn: Value<string>;
    SolutionConfig?: SolutionConfig;
    RecipeArn?: Value<string>;
    Name: Value<string>;
}
export default class Solution extends ResourceBase<SolutionProperties> {
    static AlgorithmHyperParameterRanges: typeof AlgorithmHyperParameterRanges;
    static AutoMLConfig: typeof AutoMLConfig;
    static CategoricalHyperParameterRange: typeof CategoricalHyperParameterRange;
    static ContinuousHyperParameterRange: typeof ContinuousHyperParameterRange;
    static HpoConfig: typeof HpoConfig;
    static HpoObjective: typeof HpoObjective;
    static HpoResourceConfig: typeof HpoResourceConfig;
    static IntegerHyperParameterRange: typeof IntegerHyperParameterRange;
    static SolutionConfig: typeof SolutionConfig;
    constructor(properties: SolutionProperties);
}
