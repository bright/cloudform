import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class CanInterface {
    ProtocolName?: Value<string>;
    ProtocolVersion?: Value<string>;
    Name: Value<string>;
    constructor(properties: CanInterface);
}
export declare class CanSignal {
    IsBigEndian: Value<string>;
    Length: Value<string>;
    Factor: Value<string>;
    IsSigned: Value<string>;
    StartBit: Value<string>;
    MessageId: Value<string>;
    Offset: Value<string>;
    Name?: Value<string>;
    constructor(properties: CanSignal);
}
export declare class NetworkInterfacesItems {
    Type: Value<string>;
    CanInterface?: CanInterface;
    InterfaceId: Value<string>;
    ObdInterface?: ObdInterface;
    constructor(properties: NetworkInterfacesItems);
}
export declare class ObdInterface {
    HasTransmissionEcu?: Value<string>;
    PidRequestIntervalSeconds?: Value<string>;
    UseExtendedIds?: Value<string>;
    RequestMessageId: Value<string>;
    ObdStandard?: Value<string>;
    Name: Value<string>;
    DtcRequestIntervalSeconds?: Value<string>;
    constructor(properties: ObdInterface);
}
export declare class ObdSignal {
    BitRightShift?: Value<string>;
    BitMaskLength?: Value<string>;
    StartByte: Value<string>;
    ByteLength: Value<string>;
    PidResponseLength: Value<string>;
    Scaling: Value<string>;
    Pid: Value<string>;
    ServiceMode: Value<string>;
    Offset: Value<string>;
    constructor(properties: ObdSignal);
}
export declare class SignalDecodersItems {
    Type: Value<string>;
    ObdSignal?: ObdSignal;
    FullyQualifiedName: Value<string>;
    CanSignal?: CanSignal;
    InterfaceId: Value<string>;
    constructor(properties: SignalDecodersItems);
}
export interface DecoderManifestProperties {
    SignalDecoders?: List<SignalDecodersItems>;
    Status?: Value<string>;
    Description?: Value<string>;
    NetworkInterfaces?: List<NetworkInterfacesItems>;
    ModelManifestArn: Value<string>;
    Tags?: List<ResourceTag>;
    Name: Value<string>;
}
export default class DecoderManifest extends ResourceBase<DecoderManifestProperties> {
    static CanInterface: typeof CanInterface;
    static CanSignal: typeof CanSignal;
    static NetworkInterfacesItems: typeof NetworkInterfacesItems;
    static ObdInterface: typeof ObdInterface;
    static ObdSignal: typeof ObdSignal;
    static SignalDecodersItems: typeof SignalDecodersItems;
    constructor(properties: DecoderManifestProperties);
}
