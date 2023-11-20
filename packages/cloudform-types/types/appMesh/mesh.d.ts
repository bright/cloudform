import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class EgressFilter {
    Type: Value<string>;
    constructor(properties: EgressFilter);
}
export declare class MeshServiceDiscovery {
    IpPreference?: Value<string>;
    constructor(properties: MeshServiceDiscovery);
}
export declare class MeshSpec {
    EgressFilter?: EgressFilter;
    ServiceDiscovery?: MeshServiceDiscovery;
    constructor(properties: MeshSpec);
}
export interface MeshProperties {
    MeshName?: Value<string>;
    Spec?: MeshSpec;
    Tags?: List<ResourceTag>;
}
export default class Mesh extends ResourceBase<MeshProperties> {
    static EgressFilter: typeof EgressFilter;
    static MeshServiceDiscovery: typeof MeshServiceDiscovery;
    static MeshSpec: typeof MeshSpec;
    constructor(properties?: MeshProperties);
}
