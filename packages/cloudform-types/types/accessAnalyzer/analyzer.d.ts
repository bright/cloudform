import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class ArchiveRule {
    Filter: List<Filter>;
    RuleName: Value<string>;
    constructor(properties: ArchiveRule);
}
export declare class Filter {
    Exists?: Value<boolean>;
    Contains?: List<Value<string>>;
    Neq?: List<Value<string>>;
    Eq?: List<Value<string>>;
    Property: Value<string>;
    constructor(properties: Filter);
}
export interface AnalyzerProperties {
    ArchiveRules?: List<ArchiveRule>;
    Type: Value<string>;
    AnalyzerName?: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class Analyzer extends ResourceBase<AnalyzerProperties> {
    static ArchiveRule: typeof ArchiveRule;
    static Filter: typeof Filter;
    constructor(properties: AnalyzerProperties);
}
