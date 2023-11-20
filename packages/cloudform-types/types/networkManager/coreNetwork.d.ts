import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class CoreNetworkEdge {
    InsideCidrBlocks?: List<Value<string>>;
    Asn?: Value<number>;
    EdgeLocation?: Value<string>;
    constructor(properties: CoreNetworkEdge);
}
export declare class CoreNetworkSegment {
    EdgeLocations?: List<Value<string>>;
    SharedSegments?: List<Value<string>>;
    Name?: Value<string>;
    constructor(properties: CoreNetworkSegment);
}
export interface CoreNetworkProperties {
    GlobalNetworkId: Value<string>;
    Description?: Value<string>;
    PolicyDocument?: {
        [key: string]: any;
    };
    Tags?: List<ResourceTag>;
}
export default class CoreNetwork extends ResourceBase<CoreNetworkProperties> {
    static CoreNetworkEdge: typeof CoreNetworkEdge;
    static CoreNetworkSegment: typeof CoreNetworkSegment;
    constructor(properties: CoreNetworkProperties);
}
