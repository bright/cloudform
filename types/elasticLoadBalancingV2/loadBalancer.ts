/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value} from '../dataTypes'

export interface LoadBalancerAttributeProperties {
    Key?: Value<string>
    Value?: Value<string>
}

export class LoadBalancerAttribute extends ResourceBase {
    constructor(properties: LoadBalancerAttributeProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::ElasticLoadBalancingV2::LoadBalancerAttribute', properties, dependsOn)
    }
}

export interface SubnetMappingProperties {
    AllocationId: Value<string>
    SubnetId: Value<string>
}

export class SubnetMapping extends ResourceBase {
    constructor(properties: SubnetMappingProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::ElasticLoadBalancingV2::SubnetMapping', properties, dependsOn)
    }
}

export interface LoadBalancerProperties {
    IpAddressType?: Value<string>
    LoadBalancerAttributes?: LoadBalancerAttribute[]
    Name?: Value<string>
    Scheme?: Value<string>
    SecurityGroups?: Value<string>[]
    SubnetMappings?: SubnetMapping[]
    Subnets?: Value<string>[]
    Tags?: ResourceTag[]
    Type?: Value<string>
}

export default class LoadBalancer extends ResourceBase {
    constructor(properties: LoadBalancerProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::ElasticLoadBalancingV2::LoadBalancer', properties, dependsOn)
    }
}
