import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface SubnetGroupProperties {
    Description?: Value<string>;
    SubnetGroupName: Value<string>;
    SubnetIds: List<Value<string>>;
    Tags?: List<ResourceTag>;
}
export default class SubnetGroup extends ResourceBase<SubnetGroupProperties> {
    constructor(properties: SubnetGroupProperties);
}
