import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface HostProperties {
    HostRecovery?: Value<string>;
    InstanceFamily?: Value<string>;
    AutoPlacement?: Value<string>;
    OutpostArn?: Value<string>;
    HostMaintenance?: Value<string>;
    AvailabilityZone: Value<string>;
    InstanceType?: Value<string>;
    AssetId?: Value<string>;
}
export default class Host extends ResourceBase<HostProperties> {
    constructor(properties: HostProperties);
}
