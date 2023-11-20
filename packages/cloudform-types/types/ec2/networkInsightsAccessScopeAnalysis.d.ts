import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface NetworkInsightsAccessScopeAnalysisProperties {
    NetworkInsightsAccessScopeId: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class NetworkInsightsAccessScopeAnalysis extends ResourceBase<NetworkInsightsAccessScopeAnalysisProperties> {
    constructor(properties: NetworkInsightsAccessScopeAnalysisProperties);
}
