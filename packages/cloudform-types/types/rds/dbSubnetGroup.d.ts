import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface DBSubnetGroupProperties {
    DBSubnetGroupName?: Value<string>;
    DBSubnetGroupDescription: Value<string>;
    SubnetIds: List<Value<string>>;
    Tags?: List<ResourceTag>;
}
export default class DBSubnetGroup extends ResourceBase<DBSubnetGroupProperties> {
    constructor(properties: DBSubnetGroupProperties);
}
