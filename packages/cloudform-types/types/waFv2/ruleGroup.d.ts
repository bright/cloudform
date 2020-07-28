import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class RateBasedStatementTwo {
    Limit: Value<number>;
    AggregateKeyType: Value<string>;
    ScopeDownStatement?: StatementThree;
    constructor(properties: RateBasedStatementTwo);
}
export declare class XssMatchStatement {
    FieldToMatch: FieldToMatch;
    TextTransformations: List<TextTransformation>;
    constructor(properties: XssMatchStatement);
}
export declare class OrStatementOne {
    Statements: List<StatementTwo>;
    constructor(properties: OrStatementOne);
}
export declare class NotStatementOne {
    Statement: StatementTwo;
    constructor(properties: NotStatementOne);
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
export declare class AndStatementTwo {
    Statements: List<StatementThree>;
    constructor(properties: AndStatementTwo);
}
export declare class StatementThree {
    ByteMatchStatement?: ByteMatchStatement;
    SqliMatchStatement?: SqliMatchStatement;
    XssMatchStatement?: XssMatchStatement;
    SizeConstraintStatement?: SizeConstraintStatement;
    GeoMatchStatement?: GeoMatchStatement;
    IPSetReferenceStatement?: IPSetReferenceStatement;
    RegexPatternSetReferenceStatement?: RegexPatternSetReferenceStatement;
    constructor(properties: StatementThree);
}
export declare class NotStatementTwo {
    Statement: StatementThree;
    constructor(properties: NotStatementTwo);
}
export declare class Rule {
    Name: Value<string>;
    Priority: Value<number>;
    Statement: StatementOne;
    Action?: RuleAction;
    VisibilityConfig: VisibilityConfig;
    constructor(properties: Rule);
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
export declare class StatementOne {
    ByteMatchStatement?: ByteMatchStatement;
    SqliMatchStatement?: SqliMatchStatement;
    XssMatchStatement?: XssMatchStatement;
    SizeConstraintStatement?: SizeConstraintStatement;
    GeoMatchStatement?: GeoMatchStatement;
    IPSetReferenceStatement?: IPSetReferenceStatement;
    RegexPatternSetReferenceStatement?: RegexPatternSetReferenceStatement;
    RateBasedStatement?: RateBasedStatementOne;
    AndStatement?: AndStatementOne;
    OrStatement?: OrStatementOne;
    NotStatement?: NotStatementOne;
    constructor(properties: StatementOne);
}
export declare class RateBasedStatementOne {
    Limit: Value<number>;
    AggregateKeyType: Value<string>;
    ScopeDownStatement?: StatementTwo;
    constructor(properties: RateBasedStatementOne);
}
export declare class OrStatementTwo {
    Statements: List<StatementThree>;
    constructor(properties: OrStatementTwo);
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
export declare class IPSetReferenceStatement {
    Arn: Value<string>;
    constructor(properties: IPSetReferenceStatement);
}
export declare class VisibilityConfig {
    SampledRequestsEnabled: Value<boolean>;
    CloudWatchMetricsEnabled: Value<boolean>;
    MetricName: Value<string>;
    constructor(properties: VisibilityConfig);
}
export declare class GeoMatchStatement {
    CountryCodes?: List<Value<string>>;
    constructor(properties: GeoMatchStatement);
}
export declare class SqliMatchStatement {
    FieldToMatch: FieldToMatch;
    TextTransformations: List<TextTransformation>;
    constructor(properties: SqliMatchStatement);
}
export declare class AndStatementOne {
    Statements: List<StatementTwo>;
    constructor(properties: AndStatementOne);
}
export declare class SizeConstraintStatement {
    FieldToMatch: FieldToMatch;
    ComparisonOperator: Value<string>;
    Size: Value<number>;
    TextTransformations: List<TextTransformation>;
    constructor(properties: SizeConstraintStatement);
}
export declare class StatementTwo {
    ByteMatchStatement?: ByteMatchStatement;
    SqliMatchStatement?: SqliMatchStatement;
    XssMatchStatement?: XssMatchStatement;
    SizeConstraintStatement?: SizeConstraintStatement;
    GeoMatchStatement?: GeoMatchStatement;
    IPSetReferenceStatement?: IPSetReferenceStatement;
    RegexPatternSetReferenceStatement?: RegexPatternSetReferenceStatement;
    RateBasedStatement?: RateBasedStatementTwo;
    AndStatement?: AndStatementTwo;
    OrStatement?: OrStatementTwo;
    NotStatement?: NotStatementTwo;
    constructor(properties: StatementTwo);
}
export interface RuleGroupProperties {
    Capacity: Value<number>;
    Description?: Value<string>;
    Name?: Value<string>;
    Scope: Value<string>;
    Rules?: List<Rule>;
    VisibilityConfig: VisibilityConfig;
    Tags?: List<ResourceTag>;
}
export default class RuleGroup extends ResourceBase<RuleGroupProperties> {
    static RateBasedStatementTwo: typeof RateBasedStatementTwo;
    static XssMatchStatement: typeof XssMatchStatement;
    static OrStatementOne: typeof OrStatementOne;
    static NotStatementOne: typeof NotStatementOne;
    static TextTransformation: typeof TextTransformation;
    static ByteMatchStatement: typeof ByteMatchStatement;
    static RegexPatternSetReferenceStatement: typeof RegexPatternSetReferenceStatement;
    static AndStatementTwo: typeof AndStatementTwo;
    static StatementThree: typeof StatementThree;
    static NotStatementTwo: typeof NotStatementTwo;
    static Rule: typeof Rule;
    static RuleAction: typeof RuleAction;
    static StatementOne: typeof StatementOne;
    static RateBasedStatementOne: typeof RateBasedStatementOne;
    static OrStatementTwo: typeof OrStatementTwo;
    static FieldToMatch: typeof FieldToMatch;
    static IPSetReferenceStatement: typeof IPSetReferenceStatement;
    static VisibilityConfig: typeof VisibilityConfig;
    static GeoMatchStatement: typeof GeoMatchStatement;
    static SqliMatchStatement: typeof SqliMatchStatement;
    static AndStatementOne: typeof AndStatementOne;
    static SizeConstraintStatement: typeof SizeConstraintStatement;
    static StatementTwo: typeof StatementTwo;
    constructor(properties: RuleGroupProperties);
}
