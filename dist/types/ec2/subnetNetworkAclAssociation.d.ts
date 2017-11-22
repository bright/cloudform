import { ResourceBase } from '../resource';
import { Value } from '../internal';
export interface SubnetNetworkAclAssociationProperties {
    NetworkAclId: Value<string>;
    SubnetId: Value<string>;
}
export default class SubnetNetworkAclAssociation extends ResourceBase {
    constructor(properties: SubnetNetworkAclAssociationProperties, dependsOn?: Value<string>);
}
