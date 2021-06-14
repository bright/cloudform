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

export class CustomRequestHandling {


    constructor(properties: CustomRequestHandling) {
        Object.assign(this, properties)
    }
}

export class ManagedRuleGroupStatement {
    Name!: Value<string>
    VendorName!: Value<string>

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

export class AllowAction {


    constructor(properties: AllowAction) {
        Object.assign(this, properties)
    }
}

export class DefaultAction {


    constructor(properties: DefaultAction) {
        Object.assign(this, properties)
    }
}

export class XssMatchStatement {


    constructor(properties: XssMatchStatement) {
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

export class ForwardedIPConfiguration {
    HeaderName!: Value<string>
    FallbackBehavior!: Value<string>

    constructor(properties: ForwardedIPConfiguration) {
        Object.assign(this, properties)
    }
}

export class OrStatement {


    constructor(properties: OrStatement) {
        Object.assign(this, properties)
    }
}

export class Label {
    Name!: Value<string>

    constructor(properties: Label) {
        Object.assign(this, properties)
    }
}

export class CustomHTTPHeader {
    Name!: Value<string>
    Value!: Value<string>

    constructor(properties: CustomHTTPHeader) {
        Object.assign(this, properties)
    }
}

export class RegexPatternSetReferenceStatement {
    Arn!: Value<string>

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

export class CustomResponseBody {
    ContentType!: Value<string>
    Content!: Value<string>

    constructor(properties: CustomResponseBody) {
        Object.assign(this, properties)
    }
}

export class Statement {


    constructor(properties: Statement) {
        Object.assign(this, properties)
    }
}

export class BlockAction {


    constructor(properties: BlockAction) {
        Object.assign(this, properties)
    }
}

export class RuleGroupReferenceStatement {
    Arn!: Value<string>

    constructor(properties: RuleGroupReferenceStatement) {
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

export class JsonMatchPattern {
    All?: {[key: string]: any}

    constructor(properties: JsonMatchPattern) {
        Object.assign(this, properties)
    }
}

export class AndStatement {


    constructor(properties: AndStatement) {
        Object.assign(this, properties)
    }
}

export class CountAction {


    constructor(properties: CountAction) {
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


    constructor(properties: SqliMatchStatement) {
        Object.assign(this, properties)
    }
}

export class GeoMatchStatement {


    constructor(properties: GeoMatchStatement) {
        Object.assign(this, properties)
    }
}

export class RuleAction {


    constructor(properties: RuleAction) {
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

export class NotStatement {


    constructor(properties: NotStatement) {
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

export class Rule {
    Name!: Value<string>
    Priority!: Value<number>

    constructor(properties: Rule) {
        Object.assign(this, properties)
    }
}

export class CustomResponse {
    ResponseCode!: Value<number>
    CustomResponseBodyKey?: Value<string>

    constructor(properties: CustomResponse) {
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

export class IPSetReferenceStatement {
    Arn!: Value<string>

    constructor(properties: IPSetReferenceStatement) {
        Object.assign(this, properties)
    }
}

export interface WebACLProperties {
    Description?: Value<string>
    Name?: Value<string>
    Scope: Value<string>
}

export default class WebACL extends ResourceBase<WebACLProperties> {
    static CustomRequestHandling = CustomRequestHandling
    static ManagedRuleGroupStatement = ManagedRuleGroupStatement
    static TextTransformation = TextTransformation
    static AllowAction = AllowAction
    static DefaultAction = DefaultAction
    static XssMatchStatement = XssMatchStatement
    static ByteMatchStatement = ByteMatchStatement
    static ForwardedIPConfiguration = ForwardedIPConfiguration
    static OrStatement = OrStatement
    static Label = Label
    static CustomHTTPHeader = CustomHTTPHeader
    static RegexPatternSetReferenceStatement = RegexPatternSetReferenceStatement
    static IPSetForwardedIPConfiguration = IPSetForwardedIPConfiguration
    static CustomResponseBody = CustomResponseBody
    static Statement = Statement
    static BlockAction = BlockAction
    static RuleGroupReferenceStatement = RuleGroupReferenceStatement
    static LabelMatchStatement = LabelMatchStatement
    static JsonMatchPattern = JsonMatchPattern
    static AndStatement = AndStatement
    static CountAction = CountAction
    static SizeConstraintStatement = SizeConstraintStatement
    static FieldToMatch = FieldToMatch
    static SqliMatchStatement = SqliMatchStatement
    static GeoMatchStatement = GeoMatchStatement
    static RuleAction = RuleAction
    static JsonBody = JsonBody
    static NotStatement = NotStatement
    static OverrideAction = OverrideAction
    static Rule = Rule
    static CustomResponse = CustomResponse
    static RateBasedStatement = RateBasedStatement
    static ExcludedRule = ExcludedRule
    static VisibilityConfig = VisibilityConfig
    static IPSetReferenceStatement = IPSetReferenceStatement

    constructor(properties: WebACLProperties) {
        super('AWS::WAFv2::WebACL', properties)
    }
}
