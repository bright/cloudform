import {ResourceBase} from '../resource'
import {Value} from '../internal'


export type InstanceProtocol = "HTTP" | "HTTPS" | "TCP" | "SSL"
export type Protocol = "HTTP" | "HTTPS" | "TCP" | "SSL"

export interface ListenerProperties {
    InstancePort: Value<string>
    InstanceProtocol: Value<InstanceProtocol>
    LoadBalancerPort: Value<string>
    PolicyNames?: Value<string>[]
    Protocol: Value<Protocol>
    SSLCertificateId?: Value<string>
}

export default class Listener extends ResourceBase {
    constructor(properties: ListenerProperties, dependsOn?: Value<string>) {
        super('AWS::ElasticLoadBalancing::Listener', properties, dependsOn)
    }
}