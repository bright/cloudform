import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface GraphProperties {
    AutoEnableMembers?: Value<boolean>;
    Tags?: List<ResourceTag>;
}
export default class Graph extends ResourceBase<GraphProperties> {
    constructor(properties?: GraphProperties);
}
