import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface ResolverQueryLoggingConfigAssociationProperties {
    ResourceId?: Value<string>;
    ResolverQueryLogConfigId?: Value<string>;
}
export default class ResolverQueryLoggingConfigAssociation extends ResourceBase<ResolverQueryLoggingConfigAssociationProperties> {
    constructor(properties?: ResolverQueryLoggingConfigAssociationProperties);
}
