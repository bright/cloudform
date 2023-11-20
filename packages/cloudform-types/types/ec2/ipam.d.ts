import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class IpamOperatingRegion {
    RegionName: Value<string>;
    constructor(properties: IpamOperatingRegion);
}
export interface IPAMProperties {
    Description?: Value<string>;
    Tier?: Value<string>;
    Tags?: List<ResourceTag>;
    OperatingRegions?: List<IpamOperatingRegion>;
}
export default class IPAM extends ResourceBase<IPAMProperties> {
    static IpamOperatingRegion: typeof IpamOperatingRegion;
    constructor(properties?: IPAMProperties);
}
