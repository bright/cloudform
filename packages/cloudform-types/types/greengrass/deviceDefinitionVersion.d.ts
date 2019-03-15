import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class Device {
    SyncShadow?: Value<boolean>;
    ThingArn: Value<string>;
    Id: Value<string>;
    CertificateArn: Value<string>;
    constructor(properties: Device);
}
export interface DeviceDefinitionVersionProperties {
    DeviceDefinitionId: Value<string>;
    Devices: List<Device>;
}
export default class DeviceDefinitionVersion extends ResourceBase<DeviceDefinitionVersionProperties> {
    static Device: typeof Device;
    constructor(properties: DeviceDefinitionVersionProperties);
}
