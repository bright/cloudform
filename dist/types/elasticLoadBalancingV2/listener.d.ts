import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class Action {
    TargetGroupArn: Value<string>;
    Type: Value<string>;
    constructor(properties: Action);
}
export declare class Certificate {
    CertificateArn?: Value<string>;
    constructor(properties: Certificate);
}
export interface ListenerProperties {
    Certificates?: List<Certificate>;
    DefaultActions: List<Action>;
    LoadBalancerArn: Value<string>;
    Port: Value<number>;
    Protocol: Value<string>;
    SslPolicy?: Value<string>;
}
export default class Listener extends ResourceBase {
    constructor(properties: ListenerProperties);
}
