import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface PlacementProperties {
    PlacementName: Value<string>;
    ProjectName: Value<string>;
    AssociatedDevices?: any;
    Attributes?: any;
}
export default class Placement extends ResourceBase {
    constructor(properties?: PlacementProperties);
}
