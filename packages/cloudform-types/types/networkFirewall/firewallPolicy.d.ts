import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class ActionDefinition {
    PublishMetricAction?: PublishMetricAction;
    constructor(properties: ActionDefinition);
}
export declare class CustomAction {
    ActionName: Value<string>;
    ActionDefinition: ActionDefinition;
    constructor(properties: CustomAction);
}
export declare class Dimension {
    Value: Value<string>;
    constructor(properties: Dimension);
}
export declare class FirewallPolicyInner {
    StatelessRuleGroupReferences?: List<StatelessRuleGroupReference>;
    StatefulRuleGroupReferences?: List<StatefulRuleGroupReference>;
    StatelessDefaultActions: List<Value<string>>;
    StatefulEngineOptions?: StatefulEngineOptions;
    StatelessCustomActions?: List<CustomAction>;
    StatelessFragmentDefaultActions: List<Value<string>>;
    PolicyVariables?: PolicyVariables;
    StatefulDefaultActions?: List<Value<string>>;
    TLSInspectionConfigurationArn?: Value<string>;
    constructor(properties: FirewallPolicyInner);
}
export declare class IPSet {
    Definition?: List<Value<string>>;
    constructor(properties: IPSet);
}
export declare class PolicyVariables {
    RuleVariables?: {
        [key: string]: IPSet;
    };
    constructor(properties: PolicyVariables);
}
export declare class PublishMetricAction {
    Dimensions: List<Dimension>;
    constructor(properties: PublishMetricAction);
}
export declare class StatefulEngineOptions {
    StreamExceptionPolicy?: Value<string>;
    RuleOrder?: Value<string>;
    constructor(properties: StatefulEngineOptions);
}
export declare class StatefulRuleGroupOverride {
    Action?: Value<string>;
    constructor(properties: StatefulRuleGroupOverride);
}
export declare class StatefulRuleGroupReference {
    ResourceArn: Value<string>;
    Priority?: Value<number>;
    Override?: StatefulRuleGroupOverride;
    constructor(properties: StatefulRuleGroupReference);
}
export declare class StatelessRuleGroupReference {
    ResourceArn: Value<string>;
    Priority: Value<number>;
    constructor(properties: StatelessRuleGroupReference);
}
export interface FirewallPolicyProperties {
    Description?: Value<string>;
    FirewallPolicyName: Value<string>;
    Tags?: List<ResourceTag>;
    FirewallPolicy: FirewallPolicy;
}
export default class FirewallPolicy extends ResourceBase<FirewallPolicyProperties> {
    static ActionDefinition: typeof ActionDefinition;
    static CustomAction: typeof CustomAction;
    static Dimension: typeof Dimension;
    static FirewallPolicy: typeof FirewallPolicyInner;
    static IPSet: typeof IPSet;
    static PolicyVariables: typeof PolicyVariables;
    static PublishMetricAction: typeof PublishMetricAction;
    static StatefulEngineOptions: typeof StatefulEngineOptions;
    static StatefulRuleGroupOverride: typeof StatefulRuleGroupOverride;
    static StatefulRuleGroupReference: typeof StatefulRuleGroupReference;
    static StatelessRuleGroupReference: typeof StatelessRuleGroupReference;
    constructor(properties: FirewallPolicyProperties);
}
