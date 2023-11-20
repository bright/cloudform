import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface PullThroughCacheRuleProperties {
    UpstreamRegistryUrl?: Value<string>;
    EcrRepositoryPrefix?: Value<string>;
}
export default class PullThroughCacheRule extends ResourceBase<PullThroughCacheRuleProperties> {
    constructor(properties?: PullThroughCacheRuleProperties);
}
