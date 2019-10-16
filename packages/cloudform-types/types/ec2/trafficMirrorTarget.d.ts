import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface TrafficMirrorTargetProperties {
    NetworkLoadBalancerArn?: Value<string>;
    Description?: Value<string>;
    NetworkInterfaceId?: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class TrafficMirrorTarget extends ResourceBase<TrafficMirrorTargetProperties> {
    constructor(properties?: TrafficMirrorTargetProperties);
}
