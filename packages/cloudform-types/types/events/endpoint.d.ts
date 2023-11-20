import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class EndpointEventBus {
    EventBusArn: Value<string>;
    constructor(properties: EndpointEventBus);
}
export declare class FailoverConfig {
    Secondary: Secondary;
    Primary: Primary;
    constructor(properties: FailoverConfig);
}
export declare class Primary {
    HealthCheck: Value<string>;
    constructor(properties: Primary);
}
export declare class ReplicationConfig {
    State: Value<string>;
    constructor(properties: ReplicationConfig);
}
export declare class RoutingConfig {
    FailoverConfig: FailoverConfig;
    constructor(properties: RoutingConfig);
}
export declare class Secondary {
    Route: Value<string>;
    constructor(properties: Secondary);
}
export interface EndpointProperties {
    EventBuses: List<EndpointEventBus>;
    Description?: Value<string>;
    ReplicationConfig?: ReplicationConfig;
    RoutingConfig: RoutingConfig;
    RoleArn?: Value<string>;
    Name?: Value<string>;
}
export default class Endpoint extends ResourceBase<EndpointProperties> {
    static EndpointEventBus: typeof EndpointEventBus;
    static FailoverConfig: typeof FailoverConfig;
    static Primary: typeof Primary;
    static ReplicationConfig: typeof ReplicationConfig;
    static RoutingConfig: typeof RoutingConfig;
    static Secondary: typeof Secondary;
    constructor(properties: EndpointProperties);
}
