import { ResourceBase, ResourceTag } from '../resource';
import { Value } from '../internal';
export interface RouteTableProperties {
    Tags?: ResourceTag[];
    VpcId: Value<string>;
}
export default class RouteTable extends ResourceBase {
    constructor(properties: RouteTableProperties, dependsOn?: Value<string>);
}
