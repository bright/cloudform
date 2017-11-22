import { ResourceBase, ResourceTag } from '../resource';
import { Value } from '../internal';
export interface ClusterSecurityGroupProperties {
    Description: Value<string>;
    Tags?: ResourceTag[];
}
export default class ClusterSecurityGroup extends ResourceBase {
    constructor(properties: ClusterSecurityGroupProperties, dependsOn?: Value<string>);
}
