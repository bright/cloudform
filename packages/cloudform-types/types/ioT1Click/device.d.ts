import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface DeviceProperties {
    DeviceId: Value<string>;
    Enabled: Value<boolean>;
}
export default class Device extends ResourceBase<DeviceProperties> {
    constructor(properties: DeviceProperties);
}
