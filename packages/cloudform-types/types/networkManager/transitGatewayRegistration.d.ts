import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface TransitGatewayRegistrationProperties {
    GlobalNetworkId: Value<string>;
    TransitGatewayArn: Value<string>;
}
export default class TransitGatewayRegistration extends ResourceBase<TransitGatewayRegistrationProperties> {
    constructor(properties: TransitGatewayRegistrationProperties);
}
