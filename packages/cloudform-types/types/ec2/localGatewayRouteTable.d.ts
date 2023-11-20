import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface LocalGatewayRouteTableProperties {
    LocalGatewayId: Value<string>;
    Mode?: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class LocalGatewayRouteTable extends ResourceBase<LocalGatewayRouteTableProperties> {
    constructor(properties: LocalGatewayRouteTableProperties);
}
