import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface CustomerGatewayAssociationProperties {
    GlobalNetworkId: Value<string>;
    DeviceId: Value<string>;
    CustomerGatewayArn: Value<string>;
    LinkId?: Value<string>;
}
export default class CustomerGatewayAssociation extends ResourceBase<CustomerGatewayAssociationProperties> {
    constructor(properties: CustomerGatewayAssociationProperties);
}
