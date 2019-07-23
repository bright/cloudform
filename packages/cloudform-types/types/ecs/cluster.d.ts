import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface ClusterProperties {
    ClusterName?: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class Cluster extends ResourceBase<ClusterProperties> {
    constructor(properties?: ClusterProperties);
}
