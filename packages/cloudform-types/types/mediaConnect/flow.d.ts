import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export declare class Encryption {
    Algorithm: Value<string>;
    ConstantInitializationVector?: Value<string>;
    DeviceId?: Value<string>;
    KeyType?: Value<string>;
    Region?: Value<string>;
    ResourceId?: Value<string>;
    RoleArn: Value<string>;
    SecretArn?: Value<string>;
    Url?: Value<string>;
    constructor(properties: Encryption);
}
export declare class Source {
    SourceArn?: Value<string>;
    Decryption?: Encryption;
    Description?: Value<string>;
    EntitlementArn?: Value<string>;
    IngestIp?: Value<string>;
    IngestPort?: Value<number>;
    MaxBitrate?: Value<number>;
    MaxLatency?: Value<number>;
    Name?: Value<string>;
    Protocol?: Value<string>;
    StreamId?: Value<string>;
    VpcInterfaceName?: Value<string>;
    WhitelistCidr?: Value<string>;
    constructor(properties: Source);
}
export declare class FailoverConfig {
    State?: Value<string>;
    RecoveryWindow?: Value<number>;
    constructor(properties: FailoverConfig);
}
export interface FlowProperties {
    Name: Value<string>;
    AvailabilityZone?: Value<string>;
    Source: Source;
    SourceFailoverConfig?: FailoverConfig;
}
export default class Flow extends ResourceBase<FlowProperties> {
    static Encryption: typeof Encryption;
    static Source: typeof Source;
    static FailoverConfig: typeof FailoverConfig;
    constructor(properties: FlowProperties);
}
