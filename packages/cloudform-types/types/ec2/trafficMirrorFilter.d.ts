import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface TrafficMirrorFilterProperties {
    Description?: Value<string>;
    NetworkServices?: List<Value<string>>;
    Tags?: List<ResourceTag>;
}
export default class TrafficMirrorFilter extends ResourceBase<TrafficMirrorFilterProperties> {
    constructor(properties?: TrafficMirrorFilterProperties);
}
