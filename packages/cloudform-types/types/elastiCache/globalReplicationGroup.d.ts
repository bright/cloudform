import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class RegionalConfiguration {
    ReplicationGroupId?: Value<string>;
    ReplicationGroupRegion?: Value<string>;
    ReshardingConfigurations?: List<ReshardingConfiguration>;
    constructor(properties: RegionalConfiguration);
}
export declare class ReshardingConfiguration {
    NodeGroupId?: Value<string>;
    PreferredAvailabilityZones?: List<Value<string>>;
    constructor(properties: ReshardingConfiguration);
}
export declare class GlobalReplicationGroupMember {
    ReplicationGroupId?: Value<string>;
    ReplicationGroupRegion?: Value<string>;
    Role?: Value<string>;
    constructor(properties: GlobalReplicationGroupMember);
}
export interface GlobalReplicationGroupProperties {
    GlobalReplicationGroupIdSuffix?: Value<string>;
    AutomaticFailoverEnabled?: Value<boolean>;
    CacheNodeType?: Value<string>;
    EngineVersion?: Value<string>;
    CacheParameterGroupName?: Value<string>;
    GlobalNodeGroupCount?: Value<number>;
    GlobalReplicationGroupDescription?: Value<string>;
    Members: List<GlobalReplicationGroupMember>;
    RegionalConfigurations?: List<RegionalConfiguration>;
}
export default class GlobalReplicationGroup extends ResourceBase<GlobalReplicationGroupProperties> {
    static RegionalConfiguration: typeof RegionalConfiguration;
    static ReshardingConfiguration: typeof ReshardingConfiguration;
    static GlobalReplicationGroupMember: typeof GlobalReplicationGroupMember;
    constructor(properties: GlobalReplicationGroupProperties);
}
