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
export declare class Disk {
    SizeInGb?: Value<string>;
    Path: Value<string>;
    AttachmentState?: Value<string>;
    IsSystemDisk?: Value<boolean>;
    AttachedTo?: Value<string>;
    IOPS?: Value<number>;
    DiskName: Value<string>;
    constructor(properties: Disk);
}
export declare class Hardware {
    CpuCount?: Value<number>;
    RamSizeInGb?: Value<number>;
    Disks?: List<Disk>;
    constructor(properties: Hardware);
}
export declare class Location {
    RegionName?: Value<string>;
    AvailabilityZone?: Value<string>;
    constructor(properties: Location);
}
export declare class MonthlyTransfer {
    GbPerMonthAllocated?: Value<string>;
    constructor(properties: MonthlyTransfer);
}
export declare class Networking {
    Ports: List<Port>;
    MonthlyTransfer?: MonthlyTransfer;
    constructor(properties: Networking);
}
export declare class Port {
    FromPort?: Value<number>;
    AccessDirection?: Value<string>;
    CidrListAliases?: List<Value<string>>;
    ToPort?: Value<number>;
    Ipv6Cidrs?: List<Value<string>>;
    AccessFrom?: Value<string>;
    Protocol?: Value<string>;
    AccessType?: Value<string>;
    Cidrs?: List<Value<string>>;
    CommonName?: Value<string>;
    constructor(properties: Port);
}
export declare class State {
    Code?: Value<number>;
    Name?: Value<string>;
    constructor(properties: State);
}
export interface InstanceProperties {
    InstanceName: Value<string>;
    KeyPairName?: Value<string>;
    BundleId: Value<string>;
    BlueprintId: Value<string>;
    Networking?: Networking;
    UserData?: Value<string>;
    State?: State;
    AvailabilityZone?: Value<string>;
    AddOns?: List<AddOn>;
    Hardware?: Hardware;
    Tags?: List<ResourceTag>;
    Location?: Location;
}
export default class Instance extends ResourceBase<InstanceProperties> {
    static AddOn: typeof AddOn;
    static AutoSnapshotAddOn: typeof AutoSnapshotAddOn;
    static Disk: typeof Disk;
    static Hardware: typeof Hardware;
    static Location: typeof Location;
    static MonthlyTransfer: typeof MonthlyTransfer;
    static Networking: typeof Networking;
    static Port: typeof Port;
    static State: typeof State;
    constructor(properties: InstanceProperties);
}
