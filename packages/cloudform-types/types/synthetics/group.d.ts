import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface GroupProperties {
    ResourceArns?: List<Value<string>>;
    Tags?: List<ResourceTag>;
    Name: Value<string>;
}
export default class Group extends ResourceBase<GroupProperties> {
    constructor(properties: GroupProperties);
}
