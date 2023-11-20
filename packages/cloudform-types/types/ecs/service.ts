/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-3 (https://d2zq80gdmjim8k.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class AwsVpcConfiguration {
    SecurityGroups?: List<Value<string>>
    Subnets?: List<Value<string>>
    AssignPublicIp?: Value<string>

    constructor(properties: AwsVpcConfiguration) {
        Object.assign(this, properties)
    }
}

export class CapacityProviderStrategyItem {
    CapacityProvider?: Value<string>
    Base?: Value<number>
    Weight?: Value<number>

    constructor(properties: CapacityProviderStrategyItem) {
        Object.assign(this, properties)
    }
}

export class DeploymentAlarms {
    AlarmNames!: List<Value<string>>
    Enable!: Value<boolean>
    Rollback!: Value<boolean>

    constructor(properties: DeploymentAlarms) {
        Object.assign(this, properties)
    }
}

export class DeploymentCircuitBreaker {
    Enable!: Value<boolean>
    Rollback!: Value<boolean>

    constructor(properties: DeploymentCircuitBreaker) {
        Object.assign(this, properties)
    }
}

export class DeploymentConfiguration {
    Alarms?: DeploymentAlarms
    DeploymentCircuitBreaker?: DeploymentCircuitBreaker
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

export class LoadBalancer {
    TargetGroupArn?: Value<string>
    LoadBalancerName?: Value<string>
    ContainerName?: Value<string>
    ContainerPort?: Value<number>

    constructor(properties: LoadBalancer) {
        Object.assign(this, properties)
    }
}

export class LogConfiguration {
    SecretOptions?: List<Secret>
    Options?: {[key: string]: Value<string>}
    LogDriver?: Value<string>

    constructor(properties: LogConfiguration) {
        Object.assign(this, properties)
    }
}

export class NetworkConfiguration {
    AwsvpcConfiguration?: AwsVpcConfiguration

    constructor(properties: NetworkConfiguration) {
        Object.assign(this, properties)
    }
}

export class PlacementConstraint {
    Type!: Value<string>
    Expression?: Value<string>

    constructor(properties: PlacementConstraint) {
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

export class Secret {
    ValueFrom!: Value<string>
    Name!: Value<string>

    constructor(properties: Secret) {
        Object.assign(this, properties)
    }
}

export class ServiceConnectClientAlias {
    DnsName?: Value<string>
    Port!: Value<number>

    constructor(properties: ServiceConnectClientAlias) {
        Object.assign(this, properties)
    }
}

export class ServiceConnectConfiguration {
    Services?: List<ServiceConnectService>
    Enabled!: Value<boolean>
    LogConfiguration?: LogConfiguration
    Namespace?: Value<string>

    constructor(properties: ServiceConnectConfiguration) {
        Object.assign(this, properties)
    }
}

export class ServiceConnectService {
    IngressPortOverride?: Value<number>
    ClientAliases?: List<ServiceConnectClientAlias>
    DiscoveryName?: Value<string>
    PortName!: Value<string>

    constructor(properties: ServiceConnectService) {
        Object.assign(this, properties)
    }
}

export class ServiceRegistry {
    ContainerName?: Value<string>
    Port?: Value<number>
    ContainerPort?: Value<number>
    RegistryArn?: Value<string>

    constructor(properties: ServiceRegistry) {
        Object.assign(this, properties)
    }
}

export interface ServiceProperties {
    PlatformVersion?: Value<string>
    HealthCheckGracePeriodSeconds?: Value<number>
    EnableECSManagedTags?: Value<boolean>
    PropagateTags?: Value<string>
    EnableExecuteCommand?: Value<boolean>
    PlacementConstraints?: List<PlacementConstraint>
    Cluster?: Value<string>
    LoadBalancers?: List<LoadBalancer>
    ServiceConnectConfiguration?: ServiceConnectConfiguration
    PlacementStrategies?: List<PlacementStrategy>
    DesiredCount?: Value<number>
    DeploymentController?: DeploymentController
    ServiceRegistries?: List<ServiceRegistry>
    CapacityProviderStrategy?: List<CapacityProviderStrategyItem>
    LaunchType?: Value<string>
    Role?: Value<string>
    SchedulingStrategy?: Value<string>
    TaskDefinition?: Value<string>
    ServiceName?: Value<string>
    NetworkConfiguration?: NetworkConfiguration
    Tags?: List<ResourceTag>
    DeploymentConfiguration?: DeploymentConfiguration
}

export default class Service extends ResourceBase<ServiceProperties> {
    static AwsVpcConfiguration = AwsVpcConfiguration
    static CapacityProviderStrategyItem = CapacityProviderStrategyItem
    static DeploymentAlarms = DeploymentAlarms
    static DeploymentCircuitBreaker = DeploymentCircuitBreaker
    static DeploymentConfiguration = DeploymentConfiguration
    static DeploymentController = DeploymentController
    static LoadBalancer = LoadBalancer
    static LogConfiguration = LogConfiguration
    static NetworkConfiguration = NetworkConfiguration
    static PlacementConstraint = PlacementConstraint
    static PlacementStrategy = PlacementStrategy
    static Secret = Secret
    static ServiceConnectClientAlias = ServiceConnectClientAlias
    static ServiceConnectConfiguration = ServiceConnectConfiguration
    static ServiceConnectService = ServiceConnectService
    static ServiceRegistry = ServiceRegistry

    constructor(properties?: ServiceProperties) {
        super('AWS::ECS::Service', properties || {})
    }
}
