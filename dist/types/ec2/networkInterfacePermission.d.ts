import { ResourceBase } from '../resource';
import { Value } from '../internal';
export interface NetworkInterfacePermissionProperties {
    AwsAccountId: Value<string>;
    NetworkInterfaceId: Value<string>;
    Permission: Value<string>;
}
export default class NetworkInterfacePermission extends ResourceBase {
    constructor(properties: NetworkInterfacePermissionProperties, dependsOn?: Value<string>);
}
