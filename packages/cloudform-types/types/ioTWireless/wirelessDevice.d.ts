import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class AbpV10x {
    SessionKeys: SessionKeysAbpV10x;
    DevAddr: Value<string>;
    constructor(properties: AbpV10x);
}
export declare class AbpV11 {
    SessionKeys: SessionKeysAbpV11;
    DevAddr: Value<string>;
    constructor(properties: AbpV11);
}
export declare class LoRaWANDevice {
    AbpV10x?: AbpV10x;
    OtaaV11?: OtaaV11;
    AbpV11?: AbpV11;
    DeviceProfileId?: Value<string>;
    DevEui?: Value<string>;
    OtaaV10x?: OtaaV10x;
    ServiceProfileId?: Value<string>;
    constructor(properties: LoRaWANDevice);
}
export declare class OtaaV10x {
    AppEui: Value<string>;
    AppKey: Value<string>;
    constructor(properties: OtaaV10x);
}
export declare class OtaaV11 {
    NwkKey: Value<string>;
    AppKey: Value<string>;
    JoinEui: Value<string>;
    constructor(properties: OtaaV11);
}
export declare class SessionKeysAbpV10x {
    AppSKey: Value<string>;
    NwkSKey: Value<string>;
    constructor(properties: SessionKeysAbpV10x);
}
export declare class SessionKeysAbpV11 {
    FNwkSIntKey: Value<string>;
    AppSKey: Value<string>;
    SNwkSIntKey: Value<string>;
    NwkSEncKey: Value<string>;
    constructor(properties: SessionKeysAbpV11);
}
export interface WirelessDeviceProperties {
    LastUplinkReceivedAt?: Value<string>;
    Type: Value<string>;
    Description?: Value<string>;
    LoRaWAN?: LoRaWANDevice;
    DestinationName: Value<string>;
    ThingArn?: Value<string>;
    Tags?: List<ResourceTag>;
    Name?: Value<string>;
}
export default class WirelessDevice extends ResourceBase<WirelessDeviceProperties> {
    static AbpV10x: typeof AbpV10x;
    static AbpV11: typeof AbpV11;
    static LoRaWANDevice: typeof LoRaWANDevice;
    static OtaaV10x: typeof OtaaV10x;
    static OtaaV11: typeof OtaaV11;
    static SessionKeysAbpV10x: typeof SessionKeysAbpV10x;
    static SessionKeysAbpV11: typeof SessionKeysAbpV11;
    constructor(properties: WirelessDeviceProperties);
}
