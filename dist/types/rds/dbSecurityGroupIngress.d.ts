import { ResourceBase } from '../resource';
import { Value } from '../internal';
export interface DBSecurityGroupIngressProperties {
    CIDRIP?: Value<string>;
    DBSecurityGroupName?: Value<string>;
    EC2SecurityGroupId?: Value<string>;
    EC2SecurityGroupName?: Value<string>;
    EC2SecurityGroupOwnerId?: Value<string>;
}
export default class DBSecurityGroupIngress extends ResourceBase {
    constructor(properties: DBSecurityGroupIngressProperties, dependsOn?: Value<string>);
}
