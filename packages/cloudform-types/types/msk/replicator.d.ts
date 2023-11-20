import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class AmazonMskCluster {
    MskClusterArn: Value<string>;
    constructor(properties: AmazonMskCluster);
}
export declare class ConsumerGroupReplication {
    ConsumerGroupsToReplicate: List<Value<string>>;
    ConsumerGroupsToExclude?: List<Value<string>>;
    SynchroniseConsumerGroupOffsets?: Value<boolean>;
    DetectAndCopyNewConsumerGroups?: Value<boolean>;
    constructor(properties: ConsumerGroupReplication);
}
export declare class KafkaCluster {
    VpcConfig: KafkaClusterClientVpcConfig;
    AmazonMskCluster: AmazonMskCluster;
    constructor(properties: KafkaCluster);
}
export declare class KafkaClusterClientVpcConfig {
    SecurityGroupIds?: List<Value<string>>;
    SubnetIds: List<Value<string>>;
    constructor(properties: KafkaClusterClientVpcConfig);
}
export declare class ReplicationInfo {
    TargetCompressionType: Value<string>;
    TopicReplication: TopicReplication;
    ConsumerGroupReplication: ConsumerGroupReplication;
    SourceKafkaClusterArn: Value<string>;
    TargetKafkaClusterArn: Value<string>;
    constructor(properties: ReplicationInfo);
}
export declare class TopicReplication {
    TopicsToReplicate: List<Value<string>>;
    TopicsToExclude?: List<Value<string>>;
    CopyTopicConfigurations?: Value<boolean>;
    DetectAndCopyNewTopics?: Value<boolean>;
    CopyAccessControlListsForTopics?: Value<boolean>;
    constructor(properties: TopicReplication);
}
export interface ReplicatorProperties {
    Description?: Value<string>;
    CurrentVersion?: Value<string>;
    ServiceExecutionRoleArn: Value<string>;
    ReplicatorName: Value<string>;
    ReplicationInfoList: List<ReplicationInfo>;
    KafkaClusters: List<KafkaCluster>;
    Tags?: List<ResourceTag>;
}
export default class Replicator extends ResourceBase<ReplicatorProperties> {
    static AmazonMskCluster: typeof AmazonMskCluster;
    static ConsumerGroupReplication: typeof ConsumerGroupReplication;
    static KafkaCluster: typeof KafkaCluster;
    static KafkaClusterClientVpcConfig: typeof KafkaClusterClientVpcConfig;
    static ReplicationInfo: typeof ReplicationInfo;
    static TopicReplication: typeof TopicReplication;
    constructor(properties: ReplicatorProperties);
}
