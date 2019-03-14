import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface PlacementProperties {
    PlacementName?: Value<string>;
    ProjectName: Value<string>;
    AssociatedDevices?: {
        [key: string]: any;
    };
    Attributes?: {
        [key: string]: any;
    };
}
export default class Placement extends ResourceBase<PlacementProperties> {
    constructor(properties: PlacementProperties);
}
