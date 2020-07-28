/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class RuleAction {
    Allow?: {[key: string]: any}
    Block?: {[key: string]: any}
    Count?: {[key: string]: any}

    constructor(properties: RuleAction) {
        Object.assign(this, properties)
    }
}

export class ManagedRuleGroupStatement {
    Name!: Value<string>
    VendorName!: Value<string>
    ExcludedRules?: List<ExcludedRule>

    constructor(properties: ManagedRuleGroupStatement) {
        Object.assign(this, properties)
    }
}

export class TextTransformation {
    Priority!: Value<number>
    Type!: Value<string>

    constructor(properties: TextTransformation) {
        Object.assign(this, properties)
    }
}

export class DefaultAction {
    Allow?: {[key: string]: any}
    Block?: {[key: string]: any}

    constructor(properties: DefaultAction) {
        Object.assign(this, properties)
    }
}

export class OrStatementTwo {
    Statements!: List<StatementThree>

    constructor(properties: OrStatementTwo) {
        Object.assign(this, properties)
    }
}

export class XssMatchStatement {
    FieldToMatch!: FieldToMatch
    TextTransformations!: List<TextTransformation>

    constructor(properties: XssMatchStatement) {
        Object.assign(this, properties)
    }
}

export class StatementOne {
    ByteMatchStatement?: ByteMatchStatement
    SqliMatchStatement?: SqliMatchStatement
    XssMatchStatement?: XssMatchStatement
    SizeConstraintStatement?: SizeConstraintStatement
    GeoMatchStatement?: GeoMatchStatement
    RuleGroupReferenceStatement?: RuleGroupReferenceStatement
    IPSetReferenceStatement?: IPSetReferenceStatement
    RegexPatternSetReferenceStatement?: RegexPatternSetReferenceStatement
    ManagedRuleGroupStatement?: ManagedRuleGroupStatement
    RateBasedStatement?: RateBasedStatementOne
    AndStatement?: AndStatementOne
    OrStatement?: OrStatementOne
    NotStatement?: NotStatementOne

    constructor(properties: StatementOne) {
        Object.assign(this, properties)
    }
}

export class ByteMatchStatement {
    SearchString?: Value<string>
    SearchStringBase64?: Value<string>
    FieldToMatch!: FieldToMatch
    TextTransformations!: List<TextTransformation>
    PositionalConstraint!: Value<string>

    constructor(properties: ByteMatchStatement) {
        Object.assign(this, properties)
    }
}

export class NotStatementTwo {
    Statement!: StatementThree

    constructor(properties: NotStatementTwo) {
        Object.assign(this, properties)
    }
}

export class OverrideAction {
    Count?: {[key: string]: any}
    None?: {[key: string]: any}

    constructor(properties: OverrideAction) {
        Object.assign(this, properties)
    }
}

export class RateBasedStatementTwo {
    Limit!: Value<number>
    AggregateKeyType!: Value<string>
    ScopeDownStatement?: StatementThree
    ForwardedIPConfig?: ForwardedIPConfiguration

    constructor(properties: RateBasedStatementTwo) {
        Object.assign(this, properties)
    }
}

export class ForwardedIPConfiguration {
    HeaderName!: Value<string>
    FallbackBehavior!: Value<string>

    constructor(properties: ForwardedIPConfiguration) {
        Object.assign(this, properties)
    }
}

export class AndStatementTwo {
    Statements!: List<StatementThree>

    constructor(properties: AndStatementTwo) {
        Object.assign(this, properties)
    }
}

export class RegexPatternSetReferenceStatement {
    Arn!: Value<string>
    FieldToMatch!: FieldToMatch
    TextTransformations!: List<TextTransformation>

    constructor(properties: RegexPatternSetReferenceStatement) {
        Object.assign(this, properties)
    }
}

export class IPSetForwardedIPConfiguration {
    HeaderName!: Value<string>
    FallbackBehavior!: Value<string>
    Position!: Value<string>

    constructor(properties: IPSetForwardedIPConfiguration) {
        Object.assign(this, properties)
    }
}

export class Rule {
    Name!: Value<string>
    Priority!: Value<number>
    Statement!: StatementOne
    Action?: RuleAction
    OverrideAction?: OverrideAction
    VisibilityConfig!: VisibilityConfig

    constructor(properties: Rule) {
        Object.assign(this, properties)
    }
}

export class OrStatementOne {
    Statements!: List<StatementTwo>

    constructor(properties: OrStatementOne) {
        Object.assign(this, properties)
    }
}

export class RuleGroupReferenceStatement {
    Arn!: Value<string>
    ExcludedRules?: List<ExcludedRule>

    constructor(properties: RuleGroupReferenceStatement) {
        Object.assign(this, properties)
    }
}

export class StatementTwo {
    ByteMatchStatement?: ByteMatchStatement
    SqliMatchStatement?: SqliMatchStatement
    XssMatchStatement?: XssMatchStatement
    SizeConstraintStatement?: SizeConstraintStatement
    GeoMatchStatement?: GeoMatchStatement
    RuleGroupReferenceStatement?: RuleGroupReferenceStatement
    IPSetReferenceStatement?: IPSetReferenceStatement
    RegexPatternSetReferenceStatement?: RegexPatternSetReferenceStatement
    ManagedRuleGroupStatement?: ManagedRuleGroupStatement
    RateBasedStatement?: RateBasedStatementTwo
    AndStatement?: AndStatementTwo
    OrStatement?: OrStatementTwo
    NotStatement?: NotStatementTwo

