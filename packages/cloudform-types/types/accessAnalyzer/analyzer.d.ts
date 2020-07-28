import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class ArchiveRule {
    Filter: List<Filter>;
    RuleName: Value<string>;
    constructor(properties: ArchiveRule);
}
export declare class Filter {
    Contains?: List<Value<string>>;
    Eq?: List<Value<string>>;
    Exists?: Value<boolean>;
    Property: Value<string>;
    Neq?: List<Value<string>>;
    constructor(properties: Filter);
}
export interface AnalyzerProperties {
    AnalyzerName?: Value<string>;
    ArchiveRules?: List<ArchiveRule>;
    Tags?: List<ResourceTag>;
    Type: Value<string>;
}
export default class Analyzer extends ResourceBase<AnalyzerProperties> {
    static ArchiveRule: typeof ArchiveRule;
    static Filter: typeof Filter;
    constructor(properties: AnalyzerProperties);
}
