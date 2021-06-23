import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class ContainerInfo {
    EksInfo: EksInfo;
    constructor(properties: ContainerInfo);
}
export declare class EksInfo {
    Namespace: Value<string>;
    constructor(properties: EksInfo);
}
export declare class ContainerProvider {
    Type: Value<string>;
    Id: Value<string>;
    Info: ContainerInfo;
    constructor(properties: ContainerProvider);
}
export interface VirtualClusterProperties {
    ContainerProvider: ContainerProvider;
    Name: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class VirtualCluster extends ResourceBase<VirtualClusterProperties> {
    static ContainerInfo: typeof ContainerInfo;
    static EksInfo: typeof EksInfo;
    static ContainerProvider: typeof ContainerProvider;
    constructor(properties: VirtualClusterProperties);
}
