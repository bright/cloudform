import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class EgressEndpoint {
    PackagingConfigurationId: Value<string>;
    Url: Value<string>;
    constructor(properties: EgressEndpoint);
}
export interface AssetProperties {
    EgressEndpoints?: List<EgressEndpoint>;
    Id: Value<string>;
    PackagingGroupId: Value<string>;
    ResourceId?: Value<string>;
    SourceArn: Value<string>;
    SourceRoleArn: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class Asset extends ResourceBase<AssetProperties> {
    static EgressEndpoint: typeof EgressEndpoint;
    constructor(properties: AssetProperties);
}
