import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class ClusterEndpoint {
    Endpoint?: Value<string>;
    Region?: Value<string>;
    constructor(properties: ClusterEndpoint);
}
export interface ClusterProperties {
    Tags?: List<ResourceTag>;
    Name: Value<string>;
}
export default class Cluster extends ResourceBase<ClusterProperties> {
    static ClusterEndpoint: typeof ClusterEndpoint;
    constructor(properties: ClusterProperties);
}
