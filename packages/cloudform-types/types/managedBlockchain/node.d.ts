import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export declare class NodeConfiguration {
    AvailabilityZone: Value<string>;
    InstanceType: Value<string>;
    constructor(properties: NodeConfiguration);
}
export interface NodeProperties {
    MemberId: Value<string>;
    NetworkId: Value<string>;
    NodeConfiguration: NodeConfiguration;
}
export default class Node extends ResourceBase<NodeProperties> {
    static NodeConfiguration: typeof NodeConfiguration;
    constructor(properties: NodeProperties);
}
