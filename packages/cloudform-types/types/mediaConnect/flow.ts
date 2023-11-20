/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-3 (https://d2zq80gdmjim8k.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export class Encryption {
    SecretArn?: Value<string>
    KeyType?: Value<string>
    ResourceId?: Value<string>
    DeviceId?: Value<string>
    Region?: Value<string>
    ConstantInitializationVector?: Value<string>
    Algorithm?: Value<string>
    RoleArn!: Value<string>
    Url?: Value<string>

    constructor(properties: Encryption) {
        Object.assign(this, properties)
    }
}

export class FailoverConfig {
    State?: Value<string>
    SourcePriority?: SourcePriority
    FailoverMode?: Value<string>
    RecoveryWindow?: Value<number>

    constructor(properties: FailoverConfig) {
        Object.assign(this, properties)
    }
}

export class GatewayBridgeSource {
    BridgeArn!: Value<string>
    VpcInterfaceAttachment?: VpcInterfaceAttachment

    constructor(properties: GatewayBridgeSource) {
        Object.assign(this, properties)
    }
}

export class Source {
    IngestIp?: Value<string>
    StreamId?: Value<string>
    Description?: Value<string>
    SenderIpAddress?: Value<string>
    IngestPort?: Value<number>
    SenderControlPort?: Value<number>
    Decryption?: Encryption
    GatewayBridgeSource?: GatewayBridgeSource
    SourceListenerAddress?: Value<string>
    SourceListenerPort?: Value<number>
    Name?: Value<string>
    WhitelistCidr?: Value<string>
    EntitlementArn?: Value<string>
    SourceArn?: Value<string>
    MinLatency?: Value<number>
    VpcInterfaceName?: Value<string>
    MaxBitrate?: Value<number>
    Protocol?: Value<string>
    MaxLatency?: Value<number>
    SourceIngestPort?: Value<string>

    constructor(properties: Source) {
        Object.assign(this, properties)
    }
}

export class SourcePriority {
    PrimarySource!: Value<string>

    constructor(properties: SourcePriority) {
        Object.assign(this, properties)
    }
}

export class VpcInterfaceAttachment {
    VpcInterfaceName?: Value<string>

    constructor(properties: VpcInterfaceAttachment) {
        Object.assign(this, properties)
    }
}

export interface FlowProperties {
    SourceFailoverConfig?: FailoverConfig
    AvailabilityZone?: Value<string>
    Source: Source
    Name: Value<string>
}

export default class Flow extends ResourceBase<FlowProperties> {
    static Encryption = Encryption
    static FailoverConfig = FailoverConfig
    static GatewayBridgeSource = GatewayBridgeSource
    static Source = Source
    static SourcePriority = SourcePriority
    static VpcInterfaceAttachment = VpcInterfaceAttachment

    constructor(properties: FlowProperties) {
        super('AWS::MediaConnect::Flow', properties)
    }
}
