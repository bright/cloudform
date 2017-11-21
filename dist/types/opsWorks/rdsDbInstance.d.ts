import { ResourceBase } from '../resource';
import { Value } from '../internal';
export interface RdsDbInstanceProperties {
    DbPassword: Value<string>;
    DbUser: Value<string>;
    RdsDbInstanceArn: Value<string>;
}
export default class RdsDbInstance extends ResourceBase {
    constructor(properties: RdsDbInstanceProperties, dependsOn?: Value<string>);
}
