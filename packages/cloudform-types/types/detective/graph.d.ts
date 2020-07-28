import { ResourceBase } from '../resource';
export interface GraphProperties {
}
export default class Graph extends ResourceBase<GraphProperties> {
    constructor(properties?: GraphProperties);
}
