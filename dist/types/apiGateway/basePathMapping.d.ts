import { ResourceBase } from '../resource';
import { Value } from '../internal';
export interface BasePathMappingProperties {
    BasePath?: Value<string>;
    DomainName: Value<string>;
    RestApiId: Value<string>;
    Stage?: Value<string>;
}
export default class BasePathMapping extends ResourceBase {
    constructor(properties: BasePathMappingProperties, dependsOn?: Value<string>);
}
