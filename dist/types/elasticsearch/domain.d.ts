import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface VPCOptionsProperties {
    SecurityGroupIds?: List<Value<string>>;
    SubnetIds?: List<Value<string>>;
}
export declare class VPCOptions extends ResourceBase {
    constructor(properties: VPCOptionsProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface ElasticsearchClusterConfigProperties {
    DedicatedMasterCount?: Value<number>;
    DedicatedMasterEnabled?: Value<boolean>;
    DedicatedMasterType?: Value<string>;
    InstanceCount?: Value<number>;
    InstanceType?: Value<string>;
    ZoneAwarenessEnabled?: Value<boolean>;
}
export declare class ElasticsearchClusterConfig extends ResourceBase {
    constructor(properties: ElasticsearchClusterConfigProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface SnapshotOptionsProperties {
    AutomatedSnapshotStartHour?: Value<number>;
}
export declare class SnapshotOptions extends ResourceBase {
    constructor(properties: SnapshotOptionsProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface EBSOptionsProperties {
    EBSEnabled?: Value<boolean>;
    Iops?: Value<number>;
    VolumeSize?: Value<number>;
    VolumeType?: Value<string>;
}
export declare class EBSOptions extends ResourceBase {
    constructor(properties: EBSOptionsProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface DomainProperties {
    AccessPolicies?: any;
    AdvancedOptions?: {
        [key: string]: Value<string>;
    };
    DomainName?: Value<string>;
    EBSOptions?: EBSOptions;
    ElasticsearchClusterConfig?: ElasticsearchClusterConfig;
    ElasticsearchVersion?: Value<string>;
    SnapshotOptions?: SnapshotOptions;
    Tags?: ResourceTag[];
    VPCOptions?: VPCOptions;
}
export default class Domain extends ResourceBase {
    constructor(properties: DomainProperties, dependsOn?: Value<string> | Value<string>[]);
}
