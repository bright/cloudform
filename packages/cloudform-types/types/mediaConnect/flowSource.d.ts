import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export declare class Encryption {
    SecretArn?: Value<string>;
    KeyType?: Value<string>;
    ResourceId?: Value<string>;
    DeviceId?: Value<string>;
    Region?: Value<string>;
    ConstantInitializationVector?: Value<string>;
    Algorithm?: Value<string>;
    RoleArn: Value<string>;
    Url?: Value<string>;
    constructor(properties: Encryption);
}
export declare class GatewayBridgeSource {
    BridgeArn: Value<string>;
    VpcInterfaceAttachment?: VpcInterfaceAttachment;
    constructor(properties: GatewayBridgeSource);
}
export declare class VpcInterfaceAttachment {
    VpcInterfaceName?: Value<string>;
    constructor(properties: VpcInterfaceAttachment);
}
export interface FlowSourceProperties {
    StreamId?: Value<string>;
    Description: Value<string>;
    SenderIpAddress?: Value<string>;
    IngestPort?: Value<number>;
    SenderControlPort?: Value<number>;
    Decryption?: Encryption;
    GatewayBridgeSource?: GatewayBridgeSource;
    SourceListenerAddress?: Value<string>;
    SourceListenerPort?: Value<number>;
    Name: Value<string>;
    WhitelistCidr?: Value<string>;
    EntitlementArn?: Value<string>;
    MinLatency?: Value<number>;
    VpcInterfaceName?: Value<string>;
    MaxBitrate?: Value<number>;
    Protocol?: Value<string>;
    FlowArn?: Value<string>;
    MaxLatency?: Value<number>;
}
export default class FlowSource extends ResourceBase<FlowSourceProperties> {
    static Encryption: typeof Encryption;
    static GatewayBridgeSource: typeof GatewayBridgeSource;
    static VpcInterfaceAttachment: typeof VpcInterfaceAttachment;
    constructor(properties: FlowSourceProperties);
}
