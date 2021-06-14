/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-northeast-3 (https://d2zq80gdmjim8k.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class JsonMatchPattern {
    All?: {[key: string]: any}

    constructor(properties: JsonMatchPattern) {
        Object.assign(this, properties)
    }
}

export class XssMatchStatement {


    constructor(properties: XssMatchStatement) {
        Object.assign(this, properties)
    }
}

export class LabelMatchStatement {
    Scope!: Value<string>
    Key!: Value<string>

    constructor(properties: LabelMatchStatement) {
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

export class Statement {


    constructor(properties: Statement) {
        Object.assign(this, properties)
    }
}

export class LabelSummary {
    Name?: Value<string>

    constructor(properties: LabelSummary) {
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

export class RateBasedStatement {
    Limit!: Value<number>
    AggregateKeyType!: Value<string>

    constructor(properties: RateBasedStatement) {
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


    constructor(properties: GeoMatchStatement) {
        Object.assign(this, properties)
    }
}

export class AndStatement {


    constructor(properties: AndStatement) {
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
    PositionalConstraint!: Value<string>

    constructor(properties: ByteMatchStatement) {
        Object.assign(this, properties)
    }
}

export class RegexPatternSetReferenceStatement {
    Arn!: Value<string>

    constructor(properties: RegexPatternSetReferenceStatement) {
        Object.assign(this, properties)
    }
}

export class OrStatement {


    constructor(properties: OrStatement) {
        Object.assign(this, properties)
    }
}

export class Rule {
    Name!: Value<string>
    Priority!: Value<number>

    constructor(properties: Rule) {
        Object.assign(this, properties)
    }
}

export class JsonBody {
    MatchScope!: Value<string>
    InvalidFallbackBehavior?: Value<string>

    constructor(properties: JsonBody) {
        Object.assign(this, properties)
    }
}

export class CustomResponseBody {
    ContentType!: Value<string>
    Content!: Value<string>

    constructor(properties: CustomResponseBody) {
        Object.assign(this, properties)
    }
}

export class Label {
    Name!: Value<string>

    constructor(properties: Label) {
        Object.assign(this, properties)
    }
}

export class SqliMatchStatement {


    constructor(properties: SqliMatchStatement) {
        Object.assign(this, properties)
    }
}

export class NotStatement {


    constructor(properties: NotStatement) {
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

export class SizeConstraintStatement {
    ComparisonOperator!: Value<string>
    Size!: Value<number>

    constructor(properties: SizeConstraintStatement) {
        Object.assign(this, properties)
    }
}

export interface RuleGroupProperties {
    Capacity: Value<number>
    Description?: Value<string>
    Name?: Value<string>
    Scope: Value<string>
}

export default class RuleGroup extends ResourceBase<RuleGroupProperties> {
    static JsonMatchPattern = JsonMatchPattern
    static XssMatchStatement = XssMatchStatement
    static LabelMatchStatement = LabelMatchStatement
    static RuleAction = RuleAction
    static Statement = Statement
    static LabelSummary = LabelSummary
    static FieldToMatch = FieldToMatch
    static IPSetReferenceStatement = IPSetReferenceStatement
    static RateBasedStatement = RateBasedStatement
    static VisibilityConfig = VisibilityConfig
    static GeoMatchStatement = GeoMatchStatement
    static AndStatement = AndStatement
    static IPSetForwardedIPConfiguration = IPSetForwardedIPConfiguration
    static TextTransformation = TextTransformation
    static ByteMatchStatement = ByteMatchStatement
    static RegexPatternSetReferenceStatement = RegexPatternSetReferenceStatement
    static OrStatement = OrStatement
    static Rule = Rule
    static JsonBody = JsonBody
    static CustomResponseBody = CustomResponseBody
    static Label = Label
    static SqliMatchStatement = SqliMatchStatement
    static NotStatement = NotStatement
    static ForwardedIPConfiguration = ForwardedIPConfiguration
    static SizeConstraintStatement = SizeConstraintStatement

    constructor(properties: RuleGroupProperties) {
        super('AWS::WAFv2::RuleGroup', properties)
    }
}
