import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class Encryption {
    SecretArn: Value<string>;
    KeyType?: Value<string>;
    Algorithm?: Value<string>;
    RoleArn: Value<string>;
    constructor(properties: Encryption);
}
export declare class VpcInterfaceAttachment {
    VpcInterfaceName?: Value<string>;
    constructor(properties: VpcInterfaceAttachment);
}
export interface FlowOutputProperties {
    Destination?: Value<string>;
    SmoothingLatency?: Value<number>;
    StreamId?: Value<string>;
    Description?: Value<string>;
    Port?: Value<number>;
    RemoteId?: Value<string>;
    Encryption?: Encryption;
    Name?: Value<string>;
    VpcInterfaceAttachment?: VpcInterfaceAttachment;
    MinLatency?: Value<number>;
    Protocol: Value<string>;
    FlowArn: Value<string>;
    MaxLatency?: Value<number>;
    CidrAllowList?: List<Value<string>>;
}
export default class FlowOutput extends ResourceBase<FlowOutputProperties> {
    static Encryption: typeof Encryption;
    static VpcInterfaceAttachment: typeof VpcInterfaceAttachment;
    constructor(properties: FlowOutputProperties);
}
