import { ResourceBase, ResourceTag } from '../resource';
import { Value } from '../dataTypes';
export interface ReplicationSubnetGroupProperties {
    ReplicationSubnetGroupDescription: Value<string>;
    ReplicationSubnetGroupIdentifier?: Value<string>;
    SubnetIds: Value<string>[];
    Tags?: ResourceTag[];
}
export default class ReplicationSubnetGroup extends ResourceBase {
    constructor(properties: ReplicationSubnetGroupProperties, dependsOn?: Value<string>);
}
