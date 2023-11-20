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
export declare class FailoverConfig {
    State?: Value<string>;
    SourcePriority?: SourcePriority;
    FailoverMode?: Value<string>;
    RecoveryWindow?: Value<number>;
    constructor(properties: FailoverConfig);
}
export declare class GatewayBridgeSource {
    BridgeArn: Value<string>;
    VpcInterfaceAttachment?: VpcInterfaceAttachment;
    constructor(properties: GatewayBridgeSource);
}
export declare class Source {
    IngestIp?: Value<string>;
    StreamId?: Value<string>;
    Description?: Value<string>;
    SenderIpAddress?: Value<string>;
    IngestPort?: Value<number>;
    SenderControlPort?: Value<number>;
    Decryption?: Encryption;
    GatewayBridgeSource?: GatewayBridgeSource;
    SourceListenerAddress?: Value<string>;
    SourceListenerPort?: Value<number>;
    Name?: Value<string>;
    WhitelistCidr?: Value<string>;
    EntitlementArn?: Value<string>;
    SourceArn?: Value<string>;
    MinLatency?: Value<number>;
    VpcInterfaceName?: Value<string>;
    MaxBitrate?: Value<number>;
    Protocol?: Value<string>;
    MaxLatency?: Value<number>;
    SourceIngestPort?: Value<string>;
    constructor(properties: Source);
}
export declare class SourcePriority {
    PrimarySource: Value<string>;
    constructor(properties: SourcePriority);
}
export declare class VpcInterfaceAttachment {
    VpcInterfaceName?: Value<string>;
    constructor(properties: VpcInterfaceAttachment);
}
export interface FlowProperties {
    SourceFailoverConfig?: FailoverConfig;
    AvailabilityZone?: Value<string>;
    Source: Source;
    Name: Value<string>;
}
export default class Flow extends ResourceBase<FlowProperties> {
    static Encryption: typeof Encryption;
    static FailoverConfig: typeof FailoverConfig;
    static GatewayBridgeSource: typeof GatewayBridgeSource;
    static Source: typeof Source;
    static SourcePriority: typeof SourcePriority;
    static VpcInterfaceAttachment: typeof VpcInterfaceAttachment;
    constructor(properties: FlowProperties);
}
