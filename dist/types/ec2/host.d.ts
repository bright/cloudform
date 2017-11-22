import { ResourceBase } from '../resource';
import { Value } from '../internal';
export interface HostProperties {
    AutoPlacement?: Value<string>;
    AvailabilityZone: Value<string>;
    InstanceType: Value<string>;
}
export default class Host extends ResourceBase {
    constructor(properties: HostProperties, dependsOn?: Value<string>);
}
