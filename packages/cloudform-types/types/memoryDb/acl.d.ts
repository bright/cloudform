import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface ACLProperties {
    ACLName: Value<string>;
    UserNames?: List<Value<string>>;
    Tags?: List<ResourceTag>;
}
export default class ACL extends ResourceBase<ACLProperties> {
    constructor(properties: ACLProperties);
}
