/* Generated from: 
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.7.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.7.0
 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export class ResourcesVpcConfig {
    SecurityGroupIds?: List<Value<string>>
    SubnetIds!: List<Value<string>>

    constructor(properties: ResourcesVpcConfig) {
        Object.assign(this, properties)
    }
}

export interface ClusterProperties {
    Version?: Value<string>
    RoleArn: Value<string>
    ResourcesVpcConfig: ResourcesVpcConfig
    Name?: Value<string>
}

export default class Cluster extends ResourceBase {
    static ResourcesVpcConfig = ResourcesVpcConfig

    constructor(properties?: ClusterProperties) {
        super('AWS::EKS::Cluster', properties)
    }
}
