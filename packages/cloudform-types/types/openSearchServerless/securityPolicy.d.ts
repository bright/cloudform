import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface SecurityPolicyProperties {
    Policy: Value<string>;
    Type: Value<string>;
    Description?: Value<string>;
    Name: Value<string>;
}
export default class SecurityPolicy extends ResourceBase<SecurityPolicyProperties> {
    constructor(properties: SecurityPolicyProperties);
}
