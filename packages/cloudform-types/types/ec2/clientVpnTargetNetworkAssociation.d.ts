import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface ClientVpnTargetNetworkAssociationProperties {
    ClientVpnEndpointId: Value<string>;
    SubnetId: Value<string>;
}
export default class ClientVpnTargetNetworkAssociation extends ResourceBase<ClientVpnTargetNetworkAssociationProperties> {
    constructor(properties: ClientVpnTargetNetworkAssociationProperties);
}
