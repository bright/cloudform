import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class AnalysisParameter {
    DefaultValue?: Value<string>;
    Type: Value<string>;
    Name: Value<string>;
    constructor(properties: AnalysisParameter);
}
export declare class AnalysisSchema {
    ReferencedTables: List<Value<string>>;
    constructor(properties: AnalysisSchema);
}
export declare class AnalysisSource {
    Text: Value<string>;
    constructor(properties: AnalysisSource);
}
export interface AnalysisTemplateProperties {
    MembershipIdentifier: Value<string>;
    Description?: Value<string>;
    Format: Value<string>;
    AnalysisParameters?: List<AnalysisParameter>;
    Source: AnalysisSource;
    Tags?: List<ResourceTag>;
    Name: Value<string>;
}
export default class AnalysisTemplate extends ResourceBase<AnalysisTemplateProperties> {
    static AnalysisParameter: typeof AnalysisParameter;
    static AnalysisSchema: typeof AnalysisSchema;
    static AnalysisSource: typeof AnalysisSource;
    constructor(properties: AnalysisTemplateProperties);
}
