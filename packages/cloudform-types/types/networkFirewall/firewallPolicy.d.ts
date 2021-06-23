import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class CustomAction {
    ActionName: Value<string>;
    ActionDefinition: ActionDefinition;
    constructor(properties: CustomAction);
}
export declare class StatelessRuleGroupReference {
    ResourceArn: Value<string>;
    Priority: Value<number>;
    constructor(properties: StatelessRuleGroupReference);
}
export declare class StatefulRuleGroupReference {
    ResourceArn: Value<string>;
    constructor(properties: StatefulRuleGroupReference);
}
export declare class PublishMetricAction {
    Dimensions: List<Dimension>;
    constructor(properties: PublishMetricAction);
}
export declare class ActionDefinition {
    PublishMetricAction?: PublishMetricAction;
    constructor(properties: ActionDefinition);
}
export declare class Dimension {
    Value: Value<string>;
    constructor(properties: Dimension);
}
export declare class FirewallPolicyInner {
    StatelessDefaultActions: List<Value<string>>;
    StatelessFragmentDefaultActions: List<Value<string>>;
    StatelessCustomActions?: List<CustomAction>;
    StatelessRuleGroupReferences?: List<StatelessRuleGroupReference>;
    StatefulRuleGroupReferences?: List<StatefulRuleGroupReference>;
    constructor(properties: FirewallPolicyInner);
}
export interface FirewallPolicyProperties {
    FirewallPolicyName: Value<string>;
    FirewallPolicy: FirewallPolicy;
    Description?: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class FirewallPolicy extends ResourceBase<FirewallPolicyProperties> {
    static CustomAction: typeof CustomAction;
    static StatelessRuleGroupReference: typeof StatelessRuleGroupReference;
    static StatefulRuleGroupReference: typeof StatefulRuleGroupReference;
    static PublishMetricAction: typeof PublishMetricAction;
    static ActionDefinition: typeof ActionDefinition;
    static Dimension: typeof Dimension;
    static FirewallPolicy: typeof FirewallPolicyInner;
    constructor(properties: FirewallPolicyProperties);
}
