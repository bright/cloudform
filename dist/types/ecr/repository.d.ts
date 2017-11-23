import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export declare class LifecyclePolicy {
    LifecyclePolicyText?: Value<string>;
    RegistryId?: Value<string>;
    constructor(properties: LifecyclePolicy);
}
export interface RepositoryProperties {
    LifecyclePolicy?: LifecyclePolicy;
    RepositoryName?: Value<string>;
    RepositoryPolicyText?: any;
}
export default class Repository extends ResourceBase {
    constructor(properties: RepositoryProperties, dependsOn?: Value<string> | Value<string>[]);
}
