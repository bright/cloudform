import { ResourceBase, ResourceTag } from '../resource';
import { List } from '../dataTypes';
export interface GraphProperties {
    Tags?: List<ResourceTag>;
}
export default class Graph extends ResourceBase<GraphProperties> {
    constructor(properties?: GraphProperties);
}
