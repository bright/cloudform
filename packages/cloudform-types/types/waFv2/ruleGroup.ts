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

export class AllowAction {
    CustomRequestHandling?: CustomRequestHandling

    constructor(properties: AllowAction) {
        Object.assign(this, properties)
    }
}

export class AndStatement {
    Statements!: List<Statement>

    constructor(properties: AndStatement) {
        Object.assign(this, properties)
    }
}

export class BlockAction {
    CustomResponse?: CustomResponse

    constructor(properties: BlockAction) {
        Object.assign(this, properties)
    }
}

export class Body {
    OversizeHandling?: Value<string>

    constructor(properties: Body) {
        Object.assign(this, properties)
    }
}

export class ByteMatchStatement {
    SearchStringBase64?: Value<string>
    TextTransformations!: List<TextTransformation>
    PositionalConstraint!: Value<string>
    SearchString?: Value<string>
    FieldToMatch!: FieldToMatch

    constructor(properties: ByteMatchStatement) {
        Object.assign(this, properties)
    }
}

export class CaptchaAction {
    CustomRequestHandling?: CustomRequestHandling

    constructor(properties: CaptchaAction) {
        Object.assign(this, properties)
    }
}

export class CaptchaConfig {
    ImmunityTimeProperty?: ImmunityTimeProperty

    constructor(properties: CaptchaConfig) {
        Object.assign(this, properties)
    }
}

export class ChallengeAction {
    CustomRequestHandling?: CustomRequestHandling

    constructor(properties: ChallengeAction) {
        Object.assign(this, properties)
    }
}

export class ChallengeConfig {
    ImmunityTimeProperty?: ImmunityTimeProperty

    constructor(properties: ChallengeConfig) {
        Object.assign(this, properties)
    }
}

export class CookieMatchPattern {
    All?: {[key: string]: any}
    IncludedCookies?: List<Value<string>>
    ExcludedCookies?: List<Value<string>>

    constructor(properties: CookieMatchPattern) {
        Object.assign(this, properties)
    }
}

export class Cookies {
    MatchScope!: Value<string>
    MatchPattern!: CookieMatchPattern
    OversizeHandling!: Value<string>

    constructor(properties: Cookies) {
        Object.assign(this, properties)
    }
}

export class CountAction {
    CustomRequestHandling?: CustomRequestHandling

    constructor(properties: CountAction) {
        Object.assign(this, properties)
    }
}

export class CustomHTTPHeader {
    Value!: Value<string>
    Name!: Value<string>

    constructor(properties: CustomHTTPHeader) {
        Object.assign(this, properties)
    }
}

export class CustomRequestHandling {
    InsertHeaders!: List<CustomHTTPHeader>

    constructor(properties: CustomRequestHandling) {
        Object.assign(this, properties)
    }
}

export class CustomResponse {
    ResponseCode!: Value<number>
    CustomResponseBodyKey?: Value<string>
    ResponseHeaders?: List<CustomHTTPHeader>

