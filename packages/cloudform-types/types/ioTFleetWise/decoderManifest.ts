/* Generated from: 
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class CanInterface {
    ProtocolName?: Value<string>
    ProtocolVersion?: Value<string>
    Name!: Value<string>

    constructor(properties: CanInterface) {
        Object.assign(this, properties)
    }
}

export class CanSignal {
    IsBigEndian!: Value<string>
    Length!: Value<string>
    Factor!: Value<string>
    IsSigned!: Value<string>
    StartBit!: Value<string>
    MessageId!: Value<string>
    Offset!: Value<string>
    Name?: Value<string>

    constructor(properties: CanSignal) {
        Object.assign(this, properties)
    }
}

export class NetworkInterfacesItems {
    Type!: Value<string>
    CanInterface?: CanInterface
    InterfaceId!: Value<string>
    ObdInterface?: ObdInterface

    constructor(properties: NetworkInterfacesItems) {
        Object.assign(this, properties)
    }
}

export class ObdInterface {
    HasTransmissionEcu?: Value<string>
    PidRequestIntervalSeconds?: Value<string>
    UseExtendedIds?: Value<string>
    RequestMessageId!: Value<string>
    ObdStandard?: Value<string>
    Name!: Value<string>
    DtcRequestIntervalSeconds?: Value<string>

    constructor(properties: ObdInterface) {
        Object.assign(this, properties)
    }
}

export class ObdSignal {
    BitRightShift?: Value<string>
    BitMaskLength?: Value<string>
    StartByte!: Value<string>
    ByteLength!: Value<string>
    PidResponseLength!: Value<string>
    Scaling!: Value<string>
    Pid!: Value<string>
    ServiceMode!: Value<string>
    Offset!: Value<string>

    constructor(properties: ObdSignal) {
        Object.assign(this, properties)
    }
}

export class SignalDecodersItems {
    Type!: Value<string>
    ObdSignal?: ObdSignal
    FullyQualifiedName!: Value<string>
    CanSignal?: CanSignal
    InterfaceId!: Value<string>

    constructor(properties: SignalDecodersItems) {
        Object.assign(this, properties)
    }
}

export interface DecoderManifestProperties {
    SignalDecoders?: List<SignalDecodersItems>
    Status?: Value<string>
    Description?: Value<string>
    NetworkInterfaces?: List<NetworkInterfacesItems>
    ModelManifestArn: Value<string>
    Tags?: List<ResourceTag>
    Name: Value<string>
}

export default class DecoderManifest extends ResourceBase<DecoderManifestProperties> {
    static CanInterface = CanInterface
    static CanSignal = CanSignal
    static NetworkInterfacesItems = NetworkInterfacesItems
    static ObdInterface = ObdInterface
    static ObdSignal = ObdSignal
    static SignalDecodersItems = SignalDecodersItems

    constructor(properties: DecoderManifestProperties) {
        super('AWS::IoTFleetWise::DecoderManifest', properties)
    }
}
