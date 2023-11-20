import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface RoutingControlProperties {
    ClusterArn?: Value<string>;
    ControlPanelArn?: Value<string>;
    Name: Value<string>;
}
export default class RoutingControl extends ResourceBase<RoutingControlProperties> {
    constructor(properties: RoutingControlProperties);
}
