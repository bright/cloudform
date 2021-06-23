import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class JsonMatchPattern {
    All?: {
        [key: string]: any;
    };
    IncludedPaths?: List<Value<string>>;
    constructor(properties: JsonMatchPattern);
}
export declare class XssMatchStatement {
    FieldToMatch: FieldToMatch;
    TextTransformations: List<TextTransformation>;
    constructor(properties: XssMatchStatement);
}
export declare class LabelMatchStatement {
    Scope: Value<string>;
    Key: Value<string>;
    constructor(properties: LabelMatchStatement);
}
export declare class RuleAction {
    Allow?: {
        [key: string]: any;
    };
    Block?: {
        [key: string]: any;
    };
    Count?: {
        [key: string]: any;
    };
    constructor(properties: RuleAction);
}
export declare class Statement {
    ByteMatchStatement?: ByteMatchStatement;
    SqliMatchStatement?: SqliMatchStatement;
    XssMatchStatement?: XssMatchStatement;
    SizeConstraintStatement?: SizeConstraintStatement;
    GeoMatchStatement?: GeoMatchStatement;
    IPSetReferenceStatement?: IPSetReferenceStatement;
    RegexPatternSetReferenceStatement?: RegexPatternSetReferenceStatement;
    RateBasedStatement?: RateBasedStatement;
    AndStatement?: AndStatement;
    OrStatement?: OrStatement;
    NotStatement?: NotStatement;
    LabelMatchStatement?: LabelMatchStatement;
    constructor(properties: Statement);
}
export declare class LabelSummary {
    Name?: Value<string>;
    constructor(properties: LabelSummary);
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
export declare class IPSetReferenceStatement {
    Arn: Value<string>;
    IPSetForwardedIPConfig?: IPSetForwardedIPConfiguration;
    constructor(properties: IPSetReferenceStatement);
}
export declare class RateBasedStatement {
    Limit: Value<number>;
    AggregateKeyType: Value<string>;
    ScopeDownStatement?: Statement;
    ForwardedIPConfig?: ForwardedIPConfiguration;
    constructor(properties: RateBasedStatement);
}
export declare class VisibilityConfig {
    SampledRequestsEnabled: Value<boolean>;
    CloudWatchMetricsEnabled: Value<boolean>;
    MetricName: Value<string>;
    constructor(properties: VisibilityConfig);
}
export declare class GeoMatchStatement {
    CountryCodes?: List<Value<string>>;
    ForwardedIPConfig?: ForwardedIPConfiguration;
    constructor(properties: GeoMatchStatement);
}
export declare class AndStatement {
    Statements: List<Statement>;
    constructor(properties: AndStatement);
}
export declare class IPSetForwardedIPConfiguration {
    HeaderName: Value<string>;
    FallbackBehavior: Value<string>;
    Position: Value<string>;
    constructor(properties: IPSetForwardedIPConfiguration);
}
export declare class TextTransformation {
    Priority: Value<number>;
    Type: Value<string>;
    constructor(properties: TextTransformation);
}
export declare class ByteMatchStatement {
    SearchString?: Value<string>;
    SearchStringBase64?: Value<string>;
    FieldToMatch: FieldToMatch;
    TextTransformations: List<TextTransformation>;
    PositionalConstraint: Value<string>;
    constructor(properties: ByteMatchStatement);
}
export declare class RegexPatternSetReferenceStatement {
    Arn: Value<string>;
    FieldToMatch: FieldToMatch;
    TextTransformations: List<TextTransformation>;
    constructor(properties: RegexPatternSetReferenceStatement);
}
export declare class OrStatement {
    Statements: List<Statement>;
    constructor(properties: OrStatement);
}
export declare class Rule {
    Name: Value<string>;
    Priority: Value<number>;
    Statement: Statement;
    Action?: RuleAction;
    RuleLabels?: List<Label>;
    VisibilityConfig: VisibilityConfig;
    constructor(properties: Rule);
}
export declare class JsonBody {
    MatchPattern: JsonMatchPattern;
    MatchScope: Value<string>;
    InvalidFallbackBehavior?: Value<string>;
    constructor(properties: JsonBody);
}
export declare class CustomResponseBody {
    ContentType: Value<string>;
    Content: Value<string>;
    constructor(properties: CustomResponseBody);
}
export declare class Label {
    Name: Value<string>;
    constructor(properties: Label);
}
export declare class SqliMatchStatement {
    FieldToMatch: FieldToMatch;
    TextTransformations: List<TextTransformation>;
    constructor(properties: SqliMatchStatement);
}
export declare class NotStatement {
    Statement: Statement;
    constructor(properties: NotStatement);
}
export declare class ForwardedIPConfiguration {
    HeaderName: Value<string>;
    FallbackBehavior: Value<string>;
    constructor(properties: ForwardedIPConfiguration);
}
export declare class SizeConstraintStatement {
    FieldToMatch: FieldToMatch;
    ComparisonOperator: Value<string>;
    Size: Value<number>;
    TextTransformations: List<TextTransformation>;
    constructor(properties: SizeConstraintStatement);
}
export interface RuleGroupProperties {
    Capacity: Value<number>;
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
export default class RuleGroup extends ResourceBase<RuleGroupProperties> {
    static JsonMatchPattern: typeof JsonMatchPattern;
    static XssMatchStatement: typeof XssMatchStatement;
    static LabelMatchStatement: typeof LabelMatchStatement;
    static RuleAction: typeof RuleAction;
    static Statement: typeof Statement;
    static LabelSummary: typeof LabelSummary;
    static FieldToMatch: typeof FieldToMatch;
    static IPSetReferenceStatement: typeof IPSetReferenceStatement;
    static RateBasedStatement: typeof RateBasedStatement;
    static VisibilityConfig: typeof VisibilityConfig;
    static GeoMatchStatement: typeof GeoMatchStatement;
    static AndStatement: typeof AndStatement;
    static IPSetForwardedIPConfiguration: typeof IPSetForwardedIPConfiguration;
    static TextTransformation: typeof TextTransformation;
    static ByteMatchStatement: typeof ByteMatchStatement;
    static RegexPatternSetReferenceStatement: typeof RegexPatternSetReferenceStatement;
    static OrStatement: typeof OrStatement;
    static Rule: typeof Rule;
    static JsonBody: typeof JsonBody;
    static CustomResponseBody: typeof CustomResponseBody;
    static Label: typeof Label;
    static SqliMatchStatement: typeof SqliMatchStatement;
    static NotStatement: typeof NotStatement;
    static ForwardedIPConfiguration: typeof ForwardedIPConfiguration;
    static SizeConstraintStatement: typeof SizeConstraintStatement;
    constructor(properties: RuleGroupProperties);
}
