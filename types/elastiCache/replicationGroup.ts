import {ResourceBase, ResourceTag} from '../resource'
import {Value} from '../internal'
import NodeGroupConfiguration from './nodeGroupConfiguration'

export type CacheNodeType = "*" | "cache.t2.micro" | "cache.t2.small" | "cache.t2.medium" | "cache.t1.micro" | "cache.m1.medium" | "cache.m1.large" | "cache.m1.xlarge" | "cache.m3.medium" | "cache.m3.large" | "cache.m3.xlarge" | "cache.m3.2xlarge" | "cache.m1.small" | "cache.m1.large" | "cache.m1.xlarge" | "cache.m2.xlarge" | "cache.m2.2xlarge" | "cache.m2.4xlarge" | "cache.c1.xlarge" | "cache.r3.large" | "cache.r3.xlarge" | "cache.r3.2xlarge" | "cache.r3.4xlarge" | "cache.r3.8xlarge" | "cache.m4.large" | "cache.m4.xlarge" | "cache.m4.2xlarge" | "cache.m4.4xlarge" | "cache.m4.10xlarge"
export type Engine = "*" | "redis"
export type PreferredCacheClusterAZs = "us-east-1b" | "us-east-1c" | "us-east-1d" | "us-east-1e" | "us-west-1b" | "us-west-1c" | "us-west-2a" | "us-west-2b" | "us-west-2c" | "ap-northeast-1a" | "ap-northeast-1c" | "ap-northeast-2a" | "ap-northeast-2c" | "ap-south-1a" | "ap-south-1b" | "ap-southeast-1a" | "ap-southeast-1b" | "ap-southeast-2a" | "ap-southeast-2b" | "ap-southeast-2c" | "sa-east-1a" | "sa-east-1b" | "sa-east-1c" | "eu-west-1a" | "eu-west-1b" | "eu-west-1c" | "eu-central-1a" | "eu-central-1b"

export interface ReplicationGroupProperties {
    AutomaticFailoverEnabled?: Value<boolean>
    AutoMinorVersionUpgrade?: Value<boolean>
    CacheNodeType: Value<CacheNodeType>
    CacheParameterGroupName?: Value<string>
    CacheSecurityGroupNames?: Value<string>[]
    CacheSubnetGroupName?: Value<string>
    Engine: Value<Engine>
    EngineVersion?: Value<string>
    NodeGroupConfiguration?: NodeGroupConfiguration[]
    NotificationTopicArn?: Value<string>
    NumCacheClusters: Value<number>
    NumNodeGroups: Value<number>
    Port?: Value<number>
    PreferredCacheClusterAZs?: Value<PreferredCacheClusterAZs>
    PreferredMaintenanceWindow?: Value<string>
    PrimaryClusterId?: Value<string>
    ReplicasPerNodeGroup?: Value<number>
    ReplicationGroupDescription: Value<string>
    ReplicationGroupId?: Value<string>
    SecurityGroupIds?: Value<string>[]
    SnapshotArns?: Value<string>[]
    SnapshotRetentionLimit?: Value<number>
    SnapshottingClusterId?: Value<string>
    SnapshotWindow?: Value<string>
    Tags?: ResourceTag[]
}

export default class ReplicationGroup extends ResourceBase {
    constructor(properties: ReplicationGroupProperties, dependsOn?: Value<string>) {
        super('AWS::ElastiCache::ReplicationGroup', properties, dependsOn)
    }
}