import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface DBClusterParameterGroupProperties {
    Description: Value<string>;
    Family: Value<string>;
    Parameters: {
        [key: string]: any;
    };
    Tags?: List<ResourceTag>;
}
export default class DBClusterParameterGroup extends ResourceBase<DBClusterParameterGroupProperties> {
    constructor(properties: DBClusterParameterGroupProperties);
}
