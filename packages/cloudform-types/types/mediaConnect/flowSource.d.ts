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
export interface FlowSourceProperties {
    FlowArn?: Value<string>;
    Decryption?: Encryption;
    Description: Value<string>;
    EntitlementArn?: Value<string>;
    IngestPort?: Value<number>;
    MaxBitrate?: Value<number>;
    MaxLatency?: Value<number>;
    Name: Value<string>;
    Protocol?: Value<string>;
    StreamId?: Value<string>;
    VpcInterfaceName?: Value<string>;
    WhitelistCidr?: Value<string>;
}
export default class FlowSource extends ResourceBase<FlowSourceProperties> {
    static Encryption: typeof Encryption;
    constructor(properties: FlowSourceProperties);
}
