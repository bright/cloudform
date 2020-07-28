import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class Location {
    Address?: Value<string>;
    Latitude?: Value<string>;
    Longitude?: Value<string>;
    constructor(properties: Location);
}
export interface DeviceProperties {
    Description?: Value<string>;
    Tags?: List<ResourceTag>;
    GlobalNetworkId: Value<string>;
    Location?: Location;
    Model?: Value<string>;
    SerialNumber?: Value<string>;
    SiteId?: Value<string>;
    Type?: Value<string>;
    Vendor?: Value<string>;
}
export default class Device extends ResourceBase<DeviceProperties> {
    static Location: typeof Location;
    constructor(properties: DeviceProperties);
}
