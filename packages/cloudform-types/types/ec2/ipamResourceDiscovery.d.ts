import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class IpamOperatingRegion {
    RegionName: Value<string>;
    constructor(properties: IpamOperatingRegion);
}
export interface IPAMResourceDiscoveryProperties {
    Description?: Value<string>;
    Tags?: List<ResourceTag>;
    OperatingRegions?: List<IpamOperatingRegion>;
}
export default class IPAMResourceDiscovery extends ResourceBase<IPAMResourceDiscoveryProperties> {
    static IpamOperatingRegion: typeof IpamOperatingRegion;
    constructor(properties?: IPAMResourceDiscoveryProperties);
}
