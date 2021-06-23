import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface VirtualMFADeviceProperties {
    VirtualMfaDeviceName?: Value<string>;
    Path?: Value<string>;
    Users: List<Value<string>>;
    Tags?: List<ResourceTag>;
}
export default class VirtualMFADevice extends ResourceBase<VirtualMFADeviceProperties> {
    constructor(properties: VirtualMFADeviceProperties);
}
