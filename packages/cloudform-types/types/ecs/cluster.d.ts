import { ResourceBase, ResourceTag } from '../resource';
import { Value } from '../dataTypes';
export interface ClusterProperties {
    ClusterName?: Value<string>;
    Tags?: ResourceTag[];
}
export default class Cluster extends ResourceBase {
    constructor(properties?: ClusterProperties);
}
