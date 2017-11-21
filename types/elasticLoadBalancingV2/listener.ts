import {ResourceBase} from '../resource'
import {Value} from '../internal'
import Certificates from './certificates'
import DefaultActions from './defaultActions'

export type Protocol = "*" | "HTTP" | "HTTPS"

export interface ListenerProperties {
    Certificates?: Certificates
    DefaultActions: DefaultActions
    LoadBalancerArn: Value<string>
    Port: Value<number>
    Protocol: Value<Protocol>
    SslPolicy?: Value<string>
}

export default class Listener extends ResourceBase {
    constructor(properties: ListenerProperties, dependsOn?: Value<string>) {
        super('AWS::ElasticLoadBalancingV2::Listener', properties, dependsOn)
    }
}