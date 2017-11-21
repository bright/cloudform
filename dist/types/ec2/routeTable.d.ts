import { ResourceBase, ResourceTag } from '../resource';
import { Value } from '../internal';
export interface RouteTableProperties {
    VpcId: Value<string>;
    Tags?: ResourceTag[];
}
export default class RouteTable extends ResourceBase {
    constructor(properties: RouteTableProperties, dependsOn?: Value<string>);
}
