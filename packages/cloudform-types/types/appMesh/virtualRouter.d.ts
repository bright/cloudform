import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class PortMapping {
    Port: Value<number>;
    Protocol: Value<string>;
    constructor(properties: PortMapping);
}
export declare class VirtualRouterListener {
    PortMapping: PortMapping;
    constructor(properties: VirtualRouterListener);
}
export declare class VirtualRouterSpec {
    Listeners: List<VirtualRouterListener>;
    constructor(properties: VirtualRouterSpec);
}
export interface VirtualRouterProperties {
    MeshName: Value<string>;
    VirtualRouterName: Value<string>;
    Spec: VirtualRouterSpec;
    Tags?: List<ResourceTag>;
}
export default class VirtualRouter extends ResourceBase<VirtualRouterProperties> {
    static PortMapping: typeof PortMapping;
    static VirtualRouterListener: typeof VirtualRouterListener;
    static VirtualRouterSpec: typeof VirtualRouterSpec;
    constructor(properties: VirtualRouterProperties);
}
