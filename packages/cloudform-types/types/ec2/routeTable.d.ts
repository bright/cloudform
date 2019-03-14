import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface RouteTableProperties {
    Tags?: List<ResourceTag>;
    VpcId: Value<string>;
}
export default class RouteTable extends ResourceBase<RouteTableProperties> {
    constructor(properties: RouteTableProperties);
}
