import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class LifecyclePolicy {
    LifecyclePolicyText?: Value<string>;
    RegistryId?: Value<string>;
    constructor(properties: LifecyclePolicy);
}
export interface RepositoryProperties {
    LifecyclePolicy?: LifecyclePolicy;
    RepositoryName?: Value<string>;
    RepositoryPolicyText?: {
        [key: string]: any;
    };
    Tags?: List<ResourceTag>;
}
export default class Repository extends ResourceBase<RepositoryProperties> {
    static LifecyclePolicy: typeof LifecyclePolicy;
    constructor(properties?: RepositoryProperties);
}
