import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class Device {
    SyncShadow?: Value<boolean>;
    ThingArn: Value<string>;
    Id: Value<string>;
    CertificateArn: Value<string>;
    constructor(properties: Device);
}
export declare class DeviceDefinitionVersion {
    Devices: List<Device>;
    constructor(properties: DeviceDefinitionVersion);
}
export interface DeviceDefinitionProperties {
    InitialVersion?: DeviceDefinitionVersion;
    Name: Value<string>;
}
export default class DeviceDefinition extends ResourceBase<DeviceDefinitionProperties> {
    static Device: typeof Device;
    static DeviceDefinitionVersion: typeof DeviceDefinitionVersion;
    constructor(properties: DeviceDefinitionProperties);
}
