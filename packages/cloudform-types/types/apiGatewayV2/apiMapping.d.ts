import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface ApiMappingProperties {
    DomainName: Value<string>;
    Stage: Value<string>;
    ApiMappingKey?: Value<string>;
    ApiId: Value<string>;
}
export default class ApiMapping extends ResourceBase<ApiMappingProperties> {
    constructor(properties: ApiMappingProperties);
}
