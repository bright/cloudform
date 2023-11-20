import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class AllowAction {
    CustomRequestHandling?: CustomRequestHandling;
    constructor(properties: AllowAction);
}
export declare class AndStatement {
    Statements: List<Statement>;
    constructor(properties: AndStatement);
}
export declare class BlockAction {
    CustomResponse?: CustomResponse;
    constructor(properties: BlockAction);
}
export declare class Body {
    OversizeHandling?: Value<string>;
    constructor(properties: Body);
}
export declare class ByteMatchStatement {
    SearchStringBase64?: Value<string>;
    TextTransformations: List<TextTransformation>;
    PositionalConstraint: Value<string>;
    SearchString?: Value<string>;
    FieldToMatch: FieldToMatch;
    constructor(properties: ByteMatchStatement);
}
export declare class CaptchaAction {
    CustomRequestHandling?: CustomRequestHandling;
    constructor(properties: CaptchaAction);
}
export declare class CaptchaConfig {
    ImmunityTimeProperty?: ImmunityTimeProperty;
    constructor(properties: CaptchaConfig);
}
export declare class ChallengeAction {
    CustomRequestHandling?: CustomRequestHandling;
    constructor(properties: ChallengeAction);
}
export declare class ChallengeConfig {
    ImmunityTimeProperty?: ImmunityTimeProperty;
    constructor(properties: ChallengeConfig);
}
export declare class CookieMatchPattern {
    All?: {
        [key: string]: any;
    };
    IncludedCookies?: List<Value<string>>;
    ExcludedCookies?: List<Value<string>>;
    constructor(properties: CookieMatchPattern);
}
export declare class Cookies {
    MatchScope: Value<string>;
    MatchPattern: CookieMatchPattern;
    OversizeHandling: Value<string>;
    constructor(properties: Cookies);
}
export declare class CountAction {
    CustomRequestHandling?: CustomRequestHandling;
    constructor(properties: CountAction);
}
export declare class CustomHTTPHeader {
    Value: Value<string>;
    Name: Value<string>;
    constructor(properties: CustomHTTPHeader);
}
export declare class CustomRequestHandling {
    InsertHeaders: List<CustomHTTPHeader>;
    constructor(properties: CustomRequestHandling);
}
export declare class CustomResponse {
    ResponseCode: Value<number>;
    CustomResponseBodyKey?: Value<string>;
    ResponseHeaders?: List<CustomHTTPHeader>;
    constructor(properties: CustomResponse);
}
export declare class CustomResponseBody {
    ContentType: Value<string>;
    Content: Value<string>;
    constructor(properties: CustomResponseBody);
}
export declare class FieldToMatch {
    JsonBody?: JsonBody;
    AllQueryArguments?: {
        [key: string]: any;
    };
    SingleQueryArgument?: SingleQueryArgument;
    UriPath?: {
        [key: string]: any;
    };
    QueryString?: {
        [key: string]: any;
    };
    Headers?: Headers;
    Cookies?: Cookies;
    Method?: {
        [key: string]: any;
    };
    Body?: Body;
    SingleHeader?: SingleHeader;
    constructor(properties: FieldToMatch);
}
export declare class ForwardedIPConfiguration {
    FallbackBehavior: Value<string>;
    HeaderName: Value<string>;
    constructor(properties: ForwardedIPConfiguration);
}
export declare class GeoMatchStatement {
    ForwardedIPConfig?: ForwardedIPConfiguration;
    CountryCodes?: List<Value<string>>;
    constructor(properties: GeoMatchStatement);
}
export declare class HeaderMatchPattern {
    All?: {
        [key: string]: any;
    };
    IncludedHeaders?: List<Value<string>>;
    ExcludedHeaders?: List<Value<string>>;
    constructor(properties: HeaderMatchPattern);
}
export declare class Headers {
    MatchScope: Value<string>;
    MatchPattern: HeaderMatchPattern;
    OversizeHandling: Value<string>;
    constructor(properties: Headers);
}
export declare class IPSetForwardedIPConfiguration {
    FallbackBehavior: Value<string>;
    HeaderName: Value<string>;
    Position: Value<string>;
    constructor(properties: IPSetForwardedIPConfiguration);
}
export declare class IPSetReferenceStatement {
    IPSetForwardedIPConfig?: IPSetForwardedIPConfiguration;
    Arn: Value<string>;
    constructor(properties: IPSetReferenceStatement);
}
export declare class ImmunityTimeProperty {
    ImmunityTime: Value<number>;
    constructor(properties: ImmunityTimeProperty);
}
export declare class JsonBody {
    MatchScope: Value<string>;
    MatchPattern: JsonMatchPattern;
    InvalidFallbackBehavior?: Value<string>;
    OversizeHandling?: Value<string>;
    constructor(properties: JsonBody);
}
export declare class JsonMatchPattern {
    All?: {
        [key: string]: any;
    };
    IncludedPaths?: List<Value<string>>;
    constructor(properties: JsonMatchPattern);
}
export declare class Label {
    Name: Value<string>;
    constructor(properties: Label);
}
export declare class LabelMatchStatement {
    Scope: Value<string>;
    Key: Value<string>;
    constructor(properties: LabelMatchStatement);
}
export declare class LabelSummary {
    Name?: Value<string>;
    constructor(properties: LabelSummary);
}
export declare class NotStatement {
    Statement: Statement;
    constructor(properties: NotStatement);
}
export declare class OrStatement {
    Statements: List<Statement>;
    constructor(properties: OrStatement);
}
export declare class RateBasedStatement {
    AggregateKeyType: Value<string>;
    CustomKeys?: List<RateBasedStatementCustomKey>;
    ForwardedIPConfig?: ForwardedIPConfiguration;
    Limit: Value<number>;
    ScopeDownStatement?: Statement;
    constructor(properties: RateBasedStatement);
}
export declare class RateBasedStatementCustomKey {
    Cookie?: RateLimitCookie;
    ForwardedIP?: {
        [key: string]: any;
    };
    QueryArgument?: RateLimitQueryArgument;
    Header?: RateLimitHeader;
    HTTPMethod?: {
        [key: string]: any;
    };
    QueryString?: RateLimitQueryString;
    UriPath?: RateLimitUriPath;
    IP?: {
        [key: string]: any;
    };
    LabelNamespace?: RateLimitLabelNamespace;
    constructor(properties: RateBasedStatementCustomKey);
}
export declare class RateLimitCookie {
    TextTransformations: List<TextTransformation>;
    Name: Value<string>;
    constructor(properties: RateLimitCookie);
}
export declare class RateLimitHeader {
    TextTransformations: List<TextTransformation>;
    Name: Value<string>;
    constructor(properties: RateLimitHeader);
}
export declare class RateLimitLabelNamespace {
    Namespace: Value<string>;
    constructor(properties: RateLimitLabelNamespace);
}
export declare class RateLimitQueryArgument {
    TextTransformations: List<TextTransformation>;
    Name: Value<string>;
    constructor(properties: RateLimitQueryArgument);
}
export declare class RateLimitQueryString {
    TextTransformations: List<TextTransformation>;
    constructor(properties: RateLimitQueryString);
}
export declare class RateLimitUriPath {
    TextTransformations: List<TextTransformation>;
    constructor(properties: RateLimitUriPath);
}
export declare class RegexMatchStatement {
    TextTransformations: List<TextTransformation>;
    RegexString: Value<string>;
    FieldToMatch: FieldToMatch;
    constructor(properties: RegexMatchStatement);
}
export declare class RegexPatternSetReferenceStatement {
    TextTransformations: List<TextTransformation>;
    Arn: Value<string>;
    FieldToMatch: FieldToMatch;
    constructor(properties: RegexPatternSetReferenceStatement);
}
export declare class Rule {
    Action?: RuleAction;
    Priority: Value<number>;
    Statement: Statement;
    ChallengeConfig?: ChallengeConfig;
    RuleLabels?: List<Label>;
    VisibilityConfig: VisibilityConfig;
    CaptchaConfig?: CaptchaConfig;
    Name: Value<string>;
    constructor(properties: Rule);
}
export declare class RuleAction {
    Captcha?: CaptchaAction;
    Block?: BlockAction;
    Count?: CountAction;
    Allow?: AllowAction;
    Challenge?: ChallengeAction;
    constructor(properties: RuleAction);
}
export declare class SingleHeader {
    Name: Value<string>;
    constructor(properties: SingleHeader);
}
export declare class SingleQueryArgument {
    Name: Value<string>;
    constructor(properties: SingleQueryArgument);
}
export declare class SizeConstraintStatement {
    ComparisonOperator: Value<string>;
    TextTransformations: List<TextTransformation>;
    Size: Value<number>;
    FieldToMatch: FieldToMatch;
    constructor(properties: SizeConstraintStatement);
}
export declare class SqliMatchStatement {
    SensitivityLevel?: Value<string>;
    TextTransformations: List<TextTransformation>;
    FieldToMatch: FieldToMatch;
    constructor(properties: SqliMatchStatement);
}
export declare class Statement {
    SizeConstraintStatement?: SizeConstraintStatement;
    AndStatement?: AndStatement;
    XssMatchStatement?: XssMatchStatement;
    NotStatement?: NotStatement;
    ByteMatchStatement?: ByteMatchStatement;
    RateBasedStatement?: RateBasedStatement;
    GeoMatchStatement?: GeoMatchStatement;
    LabelMatchStatement?: LabelMatchStatement;
    RegexMatchStatement?: RegexMatchStatement;
    SqliMatchStatement?: SqliMatchStatement;
    RegexPatternSetReferenceStatement?: RegexPatternSetReferenceStatement;
    OrStatement?: OrStatement;
    IPSetReferenceStatement?: IPSetReferenceStatement;
    constructor(properties: Statement);
}
export declare class TextTransformation {
    Type: Value<string>;
    Priority: Value<number>;
    constructor(properties: TextTransformation);
}
export declare class VisibilityConfig {
    MetricName: Value<string>;
    SampledRequestsEnabled: Value<boolean>;
    CloudWatchMetricsEnabled: Value<boolean>;
    constructor(properties: VisibilityConfig);
}
export declare class XssMatchStatement {
    TextTransformations: List<TextTransformation>;
    FieldToMatch: FieldToMatch;
    constructor(properties: XssMatchStatement);
}
export interface RuleGroupProperties {
    Description?: Value<string>;
    Scope: Value<string>;
    Capacity: Value<number>;
    AvailableLabels?: List<LabelSummary>;
    CustomResponseBodies?: {
        [key: string]: CustomResponseBody;
    };
    ConsumedLabels?: List<LabelSummary>;
    Rules?: List<Rule>;
    VisibilityConfig: VisibilityConfig;
    Tags?: List<ResourceTag>;
    Name?: Value<string>;
}
export default class RuleGroup extends ResourceBase<RuleGroupProperties> {
    static AllowAction: typeof AllowAction;
    static AndStatement: typeof AndStatement;
    static BlockAction: typeof BlockAction;
    static Body: typeof Body;
    static ByteMatchStatement: typeof ByteMatchStatement;
    static CaptchaAction: typeof CaptchaAction;
    static CaptchaConfig: typeof CaptchaConfig;
    static ChallengeAction: typeof ChallengeAction;
    static ChallengeConfig: typeof ChallengeConfig;
    static CookieMatchPattern: typeof CookieMatchPattern;
    static Cookies: typeof Cookies;
    static CountAction: typeof CountAction;
    static CustomHTTPHeader: typeof CustomHTTPHeader;
    static CustomRequestHandling: typeof CustomRequestHandling;
    static CustomResponse: typeof CustomResponse;
    static CustomResponseBody: typeof CustomResponseBody;
    static FieldToMatch: typeof FieldToMatch;
    static ForwardedIPConfiguration: typeof ForwardedIPConfiguration;
    static GeoMatchStatement: typeof GeoMatchStatement;
    static HeaderMatchPattern: typeof HeaderMatchPattern;
    static Headers: typeof Headers;
    static IPSetForwardedIPConfiguration: typeof IPSetForwardedIPConfiguration;
    static IPSetReferenceStatement: typeof IPSetReferenceStatement;
    static ImmunityTimeProperty: typeof ImmunityTimeProperty;
    static JsonBody: typeof JsonBody;
    static JsonMatchPattern: typeof JsonMatchPattern;
    static Label: typeof Label;
    static LabelMatchStatement: typeof LabelMatchStatement;
    static LabelSummary: typeof LabelSummary;
    static NotStatement: typeof NotStatement;
    static OrStatement: typeof OrStatement;
    static RateBasedStatement: typeof RateBasedStatement;
    static RateBasedStatementCustomKey: typeof RateBasedStatementCustomKey;
    static RateLimitCookie: typeof RateLimitCookie;
    static RateLimitHeader: typeof RateLimitHeader;
    static RateLimitLabelNamespace: typeof RateLimitLabelNamespace;
    static RateLimitQueryArgument: typeof RateLimitQueryArgument;
    static RateLimitQueryString: typeof RateLimitQueryString;
    static RateLimitUriPath: typeof RateLimitUriPath;
    static RegexMatchStatement: typeof RegexMatchStatement;
    static RegexPatternSetReferenceStatement: typeof RegexPatternSetReferenceStatement;
    static Rule: typeof Rule;
    static RuleAction: typeof RuleAction;
    static SingleHeader: typeof SingleHeader;
    static SingleQueryArgument: typeof SingleQueryArgument;
    static SizeConstraintStatement: typeof SizeConstraintStatement;
    static SqliMatchStatement: typeof SqliMatchStatement;
    static Statement: typeof Statement;
    static TextTransformation: typeof TextTransformation;
    static VisibilityConfig: typeof VisibilityConfig;
    static XssMatchStatement: typeof XssMatchStatement;
    constructor(properties: RuleGroupProperties);
}
