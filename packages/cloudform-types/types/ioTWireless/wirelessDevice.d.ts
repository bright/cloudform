import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class AbpV11 {
    DevAddr: Value<string>;
    SessionKeys: SessionKeysAbpV11;
    constructor(properties: AbpV11);
}
export declare class LoRaWANDevice {
    DevEui?: Value<string>;
    DeviceProfileId?: Value<string>;
    ServiceProfileId?: Value<string>;
    OtaaV11?: OtaaV11;
    OtaaV10x?: OtaaV10x;
    AbpV11?: AbpV11;
    AbpV10x?: AbpV10x;
    constructor(properties: LoRaWANDevice);
}
export declare class SessionKeysAbpV11 {
    FNwkSIntKey: Value<string>;
    SNwkSIntKey: Value<string>;
    NwkSEncKey: Value<string>;
    AppSKey: Value<string>;
    constructor(properties: SessionKeysAbpV11);
}
export declare class AbpV10x {
    DevAddr: Value<string>;
    SessionKeys: SessionKeysAbpV10x;
    constructor(properties: AbpV10x);
}
export declare class OtaaV11 {
    AppKey: Value<string>;
    NwkKey: Value<string>;
    JoinEui: Value<string>;
    constructor(properties: OtaaV11);
}
export declare class SessionKeysAbpV10x {
    NwkSKey: Value<string>;
    AppSKey: Value<string>;
    constructor(properties: SessionKeysAbpV10x);
}
export declare class OtaaV10x {
    AppKey: Value<string>;
    AppEui: Value<string>;
    constructor(properties: OtaaV10x);
}
export interface WirelessDeviceProperties {
    Type: Value<string>;
    Name?: Value<string>;
    Description?: Value<string>;
    DestinationName: Value<string>;
    LoRaWAN?: LoRaWANDevice;
    Tags?: List<ResourceTag>;
    ThingArn?: Value<string>;
    LastUplinkReceivedAt?: Value<string>;
}
export default class WirelessDevice extends ResourceBase<WirelessDeviceProperties> {
    static AbpV11: typeof AbpV11;
    static LoRaWANDevice: typeof LoRaWANDevice;
    static SessionKeysAbpV11: typeof SessionKeysAbpV11;
    static AbpV10x: typeof AbpV10x;
    static OtaaV11: typeof OtaaV11;
    static SessionKeysAbpV10x: typeof SessionKeysAbpV10x;
    static OtaaV10x: typeof OtaaV10x;
    constructor(properties: WirelessDeviceProperties);
}
