/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.5.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.5.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.5.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.5.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.5.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'



export interface ClusterProperties {
    Description?: Value<string>
    ReplicationFactor: Value<number>
    ParameterGroupName?: Value<string>
    AvailabilityZones?: List<Value<string>>
    NodeType: Value<string>
    IAMRoleARN: Value<string>
    SubnetGroupName?: Value<string>
    ClusterName?: Value<string>
    PreferredMaintenanceWindow?: Value<string>
    NotificationTopicARN?: Value<string>
    SecurityGroupIds?: List<Value<string>>
    Tags?: ResourceTag[]
}

export default class Cluster extends ResourceBase {


    constructor(properties?: ClusterProperties) {
        super('AWS::DAX::Cluster', properties)
    }
}
