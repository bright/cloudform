import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class ContinuousDeploymentPolicyConfig {
    Type?: Value<string>;
    SingleHeaderPolicyConfig?: SingleHeaderPolicyConfig;
    Enabled: Value<boolean>;
    StagingDistributionDnsNames: List<Value<string>>;
    TrafficConfig?: TrafficConfig;
    SingleWeightPolicyConfig?: SingleWeightPolicyConfig;
    constructor(properties: ContinuousDeploymentPolicyConfig);
}
export declare class SessionStickinessConfig {
    IdleTTL: Value<number>;
    MaximumTTL: Value<number>;
    constructor(properties: SessionStickinessConfig);
}
export declare class SingleHeaderConfig {
    Header: Value<string>;
    Value: Value<string>;
    constructor(properties: SingleHeaderConfig);
}
export declare class SingleHeaderPolicyConfig {
    Header: Value<string>;
    Value: Value<string>;
    constructor(properties: SingleHeaderPolicyConfig);
}
export declare class SingleWeightConfig {
    SessionStickinessConfig?: SessionStickinessConfig;
    Weight: Value<number>;
    constructor(properties: SingleWeightConfig);
}
export declare class SingleWeightPolicyConfig {
    SessionStickinessConfig?: SessionStickinessConfig;
    Weight: Value<number>;
    constructor(properties: SingleWeightPolicyConfig);
}
export declare class TrafficConfig {
    SingleWeightConfig?: SingleWeightConfig;
    Type: Value<string>;
    SingleHeaderConfig?: SingleHeaderConfig;
    constructor(properties: TrafficConfig);
}
export interface ContinuousDeploymentPolicyProperties {
    ContinuousDeploymentPolicyConfig: ContinuousDeploymentPolicyConfig;
}
export default class ContinuousDeploymentPolicy extends ResourceBase<ContinuousDeploymentPolicyProperties> {
    static ContinuousDeploymentPolicyConfig: typeof ContinuousDeploymentPolicyConfig;
    static SessionStickinessConfig: typeof SessionStickinessConfig;
    static SingleHeaderConfig: typeof SingleHeaderConfig;
    static SingleHeaderPolicyConfig: typeof SingleHeaderPolicyConfig;
    static SingleWeightConfig: typeof SingleWeightConfig;
    static SingleWeightPolicyConfig: typeof SingleWeightPolicyConfig;
    static TrafficConfig: typeof TrafficConfig;
    constructor(properties: ContinuousDeploymentPolicyProperties);
}
