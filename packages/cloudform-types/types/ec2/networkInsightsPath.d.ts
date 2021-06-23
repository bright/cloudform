import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface NetworkInsightsPathProperties {
    SourceIp?: Value<string>;
    DestinationIp?: Value<string>;
    Source: Value<string>;
    Destination: Value<string>;
    Protocol: Value<string>;
    DestinationPort?: Value<number>;
    Tags?: List<ResourceTag>;
}
export default class NetworkInsightsPath extends ResourceBase<NetworkInsightsPathProperties> {
    constructor(properties: NetworkInsightsPathProperties);
}
