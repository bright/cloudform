import { ResourceBase } from '../resource';
import { Value } from '../internal';
export declare type Key = "*" | "access_logs.s3.enabled" | "access_logs.s3.bucket" | "access_logs.s3.prefix " | "deletion_protection.enabled" | "idle_timeout.timeout_seconds";
export interface LoadBalancerAttributesProperties {
    Key?: Value<Key>;
    Value?: Value<string>;
}
export default class LoadBalancerAttributes extends ResourceBase {
    constructor(properties: LoadBalancerAttributesProperties, dependsOn?: Value<string>);
}
