import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface NetworkProfileProperties {
    DownlinkBandwidthBits?: Value<number>;
    ProjectArn: Value<string>;
    Description?: Value<string>;
    DownlinkJitterMs?: Value<number>;
    DownlinkLossPercent?: Value<number>;
    DownlinkDelayMs?: Value<number>;
    UplinkBandwidthBits?: Value<number>;
    UplinkLossPercent?: Value<number>;
    UplinkDelayMs?: Value<number>;
    Tags?: List<ResourceTag>;
    Name: Value<string>;
    UplinkJitterMs?: Value<number>;
}
export default class NetworkProfile extends ResourceBase<NetworkProfileProperties> {
    constructor(properties: NetworkProfileProperties);
}
