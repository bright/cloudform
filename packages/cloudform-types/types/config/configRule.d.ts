import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class Compliance {
    Type?: Value<string>;
    constructor(properties: Compliance);
}
export declare class CustomPolicyDetails {
    EnableDebugLogDelivery?: Value<boolean>;
    PolicyText?: Value<string>;
    PolicyRuntime?: Value<string>;
    constructor(properties: CustomPolicyDetails);
}
export declare class EvaluationModeConfiguration {
    Mode?: Value<string>;
    constructor(properties: EvaluationModeConfiguration);
}
export declare class Scope {
    ComplianceResourceId?: Value<string>;
    TagKey?: Value<string>;
    ComplianceResourceTypes?: List<Value<string>>;
    TagValue?: Value<string>;
    constructor(properties: Scope);
}
export declare class Source {
    Owner: Value<string>;
    CustomPolicyDetails?: CustomPolicyDetails;
    SourceIdentifier?: Value<string>;
    SourceDetails?: List<SourceDetail>;
    constructor(properties: Source);
}
export declare class SourceDetail {
    EventSource: Value<string>;
    MaximumExecutionFrequency?: Value<string>;
    MessageType: Value<string>;
    constructor(properties: SourceDetail);
}
export interface ConfigRuleProperties {
    EvaluationModes?: List<EvaluationModeConfiguration>;
    Description?: Value<string>;
    Scope?: Scope;
    Compliance?: Compliance;
    ConfigRuleName?: Value<string>;
    MaximumExecutionFrequency?: Value<string>;
    Source: Source;
    InputParameters?: {
        [key: string]: any;
    };
}
export default class ConfigRule extends ResourceBase<ConfigRuleProperties> {
    static Compliance: typeof Compliance;
    static CustomPolicyDetails: typeof CustomPolicyDetails;
    static EvaluationModeConfiguration: typeof EvaluationModeConfiguration;
    static Scope: typeof Scope;
    static Source: typeof Source;
    static SourceDetail: typeof SourceDetail;
    constructor(properties: ConfigRuleProperties);
}
