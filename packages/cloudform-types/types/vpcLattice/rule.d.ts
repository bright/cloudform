import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class Action {
    Forward?: Forward;
    FixedResponse?: FixedResponse;
    constructor(properties: Action);
}
export declare class FixedResponse {
    StatusCode: Value<number>;
    constructor(properties: FixedResponse);
}
export declare class Forward {
    TargetGroups: List<WeightedTargetGroup>;
    constructor(properties: Forward);
}
export declare class HeaderMatch {
    CaseSensitive?: Value<boolean>;
    Name: Value<string>;
    Match: HeaderMatchType;
    constructor(properties: HeaderMatch);
}
export declare class HeaderMatchType {
    Contains?: Value<string>;
    Exact?: Value<string>;
    Prefix?: Value<string>;
    constructor(properties: HeaderMatchType);
}
export declare class HttpMatch {
    HeaderMatches?: List<HeaderMatch>;
    PathMatch?: PathMatch;
    Method?: Value<string>;
    constructor(properties: HttpMatch);
}
export declare class Match {
    HttpMatch: HttpMatch;
    constructor(properties: Match);
}
export declare class PathMatch {
    CaseSensitive?: Value<boolean>;
    Match: PathMatchType;
    constructor(properties: PathMatch);
}
export declare class PathMatchType {
    Exact?: Value<string>;
    Prefix?: Value<string>;
    constructor(properties: PathMatchType);
}
export declare class WeightedTargetGroup {
    Weight?: Value<number>;
    TargetGroupIdentifier: Value<string>;
    constructor(properties: WeightedTargetGroup);
}
export interface RuleProperties {
    Action: Action;
    Priority: Value<number>;
    ServiceIdentifier?: Value<string>;
    ListenerIdentifier?: Value<string>;
    Tags?: List<ResourceTag>;
    Match: Match;
    Name?: Value<string>;
}
export default class Rule extends ResourceBase<RuleProperties> {
    static Action: typeof Action;
    static FixedResponse: typeof FixedResponse;
    static Forward: typeof Forward;
    static HeaderMatch: typeof HeaderMatch;
    static HeaderMatchType: typeof HeaderMatchType;
    static HttpMatch: typeof HttpMatch;
    static Match: typeof Match;
    static PathMatch: typeof PathMatch;
    static PathMatchType: typeof PathMatchType;
    static WeightedTargetGroup: typeof WeightedTargetGroup;
    constructor(properties: RuleProperties);
}
