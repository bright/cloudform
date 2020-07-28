import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface TrafficMirrorSessionProperties {
    TrafficMirrorTargetId: Value<string>;
    Description?: Value<string>;
    SessionNumber: Value<number>;
    VirtualNetworkId?: Value<number>;
    PacketLength?: Value<number>;
    NetworkInterfaceId: Value<string>;
    TrafficMirrorFilterId: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class TrafficMirrorSession extends ResourceBase<TrafficMirrorSessionProperties> {
    constructor(properties: TrafficMirrorSessionProperties);
}
