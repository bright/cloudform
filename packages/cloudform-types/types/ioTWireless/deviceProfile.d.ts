import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class LoRaWANDeviceProfile {
    SupportsClassB?: Value<boolean>;
    ClassBTimeout?: Value<number>;
    PingSlotPeriod?: Value<number>;
    PingSlotDr?: Value<number>;
    PingSlotFreq?: Value<number>;
    SupportsClassC?: Value<boolean>;
    ClassCTimeout?: Value<number>;
    MacVersion?: Value<string>;
    RegParamsRevision?: Value<string>;
    MaxEirp?: Value<number>;
    MaxDutyCycle?: Value<number>;
    SupportsJoin?: Value<boolean>;
    RfRegion?: Value<string>;
    Supports32BitFCnt?: Value<boolean>;
    constructor(properties: LoRaWANDeviceProfile);
}
export interface DeviceProfileProperties {
    Name?: Value<string>;
    LoRaWAN?: LoRaWANDeviceProfile;
    Tags?: List<ResourceTag>;
}
export default class DeviceProfile extends ResourceBase<DeviceProfileProperties> {
    static LoRaWANDeviceProfile: typeof LoRaWANDeviceProfile;
    constructor(properties?: DeviceProfileProperties);
}
