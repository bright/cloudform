import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class GlobalReplicationGroupMember {
    Role?: Value<string>;
    ReplicationGroupRegion?: Value<string>;
    ReplicationGroupId?: Value<string>;
    constructor(properties: GlobalReplicationGroupMember);
}
export declare class RegionalConfiguration {
    ReplicationGroupRegion?: Value<string>;
    ReplicationGroupId?: Value<string>;
    ReshardingConfigurations?: List<ReshardingConfiguration>;
    constructor(properties: RegionalConfiguration);
}
export declare class ReshardingConfiguration {
    NodeGroupId?: Value<string>;
    PreferredAvailabilityZones?: List<Value<string>>;
    constructor(properties: ReshardingConfiguration);
}
export interface GlobalReplicationGroupProperties {
    GlobalReplicationGroupIdSuffix?: Value<string>;
    CacheNodeType?: Value<string>;
    EngineVersion?: Value<string>;
    GlobalReplicationGroupDescription?: Value<string>;
    RegionalConfigurations?: List<RegionalConfiguration>;
    CacheParameterGroupName?: Value<string>;
    Members: List<GlobalReplicationGroupMember>;
    AutomaticFailoverEnabled?: Value<boolean>;
    GlobalNodeGroupCount?: Value<number>;
}
export default class GlobalReplicationGroup extends ResourceBase<GlobalReplicationGroupProperties> {
    static GlobalReplicationGroupMember: typeof GlobalReplicationGroupMember;
    static RegionalConfiguration: typeof RegionalConfiguration;
    static ReshardingConfiguration: typeof ReshardingConfiguration;
    constructor(properties: GlobalReplicationGroupProperties);
}