    constructor(properties: StatementTwo) {
        Object.assign(this, properties)
    }
}

export class NotStatementOne {
    Statement!: StatementTwo

    constructor(properties: NotStatementOne) {
        Object.assign(this, properties)
    }
}

export class RateBasedStatementOne {
    Limit!: Value<number>
    AggregateKeyType!: Value<string>
    ScopeDownStatement?: StatementTwo
    ForwardedIPConfig?: ForwardedIPConfiguration

    constructor(properties: RateBasedStatementOne) {
        Object.assign(this, properties)
    }
}

export class ExcludedRule {
    Name!: Value<string>

    constructor(properties: ExcludedRule) {
        Object.assign(this, properties)
    }
}

export class VisibilityConfig {
    SampledRequestsEnabled!: Value<boolean>
    CloudWatchMetricsEnabled!: Value<boolean>
    MetricName!: Value<string>

    constructor(properties: VisibilityConfig) {
        Object.assign(this, properties)
    }
}

export class SizeConstraintStatement {
    FieldToMatch!: FieldToMatch
    ComparisonOperator!: Value<string>
    Size!: Value<number>
    TextTransformations!: List<TextTransformation>

    constructor(properties: SizeConstraintStatement) {
        Object.assign(this, properties)
    }
}

export class FieldToMatch {
    SingleHeader?: {[key: string]: any}
    SingleQueryArgument?: {[key: string]: any}
    AllQueryArguments?: {[key: string]: any}
    UriPath?: {[key: string]: any}
    QueryString?: {[key: string]: any}
    Body?: {[key: string]: any}
    Method?: {[key: string]: any}

    constructor(properties: FieldToMatch) {
        Object.assign(this, properties)
    }
}

export class SqliMatchStatement {
    FieldToMatch!: FieldToMatch
    TextTransformations!: List<TextTransformation>

    constructor(properties: SqliMatchStatement) {
        Object.assign(this, properties)
    }
}

export class GeoMatchStatement {
    CountryCodes?: List<Value<string>>
    ForwardedIPConfig?: ForwardedIPConfiguration

    constructor(properties: GeoMatchStatement) {
        Object.assign(this, properties)
    }
}

export class IPSetReferenceStatement {
    Arn!: Value<string>
    IPSetForwardedIPConfig?: IPSetForwardedIPConfiguration

    constructor(properties: IPSetReferenceStatement) {
        Object.assign(this, properties)
    }
}

export class AndStatementOne {
    Statements!: List<StatementTwo>

    constructor(properties: AndStatementOne) {
        Object.assign(this, properties)
    }
}

export class StatementThree {
    ByteMatchStatement?: ByteMatchStatement
    SqliMatchStatement?: SqliMatchStatement
    XssMatchStatement?: XssMatchStatement
    SizeConstraintStatement?: SizeConstraintStatement
    GeoMatchStatement?: GeoMatchStatement
    RuleGroupReferenceStatement?: RuleGroupReferenceStatement
    IPSetReferenceStatement?: IPSetReferenceStatement
    RegexPatternSetReferenceStatement?: RegexPatternSetReferenceStatement
    ManagedRuleGroupStatement?: ManagedRuleGroupStatement

    constructor(properties: StatementThree) {
        Object.assign(this, properties)
    }
}

export interface WebACLProperties {
    DefaultAction: DefaultAction
    Description?: Value<string>
    Name?: Value<string>
    Scope: Value<string>
    Rules?: List<Rule>
    VisibilityConfig: VisibilityConfig
    Tags?: List<ResourceTag>
}

export default class WebACL extends ResourceBase<WebACLProperties> {
    static RuleAction = RuleAction
    static ManagedRuleGroupStatement = ManagedRuleGroupStatement
    static TextTransformation = TextTransformation
    static DefaultAction = DefaultAction
    static OrStatementTwo = OrStatementTwo
    static XssMatchStatement = XssMatchStatement
    static StatementOne = StatementOne
    static ByteMatchStatement = ByteMatchStatement
    static NotStatementTwo = NotStatementTwo
    static OverrideAction = OverrideAction
    static RateBasedStatementTwo = RateBasedStatementTwo
    static ForwardedIPConfiguration = ForwardedIPConfiguration
    static AndStatementTwo = AndStatementTwo
    static RegexPatternSetReferenceStatement = RegexPatternSetReferenceStatement
    static IPSetForwardedIPConfiguration = IPSetForwardedIPConfiguration
    static Rule = Rule
    static OrStatementOne = OrStatementOne
    static RuleGroupReferenceStatement = RuleGroupReferenceStatement
    static StatementTwo = StatementTwo
    static NotStatementOne = NotStatementOne
    static RateBasedStatementOne = RateBasedStatementOne
    static ExcludedRule = ExcludedRule
    static VisibilityConfig = VisibilityConfig
    static SizeConstraintStatement = SizeConstraintStatement
    static FieldToMatch = FieldToMatch
    static SqliMatchStatement = SqliMatchStatement
    static GeoMatchStatement = GeoMatchStatement
    static IPSetReferenceStatement = IPSetReferenceStatement
    static AndStatementOne = AndStatementOne
    static StatementThree = StatementThree

    constructor(properties: WebACLProperties) {
        super('AWS::WAFv2::WebACL', properties)
    }
}
