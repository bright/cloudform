/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-northeast-3 (https://d2zq80gdmjim8k.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class ActionDefinition {
    PublishMetricAction?: PublishMetricAction

    constructor(properties: ActionDefinition) {
        Object.assign(this, properties)
    }
}

export class TCPFlagField {
    Flags!: List<Value<string>>
    Masks?: List<Value<string>>

    constructor(properties: TCPFlagField) {
        Object.assign(this, properties)
    }
}

export class Header {
    Protocol!: Value<string>
    Source!: Value<string>
    SourcePort!: Value<string>
    Direction!: Value<string>
    Destination!: Value<string>
    DestinationPort!: Value<string>

    constructor(properties: Header) {
        Object.assign(this, properties)
    }
}

export class Dimension {
    Value!: Value<string>

    constructor(properties: Dimension) {
        Object.assign(this, properties)
    }
}

export class StatelessRulesAndCustomActions {
    StatelessRules!: List<StatelessRule>
    CustomActions?: List<CustomAction>

    constructor(properties: StatelessRulesAndCustomActions) {
        Object.assign(this, properties)
    }
}

export class RuleOption {
    Keyword!: Value<string>
    Settings?: List<Value<string>>

    constructor(properties: RuleOption) {
        Object.assign(this, properties)
    }
}

export class RuleDefinition {
    MatchAttributes!: MatchAttributes
    Actions!: List<Value<string>>

    constructor(properties: RuleDefinition) {
        Object.assign(this, properties)
    }
}

export class RuleGroupInner {
    RuleVariables?: RuleVariables
    RulesSource!: RulesSource

    constructor(properties: RuleGroupInner) {
        Object.assign(this, properties)
    }
}

export class RulesSourceList {
    Targets!: List<Value<string>>
    TargetTypes!: List<Value<string>>
    GeneratedRulesType!: Value<string>

    constructor(properties: RulesSourceList) {
        Object.assign(this, properties)
    }
}

export class StatelessRule {
    RuleDefinition!: RuleDefinition
    Priority!: Value<number>

    constructor(properties: StatelessRule) {
        Object.assign(this, properties)
    }
}

export class PortRange {
    FromPort!: Value<number>
    ToPort!: Value<number>

    constructor(properties: PortRange) {
        Object.assign(this, properties)
    }
}

export class IPSet {
    Definition?: List<Value<string>>

    constructor(properties: IPSet) {
        Object.assign(this, properties)
    }
}

export class CustomAction {
    ActionName!: Value<string>
    ActionDefinition!: ActionDefinition

    constructor(properties: CustomAction) {
        Object.assign(this, properties)
    }
}

export class PortSet {
    Definition?: List<Value<string>>

    constructor(properties: PortSet) {
        Object.assign(this, properties)
    }
}

export class MatchAttributes {
    Sources?: List<Address>
    Destinations?: List<Address>
    SourcePorts?: List<PortRange>
    DestinationPorts?: List<PortRange>
    Protocols?: List<Value<number>>
    TCPFlags?: List<TCPFlagField>

    constructor(properties: MatchAttributes) {
        Object.assign(this, properties)
    }
}

export class RuleVariables {
    IPSets?: {[key: string]: IPSet}
    PortSets?: {[key: string]: PortSet}

    constructor(properties: RuleVariables) {
        Object.assign(this, properties)
    }
}

export class PublishMetricAction {
    Dimensions!: List<Dimension>

    constructor(properties: PublishMetricAction) {
        Object.assign(this, properties)
    }
}

export class Address {
    AddressDefinition!: Value<string>

    constructor(properties: Address) {
        Object.assign(this, properties)
    }
}

export class RulesSource {
    RulesString?: Value<string>
    RulesSourceList?: RulesSourceList
    StatefulRules?: List<StatefulRule>
    StatelessRulesAndCustomActions?: StatelessRulesAndCustomActions

    constructor(properties: RulesSource) {
        Object.assign(this, properties)
    }
}

export class StatefulRule {
    Action!: Value<string>
    Header!: Header
    RuleOptions!: List<RuleOption>

    constructor(properties: StatefulRule) {
        Object.assign(this, properties)
    }
}

export interface RuleGroupProperties {
    RuleGroupName: Value<string>
    RuleGroup?: RuleGroup
    Type: Value<string>
    Capacity: Value<number>
    Description?: Value<string>
    Tags?: List<ResourceTag>
}

export default class RuleGroup extends ResourceBase<RuleGroupProperties> {
    static ActionDefinition = ActionDefinition
    static TCPFlagField = TCPFlagField
    static Header = Header
    static Dimension = Dimension
    static StatelessRulesAndCustomActions = StatelessRulesAndCustomActions
    static RuleOption = RuleOption
    static RuleDefinition = RuleDefinition
    static RuleGroup = RuleGroupInner
    static RulesSourceList = RulesSourceList
    static StatelessRule = StatelessRule
    static PortRange = PortRange
    static IPSet = IPSet
    static CustomAction = CustomAction
    static PortSet = PortSet
    static MatchAttributes = MatchAttributes
    static RuleVariables = RuleVariables
    static PublishMetricAction = PublishMetricAction
    static Address = Address
    static RulesSource = RulesSource
    static StatefulRule = StatefulRule

    constructor(properties: RuleGroupProperties) {
        super('AWS::NetworkFirewall::RuleGroup', properties)
    }
}
