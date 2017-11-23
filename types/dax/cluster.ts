/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value} from '../dataTypes'



export interface ClusterProperties {
    Description?: Value<string>
    ReplicationFactor: Value<number>
    ParameterGroupName?: Value<string>
    AvailabilityZones?: Value<string>[]
    NodeType: Value<string>
    IAMRoleARN: Value<string>
    SubnetGroupName?: Value<string>
    ClusterName?: Value<string>
    PreferredMaintenanceWindow?: Value<string>
    NotificationTopicARN?: Value<string>
    SecurityGroupIds?: Value<string>[]
    Tags?: ResourceTag[]
}

export default class Cluster extends ResourceBase {
    constructor(properties: ClusterProperties, dependsOn?: Value<string>) {
        super('AWS::DAX::Cluster', properties, dependsOn)
    }
}