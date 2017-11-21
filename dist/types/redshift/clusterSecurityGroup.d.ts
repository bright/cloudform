import { ResourceBase } from '../resource';
import { Value } from '../internal';
export interface ClusterSecurityGroupProperties {
    Description?: Value<string>;
}
export default class ClusterSecurityGroup extends ResourceBase {
    constructor(properties: ClusterSecurityGroupProperties, dependsOn?: Value<string>);
}
