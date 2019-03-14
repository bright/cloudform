import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface DBParameterGroupProperties {
    Description: Value<string>;
    Family: Value<string>;
    Parameters?: {
        [key: string]: Value<string>;
    };
    Tags?: List<ResourceTag>;
}
export default class DBParameterGroup extends ResourceBase<DBParameterGroupProperties> {
    constructor(properties: DBParameterGroupProperties);
}
