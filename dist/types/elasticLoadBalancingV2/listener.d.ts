import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface ActionProperties {
    TargetGroupArn: Value<string>;
    Type: Value<string>;
}
export declare class Action extends ResourceBase {
    constructor(properties: ActionProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface CertificateProperties {
    CertificateArn?: Value<string>;
}
export declare class Certificate extends ResourceBase {
    constructor(properties: CertificateProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface ListenerProperties {
    Certificates?: Certificate[];
    DefaultActions: Action[];
    LoadBalancerArn: Value<string>;
    Port: Value<number>;
    Protocol: Value<string>;
    SslPolicy?: Value<string>;
}
export default class Listener extends ResourceBase {
    constructor(properties: ListenerProperties, dependsOn?: Value<string> | Value<string>[]);
}
