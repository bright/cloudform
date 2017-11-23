/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export class LoadBalancer {
    ContainerName?: Value<string>
    ContainerPort: Value<number>
    LoadBalancerName?: Value<string>
    TargetGroupArn?: Value<string>

    constructor(properties: LoadBalancer) {
        Object.assign(this, properties)
    }
}

export class PlacementStrategy {
    Field?: Value<string>
    Type: Value<string>

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

export class PlacementConstraint {
    Expression?: Value<string>
    Type: Value<string>

    constructor(properties: PlacementConstraint) {
        Object.assign(this, properties)
    }
}

export interface ServiceProperties {
    Cluster?: Value<string>
    DeploymentConfiguration?: DeploymentConfiguration
    DesiredCount?: Value<number>
    LoadBalancers?: List<LoadBalancer>
    PlacementConstraints?: List<PlacementConstraint>
    PlacementStrategies?: List<PlacementStrategy>
    Role?: Value<string>
    ServiceName?: Value<string>
    TaskDefinition: Value<string>
}

export default class Service extends ResourceBase {
    constructor(properties: ServiceProperties) {
        super('AWS::ECS::Service', properties)
    }
}
