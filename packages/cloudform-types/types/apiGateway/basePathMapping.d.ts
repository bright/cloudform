import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface BasePathMappingProperties {
    DomainName: Value<string>;
    RestApiId?: Value<string>;
    Stage?: Value<string>;
    BasePath?: Value<string>;
    Id?: Value<string>;
}
export default class BasePathMapping extends ResourceBase<BasePathMappingProperties> {
    constructor(properties: BasePathMappingProperties);
}
