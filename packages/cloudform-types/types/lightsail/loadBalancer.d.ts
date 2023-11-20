import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface LoadBalancerProperties {
    IpAddressType?: Value<string>;
    SessionStickinessLBCookieDurationSeconds?: Value<string>;
    LoadBalancerName: Value<string>;
    AttachedInstances?: List<Value<string>>;
    InstancePort: Value<number>;
    HealthCheckPath?: Value<string>;
    SessionStickinessEnabled?: Value<boolean>;
    TlsPolicyName?: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class LoadBalancer extends ResourceBase<LoadBalancerProperties> {
    constructor(properties: LoadBalancerProperties);
}
