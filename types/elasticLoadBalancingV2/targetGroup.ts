import {ResourceBase, ResourceTag} from '../resource'
import {Value} from '../internal'
import Matcher from './matcher'
import TargetGroupAttribute from './targetGroupAttribute'
import Target from './target'

export type HealthCheckPort = "*" | "traffic-port"
export type HealthCheckProtocol = "*" | "HTTP" | "HTTPS"
export type Protocol = "*" | "HTTP" | "HTTPS"

export interface TargetGroupProperties {
    HealthCheckIntervalSeconds?: Value<number>
    HealthCheckPath?: Value<string>
    HealthCheckPort?: Value<HealthCheckPort>
    HealthCheckProtocol?: Value<HealthCheckProtocol>
    HealthCheckTimeoutSeconds?: Value<number>
    HealthyThresholdCount?: Value<number>
    Matcher?: Matcher
    Name?: Value<string>
    Port: Value<number>
    Protocol: Value<Protocol>
    TargetGroupAttributes: TargetGroupAttribute[]
    TargetGroupFullName?: Value<string>
    Targets: Target[]
    UnhealthyThresholdCount?: Value<number>
    VpcId: Value<number>
    Tags?: ResourceTag[]
}

export default class TargetGroup extends ResourceBase {
    constructor(properties: TargetGroupProperties, dependsOn?: Value<string>) {
        super('AWS::ElasticLoadBalancingV2::TargetGroup', properties, dependsOn)
    }
}