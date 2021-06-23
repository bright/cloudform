import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface ResolverQueryLoggingConfigProperties {
    Name?: Value<string>;
    DestinationArn?: Value<string>;
}
export default class ResolverQueryLoggingConfig extends ResourceBase<ResolverQueryLoggingConfigProperties> {
    constructor(properties?: ResolverQueryLoggingConfigProperties);
}
