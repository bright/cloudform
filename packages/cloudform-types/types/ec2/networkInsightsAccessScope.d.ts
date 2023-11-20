import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class AccessScopePathRequest {
    Destination?: PathStatementRequest;
    ThroughResources?: List<ThroughResourcesStatementRequest>;
    Source?: PathStatementRequest;
    constructor(properties: AccessScopePathRequest);
}
export declare class PacketHeaderStatementRequest {
    Protocols?: List<Value<string>>;
    DestinationPorts?: List<Value<string>>;
    DestinationAddresses?: List<Value<string>>;
    DestinationPrefixLists?: List<Value<string>>;
    SourceAddresses?: List<Value<string>>;
    SourcePorts?: List<Value<string>>;
    SourcePrefixLists?: List<Value<string>>;
    constructor(properties: PacketHeaderStatementRequest);
}
export declare class PathStatementRequest {
    ResourceStatement?: ResourceStatementRequest;
    PacketHeaderStatement?: PacketHeaderStatementRequest;
    constructor(properties: PathStatementRequest);
}
export declare class ResourceStatementRequest {
    ResourceTypes?: List<Value<string>>;
    Resources?: List<Value<string>>;
    constructor(properties: ResourceStatementRequest);
}
export declare class ThroughResourcesStatementRequest {
    ResourceStatement?: ResourceStatementRequest;
    constructor(properties: ThroughResourcesStatementRequest);
}
export interface NetworkInsightsAccessScopeProperties {
    ExcludePaths?: List<AccessScopePathRequest>;
    MatchPaths?: List<AccessScopePathRequest>;
    Tags?: List<ResourceTag>;
}
export default class NetworkInsightsAccessScope extends ResourceBase<NetworkInsightsAccessScopeProperties> {
    static AccessScopePathRequest: typeof AccessScopePathRequest;
    static PacketHeaderStatementRequest: typeof PacketHeaderStatementRequest;
    static PathStatementRequest: typeof PathStatementRequest;
    static ResourceStatementRequest: typeof ResourceStatementRequest;
    static ThroughResourcesStatementRequest: typeof ThroughResourcesStatementRequest;
    constructor(properties?: NetworkInsightsAccessScopeProperties);
}
