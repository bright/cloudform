import { ResourceBase } from '../resource';
import { Value } from '../internal';
export interface LifecyclePolicyProperties {
    LifecyclePolicyText?: Value<string>;
    RegistryId?: Value<string>;
}
export declare class LifecyclePolicy extends ResourceBase {
    constructor(properties: LifecyclePolicyProperties, dependsOn?: Value<string>);
}
export interface RepositoryProperties {
    LifecyclePolicy?: LifecyclePolicy;
    RepositoryName?: Value<string>;
    RepositoryPolicyText?: any;
}
export default class Repository extends ResourceBase {
    constructor(properties: RepositoryProperties, dependsOn?: Value<string>);
}
