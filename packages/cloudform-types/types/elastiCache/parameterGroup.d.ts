import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface ParameterGroupProperties {
    CacheParameterGroupFamily: Value<string>;
    Description: Value<string>;
    Properties?: {
        [key: string]: Value<string>;
    };
    Tags?: List<ResourceTag>;
}
export default class ParameterGroup extends ResourceBase<ParameterGroupProperties> {
    constructor(properties: ParameterGroupProperties);
}
