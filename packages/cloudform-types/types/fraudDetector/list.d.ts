import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface ListProperties {
    Description?: Value<string>;
    VariableType?: Value<string>;
    Elements?: List<Value<string>>;
    Tags?: List<ResourceTag>;
    Name: Value<string>;
}
export default class List extends ResourceBase<ListProperties> {
    constructor(properties: ListProperties);
}
