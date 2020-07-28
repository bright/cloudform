import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
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
export declare class ManagedRuleGroupStatement {
    Name: Value<string>;
    VendorName: Value<string>;
    ExcludedRules?: List<ExcludedRule>;
    constructor(properties: ManagedRuleGroupStatement);
}
export declare class TextTransformation {
    Priority: Value<number>;
    Type: Value<string>;
    constructor(properties: TextTransformation);
}
export declare class DefaultAction {
    Allow?: {
        [key: string]: any;
    };
    Block?: {
        [key: string]: any;
    };
    constructor(properties: DefaultAction);
}
export declare class OrStatementTwo {
    Statements: List<StatementThree>;
    constructor(properties: OrStatementTwo);
}
export declare class XssMatchStatement {
    FieldToMatch: FieldToMatch;
    TextTransformations: List<TextTransformation>;
    constructor(properties: XssMatchStatement);
}
export declare class StatementOne {
    ByteMatchStatement?: ByteMatchStatement;
    SqliMatchStatement?: SqliMatchStatement;
    XssMatchStatement?: XssMatchStatement;
    SizeConstraintStatement?: SizeConstraintStatement;
    GeoMatchStatement?: GeoMatchStatement;
    RuleGroupReferenceStatement?: RuleGroupReferenceStatement;
    IPSetReferenceStatement?: IPSetReferenceStatement;
    RegexPatternSetReferenceStatement?: RegexPatternSetReferenceStatement;
    ManagedRuleGroupStatement?: ManagedRuleGroupStatement;
    RateBasedStatement?: RateBasedStatementOne;
    AndStatement?: AndStatementOne;
    OrStatement?: OrStatementOne;
    NotStatement?: NotStatementOne;
    constructor(properties: StatementOne);
}
export declare class ByteMatchStatement {
    SearchString?: Value<string>;
    SearchStringBase64?: Value<string>;
    FieldToMatch: FieldToMatch;
    TextTransformations: List<TextTransformation>;
    PositionalConstraint: Value<string>;
    constructor(properties: ByteMatchStatement);
}
export declare class NotStatementTwo {
    Statement: StatementThree;
    constructor(properties: NotStatementTwo);
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
export declare class RateBasedStatementTwo {
    Limit: Value<number>;
    AggregateKeyType: Value<string>;
    ScopeDownStatement?: StatementThree;
    ForwardedIPConfig?: ForwardedIPConfiguration;
    constructor(properties: RateBasedStatementTwo);
}
export declare class ForwardedIPConfiguration {
    HeaderName: Value<string>;
    FallbackBehavior: Value<string>;
    constructor(properties: ForwardedIPConfiguration);
}
export declare class AndStatementTwo {
    Statements: List<StatementThree>;
    constructor(properties: AndStatementTwo);
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
export declare class Rule {
    Name: Value<string>;
    Priority: Value<number>;
    Statement: StatementOne;
    Action?: RuleAction;
    OverrideAction?: OverrideAction;
    VisibilityConfig: VisibilityConfig;
    constructor(properties: Rule);
}
export declare class OrStatementOne {
    Statements: List<StatementTwo>;
    constructor(properties: OrStatementOne);
}
export declare class RuleGroupReferenceStatement {
    Arn: Value<string>;
    ExcludedRules?: List<ExcludedRule>;
    constructor(properties: RuleGroupReferenceStatement);
}
export declare class StatementTwo {
    ByteMatchStatement?: ByteMatchStatement;
    SqliMatchStatement?: SqliMatchStatement;
    XssMatchStatement?: XssMatchStatement;
    SizeConstraintStatement?: SizeConstraintStatement;
    GeoMatchStatement?: GeoMatchStatement;
    RuleGroupReferenceStatement?: RuleGroupReferenceStatement;
    IPSetReferenceStatement?: IPSetReferenceStatement;
    RegexPatternSetReferenceStatement?: RegexPatternSetReferenceStatement;
    ManagedRuleGroupStatement?: ManagedRuleGroupStatement;
    RateBasedStatement?: RateBasedStatementTwo;
    AndStatement?: AndStatementTwo;
    OrStatement?: OrStatementTwo;
    NotStatement?: NotStatementTwo;
    constructor(properties: StatementTwo);
}
export declare class NotStatementOne {
    Statement: StatementTwo;
    constructor(properties: NotStatementOne);
}
export declare class RateBasedStatementOne {
    Limit: Value<number>;
    AggregateKeyType: Value<string>;
    ScopeDownStatement?: StatementTwo;
    ForwardedIPConfig?: ForwardedIPConfiguration;
    constructor(properties: RateBasedStatementOne);
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
export declare class IPSetReferenceStatement {
    Arn: Value<string>;
    IPSetForwardedIPConfig?: IPSetForwardedIPConfiguration;
    constructor(properties: IPSetReferenceStatement);
}
export declare class AndStatementOne {
    Statements: List<StatementTwo>;
    constructor(properties: AndStatementOne);
}
export declare class StatementThree {
    ByteMatchStatement?: ByteMatchStatement;
    SqliMatchStatement?: SqliMatchStatement;
    XssMatchStatement?: XssMatchStatement;
    SizeConstraintStatement?: SizeConstraintStatement;
    GeoMatchStatement?: GeoMatchStatement;
    RuleGroupReferenceStatement?: RuleGroupReferenceStatement;
    IPSetReferenceStatement?: IPSetReferenceStatement;
    RegexPatternSetReferenceStatement?: RegexPatternSetReferenceStatement;
    ManagedRuleGroupStatement?: ManagedRuleGroupStatement;
    constructor(properties: StatementThree);
}
export interface WebACLProperties {
    DefaultAction: DefaultAction;
    Description?: Value<string>;
    Name?: Value<string>;
    Scope: Value<string>;
    Rules?: List<Rule>;
    VisibilityConfig: VisibilityConfig;
    Tags?: List<ResourceTag>;
}
export default class WebACL extends ResourceBase<WebACLProperties> {
    static RuleAction: typeof RuleAction;
    static ManagedRuleGroupStatement: typeof ManagedRuleGroupStatement;
    static TextTransformation: typeof TextTransformation;
    static DefaultAction: typeof DefaultAction;
    static OrStatementTwo: typeof OrStatementTwo;
    static XssMatchStatement: typeof XssMatchStatement;
    static StatementOne: typeof StatementOne;
    static ByteMatchStatement: typeof ByteMatchStatement;
    static NotStatementTwo: typeof NotStatementTwo;
    static OverrideAction: typeof OverrideAction;
    static RateBasedStatementTwo: typeof RateBasedStatementTwo;
    static ForwardedIPConfiguration: typeof ForwardedIPConfiguration;
    static AndStatementTwo: typeof AndStatementTwo;
    static RegexPatternSetReferenceStatement: typeof RegexPatternSetReferenceStatement;
    static IPSetForwardedIPConfiguration: typeof IPSetForwardedIPConfiguration;
    static Rule: typeof Rule;
    static OrStatementOne: typeof OrStatementOne;
    static RuleGroupReferenceStatement: typeof RuleGroupReferenceStatement;
    static StatementTwo: typeof StatementTwo;
    static NotStatementOne: typeof NotStatementOne;
    static RateBasedStatementOne: typeof RateBasedStatementOne;
    static ExcludedRule: typeof ExcludedRule;
    static VisibilityConfig: typeof VisibilityConfig;
    static SizeConstraintStatement: typeof SizeConstraintStatement;
    static FieldToMatch: typeof FieldToMatch;
    static SqliMatchStatement: typeof SqliMatchStatement;
    static GeoMatchStatement: typeof GeoMatchStatement;
    static IPSetReferenceStatement: typeof IPSetReferenceStatement;
    static AndStatementOne: typeof AndStatementOne;
    static StatementThree: typeof StatementThree;
    constructor(properties: WebACLProperties);
}
