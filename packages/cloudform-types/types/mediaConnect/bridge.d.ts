import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class BridgeFlowSource {
    FlowVpcInterfaceAttachment?: VpcInterfaceAttachment;
    FlowArn: Value<string>;
    Name: Value<string>;
    constructor(properties: BridgeFlowSource);
}
export declare class BridgeNetworkOutput {
    NetworkName: Value<string>;
    Port: Value<number>;
    IpAddress: Value<string>;
    Protocol: Value<string>;
    Ttl: Value<number>;
    Name: Value<string>;
    constructor(properties: BridgeNetworkOutput);
}
export declare class BridgeNetworkSource {
    NetworkName: Value<string>;
    MulticastIp: Value<string>;
    Port: Value<number>;
    Protocol: Value<string>;
    Name: Value<string>;
    constructor(properties: BridgeNetworkSource);
}
export declare class BridgeOutput {
    NetworkOutput?: BridgeNetworkOutput;
    constructor(properties: BridgeOutput);
}
export declare class BridgeSource {
    NetworkSource?: BridgeNetworkSource;
    FlowSource?: BridgeFlowSource;
    constructor(properties: BridgeSource);
}
export declare class EgressGatewayBridge {
    MaxBitrate: Value<number>;
    constructor(properties: EgressGatewayBridge);
}
export declare class FailoverConfig {
    State?: Value<string>;
    SourcePriority?: SourcePriority;
    FailoverMode: Value<string>;
    constructor(properties: FailoverConfig);
}
export declare class IngressGatewayBridge {
    MaxOutputs: Value<number>;
    MaxBitrate: Value<number>;
    constructor(properties: IngressGatewayBridge);
}
export declare class SourcePriority {
    PrimarySource?: Value<string>;
    constructor(properties: SourcePriority);
}
export declare class VpcInterfaceAttachment {
    VpcInterfaceName?: Value<string>;
    constructor(properties: VpcInterfaceAttachment);
}
export interface BridgeProperties {
    SourceFailoverConfig?: FailoverConfig;
    IngressGatewayBridge?: IngressGatewayBridge;
    EgressGatewayBridge?: EgressGatewayBridge;
    Outputs?: List<BridgeOutput>;
    PlacementArn: Value<string>;
    Sources: List<BridgeSource>;
    Name: Value<string>;
}
export default class Bridge extends ResourceBase<BridgeProperties> {
    static BridgeFlowSource: typeof BridgeFlowSource;
    static BridgeNetworkOutput: typeof BridgeNetworkOutput;
    static BridgeNetworkSource: typeof BridgeNetworkSource;
    static BridgeOutput: typeof BridgeOutput;
    static BridgeSource: typeof BridgeSource;
    static EgressGatewayBridge: typeof EgressGatewayBridge;
    static FailoverConfig: typeof FailoverConfig;
    static IngressGatewayBridge: typeof IngressGatewayBridge;
    static SourcePriority: typeof SourcePriority;
    static VpcInterfaceAttachment: typeof VpcInterfaceAttachment;
    constructor(properties: BridgeProperties);
}
