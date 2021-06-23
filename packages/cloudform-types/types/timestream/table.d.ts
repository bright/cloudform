import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface TableProperties {
    DatabaseName: Value<string>;
    TableName?: Value<string>;
    RetentionProperties?: {
        [key: string]: any;
    };
    Tags?: List<ResourceTag>;
}
export default class Table extends ResourceBase<TableProperties> {
    constructor(properties: TableProperties);
}
