import { ResourceBase, ResourceTag } from '../resource';
import { Value } from '../internal';
export interface NetworkAclProperties {
    Tags?: ResourceTag[];
    VpcId: Value<string>;
}
export default class NetworkAcl extends ResourceBase {
    constructor(properties: NetworkAclProperties, dependsOn?: Value<string>);
}
