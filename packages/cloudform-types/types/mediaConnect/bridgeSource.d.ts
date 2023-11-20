import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export declare class BridgeFlowSource {
    FlowVpcInterfaceAttachment?: VpcInterfaceAttachment;
    FlowArn: Value<string>;
    constructor(properties: BridgeFlowSource);
}
export declare class BridgeNetworkSource {
    NetworkName: Value<string>;
    MulticastIp: Value<string>;
    Port: Value<number>;
    Protocol: Value<string>;
    constructor(properties: BridgeNetworkSource);
}
export declare class VpcInterfaceAttachment {
    VpcInterfaceName?: Value<string>;
    constructor(properties: VpcInterfaceAttachment);
}
export interface BridgeSourceProperties {
    NetworkSource?: BridgeNetworkSource;
    BridgeArn: Value<string>;
    FlowSource?: BridgeFlowSource;
    Name: Value<string>;
}
export default class BridgeSource extends ResourceBase<BridgeSourceProperties> {
    static BridgeFlowSource: typeof BridgeFlowSource;
    static BridgeNetworkSource: typeof BridgeNetworkSource;
    static VpcInterfaceAttachment: typeof VpcInterfaceAttachment;
    constructor(properties: BridgeSourceProperties);
}
