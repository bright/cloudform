import { ResourceBase, ResourceTag } from '../resource';
import { Value } from '../dataTypes';
export interface IngressProperties {
    CIDRIP?: Value<string>;
    EC2SecurityGroupId?: Value<string>;
    EC2SecurityGroupName?: Value<string>;
    EC2SecurityGroupOwnerId?: Value<string>;
}
export declare class Ingress extends ResourceBase {
    constructor(properties: IngressProperties, dependsOn?: Value<string>);
}
export interface DBSecurityGroupProperties {
    DBSecurityGroupIngress: Ingress[];
    EC2VpcId?: Value<string>;
    GroupDescription: Value<string>;
    Tags?: ResourceTag[];
}
export default class DBSecurityGroup extends ResourceBase {
    constructor(properties: DBSecurityGroupProperties, dependsOn?: Value<string>);
}
