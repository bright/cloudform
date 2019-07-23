import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface ClientVpnRouteProperties {
    ClientVpnEndpointId: Value<string>;
    TargetVpcSubnetId: Value<string>;
    Description?: Value<string>;
    DestinationCidrBlock: Value<string>;
}
export default class ClientVpnRoute extends ResourceBase<ClientVpnRouteProperties> {
    constructor(properties: ClientVpnRouteProperties);
}
