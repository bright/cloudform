import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface ApiCacheProperties {
    Type: Value<string>;
    TransitEncryptionEnabled?: Value<boolean>;
    AtRestEncryptionEnabled?: Value<boolean>;
    ApiId: Value<string>;
    ApiCachingBehavior: Value<string>;
    Ttl: Value<number>;
}
export default class ApiCache extends ResourceBase<ApiCacheProperties> {
    constructor(properties: ApiCacheProperties);
}
