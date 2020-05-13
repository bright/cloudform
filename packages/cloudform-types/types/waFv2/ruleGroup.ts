/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.2.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.2.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.2.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.2.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.2.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.2.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.2.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.2.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.2.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.2.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.2.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.2.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.2.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.2.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.2.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class RateBasedStatementTwo {
    Limit!: Value<number>
    AggregateKeyType!: Value<string>
    ScopeDownStatement?: StatementThree

    constructor(properties: RateBasedStatementTwo) {
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

export class OrStatementOne {
    Statements!: List<StatementTwo>

    constructor(properties: OrStatementOne) {
        Object.assign(this, properties)
    }
}

export class NotStatementOne {
    Statement!: StatementTwo

    constructor(properties: NotStatementOne) {
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

export class RegexPatternSetReferenceStatement {
    Arn!: Value<string>
    FieldToMatch!: FieldToMatch
    TextTransformations!: List<TextTransformation>

    constructor(properties: RegexPatternSetReferenceStatement) {
        Object.assign(this, properties)
    }
}

export class AndStatementTwo {
    Statements!: List<StatementThree>

    constructor(properties: AndStatementTwo) {
        Object.assign(this, properties)
    }
}

export class StatementThree {
    ByteMatchStatement?: ByteMatchStatement
    SqliMatchStatement?: SqliMatchStatement
    XssMatchStatement?: XssMatchStatement
    SizeConstraintStatement?: SizeConstraintStatement
    GeoMatchStatement?: GeoMatchStatement
    IPSetReferenceStatement?: IPSetReferenceStatement
    RegexPatternSetReferenceStatement?: RegexPatternSetReferenceStatement

    constructor(properties: StatementThree) {
        Object.assign(this, properties)
    }
}

export class NotStatementTwo {
    Statement!: StatementThree

    constructor(properties: NotStatementTwo) {
        Object.assign(this, properties)
    }
}

export class Rule {
    Name!: Value<string>
    Priority!: Value<number>
    Statement!: StatementOne
    Action?: RuleAction
    VisibilityConfig!: VisibilityConfig

    constructor(properties: Rule) {
        Object.assign(this, properties)
    }
}

export class RuleAction {
    Allow?: {[key: string]: any}
    Block?: {[key: string]: any}
    Count?: {[key: string]: any}

    constructor(properties: RuleAction) {
        Object.assign(this, properties)
    }
}

export class StatementOne {
    ByteMatchStatement?: ByteMatchStatement
    SqliMatchStatement?: SqliMatchStatement
    XssMatchStatement?: XssMatchStatement
    SizeConstraintStatement?: SizeConstraintStatement
    GeoMatchStatement?: GeoMatchStatement
    IPSetReferenceStatement?: IPSetReferenceStatement
    RegexPatternSetReferenceStatement?: RegexPatternSetReferenceStatement
    RateBasedStatement?: RateBasedStatementOne
    AndStatement?: AndStatementOne
    OrStatement?: OrStatementOne
    NotStatement?: NotStatementOne

    constructor(properties: StatementOne) {
        Object.assign(this, properties)
    }
}

export class RateBasedStatementOne {
    Limit!: Value<number>
    AggregateKeyType!: Value<string>
    ScopeDownStatement?: StatementTwo

    constructor(properties: RateBasedStatementOne) {
        Object.assign(this, properties)
    }
}

export class OrStatementTwo {
    Statements!: List<StatementThree>

    constructor(properties: OrStatementTwo) {
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

export class IPSetReferenceStatement {
    Arn!: Value<string>

    constructor(properties: IPSetReferenceStatement) {
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

export class GeoMatchStatement {
    CountryCodes?: List<Value<string>>

    constructor(properties: GeoMatchStatement) {
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

export class AndStatementOne {
    Statements!: List<StatementTwo>

    constructor(properties: AndStatementOne) {
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

export class StatementTwo {
    ByteMatchStatement?: ByteMatchStatement
    SqliMatchStatement?: SqliMatchStatement
    XssMatchStatement?: XssMatchStatement
    SizeConstraintStatement?: SizeConstraintStatement
    GeoMatchStatement?: GeoMatchStatement
    IPSetReferenceStatement?: IPSetReferenceStatement
    RegexPatternSetReferenceStatement?: RegexPatternSetReferenceStatement
    RateBasedStatement?: RateBasedStatementTwo
    AndStatement?: AndStatementTwo
    OrStatement?: OrStatementTwo
    NotStatement?: NotStatementTwo

    constructor(properties: StatementTwo) {
        Object.assign(this, properties)
    }
}

export interface RuleGroupProperties {
    Capacity: Value<number>
    Description?: Value<string>
    Name?: Value<string>
    Scope: Value<string>
    Rules?: List<Rule>
    VisibilityConfig: VisibilityConfig
    Tags?: List<ResourceTag>
}

export default class RuleGroup extends ResourceBase<RuleGroupProperties> {
    static RateBasedStatementTwo = RateBasedStatementTwo
    static XssMatchStatement = XssMatchStatement
    static OrStatementOne = OrStatementOne
    static NotStatementOne = NotStatementOne
    static TextTransformation = TextTransformation
    static ByteMatchStatement = ByteMatchStatement
    static RegexPatternSetReferenceStatement = RegexPatternSetReferenceStatement
    static AndStatementTwo = AndStatementTwo
    static StatementThree = StatementThree
    static NotStatementTwo = NotStatementTwo
    static Rule = Rule
    static RuleAction = RuleAction
    static StatementOne = StatementOne
    static RateBasedStatementOne = RateBasedStatementOne
    static OrStatementTwo = OrStatementTwo
    static FieldToMatch = FieldToMatch
    static IPSetReferenceStatement = IPSetReferenceStatement
    static VisibilityConfig = VisibilityConfig
    static GeoMatchStatement = GeoMatchStatement
    static SqliMatchStatement = SqliMatchStatement
    static AndStatementOne = AndStatementOne
    static SizeConstraintStatement = SizeConstraintStatement
    static StatementTwo = StatementTwo

    constructor(properties: RuleGroupProperties) {
        super('AWS::WAFv2::RuleGroup', properties)
    }
}
