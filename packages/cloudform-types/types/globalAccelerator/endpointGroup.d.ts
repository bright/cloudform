import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class EndpointConfiguration {
    EndpointId: Value<string>;
    Weight?: Value<number>;
    ClientIPPreservationEnabled?: Value<boolean>;
    constructor(properties: EndpointConfiguration);
}
export declare class PortOverride {
    ListenerPort: Value<number>;
    EndpointPort: Value<number>;
    constructor(properties: PortOverride);
}
export interface EndpointGroupProperties {
    ListenerArn: Value<string>;
    PortOverrides?: List<PortOverride>;
    HealthCheckIntervalSeconds?: Value<number>;
    EndpointGroupRegion: Value<string>;
    HealthCheckPath?: Value<string>;
    TrafficDialPercentage?: Value<number>;
    HealthCheckProtocol?: Value<string>;
    ThresholdCount?: Value<number>;
    HealthCheckPort?: Value<number>;
    EndpointConfigurations?: List<EndpointConfiguration>;
}
export default class EndpointGroup extends ResourceBase<EndpointGroupProperties> {
    static EndpointConfiguration: typeof EndpointConfiguration;
    static PortOverride: typeof PortOverride;
    constructor(properties: EndpointGroupProperties);
}
