import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface NetworkInterfaceAttachmentProperties {
    InstanceId: Value<string>;
    DeviceIndex: Value<string>;
    NetworkInterfaceId: Value<string>;
    DeleteOnTermination?: Value<boolean>;
}
export default class NetworkInterfaceAttachment extends ResourceBase<NetworkInterfaceAttachmentProperties> {
    constructor(properties: NetworkInterfaceAttachmentProperties);
}
