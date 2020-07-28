/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * ap-northeast-3 (https://d2zq80gdmjim8k.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class LoadBalancer {
    ContainerName?: Value<string>
    ContainerPort!: Value<number>
    LoadBalancerName?: Value<string>
    TargetGroupArn?: Value<string>

    constructor(properties: LoadBalancer) {
        Object.assign(this, properties)
    }
}

export class PlacementStrategy {
    Field?: Value<string>
    Type!: Value<string>

    constructor(properties: PlacementStrategy) {
        Object.assign(this, properties)
    }
}

export class DeploymentConfiguration {
    MaximumPercent?: Value<number>
    MinimumHealthyPercent?: Value<number>

    constructor(properties: DeploymentConfiguration) {
        Object.assign(this, properties)
    }
}

export class DeploymentController {
    Type?: Value<string>

    constructor(properties: DeploymentController) {
        Object.assign(this, properties)
    }
}

export class PlacementConstraint {
    Expression?: Value<string>
    Type!: Value<string>

    constructor(properties: PlacementConstraint) {
        Object.assign(this, properties)
    }
}

export class AwsVpcConfiguration {
    AssignPublicIp?: Value<string>
    SecurityGroups?: List<Value<string>>
    Subnets!: List<Value<string>>

    constructor(properties: AwsVpcConfiguration) {
        Object.assign(this, properties)
    }
}

export class NetworkConfiguration {
    AwsvpcConfiguration?: AwsVpcConfiguration

    constructor(properties: NetworkConfiguration) {
        Object.assign(this, properties)
    }
}

export class ServiceRegistry {
    ContainerName?: Value<string>
    ContainerPort?: Value<number>
    Port?: Value<number>
    RegistryArn?: Value<string>

    constructor(properties: ServiceRegistry) {
        Object.assign(this, properties)
    }
}

export interface ServiceProperties {
    Cluster?: Value<string>
    DeploymentConfiguration?: DeploymentConfiguration
    DeploymentController?: DeploymentController
    DesiredCount?: Value<number>
    EnableECSManagedTags?: Value<boolean>
    HealthCheckGracePeriodSeconds?: Value<number>
    LaunchType?: Value<string>
    LoadBalancers?: List<LoadBalancer>
    NetworkConfiguration?: NetworkConfiguration
    PlacementConstraints?: List<PlacementConstraint>
    PlacementStrategies?: List<PlacementStrategy>
    PlatformVersion?: Value<string>
    PropagateTags?: Value<string>
    Role?: Value<string>
    SchedulingStrategy?: Value<string>
    ServiceName?: Value<string>
    ServiceRegistries?: List<ServiceRegistry>
    Tags?: List<ResourceTag>
    TaskDefinition?: Value<string>
}

export default class Service extends ResourceBase<ServiceProperties> {
    static LoadBalancer = LoadBalancer
    static PlacementStrategy = PlacementStrategy
    static DeploymentConfiguration = DeploymentConfiguration
    static DeploymentController = DeploymentController
    static PlacementConstraint = PlacementConstraint
    static AwsVpcConfiguration = AwsVpcConfiguration
    static NetworkConfiguration = NetworkConfiguration
    static ServiceRegistry = ServiceRegistry

    constructor(properties?: ServiceProperties) {
        super('AWS::ECS::Service', properties || {})
    }
}
