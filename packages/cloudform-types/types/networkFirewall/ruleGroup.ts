/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-3 (https://d2zq80gdmjim8k.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class ActionDefinition {
    PublishMetricAction?: PublishMetricAction

    constructor(properties: ActionDefinition) {
        Object.assign(this, properties)
    }
}

export class Address {
    AddressDefinition!: Value<string>

    constructor(properties: Address) {
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

export class Dimension {
    Value!: Value<string>

    constructor(properties: Dimension) {
        Object.assign(this, properties)
    }
}

export class Header {
    Destination!: Value<string>
    Protocol!: Value<string>
    SourcePort!: Value<string>
    Direction!: Value<string>
    DestinationPort!: Value<string>
    Source!: Value<string>

    constructor(properties: Header) {
        Object.assign(this, properties)
    }
}

export class IPSet {
    Definition?: List<Value<string>>

    constructor(properties: IPSet) {
        Object.assign(this, properties)
    }
}

export class IPSetReference {
    ReferenceArn?: Value<string>

    constructor(properties: IPSetReference) {
        Object.assign(this, properties)
    }
}

export class MatchAttributes {
    Protocols?: List<Value<number>>
    TCPFlags?: List<TCPFlagField>
    DestinationPorts?: List<PortRange>
    Destinations?: List<Address>
    Sources?: List<Address>
    SourcePorts?: List<PortRange>

    constructor(properties: MatchAttributes) {
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

export class PortSet {
    Definition?: List<Value<string>>

    constructor(properties: PortSet) {
        Object.assign(this, properties)
    }
}

export class PublishMetricAction {
    Dimensions!: List<Dimension>

    constructor(properties: PublishMetricAction) {
        Object.assign(this, properties)
    }
}

export class ReferenceSets {
    IPSetReferences?: {[key: string]: IPSetReference}

    constructor(properties: ReferenceSets) {
        Object.assign(this, properties)
    }
}

export class RuleDefinition {
    Actions!: List<Value<string>>
    MatchAttributes!: MatchAttributes

    constructor(properties: RuleDefinition) {
        Object.assign(this, properties)
    }
}

export class RuleGroupInner {
    StatefulRuleOptions?: StatefulRuleOptions
    ReferenceSets?: ReferenceSets
    RulesSource!: RulesSource
    RuleVariables?: RuleVariables

    constructor(properties: RuleGroupInner) {
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

export class RuleVariables {
    PortSets?: {[key: string]: PortSet}
    IPSets?: {[key: string]: IPSet}

    constructor(properties: RuleVariables) {
        Object.assign(this, properties)
    }
}

export class RulesSource {
    StatelessRulesAndCustomActions?: StatelessRulesAndCustomActions
    StatefulRules?: List<StatefulRule>
    RulesString?: Value<string>
    RulesSourceList?: RulesSourceList

    constructor(properties: RulesSource) {
        Object.assign(this, properties)
    }
}

export class RulesSourceList {
    GeneratedRulesType!: Value<string>
    TargetTypes!: List<Value<string>>
    Targets!: List<Value<string>>

    constructor(properties: RulesSourceList) {
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

export class StatefulRuleOptions {
    RuleOrder?: Value<string>

    constructor(properties: StatefulRuleOptions) {
        Object.assign(this, properties)
    }
}

export class StatelessRule {
    Priority!: Value<number>
    RuleDefinition!: RuleDefinition

    constructor(properties: StatelessRule) {
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

export class TCPFlagField {
    Flags!: List<Value<string>>
    Masks?: List<Value<string>>

    constructor(properties: TCPFlagField) {
        Object.assign(this, properties)
    }
}

export interface RuleGroupProperties {
    Type: Value<string>
    Description?: Value<string>
    Capacity: Value<number>
    RuleGroupName: Value<string>
    RuleGroup?: RuleGroup
    Tags?: List<ResourceTag>
}

export default class RuleGroup extends ResourceBase<RuleGroupProperties> {
    static ActionDefinition = ActionDefinition
    static Address = Address
    static CustomAction = CustomAction
    static Dimension = Dimension
    static Header = Header
    static IPSet = IPSet
    static IPSetReference = IPSetReference
    static MatchAttributes = MatchAttributes
    static PortRange = PortRange
    static PortSet = PortSet
    static PublishMetricAction = PublishMetricAction
    static ReferenceSets = ReferenceSets
    static RuleDefinition = RuleDefinition
    static RuleGroup = RuleGroupInner
    static RuleOption = RuleOption
    static RuleVariables = RuleVariables
    static RulesSource = RulesSource
    static RulesSourceList = RulesSourceList
    static StatefulRule = StatefulRule
    static StatefulRuleOptions = StatefulRuleOptions
    static StatelessRule = StatelessRule
    static StatelessRulesAndCustomActions = StatelessRulesAndCustomActions
    static TCPFlagField = TCPFlagField

    constructor(properties: RuleGroupProperties) {
        super('AWS::NetworkFirewall::RuleGroup', properties)
    }
}
