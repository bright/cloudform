import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class FilterPortRange {
    FromPort?: Value<number>;
    ToPort?: Value<number>;
    constructor(properties: FilterPortRange);
}
export declare class PathFilter {
    SourceAddress?: Value<string>;
    DestinationPortRange?: FilterPortRange;
    SourcePortRange?: FilterPortRange;
    DestinationAddress?: Value<string>;
    constructor(properties: PathFilter);
}
export interface NetworkInsightsPathProperties {
    Destination?: Value<string>;
    DestinationIp?: Value<string>;
    SourceIp?: Value<string>;
    FilterAtDestination?: PathFilter;
    FilterAtSource?: PathFilter;
    Protocol: Value<string>;
    DestinationPort?: Value<number>;
    Source: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class NetworkInsightsPath extends ResourceBase<NetworkInsightsPathProperties> {
    static FilterPortRange: typeof FilterPortRange;
    static PathFilter: typeof PathFilter;
    constructor(properties: NetworkInsightsPathProperties);
}
