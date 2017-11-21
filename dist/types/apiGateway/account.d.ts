import { ResourceBase } from '../resource';
import { Value } from '../internal';
export interface AccountProperties {
    CloudWatchRoleArn?: Value<string>;
}
export default class Account extends ResourceBase {
    constructor(properties: AccountProperties, dependsOn?: Value<string>);
}
