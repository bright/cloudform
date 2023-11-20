import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface ResolverConfigProperties {
    ResourceId: Value<string>;
    AutodefinedReverseFlag: Value<string>;
}
export default class ResolverConfig extends ResourceBase<ResolverConfigProperties> {
    constructor(properties: ResolverConfigProperties);
}
