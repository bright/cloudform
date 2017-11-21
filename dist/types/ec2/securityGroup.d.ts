import { ResourceBase, ResourceTag } from '../resource';
import { Value } from '../internal';
import SecurityGroupIngres from './securityGroupIngres';
import SecurityGroupEgres from './securityGroupEgres';
export interface SecurityGroupProperties {
    GroupName?: Value<string>;
    GroupDescription?: Value<string>;
    VpcId?: Value<string>;
    SecurityGroupIngress?: SecurityGroupIngres[];
    SecurityGroupEgress?: SecurityGroupEgres[];
    Tags?: ResourceTag[];
}
export default class SecurityGroup extends ResourceBase {
    constructor(properties: SecurityGroupProperties, dependsOn?: Value<string>);
}
