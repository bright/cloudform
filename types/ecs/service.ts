/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase} from '../resource'
import {Value} from '../dataTypes'

export interface LoadBalancerProperties {
    ContainerName?: Value<string>
    ContainerPort: Value<number>
    LoadBalancerName?: Value<string>
    TargetGroupArn?: Value<string>
}

export class LoadBalancer extends ResourceBase {
    constructor(properties: LoadBalancerProperties, dependsOn?: Value<string>) {
        super('AWS::ECS::LoadBalancer', properties, dependsOn)
    }
}

export interface PlacementStrategyProperties {
    Field?: Value<string>
    Type: Value<string>
}

export class PlacementStrategy extends ResourceBase {
    constructor(properties: PlacementStrategyProperties, dependsOn?: Value<string>) {
        super('AWS::ECS::PlacementStrategy', properties, dependsOn)
    }
}

export interface DeploymentConfigurationProperties {
    MaximumPercent?: Value<number>
    MinimumHealthyPercent?: Value<number>
}

export class DeploymentConfiguration extends ResourceBase {
    constructor(properties: DeploymentConfigurationProperties, dependsOn?: Value<string>) {
        super('AWS::ECS::DeploymentConfiguration', properties, dependsOn)
    }
}

export interface PlacementConstraintProperties {
    Expression?: Value<string>
    Type: Value<string>
}

export class PlacementConstraint extends ResourceBase {
    constructor(properties: PlacementConstraintProperties, dependsOn?: Value<string>) {
        super('AWS::ECS::PlacementConstraint', properties, dependsOn)
    }
}

export interface ServiceProperties {
    Cluster?: Value<string>
    DeploymentConfiguration?: DeploymentConfiguration
    DesiredCount?: Value<number>
    LoadBalancers?: LoadBalancer[]
    PlacementConstraints?: PlacementConstraint[]
    PlacementStrategies?: PlacementStrategy[]
    Role?: Value<string>
    ServiceName?: Value<string>
    TaskDefinition: Value<string>
}

export default class Service extends ResourceBase {
    constructor(properties: ServiceProperties, dependsOn?: Value<string>) {
        super('AWS::ECS::Service', properties, dependsOn)
    }
}
