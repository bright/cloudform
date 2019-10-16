/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 6.3.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 6.3.0,
 * ap-northeast-3 (https://d2zq80gdmjim8k.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 6.3.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 6.3.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 6.3.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 6.3.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 6.3.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 6.3.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 6.3.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 6.3.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 6.3.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 6.3.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 6.3.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 6.3.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 6.3.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 6.3.0
 */

import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class NodeGroupConfiguration {
    NodeGroupId?: Value<string>
    PrimaryAvailabilityZone?: Value<string>
    ReplicaAvailabilityZones?: List<Value<string>>
    ReplicaCount?: Value<number>
    Slots?: Value<string>

    constructor(properties: NodeGroupConfiguration) {
        Object.assign(this, properties)
    }
}

export interface ReplicationGroupProperties {
    AtRestEncryptionEnabled?: Value<boolean>
    AuthToken?: Value<string>
    AutoMinorVersionUpgrade?: Value<boolean>
    AutomaticFailoverEnabled?: Value<boolean>
    CacheNodeType?: Value<string>
    CacheParameterGroupName?: Value<string>
    CacheSecurityGroupNames?: List<Value<string>>
    CacheSubnetGroupName?: Value<string>
    Engine?: Value<string>
    EngineVersion?: Value<string>
    KmsKeyId?: Value<string>
    NodeGroupConfiguration?: List<NodeGroupConfiguration>
    NotificationTopicArn?: Value<string>
    NumCacheClusters?: Value<number>
    NumNodeGroups?: Value<number>
    Port?: Value<number>
    PreferredCacheClusterAZs?: List<Value<string>>
    PreferredMaintenanceWindow?: Value<string>
    PrimaryClusterId?: Value<string>
    ReplicasPerNodeGroup?: Value<number>
    ReplicationGroupDescription: Value<string>
    ReplicationGroupId?: Value<string>
    SecurityGroupIds?: List<Value<string>>
    SnapshotArns?: List<Value<string>>
    SnapshotName?: Value<string>
    SnapshotRetentionLimit?: Value<number>
    SnapshotWindow?: Value<string>
    SnapshottingClusterId?: Value<string>
    Tags?: List<ResourceTag>
    TransitEncryptionEnabled?: Value<boolean>
}

export default class ReplicationGroup extends ResourceBase<ReplicationGroupProperties> {
    static NodeGroupConfiguration = NodeGroupConfiguration

    constructor(properties: ReplicationGroupProperties) {
        super('AWS::ElastiCache::ReplicationGroup', properties)
    }
}