    constructor(properties: CustomResponse) {
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

export class FieldToMatch {
    JsonBody?: JsonBody
    AllQueryArguments?: {[key: string]: any}
    SingleQueryArgument?: SingleQueryArgument
    UriPath?: {[key: string]: any}
    QueryString?: {[key: string]: any}
    Headers?: Headers
    Cookies?: Cookies
    Method?: {[key: string]: any}
    Body?: Body
    SingleHeader?: SingleHeader

    constructor(properties: FieldToMatch) {
        Object.assign(this, properties)
    }
}

export class ForwardedIPConfiguration {
    FallbackBehavior!: Value<string>
    HeaderName!: Value<string>

    constructor(properties: ForwardedIPConfiguration) {
        Object.assign(this, properties)
    }
}

export class GeoMatchStatement {
    ForwardedIPConfig?: ForwardedIPConfiguration
    CountryCodes?: List<Value<string>>

    constructor(properties: GeoMatchStatement) {
        Object.assign(this, properties)
    }
}

export class HeaderMatchPattern {
    All?: {[key: string]: any}
    IncludedHeaders?: List<Value<string>>
    ExcludedHeaders?: List<Value<string>>

    constructor(properties: HeaderMatchPattern) {
        Object.assign(this, properties)
    }
}

export class Headers {
    MatchScope!: Value<string>
    MatchPattern!: HeaderMatchPattern
    OversizeHandling!: Value<string>

    constructor(properties: Headers) {
        Object.assign(this, properties)
    }
}

export class IPSetForwardedIPConfiguration {
    FallbackBehavior!: Value<string>
    HeaderName!: Value<string>
    Position!: Value<string>

    constructor(properties: IPSetForwardedIPConfiguration) {
        Object.assign(this, properties)
    }
}

export class IPSetReferenceStatement {
    IPSetForwardedIPConfig?: IPSetForwardedIPConfiguration
    Arn!: Value<string>

    constructor(properties: IPSetReferenceStatement) {
        Object.assign(this, properties)
    }
}

export class ImmunityTimeProperty {
    ImmunityTime!: Value<number>

    constructor(properties: ImmunityTimeProperty) {
        Object.assign(this, properties)
    }
}

export class JsonBody {
    MatchScope!: Value<string>
    MatchPattern!: JsonMatchPattern
    InvalidFallbackBehavior?: Value<string>
    OversizeHandling?: Value<string>

    constructor(properties: JsonBody) {
        Object.assign(this, properties)
    }
}

export class JsonMatchPattern {
    All?: {[key: string]: any}
    IncludedPaths?: List<Value<string>>

    constructor(properties: JsonMatchPattern) {
        Object.assign(this, properties)
    }
}

export class Label {
    Name!: Value<string>

    constructor(properties: Label) {
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

export class LabelSummary {
    Name?: Value<string>

    constructor(properties: LabelSummary) {
        Object.assign(this, properties)
    }
}

export class NotStatement {
    Statement!: Statement

    constructor(properties: NotStatement) {
        Object.assign(this, properties)
    }
}

export class OrStatement {
    Statements!: List<Statement>

    constructor(properties: OrStatement) {
        Object.assign(this, properties)
    }
}

export class RateBasedStatement {
    AggregateKeyType!: Value<string>
    CustomKeys?: List<RateBasedStatementCustomKey>
    ForwardedIPConfig?: ForwardedIPConfiguration
    Limit!: Value<number>
    ScopeDownStatement?: Statement

    constructor(properties: RateBasedStatement) {
        Object.assign(this, properties)
    }
}

export class RateBasedStatementCustomKey {
    Cookie?: RateLimitCookie
    ForwardedIP?: {[key: string]: any}
    QueryArgument?: RateLimitQueryArgument
    Header?: RateLimitHeader
    HTTPMethod?: {[key: string]: any}
    QueryString?: RateLimitQueryString
    UriPath?: RateLimitUriPath
    IP?: {[key: string]: any}
    LabelNamespace?: RateLimitLabelNamespace

    constructor(properties: RateBasedStatementCustomKey) {
        Object.assign(this, properties)
    }
}

export class RateLimitCookie {
    TextTransformations!: List<TextTransformation>
    Name!: Value<string>

    constructor(properties: RateLimitCookie) {
        Object.assign(this, properties)
    }
}

export class RateLimitHeader {
    TextTransformations!: List<TextTransformation>
    Name!: Value<string>

    constructor(properties: RateLimitHeader) {
        Object.assign(this, properties)
    }
}

export class RateLimitLabelNamespace {
    Namespace!: Value<string>

    constructor(properties: RateLimitLabelNamespace) {
        Object.assign(this, properties)
    }
}

export class RateLimitQueryArgument {
    TextTransformations!: List<TextTransformation>
    Name!: Value<string>

    constructor(properties: RateLimitQueryArgument) {
        Object.assign(this, properties)
    }
}

export class RateLimitQueryString {
    TextTransformations!: List<TextTransformation>

    constructor(properties: RateLimitQueryString) {
        Object.assign(this, properties)
    }
}

export class RateLimitUriPath {
    TextTransformations!: List<TextTransformation>

    constructor(properties: RateLimitUriPath) {
        Object.assign(this, properties)
    }
}

export class RegexMatchStatement {
    TextTransformations!: List<TextTransformation>
    RegexString!: Value<string>
    FieldToMatch!: FieldToMatch

    constructor(properties: RegexMatchStatement) {
        Object.assign(this, properties)
    }
}

export class RegexPatternSetReferenceStatement {
    TextTransformations!: List<TextTransformation>
    Arn!: Value<string>
    FieldToMatch!: FieldToMatch

    constructor(properties: RegexPatternSetReferenceStatement) {
        Object.assign(this, properties)
    }
}

export class Rule {
    Action?: RuleAction
    Priority!: Value<number>
    Statement!: Statement
    ChallengeConfig?: ChallengeConfig
    RuleLabels?: List<Label>
    VisibilityConfig!: VisibilityConfig
    CaptchaConfig?: CaptchaConfig
    Name!: Value<string>

    constructor(properties: Rule) {
        Object.assign(this, properties)
    }
}

export class RuleAction {
    Captcha?: CaptchaAction
    Block?: BlockAction
    Count?: CountAction
    Allow?: AllowAction
    Challenge?: ChallengeAction

    constructor(properties: RuleAction) {
        Object.assign(this, properties)
    }
}

export class SingleHeader {
    Name!: Value<string>

    constructor(properties: SingleHeader) {
        Object.assign(this, properties)
    }
}

export class SingleQueryArgument {
    Name!: Value<string>

    constructor(properties: SingleQueryArgument) {
        Object.assign(this, properties)
    }
}

export class SizeConstraintStatement {
    ComparisonOperator!: Value<string>
    TextTransformations!: List<TextTransformation>
    Size!: Value<number>
    FieldToMatch!: FieldToMatch

    constructor(properties: SizeConstraintStatement) {
        Object.assign(this, properties)
    }
}

export class SqliMatchStatement {
    SensitivityLevel?: Value<string>
    TextTransformations!: List<TextTransformation>
    FieldToMatch!: FieldToMatch

    constructor(properties: SqliMatchStatement) {
        Object.assign(this, properties)
    }
}

export class Statement {
    SizeConstraintStatement?: SizeConstraintStatement
    AndStatement?: AndStatement
    XssMatchStatement?: XssMatchStatement
    NotStatement?: NotStatement
    ByteMatchStatement?: ByteMatchStatement
    RateBasedStatement?: RateBasedStatement
    GeoMatchStatement?: GeoMatchStatement
    LabelMatchStatement?: LabelMatchStatement
    RegexMatchStatement?: RegexMatchStatement
    SqliMatchStatement?: SqliMatchStatement
    RegexPatternSetReferenceStatement?: RegexPatternSetReferenceStatement
    OrStatement?: OrStatement
    IPSetReferenceStatement?: IPSetReferenceStatement

    constructor(properties: Statement) {
        Object.assign(this, properties)
    }
}

export class TextTransformation {
    Type!: Value<string>
    Priority!: Value<number>

    constructor(properties: TextTransformation) {
        Object.assign(this, properties)
    }
}

export class VisibilityConfig {
    MetricName!: Value<string>
    SampledRequestsEnabled!: Value<boolean>
    CloudWatchMetricsEnabled!: Value<boolean>

    constructor(properties: VisibilityConfig) {
        Object.assign(this, properties)
    }
}

export class XssMatchStatement {
    TextTransformations!: List<TextTransformation>
    FieldToMatch!: FieldToMatch

    constructor(properties: XssMatchStatement) {
        Object.assign(this, properties)
    }
}

export interface RuleGroupProperties {
    Description?: Value<string>
    Scope: Value<string>
    Capacity: Value<number>
    AvailableLabels?: List<LabelSummary>
    CustomResponseBodies?: {[key: string]: CustomResponseBody}
    ConsumedLabels?: List<LabelSummary>
    Rules?: List<Rule>
    VisibilityConfig: VisibilityConfig
    Tags?: List<ResourceTag>
    Name?: Value<string>
}

export default class RuleGroup extends ResourceBase<RuleGroupProperties> {
    static AllowAction = AllowAction
    static AndStatement = AndStatement
    static BlockAction = BlockAction
    static Body = Body
    static ByteMatchStatement = ByteMatchStatement
    static CaptchaAction = CaptchaAction
    static CaptchaConfig = CaptchaConfig
    static ChallengeAction = ChallengeAction
    static ChallengeConfig = ChallengeConfig
    static CookieMatchPattern = CookieMatchPattern
    static Cookies = Cookies
    static CountAction = CountAction
    static CustomHTTPHeader = CustomHTTPHeader
    static CustomRequestHandling = CustomRequestHandling
    static CustomResponse = CustomResponse
    static CustomResponseBody = CustomResponseBody
    static FieldToMatch = FieldToMatch
    static ForwardedIPConfiguration = ForwardedIPConfiguration
    static GeoMatchStatement = GeoMatchStatement
    static HeaderMatchPattern = HeaderMatchPattern
    static Headers = Headers
    static IPSetForwardedIPConfiguration = IPSetForwardedIPConfiguration
    static IPSetReferenceStatement = IPSetReferenceStatement
    static ImmunityTimeProperty = ImmunityTimeProperty
    static JsonBody = JsonBody
    static JsonMatchPattern = JsonMatchPattern
    static Label = Label
    static LabelMatchStatement = LabelMatchStatement
    static LabelSummary = LabelSummary
    static NotStatement = NotStatement
    static OrStatement = OrStatement
    static RateBasedStatement = RateBasedStatement
    static RateBasedStatementCustomKey = RateBasedStatementCustomKey
    static RateLimitCookie = RateLimitCookie
    static RateLimitHeader = RateLimitHeader
    static RateLimitLabelNamespace = RateLimitLabelNamespace
    static RateLimitQueryArgument = RateLimitQueryArgument
    static RateLimitQueryString = RateLimitQueryString
    static RateLimitUriPath = RateLimitUriPath
    static RegexMatchStatement = RegexMatchStatement
    static RegexPatternSetReferenceStatement = RegexPatternSetReferenceStatement
    static Rule = Rule
    static RuleAction = RuleAction
    static SingleHeader = SingleHeader
    static SingleQueryArgument = SingleQueryArgument
    static SizeConstraintStatement = SizeConstraintStatement
    static SqliMatchStatement = SqliMatchStatement
    static Statement = Statement
    static TextTransformation = TextTransformation
    static VisibilityConfig = VisibilityConfig
    static XssMatchStatement = XssMatchStatement

    constructor(properties: RuleGroupProperties) {
        super('AWS::WAFv2::RuleGroup', properties)
    }
}
