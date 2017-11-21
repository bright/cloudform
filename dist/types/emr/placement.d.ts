import { ResourceBase } from '../resource';
import { Value } from '../internal';
export interface PlacementProperties {
    AvailabilityZone?: Value<string>;
}
export default class Placement extends ResourceBase {
    constructor(properties: PlacementProperties, dependsOn?: Value<string>);
}
