import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class AddOn {
    Status?: Value<string>;
    AddOnType: Value<string>;
    AutoSnapshotAddOnRequest?: AutoSnapshotAddOn;
    constructor(properties: AddOn);
}
export declare class AutoSnapshotAddOn {
    SnapshotTimeOfDay?: Value<string>;
    constructor(properties: AutoSnapshotAddOn);
}
export declare class Location {
    RegionName?: Value<string>;
    AvailabilityZone?: Value<string>;
    constructor(properties: Location);
}
export interface DiskProperties {
    SizeInGb: Value<number>;
    AvailabilityZone?: Value<string>;
    AddOns?: List<AddOn>;
    DiskName: Value<string>;
    Tags?: List<ResourceTag>;
    Location?: Location;
}
export default class Disk extends ResourceBase<DiskProperties> {
    static AddOn: typeof AddOn;
    static AutoSnapshotAddOn: typeof AutoSnapshotAddOn;
    static Location: typeof Location;
    constructor(properties: DiskProperties);
}
