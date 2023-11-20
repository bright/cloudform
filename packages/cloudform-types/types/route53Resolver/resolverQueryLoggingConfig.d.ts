import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface ResolverQueryLoggingConfigProperties {
    DestinationArn?: Value<string>;
    Name?: Value<string>;
}
export default class ResolverQueryLoggingConfig extends ResourceBase<ResolverQueryLoggingConfigProperties> {
    constructor(properties?: ResolverQueryLoggingConfigProperties);
}
