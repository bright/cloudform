import { ResourceBase, ResourceTag } from '../resource';
import { Value } from '../internal';
export interface ClusterSubnetGroupProperties {
    Description: Value<string>;
    SubnetIds: Value<string>[];
    Tags?: ResourceTag[];
}
export default class ClusterSubnetGroup extends ResourceBase {
    constructor(properties: ClusterSubnetGroupProperties, dependsOn?: Value<string>);
}
