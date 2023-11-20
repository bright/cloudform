import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class ActionCondition {
    Action: Value<string>;
    constructor(properties: ActionCondition);
}
export declare class Condition {
    LabelNameCondition?: LabelNameCondition;
    ActionCondition?: ActionCondition;
    constructor(properties: Condition);
}
export declare class FieldToMatch {
    JsonBody?: JsonBody;
    QueryString?: {
        [key: string]: any;
    };
    UriPath?: {
        [key: string]: any;
    };
    Method?: {
        [key: string]: any;
    };
    SingleHeader?: SingleHeader;
    constructor(properties: FieldToMatch);
}
export declare class Filter {
    Requirement: Value<string>;
    Behavior: Value<string>;
    Conditions: List<Condition>;
    constructor(properties: Filter);
}
export declare class JsonBody {
    MatchScope: Value<string>;
    InvalidFallbackBehavior?: Value<string>;
    MatchPattern: MatchPattern;
    constructor(properties: JsonBody);
}
export declare class LabelNameCondition {
    LabelName: Value<string>;
    constructor(properties: LabelNameCondition);
}
export declare class LoggingFilter {
    Filters: List<Filter>;
    DefaultBehavior: Value<string>;
    constructor(properties: LoggingFilter);
}
export declare class MatchPattern {
    All?: {
        [key: string]: any;
    };
    IncludedPaths?: List<Value<string>>;
    constructor(properties: MatchPattern);
}
export declare class SingleHeader {
    Name: Value<string>;
    constructor(properties: SingleHeader);
}
export interface LoggingConfigurationProperties {
    ResourceArn: Value<string>;
    LogDestinationConfigs: List<Value<string>>;
    RedactedFields?: List<FieldToMatch>;
    LoggingFilter?: LoggingFilter;
}
export default class LoggingConfiguration extends ResourceBase<LoggingConfigurationProperties> {
    static ActionCondition: typeof ActionCondition;
    static Condition: typeof Condition;
    static FieldToMatch: typeof FieldToMatch;
    static Filter: typeof Filter;
    static JsonBody: typeof JsonBody;
    static LabelNameCondition: typeof LabelNameCondition;
    static LoggingFilter: typeof LoggingFilter;
    static MatchPattern: typeof MatchPattern;
    static SingleHeader: typeof SingleHeader;
    constructor(properties: LoggingConfigurationProperties);
}
