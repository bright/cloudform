import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class InputSource {
    ApplyNormalization?: Value<boolean>;
    InputSourceARN: Value<string>;
    SchemaArn: Value<string>;
    constructor(properties: InputSource);
}
export declare class IntermediateSourceConfiguration {
    IntermediateS3Path: Value<string>;
    constructor(properties: IntermediateSourceConfiguration);
}
export declare class OutputAttribute {
    Hashed?: Value<boolean>;
    Name: Value<string>;
    constructor(properties: OutputAttribute);
}
export declare class OutputSource {
    KMSArn?: Value<string>;
    OutputS3Path: Value<string>;
    Output: List<OutputAttribute>;
    ApplyNormalization?: Value<boolean>;
    constructor(properties: OutputSource);
}
export declare class ProviderProperties {
    IntermediateSourceConfiguration?: IntermediateSourceConfiguration;
    ProviderServiceArn: Value<string>;
    ProviderConfiguration?: {
        [key: string]: Value<string>;
    };
    constructor(properties: ProviderProperties);
}
export declare class ResolutionTechniques {
    RuleBasedProperties?: RuleBasedProperties;
    ProviderProperties?: ProviderProperties;
    ResolutionType?: Value<string>;
    constructor(properties: ResolutionTechniques);
}
export declare class Rule {
    MatchingKeys: List<Value<string>>;
    RuleName: Value<string>;
    constructor(properties: Rule);
}
export declare class RuleBasedProperties {
    AttributeMatchingModel: Value<string>;
    Rules: List<Rule>;
    constructor(properties: RuleBasedProperties);
}
export interface MatchingWorkflowProperties {
    ResolutionTechniques: ResolutionTechniques;
    Description?: Value<string>;
    InputSourceConfig: List<InputSource>;
    WorkflowName: Value<string>;
    OutputSourceConfig: List<OutputSource>;
    RoleArn: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class MatchingWorkflow extends ResourceBase<MatchingWorkflowProperties> {
    static InputSource: typeof InputSource;
    static IntermediateSourceConfiguration: typeof IntermediateSourceConfiguration;
    static OutputAttribute: typeof OutputAttribute;
    static OutputSource: typeof OutputSource;
    static ProviderProperties: typeof ProviderProperties;
    static ResolutionTechniques: typeof ResolutionTechniques;
    static Rule: typeof Rule;
    static RuleBasedProperties: typeof RuleBasedProperties;
    constructor(properties: MatchingWorkflowProperties);
}
