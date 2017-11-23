/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export interface ActionProperties {
    TargetGroupArn: Value<string>
    Type: Value<string>
}

export class Action extends ResourceBase {
    constructor(properties: ActionProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::ElasticLoadBalancingV2::Action', properties, dependsOn)
    }
}

export interface CertificateProperties {
    CertificateArn?: Value<string>
}

export class Certificate extends ResourceBase {
    constructor(properties: CertificateProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::ElasticLoadBalancingV2::Certificate', properties, dependsOn)
    }
}

export interface ListenerProperties {
    Certificates?: List<Certificate>
    DefaultActions: List<Action>
    LoadBalancerArn: Value<string>
    Port: Value<number>
    Protocol: Value<string>
    SslPolicy?: Value<string>
}

export default class Listener extends ResourceBase {
    constructor(properties: ListenerProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::ElasticLoadBalancingV2::Listener', properties, dependsOn)
    }
}
