/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value} from '../internal'

export interface TargetGroupAttributeProperties {
    Key?: Value<string>
    Value?: Value<string>
}

export class TargetGroupAttribute extends ResourceBase {
    constructor(properties: TargetGroupAttributeProperties, dependsOn?: Value<string>) {
        super('AWS::ElasticLoadBalancingV2::TargetGroupAttribute', properties, dependsOn)
    }
}

export interface MatcherProperties {
    HttpCode: Value<string>
}

export class Matcher extends ResourceBase {
    constructor(properties: MatcherProperties, dependsOn?: Value<string>) {
        super('AWS::ElasticLoadBalancingV2::Matcher', properties, dependsOn)
    }
}

export interface TargetDescriptionProperties {
    AvailabilityZone?: Value<string>
    Id: Value<string>
    Port?: Value<number>
}

export class TargetDescription extends ResourceBase {
    constructor(properties: TargetDescriptionProperties, dependsOn?: Value<string>) {
        super('AWS::ElasticLoadBalancingV2::TargetDescription', properties, dependsOn)
    }
}

export interface TargetGroupProperties {
    HealthCheckIntervalSeconds?: Value<number>
    HealthCheckPath?: Value<string>
    HealthCheckPort?: Value<string>
    HealthCheckProtocol?: Value<string>
    HealthCheckTimeoutSeconds?: Value<number>
    HealthyThresholdCount?: Value<number>
    Matcher?: Matcher
    Name?: Value<string>
    Port: Value<number>
    Protocol: Value<string>
    Tags?: ResourceTag[]
    TargetGroupAttributes?: TargetGroupAttribute[]
    TargetType?: Value<string>
    Targets?: TargetDescription[]
    UnhealthyThresholdCount?: Value<number>
    VpcId: Value<string>
}

export default class TargetGroup extends ResourceBase {
    constructor(properties: TargetGroupProperties, dependsOn?: Value<string>) {
        super('AWS::ElasticLoadBalancingV2::TargetGroup', properties, dependsOn)
    }
}