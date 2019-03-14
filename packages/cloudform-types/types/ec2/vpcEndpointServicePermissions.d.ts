import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export interface VPCEndpointServicePermissionsProperties {
    AllowedPrincipals?: List<Value<string>>;
    ServiceId: Value<string>;
}
export default class VPCEndpointServicePermissions extends ResourceBase<VPCEndpointServicePermissionsProperties> {
    constructor(properties: VPCEndpointServicePermissionsProperties);
}
