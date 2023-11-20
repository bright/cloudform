import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export interface VPCEndpointConnectionNotificationProperties {
    ConnectionEvents: List<Value<string>>;
    VPCEndpointId?: Value<string>;
    ConnectionNotificationArn: Value<string>;
    ServiceId?: Value<string>;
}
export default class VPCEndpointConnectionNotification extends ResourceBase<VPCEndpointConnectionNotificationProperties> {
    constructor(properties: VPCEndpointConnectionNotificationProperties);
}
