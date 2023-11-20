import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class AWSLocation {
    Zone?: Value<string>;
    SubnetArn?: Value<string>;
    constructor(properties: AWSLocation);
}
export declare class Location {
    Address?: Value<string>;
    Latitude?: Value<string>;
    Longitude?: Value<string>;
    constructor(properties: Location);
}
export interface DeviceProperties {
    SiteId?: Value<string>;
    AWSLocation?: AWSLocation;
    Type?: Value<string>;
    Description?: Value<string>;
    GlobalNetworkId: Value<string>;
    SerialNumber?: Value<string>;
    Model?: Value<string>;
    Vendor?: Value<string>;
    Tags?: List<ResourceTag>;
    Location?: Location;
}
export default class Device extends ResourceBase<DeviceProperties> {
    static AWSLocation: typeof AWSLocation;
    static Location: typeof Location;
    constructor(properties: DeviceProperties);
}
