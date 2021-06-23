import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class Encryption {
    Algorithm: Value<string>;
    KeyType?: Value<string>;
    RoleArn: Value<string>;
    SecretArn: Value<string>;
    constructor(properties: Encryption);
}
export declare class VpcInterfaceAttachment {
    VpcInterfaceName?: Value<string>;
    constructor(properties: VpcInterfaceAttachment);
}
export interface FlowOutputProperties {
    FlowArn: Value<string>;
    CidrAllowList?: List<Value<string>>;
    Description?: Value<string>;
    Destination?: Value<string>;
    Encryption?: Encryption;
    MaxLatency?: Value<number>;
    Name?: Value<string>;
    Port?: Value<number>;
    Protocol: Value<string>;
    RemoteId?: Value<string>;
    SmoothingLatency?: Value<number>;
    StreamId?: Value<string>;
    VpcInterfaceAttachment?: VpcInterfaceAttachment;
}
export default class FlowOutput extends ResourceBase<FlowOutputProperties> {
    static Encryption: typeof Encryption;
    static VpcInterfaceAttachment: typeof VpcInterfaceAttachment;
    constructor(properties: FlowOutputProperties);
}
