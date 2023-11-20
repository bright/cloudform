import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class ActionDefinition {
    PublishMetricAction?: PublishMetricAction;
    constructor(properties: ActionDefinition);
}
export declare class Address {
    AddressDefinition: Value<string>;
    constructor(properties: Address);
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
export declare class Header {
    Destination: Value<string>;
    Protocol: Value<string>;
    SourcePort: Value<string>;
    Direction: Value<string>;
    DestinationPort: Value<string>;
    Source: Value<string>;
    constructor(properties: Header);
}
export declare class IPSet {
    Definition?: List<Value<string>>;
    constructor(properties: IPSet);
}
export declare class IPSetReference {
    ReferenceArn?: Value<string>;
    constructor(properties: IPSetReference);
}
export declare class MatchAttributes {
    Protocols?: List<Value<number>>;
    TCPFlags?: List<TCPFlagField>;
    DestinationPorts?: List<PortRange>;
    Destinations?: List<Address>;
    Sources?: List<Address>;
    SourcePorts?: List<PortRange>;
    constructor(properties: MatchAttributes);
}
export declare class PortRange {
    FromPort: Value<number>;
    ToPort: Value<number>;
    constructor(properties: PortRange);
}
export declare class PortSet {
    Definition?: List<Value<string>>;
    constructor(properties: PortSet);
}
export declare class PublishMetricAction {
    Dimensions: List<Dimension>;
    constructor(properties: PublishMetricAction);
}
export declare class ReferenceSets {
    IPSetReferences?: {
        [key: string]: IPSetReference;
    };
    constructor(properties: ReferenceSets);
}
export declare class RuleDefinition {
    Actions: List<Value<string>>;
    MatchAttributes: MatchAttributes;
    constructor(properties: RuleDefinition);
}
export declare class RuleGroupInner {
    StatefulRuleOptions?: StatefulRuleOptions;
    ReferenceSets?: ReferenceSets;
    RulesSource: RulesSource;
    RuleVariables?: RuleVariables;
    constructor(properties: RuleGroupInner);
}
export declare class RuleOption {
    Keyword: Value<string>;
    Settings?: List<Value<string>>;
    constructor(properties: RuleOption);
}
export declare class RuleVariables {
    PortSets?: {
        [key: string]: PortSet;
    };
    IPSets?: {
        [key: string]: IPSet;
    };
    constructor(properties: RuleVariables);
}
export declare class RulesSource {
    StatelessRulesAndCustomActions?: StatelessRulesAndCustomActions;
    StatefulRules?: List<StatefulRule>;
    RulesString?: Value<string>;
    RulesSourceList?: RulesSourceList;
    constructor(properties: RulesSource);
}
export declare class RulesSourceList {
    GeneratedRulesType: Value<string>;
    TargetTypes: List<Value<string>>;
    Targets: List<Value<string>>;
    constructor(properties: RulesSourceList);
}
export declare class StatefulRule {
    Action: Value<string>;
    Header: Header;
    RuleOptions: List<RuleOption>;
    constructor(properties: StatefulRule);
}
export declare class StatefulRuleOptions {
    RuleOrder?: Value<string>;
    constructor(properties: StatefulRuleOptions);
}
export declare class StatelessRule {
    Priority: Value<number>;
    RuleDefinition: RuleDefinition;
    constructor(properties: StatelessRule);
}
export declare class StatelessRulesAndCustomActions {
    StatelessRules: List<StatelessRule>;
    CustomActions?: List<CustomAction>;
    constructor(properties: StatelessRulesAndCustomActions);
}
export declare class TCPFlagField {
    Flags: List<Value<string>>;
    Masks?: List<Value<string>>;
    constructor(properties: TCPFlagField);
}
export interface RuleGroupProperties {
    Type: Value<string>;
    Description?: Value<string>;
    Capacity: Value<number>;
    RuleGroupName: Value<string>;
    RuleGroup?: RuleGroup;
    Tags?: List<ResourceTag>;
}
export default class RuleGroup extends ResourceBase<RuleGroupProperties> {
    static ActionDefinition: typeof ActionDefinition;
    static Address: typeof Address;
    static CustomAction: typeof CustomAction;
    static Dimension: typeof Dimension;
    static Header: typeof Header;
    static IPSet: typeof IPSet;
    static IPSetReference: typeof IPSetReference;
    static MatchAttributes: typeof MatchAttributes;
    static PortRange: typeof PortRange;
    static PortSet: typeof PortSet;
    static PublishMetricAction: typeof PublishMetricAction;
    static ReferenceSets: typeof ReferenceSets;
    static RuleDefinition: typeof RuleDefinition;
    static RuleGroup: typeof RuleGroupInner;
    static RuleOption: typeof RuleOption;
    static RuleVariables: typeof RuleVariables;
    static RulesSource: typeof RulesSource;
    static RulesSourceList: typeof RulesSourceList;
    static StatefulRule: typeof StatefulRule;
    static StatefulRuleOptions: typeof StatefulRuleOptions;
    static StatelessRule: typeof StatelessRule;
    static StatelessRulesAndCustomActions: typeof StatelessRulesAndCustomActions;
    static TCPFlagField: typeof TCPFlagField;
    constructor(properties: RuleGroupProperties);
}
