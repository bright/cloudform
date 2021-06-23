import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class ActionDefinition {
    PublishMetricAction?: PublishMetricAction;
    constructor(properties: ActionDefinition);
}
export declare class TCPFlagField {
    Flags: List<Value<string>>;
    Masks?: List<Value<string>>;
    constructor(properties: TCPFlagField);
}
export declare class Header {
    Protocol: Value<string>;
    Source: Value<string>;
    SourcePort: Value<string>;
    Direction: Value<string>;
    Destination: Value<string>;
    DestinationPort: Value<string>;
    constructor(properties: Header);
}
export declare class Dimension {
    Value: Value<string>;
    constructor(properties: Dimension);
}
export declare class StatelessRulesAndCustomActions {
    StatelessRules: List<StatelessRule>;
    CustomActions?: List<CustomAction>;
    constructor(properties: StatelessRulesAndCustomActions);
}
export declare class RuleOption {
    Keyword: Value<string>;
    Settings?: List<Value<string>>;
    constructor(properties: RuleOption);
}
export declare class RuleDefinition {
    MatchAttributes: MatchAttributes;
    Actions: List<Value<string>>;
    constructor(properties: RuleDefinition);
}
export declare class RuleGroupInner {
    RuleVariables?: RuleVariables;
    RulesSource: RulesSource;
    constructor(properties: RuleGroupInner);
}
export declare class RulesSourceList {
    Targets: List<Value<string>>;
    TargetTypes: List<Value<string>>;
    GeneratedRulesType: Value<string>;
    constructor(properties: RulesSourceList);
}
export declare class StatelessRule {
    RuleDefinition: RuleDefinition;
    Priority: Value<number>;
    constructor(properties: StatelessRule);
}
export declare class PortRange {
    FromPort: Value<number>;
    ToPort: Value<number>;
    constructor(properties: PortRange);
}
export declare class IPSet {
    Definition?: List<Value<string>>;
    constructor(properties: IPSet);
}
export declare class CustomAction {
    ActionName: Value<string>;
    ActionDefinition: ActionDefinition;
    constructor(properties: CustomAction);
}
export declare class PortSet {
    Definition?: List<Value<string>>;
    constructor(properties: PortSet);
}
export declare class MatchAttributes {
    Sources?: List<Address>;
    Destinations?: List<Address>;
    SourcePorts?: List<PortRange>;
    DestinationPorts?: List<PortRange>;
    Protocols?: List<Value<number>>;
    TCPFlags?: List<TCPFlagField>;
    constructor(properties: MatchAttributes);
}
export declare class RuleVariables {
    IPSets?: {
        [key: string]: IPSet;
    };
    PortSets?: {
        [key: string]: PortSet;
    };
    constructor(properties: RuleVariables);
}
export declare class PublishMetricAction {
    Dimensions: List<Dimension>;
    constructor(properties: PublishMetricAction);
}
export declare class Address {
    AddressDefinition: Value<string>;
    constructor(properties: Address);
}
export declare class RulesSource {
    RulesString?: Value<string>;
    RulesSourceList?: RulesSourceList;
    StatefulRules?: List<StatefulRule>;
    StatelessRulesAndCustomActions?: StatelessRulesAndCustomActions;
    constructor(properties: RulesSource);
}
export declare class StatefulRule {
    Action: Value<string>;
    Header: Header;
    RuleOptions: List<RuleOption>;
    constructor(properties: StatefulRule);
}
export interface RuleGroupProperties {
    RuleGroupName: Value<string>;
    RuleGroup?: RuleGroup;
    Type: Value<string>;
    Capacity: Value<number>;
    Description?: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class RuleGroup extends ResourceBase<RuleGroupProperties> {
    static ActionDefinition: typeof ActionDefinition;
    static TCPFlagField: typeof TCPFlagField;
    static Header: typeof Header;
    static Dimension: typeof Dimension;
    static StatelessRulesAndCustomActions: typeof StatelessRulesAndCustomActions;
    static RuleOption: typeof RuleOption;
    static RuleDefinition: typeof RuleDefinition;
    static RuleGroup: typeof RuleGroupInner;
    static RulesSourceList: typeof RulesSourceList;
    static StatelessRule: typeof StatelessRule;
    static PortRange: typeof PortRange;
    static IPSet: typeof IPSet;
    static CustomAction: typeof CustomAction;
    static PortSet: typeof PortSet;
    static MatchAttributes: typeof MatchAttributes;
    static RuleVariables: typeof RuleVariables;
    static PublishMetricAction: typeof PublishMetricAction;
    static Address: typeof Address;
    static RulesSource: typeof RulesSource;
    static StatefulRule: typeof StatefulRule;
    constructor(properties: RuleGroupProperties);
}
