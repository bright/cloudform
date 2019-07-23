import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class VirtualServiceSpec {
    Provider?: VirtualServiceProvider;
    constructor(properties: VirtualServiceSpec);
}
export declare class VirtualRouterServiceProvider {
    VirtualRouterName: Value<string>;
    constructor(properties: VirtualRouterServiceProvider);
}
export declare class VirtualNodeServiceProvider {
    VirtualNodeName: Value<string>;
    constructor(properties: VirtualNodeServiceProvider);
}
export declare class VirtualServiceProvider {
    VirtualNode?: VirtualNodeServiceProvider;
    VirtualRouter?: VirtualRouterServiceProvider;
    constructor(properties: VirtualServiceProvider);
}
export interface VirtualServiceProperties {
    MeshName: Value<string>;
    VirtualServiceName: Value<string>;
    Spec: VirtualServiceSpec;
    Tags?: List<ResourceTag>;
}
export default class VirtualService extends ResourceBase<VirtualServiceProperties> {
    static VirtualServiceSpec: typeof VirtualServiceSpec;
    static VirtualRouterServiceProvider: typeof VirtualRouterServiceProvider;
    static VirtualNodeServiceProvider: typeof VirtualNodeServiceProvider;
    static VirtualServiceProvider: typeof VirtualServiceProvider;
    constructor(properties: VirtualServiceProperties);
}
