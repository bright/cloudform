import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface CarrierGatewayProperties {
    VpcId: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class CarrierGateway extends ResourceBase<CarrierGatewayProperties> {
    constructor(properties: CarrierGatewayProperties);
}
