import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class CustomRequestHandling {
    InsertHeaders: List<CustomHTTPHeader>;
    constructor(properties: CustomRequestHandling);
}
export declare class ManagedRuleGroupStatement {
    Name: Value<string>;
    VendorName: Value<string>;
    ExcludedRules?: List<ExcludedRule>;
    ScopeDownStatement?: Statement;
    constructor(properties: ManagedRuleGroupStatement);
}
export declare class TextTransformation {
    Priority: Value<number>;
    Type: Value<string>;
    constructor(properties: TextTransformation);
}
export declare class AllowAction {
    CustomRequestHandling?: CustomRequestHandling;
    constructor(properties: AllowAction);
}
export declare class DefaultAction {
    Allow?: AllowAction;
    Block?: BlockAction;
    constructor(properties: DefaultAction);
}
export declare class XssMatchStatement {
    FieldToMatch: FieldToMatch;
    TextTransformations: List<TextTransformation>;
    constructor(properties: XssMatchStatement);
}
export declare class ByteMatchStatement {
    SearchString?: Value<string>;
    SearchStringBase64?: Value<string>;
    FieldToMatch: FieldToMatch;
    TextTransformations: List<TextTransformation>;
    PositionalConstraint: Value<string>;
    constructor(properties: ByteMatchStatement);
}
export declare class ForwardedIPConfiguration {
    HeaderName: Value<string>;
    FallbackBehavior: Value<string>;
    constructor(properties: ForwardedIPConfiguration);
}
export declare class OrStatement {
    Statements: List<Statement>;
    constructor(properties: OrStatement);
}
export declare class Label {
    Name: Value<string>;
    constructor(properties: Label);
}
export declare class CustomHTTPHeader {
    Name: Value<string>;
    Value: Value<string>;
    constructor(properties: CustomHTTPHeader);
}
export declare class RegexPatternSetReferenceStatement {
    Arn: Value<string>;
    FieldToMatch: FieldToMatch;
    TextTransformations: List<TextTransformation>;
    constructor(properties: RegexPatternSetReferenceStatement);
}
export declare class IPSetForwardedIPConfiguration {
    HeaderName: Value<string>;
    FallbackBehavior: Value<string>;
    Position: Value<string>;
    constructor(properties: IPSetForwardedIPConfiguration);
}
export declare class CustomResponseBody {
    ContentType: Value<string>;
    Content: Value<string>;
    constructor(properties: CustomResponseBody);
}
export declare class Statement {
    ByteMatchStatement?: ByteMatchStatement;
    SqliMatchStatement?: SqliMatchStatement;
    XssMatchStatement?: XssMatchStatement;
    SizeConstraintStatement?: SizeConstraintStatement;
    GeoMatchStatement?: GeoMatchStatement;
    RuleGroupReferenceStatement?: RuleGroupReferenceStatement;
    IPSetReferenceStatement?: IPSetReferenceStatement;
    RegexPatternSetReferenceStatement?: RegexPatternSetReferenceStatement;
    ManagedRuleGroupStatement?: ManagedRuleGroupStatement;
    RateBasedStatement?: RateBasedStatement;
    AndStatement?: AndStatement;
    OrStatement?: OrStatement;
    NotStatement?: NotStatement;
    LabelMatchStatement?: LabelMatchStatement;
    constructor(properties: Statement);
}
export declare class BlockAction {
    CustomResponse?: CustomResponse;
    constructor(properties: BlockAction);
}
export declare class RuleGroupReferenceStatement {
    Arn: Value<string>;
    ExcludedRules?: List<ExcludedRule>;
    constructor(properties: RuleGroupReferenceStatement);
}
export declare class LabelMatchStatement {
    Scope: Value<string>;
    Key: Value<string>;
    constructor(properties: LabelMatchStatement);
}
export declare class JsonMatchPattern {
    All?: {
        [key: string]: any;
    };
    IncludedPaths?: List<Value<string>>;
    constructor(properties: JsonMatchPattern);
}
export declare class AndStatement {
    Statements: List<Statement>;
    constructor(properties: AndStatement);
}
export declare class CountAction {
    CustomRequestHandling?: CustomRequestHandling;
    constructor(properties: CountAction);
}
export declare class SizeConstraintStatement {
    FieldToMatch: FieldToMatch;
    ComparisonOperator: Value<string>;
    Size: Value<number>;
    TextTransformations: List<TextTransformation>;
    constructor(properties: SizeConstraintStatement);
}
export declare class FieldToMatch {
    SingleHeader?: {
        [key: string]: any;
    };
    SingleQueryArgument?: {
        [key: string]: any;
    };
    AllQueryArguments?: {
        [key: string]: any;
    };
    UriPath?: {
        [key: string]: any;
    };
    QueryString?: {
        [key: string]: any;
    };
    Body?: {
        [key: string]: any;
    };
    Method?: {
        [key: string]: any;
    };
    JsonBody?: JsonBody;
    constructor(properties: FieldToMatch);
}
export declare class SqliMatchStatement {
    FieldToMatch: FieldToMatch;
    TextTransformations: List<TextTransformation>;
    constructor(properties: SqliMatchStatement);
}
export declare class GeoMatchStatement {
    CountryCodes?: List<Value<string>>;
    ForwardedIPConfig?: ForwardedIPConfiguration;
    constructor(properties: GeoMatchStatement);
}
export declare class RuleAction {
    Allow?: AllowAction;
    Block?: BlockAction;
    Count?: CountAction;
    constructor(properties: RuleAction);
}
export declare class JsonBody {
    MatchPattern: JsonMatchPattern;
    MatchScope: Value<string>;
    InvalidFallbackBehavior?: Value<string>;
    constructor(properties: JsonBody);
}
export declare class NotStatement {
    Statement: Statement;
    constructor(properties: NotStatement);
}
export declare class OverrideAction {
    Count?: {
        [key: string]: any;
    };
    None?: {
        [key: string]: any;
    };
    constructor(properties: OverrideAction);
}
export declare class Rule {
    Name: Value<string>;
    Priority: Value<number>;
    Statement: Statement;
    Action?: RuleAction;
    OverrideAction?: OverrideAction;
    RuleLabels?: List<Label>;
    VisibilityConfig: VisibilityConfig;
    constructor(properties: Rule);
}
export declare class CustomResponse {
    ResponseCode: Value<number>;
    CustomResponseBodyKey?: Value<string>;
    ResponseHeaders?: List<CustomHTTPHeader>;
    constructor(properties: CustomResponse);
}
export declare class RateBasedStatement {
    Limit: Value<number>;
    AggregateKeyType: Value<string>;
    ScopeDownStatement?: Statement;
    ForwardedIPConfig?: ForwardedIPConfiguration;
    constructor(properties: RateBasedStatement);
}
export declare class ExcludedRule {
    Name: Value<string>;
    constructor(properties: ExcludedRule);
}
export declare class VisibilityConfig {
    SampledRequestsEnabled: Value<boolean>;
    CloudWatchMetricsEnabled: Value<boolean>;
    MetricName: Value<string>;
    constructor(properties: VisibilityConfig);
}
export declare class IPSetReferenceStatement {
    Arn: Value<string>;
    IPSetForwardedIPConfig?: IPSetForwardedIPConfiguration;
    constructor(properties: IPSetReferenceStatement);
}
export interface WebACLProperties {
    DefaultAction: DefaultAction;
    Description?: Value<string>;
    Name?: Value<string>;
    Scope: Value<string>;
    Rules?: List<Rule>;
    VisibilityConfig: VisibilityConfig;
    Tags?: List<ResourceTag>;
    CustomResponseBodies?: {
        [key: string]: CustomResponseBody;
    };
}
export default class WebACL extends ResourceBase<WebACLProperties> {
    static CustomRequestHandling: typeof CustomRequestHandling;
    static ManagedRuleGroupStatement: typeof ManagedRuleGroupStatement;
    static TextTransformation: typeof TextTransformation;
    static AllowAction: typeof AllowAction;
    static DefaultAction: typeof DefaultAction;
    static XssMatchStatement: typeof XssMatchStatement;
    static ByteMatchStatement: typeof ByteMatchStatement;
    static ForwardedIPConfiguration: typeof ForwardedIPConfiguration;
    static OrStatement: typeof OrStatement;
    static Label: typeof Label;
    static CustomHTTPHeader: typeof CustomHTTPHeader;
    static RegexPatternSetReferenceStatement: typeof RegexPatternSetReferenceStatement;
    static IPSetForwardedIPConfiguration: typeof IPSetForwardedIPConfiguration;
    static CustomResponseBody: typeof CustomResponseBody;
    static Statement: typeof Statement;
    static BlockAction: typeof BlockAction;
    static RuleGroupReferenceStatement: typeof RuleGroupReferenceStatement;
    static LabelMatchStatement: typeof LabelMatchStatement;
    static JsonMatchPattern: typeof JsonMatchPattern;
    static AndStatement: typeof AndStatement;
    static CountAction: typeof CountAction;
    static SizeConstraintStatement: typeof SizeConstraintStatement;
    static FieldToMatch: typeof FieldToMatch;
    static SqliMatchStatement: typeof SqliMatchStatement;
    static GeoMatchStatement: typeof GeoMatchStatement;
    static RuleAction: typeof RuleAction;
    static JsonBody: typeof JsonBody;
    static NotStatement: typeof NotStatement;
    static OverrideAction: typeof OverrideAction;
    static Rule: typeof Rule;
    static CustomResponse: typeof CustomResponse;
    static RateBasedStatement: typeof RateBasedStatement;
    static ExcludedRule: typeof ExcludedRule;
    static VisibilityConfig: typeof VisibilityConfig;
    static IPSetReferenceStatement: typeof IPSetReferenceStatement;
    constructor(properties: WebACLProperties);
}
