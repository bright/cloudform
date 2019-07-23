import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class MeshSpec {
    EgressFilter?: EgressFilter;
    constructor(properties: MeshSpec);
}
export declare class EgressFilter {
    Type: Value<string>;
    constructor(properties: EgressFilter);
}
export interface MeshProperties {
    MeshName: Value<string>;
    Spec?: MeshSpec;
    Tags?: List<ResourceTag>;
}
export default class Mesh extends ResourceBase<MeshProperties> {
    static MeshSpec: typeof MeshSpec;
    static EgressFilter: typeof EgressFilter;
    constructor(properties: MeshProperties);
}
