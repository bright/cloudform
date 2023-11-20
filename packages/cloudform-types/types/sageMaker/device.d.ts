import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class DeviceInner {
    IotThingName?: Value<string>;
    Description?: Value<string>;
    DeviceName: Value<string>;
    constructor(properties: DeviceInner);
}
export interface DeviceProperties {
    DeviceFleetName: Value<string>;
    Device?: Device;
    Tags?: List<ResourceTag>;
}
export default class Device extends ResourceBase<DeviceProperties> {
    static Device: typeof DeviceInner;
    constructor(properties: DeviceProperties);
}
