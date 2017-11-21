import { ResourceBase } from '../resource';
import { Value } from '../internal';
export declare type InstanceProtocol = "HTTP" | "HTTPS" | "TCP" | "SSL";
export declare type Protocol = "HTTP" | "HTTPS" | "TCP" | "SSL";
export interface ListenerProperties {
    InstancePort: Value<string>;
    InstanceProtocol: Value<InstanceProtocol>;
    LoadBalancerPort: Value<string>;
    PolicyNames?: Value<string>[];
    Protocol: Value<Protocol>;
    SSLCertificateId?: Value<string>;
}
export default class Listener extends ResourceBase {
    constructor(properties: ListenerProperties, dependsOn?: Value<string>);
}
