import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class LoRaWANDeviceProfile {
    PingSlotPeriod?: Value<number>;
    ClassCTimeout?: Value<number>;
    RxFreq2?: Value<number>;
    RfRegion?: Value<string>;
    ClassBTimeout?: Value<number>;
    RxDelay1?: Value<number>;
    SupportsClassC?: Value<boolean>;
    SupportsClassB?: Value<boolean>;
    RxDrOffset1?: Value<number>;
    MaxEirp?: Value<number>;
    FactoryPresetFreqsList?: List<Value<number>>;
    SupportsJoin?: Value<boolean>;
    PingSlotDr?: Value<number>;
    MacVersion?: Value<string>;
    PingSlotFreq?: Value<number>;
    RegParamsRevision?: Value<string>;
    RxDataRate2?: Value<number>;
    Supports32BitFCnt?: Value<boolean>;
    MaxDutyCycle?: Value<number>;
    constructor(properties: LoRaWANDeviceProfile);
}
export interface DeviceProfileProperties {
    LoRaWAN?: LoRaWANDeviceProfile;
    Tags?: List<ResourceTag>;
    Name?: Value<string>;
}
export default class DeviceProfile extends ResourceBase<DeviceProfileProperties> {
    static LoRaWANDeviceProfile: typeof LoRaWANDeviceProfile;
    constructor(properties?: DeviceProfileProperties);
}
