import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class RegionConfiguration {
    SseKmsKeyId: Value<string>;
    constructor(properties: RegionConfiguration);
}
export declare class ReplicationRegion {
    RegionName?: Value<string>;
    RegionConfiguration?: RegionConfiguration;
    constructor(properties: ReplicationRegion);
}
export interface ReplicationSetProperties {
    Regions: List<ReplicationRegion>;
    DeletionProtected?: Value<boolean>;
}
export default class ReplicationSet extends ResourceBase<ReplicationSetProperties> {
    static RegionConfiguration: typeof RegionConfiguration;
    static ReplicationRegion: typeof ReplicationRegion;
    constructor(properties: ReplicationSetProperties);
}
