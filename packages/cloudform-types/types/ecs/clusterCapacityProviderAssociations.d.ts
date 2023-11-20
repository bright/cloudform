import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class CapacityProviderStrategy {
    CapacityProvider: Value<string>;
    Base?: Value<number>;
    Weight?: Value<number>;
    constructor(properties: CapacityProviderStrategy);
}
export interface ClusterCapacityProviderAssociationsProperties {
    DefaultCapacityProviderStrategy: List<CapacityProviderStrategy>;
    CapacityProviders: List<Value<string>>;
    Cluster: Value<string>;
}
export default class ClusterCapacityProviderAssociations extends ResourceBase<ClusterCapacityProviderAssociationsProperties> {
    static CapacityProviderStrategy: typeof CapacityProviderStrategy;
    constructor(properties: ClusterCapacityProviderAssociationsProperties);
}
