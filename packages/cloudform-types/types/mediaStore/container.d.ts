import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class MetricPolicyRule {
    ObjectGroup: Value<string>;
    ObjectGroupName: Value<string>;
    constructor(properties: MetricPolicyRule);
}
export declare class CorsRule {
    AllowedMethods?: List<Value<string>>;
    AllowedOrigins?: List<Value<string>>;
    ExposeHeaders?: List<Value<string>>;
    MaxAgeSeconds?: Value<number>;
    AllowedHeaders?: List<Value<string>>;
    constructor(properties: CorsRule);
}
export declare class MetricPolicy {
    ContainerLevelMetrics: Value<string>;
    MetricPolicyRules?: List<MetricPolicyRule>;
    constructor(properties: MetricPolicy);
}
export interface ContainerProperties {
    Policy?: Value<string>;
    MetricPolicy?: MetricPolicy;
    ContainerName: Value<string>;
    CorsPolicy?: List<CorsRule>;
    LifecyclePolicy?: Value<string>;
    AccessLoggingEnabled?: Value<boolean>;
    Tags?: List<ResourceTag>;
}
export default class Container extends ResourceBase<ContainerProperties> {
    static MetricPolicyRule: typeof MetricPolicyRule;
    static CorsRule: typeof CorsRule;
    static MetricPolicy: typeof MetricPolicy;
    constructor(properties: ContainerProperties);
}
