import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class ContainerInfo {
    EksInfo: EksInfo;
    constructor(properties: ContainerInfo);
}
export declare class ContainerProvider {
    Type: Value<string>;
    Id: Value<string>;
    Info: ContainerInfo;
    constructor(properties: ContainerProvider);
}
export declare class EksInfo {
    Namespace: Value<string>;
    constructor(properties: EksInfo);
}
export interface VirtualClusterProperties {
    ContainerProvider: ContainerProvider;
    Tags?: List<ResourceTag>;
    Name: Value<string>;
}
export default class VirtualCluster extends ResourceBase<VirtualClusterProperties> {
    static ContainerInfo: typeof ContainerInfo;
    static ContainerProvider: typeof ContainerProvider;
    static EksInfo: typeof EksInfo;
    constructor(properties: VirtualClusterProperties);
}
