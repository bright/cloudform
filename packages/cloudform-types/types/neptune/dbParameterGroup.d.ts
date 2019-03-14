import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface DBParameterGroupProperties {
    Description: Value<string>;
    Parameters: {
        [key: string]: any;
    };
    Family: Value<string>;
    Tags?: List<ResourceTag>;
    Name?: Value<string>;
}
export default class DBParameterGroup extends ResourceBase<DBParameterGroupProperties> {
    constructor(properties: DBParameterGroupProperties);
}
