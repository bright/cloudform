/* Generated from: 
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class AmazonMskCluster {
    MskClusterArn!: Value<string>

    constructor(properties: AmazonMskCluster) {
        Object.assign(this, properties)
    }
}

export class ConsumerGroupReplication {
    ConsumerGroupsToReplicate!: List<Value<string>>
    ConsumerGroupsToExclude?: List<Value<string>>
    SynchroniseConsumerGroupOffsets?: Value<boolean>
    DetectAndCopyNewConsumerGroups?: Value<boolean>

    constructor(properties: ConsumerGroupReplication) {
        Object.assign(this, properties)
    }
}

export class KafkaCluster {
    VpcConfig!: KafkaClusterClientVpcConfig
    AmazonMskCluster!: AmazonMskCluster

    constructor(properties: KafkaCluster) {
        Object.assign(this, properties)
    }
}

export class KafkaClusterClientVpcConfig {
    SecurityGroupIds?: List<Value<string>>
    SubnetIds!: List<Value<string>>

    constructor(properties: KafkaClusterClientVpcConfig) {
        Object.assign(this, properties)
    }
}

export class ReplicationInfo {
    TargetCompressionType!: Value<string>
    TopicReplication!: TopicReplication
    ConsumerGroupReplication!: ConsumerGroupReplication
    SourceKafkaClusterArn!: Value<string>
    TargetKafkaClusterArn!: Value<string>

    constructor(properties: ReplicationInfo) {
        Object.assign(this, properties)
    }
}

export class TopicReplication {
    TopicsToReplicate!: List<Value<string>>
    TopicsToExclude?: List<Value<string>>
    CopyTopicConfigurations?: Value<boolean>
    DetectAndCopyNewTopics?: Value<boolean>
    CopyAccessControlListsForTopics?: Value<boolean>

    constructor(properties: TopicReplication) {
        Object.assign(this, properties)
    }
}

export interface ReplicatorProperties {
    Description?: Value<string>
    CurrentVersion?: Value<string>
    ServiceExecutionRoleArn: Value<string>
    ReplicatorName: Value<string>
    ReplicationInfoList: List<ReplicationInfo>
    KafkaClusters: List<KafkaCluster>
    Tags?: List<ResourceTag>
}

export default class Replicator extends ResourceBase<ReplicatorProperties> {
    static AmazonMskCluster = AmazonMskCluster
    static ConsumerGroupReplication = ConsumerGroupReplication
    static KafkaCluster = KafkaCluster
    static KafkaClusterClientVpcConfig = KafkaClusterClientVpcConfig
    static ReplicationInfo = ReplicationInfo
    static TopicReplication = TopicReplication

    constructor(properties: ReplicatorProperties) {
        super('AWS::MSK::Replicator', properties)
    }
}
