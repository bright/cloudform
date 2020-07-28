import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class ClusterSettings {
    Name?: Value<string>;
    Value?: Value<string>;
    constructor(properties: ClusterSettings);
}
export declare class CapacityProviderStrategyItem {
    CapacityProvider?: Value<string>;
    Weight?: Value<number>;
    Base?: Value<number>;
    constructor(properties: CapacityProviderStrategyItem);
}
export declare class ClusterSetting {
    Name: Value<string>;
    Value: Value<string>;
    constructor(properties: ClusterSetting);
}
export interface ClusterProperties {
    Tags?: List<ResourceTag>;
    ClusterName?: Value<string>;
    ClusterSettings?: List<ClusterSettings>;
    CapacityProviders?: List<Value<string>>;
    DefaultCapacityProviderStrategy?: List<CapacityProviderStrategyItem>;
}
export default class Cluster extends ResourceBase<ClusterProperties> {
    static ClusterSettings: typeof ClusterSettings;
    static CapacityProviderStrategyItem: typeof CapacityProviderStrategyItem;
    static ClusterSetting: typeof ClusterSetting;
    constructor(properties?: ClusterProperties);
}
