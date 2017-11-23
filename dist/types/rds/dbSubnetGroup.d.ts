import { ResourceBase, ResourceTag } from '../resource';
import { Value } from '../dataTypes';
export interface DBSubnetGroupProperties {
    DBSubnetGroupDescription: Value<string>;
    SubnetIds: Value<string>[];
    Tags?: ResourceTag[];
}
export default class DBSubnetGroup extends ResourceBase {
    constructor(properties: DBSubnetGroupProperties, dependsOn?: Value<string>);
}
