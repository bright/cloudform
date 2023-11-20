import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class RegionConfiguration {
    SseKmsKeyId: Value<string>;
    constructor(properties: RegionConfiguration);
}
export declare class ReplicationRegion {
    RegionConfiguration?: RegionConfiguration;
    RegionName?: Value<string>;
    constructor(properties: ReplicationRegion);
}
export interface ReplicationSetProperties {
    Regions: List<ReplicationRegion>;
    DeletionProtected?: Value<boolean>;
    Tags?: List<ResourceTag>;
}
export default class ReplicationSet extends ResourceBase<ReplicationSetProperties> {
    static RegionConfiguration: typeof RegionConfiguration;
    static ReplicationRegion: typeof ReplicationRegion;
    constructor(properties: ReplicationSetProperties);
}
