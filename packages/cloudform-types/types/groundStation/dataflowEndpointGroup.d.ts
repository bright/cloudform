import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class DataflowEndpoint {
    Name?: Value<string>;
    Address?: SocketAddress;
    Mtu?: Value<number>;
    constructor(properties: DataflowEndpoint);
}
export declare class SecurityDetails {
    SubnetIds?: List<Value<string>>;
    SecurityGroupIds?: List<Value<string>>;
    RoleArn?: Value<string>;
    constructor(properties: SecurityDetails);
}
export declare class SocketAddress {
    Name?: Value<string>;
    Port?: Value<number>;
    constructor(properties: SocketAddress);
}
export declare class EndpointDetails {
    SecurityDetails?: SecurityDetails;
    Endpoint?: DataflowEndpoint;
    constructor(properties: EndpointDetails);
}
export interface DataflowEndpointGroupProperties {
    EndpointDetails: List<EndpointDetails>;
    Tags?: List<ResourceTag>;
}
export default class DataflowEndpointGroup extends ResourceBase<DataflowEndpointGroupProperties> {
    static DataflowEndpoint: typeof DataflowEndpoint;
    static SecurityDetails: typeof SecurityDetails;
    static SocketAddress: typeof SocketAddress;
    static EndpointDetails: typeof EndpointDetails;
    constructor(properties: DataflowEndpointGroupProperties);
}
