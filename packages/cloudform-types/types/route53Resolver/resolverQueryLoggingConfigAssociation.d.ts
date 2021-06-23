import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface ResolverQueryLoggingConfigAssociationProperties {
    ResolverQueryLogConfigId?: Value<string>;
    ResourceId?: Value<string>;
}
export default class ResolverQueryLoggingConfigAssociation extends ResourceBase<ResolverQueryLoggingConfigAssociationProperties> {
    constructor(properties?: ResolverQueryLoggingConfigAssociationProperties);
}
