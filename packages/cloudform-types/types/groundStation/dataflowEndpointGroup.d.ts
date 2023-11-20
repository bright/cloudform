import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class AwsGroundStationAgentEndpoint {
    AgentStatus?: Value<string>;
    IngressAddress?: RangedConnectionDetails;
    AuditResults?: Value<string>;
    Name?: Value<string>;
    EgressAddress?: ConnectionDetails;
    constructor(properties: AwsGroundStationAgentEndpoint);
}
export declare class ConnectionDetails {
    SocketAddress?: SocketAddress;
    Mtu?: Value<number>;
    constructor(properties: ConnectionDetails);
}
export declare class DataflowEndpoint {
    Address?: SocketAddress;
    Name?: Value<string>;
    Mtu?: Value<number>;
    constructor(properties: DataflowEndpoint);
}
export declare class EndpointDetails {
    Endpoint?: DataflowEndpoint;
    AwsGroundStationAgentEndpoint?: AwsGroundStationAgentEndpoint;
    SecurityDetails?: SecurityDetails;
    constructor(properties: EndpointDetails);
}
export declare class IntegerRange {
    Minimum?: Value<number>;
    Maximum?: Value<number>;
    constructor(properties: IntegerRange);
}
export declare class RangedConnectionDetails {
    SocketAddress?: RangedSocketAddress;
    Mtu?: Value<number>;
    constructor(properties: RangedConnectionDetails);
}
export declare class RangedSocketAddress {
    PortRange?: IntegerRange;
    Name?: Value<string>;
    constructor(properties: RangedSocketAddress);
}
export declare class SecurityDetails {
    SubnetIds?: List<Value<string>>;
    SecurityGroupIds?: List<Value<string>>;
    RoleArn?: Value<string>;
    constructor(properties: SecurityDetails);
}
export declare class SocketAddress {
    Port?: Value<number>;
    Name?: Value<string>;
    constructor(properties: SocketAddress);
}
export interface DataflowEndpointGroupProperties {
    ContactPostPassDurationSeconds?: Value<number>;
    EndpointDetails: List<EndpointDetails>;
    Tags?: List<ResourceTag>;
    ContactPrePassDurationSeconds?: Value<number>;
}
export default class DataflowEndpointGroup extends ResourceBase<DataflowEndpointGroupProperties> {
    static AwsGroundStationAgentEndpoint: typeof AwsGroundStationAgentEndpoint;
    static ConnectionDetails: typeof ConnectionDetails;
    static DataflowEndpoint: typeof DataflowEndpoint;
    static EndpointDetails: typeof EndpointDetails;
    static IntegerRange: typeof IntegerRange;
    static RangedConnectionDetails: typeof RangedConnectionDetails;
    static RangedSocketAddress: typeof RangedSocketAddress;
    static SecurityDetails: typeof SecurityDetails;
    static SocketAddress: typeof SocketAddress;
    constructor(properties: DataflowEndpointGroupProperties);
}
