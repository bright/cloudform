import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class CapacityProviderStrategy {
    Base?: Value<number>;
    Weight?: Value<number>;
    CapacityProvider: Value<string>;
    constructor(properties: CapacityProviderStrategy);
}
export interface ClusterCapacityProviderAssociationsProperties {
    CapacityProviders: List<Value<string>>;
    Cluster: Value<string>;
    DefaultCapacityProviderStrategy: List<CapacityProviderStrategy>;
}
export default class ClusterCapacityProviderAssociations extends ResourceBase<ClusterCapacityProviderAssociationsProperties> {
    static CapacityProviderStrategy: typeof CapacityProviderStrategy;
    constructor(properties: ClusterCapacityProviderAssociationsProperties);
}
