import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class SamplingRuleUpdate {
    Attributes?: {
        [key: string]: Value<string>;
    };
    FixedRate?: Value<number>;
    Host?: Value<string>;
    HTTPMethod?: Value<string>;
    Priority?: Value<number>;
    ReservoirSize?: Value<number>;
    ResourceARN?: Value<string>;
    RuleARN?: Value<string>;
    RuleName?: Value<string>;
    ServiceName?: Value<string>;
    ServiceType?: Value<string>;
    URLPath?: Value<string>;
    constructor(properties: SamplingRuleUpdate);
}
export declare class SamplingRuleRecord {
    CreatedAt?: Value<string>;
    ModifiedAt?: Value<string>;
    SamplingRule?: SamplingRule;
    constructor(properties: SamplingRuleRecord);
}
export declare class SamplingRuleInner {
    Attributes?: {
        [key: string]: Value<string>;
    };
    FixedRate?: Value<number>;
    Host?: Value<string>;
    HTTPMethod?: Value<string>;
    Priority?: Value<number>;
    ReservoirSize?: Value<number>;
    ResourceARN?: Value<string>;
    RuleARN?: Value<string>;
    RuleName?: Value<string>;
    ServiceName?: Value<string>;
    ServiceType?: Value<string>;
    URLPath?: Value<string>;
    Version?: Value<number>;
    constructor(properties: SamplingRuleInner);
}
export interface SamplingRuleProperties {
    SamplingRule?: SamplingRule;
    SamplingRuleRecord?: SamplingRuleRecord;
    SamplingRuleUpdate?: SamplingRuleUpdate;
    RuleName?: Value<string>;
    Tags?: List<{
        [key: string]: any;
    }>;
}
export default class SamplingRule extends ResourceBase<SamplingRuleProperties> {
    static SamplingRuleUpdate: typeof SamplingRuleUpdate;
    static SamplingRuleRecord: typeof SamplingRuleRecord;
    static SamplingRule: typeof SamplingRuleInner;
    constructor(properties?: SamplingRuleProperties);
}
