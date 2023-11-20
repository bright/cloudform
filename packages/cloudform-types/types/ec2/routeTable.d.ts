import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface RouteTableProperties {
    VpcId: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class RouteTable extends ResourceBase<RouteTableProperties> {
    constructor(properties: RouteTableProperties);
}
