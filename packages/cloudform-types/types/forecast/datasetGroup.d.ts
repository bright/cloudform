import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface DatasetGroupProperties {
    DatasetArns?: List<Value<string>>;
    DatasetGroupName: Value<string>;
    Domain: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class DatasetGroup extends ResourceBase<DatasetGroupProperties> {
    constructor(properties: DatasetGroupProperties);
}
