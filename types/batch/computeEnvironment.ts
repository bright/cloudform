/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value} from '../dataTypes'

export interface ComputeResourcesProperties {
    SpotIamFleetRole?: Value<string>
    MaxvCpus: Value<number>
    BidPercentage?: Value<number>
    SecurityGroupIds: Value<string>[]
    Subnets: Value<string>[]
    Type: Value<string>
    MinvCpus: Value<number>
    ImageId?: Value<string>
    InstanceRole: Value<string>
    InstanceTypes: Value<string>[]
    Ec2KeyPair?: Value<string>
    Tags?: ResourceTag[]
    DesiredvCpus?: Value<number>
}

export class ComputeResources extends ResourceBase {
    constructor(properties: ComputeResourcesProperties, dependsOn?: Value<string>) {
        super('AWS::Batch::ComputeResources', properties, dependsOn)
    }
}

export interface ComputeEnvironmentProperties {
    Type: Value<string>
    ServiceRole: Value<string>
    ComputeEnvironmentName?: Value<string>
    ComputeResources: ComputeResources
    State?: Value<string>
}

export default class ComputeEnvironment extends ResourceBase {
    constructor(properties: ComputeEnvironmentProperties, dependsOn?: Value<string>) {
        super('AWS::Batch::ComputeEnvironment', properties, dependsOn)
    }
}
