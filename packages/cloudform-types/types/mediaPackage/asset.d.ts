import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class EgressEndpoint {
    PackagingConfigurationId: Value<string>;
    Url: Value<string>;
    constructor(properties: EgressEndpoint);
}
export interface AssetProperties {
    SourceArn: Value<string>;
    ResourceId?: Value<string>;
    Id: Value<string>;
    PackagingGroupId: Value<string>;
    EgressEndpoints?: List<EgressEndpoint>;
    Tags?: List<ResourceTag>;
    SourceRoleArn: Value<string>;
}
export default class Asset extends ResourceBase<AssetProperties> {
    static EgressEndpoint: typeof EgressEndpoint;
    constructor(properties: AssetProperties);
}
