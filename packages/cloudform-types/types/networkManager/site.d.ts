import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class Location {
    Address?: Value<string>;
    Latitude?: Value<string>;
    Longitude?: Value<string>;
    constructor(properties: Location);
}
export interface SiteProperties {
    Description?: Value<string>;
    Tags?: List<ResourceTag>;
    GlobalNetworkId: Value<string>;
    Location?: Location;
}
export default class Site extends ResourceBase<SiteProperties> {
    static Location: typeof Location;
    constructor(properties: SiteProperties);
}
