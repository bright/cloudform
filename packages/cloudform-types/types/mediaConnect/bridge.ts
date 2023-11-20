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

export class BridgeFlowSource {
    FlowVpcInterfaceAttachment?: VpcInterfaceAttachment
    FlowArn!: Value<string>
    Name!: Value<string>

    constructor(properties: BridgeFlowSource) {
        Object.assign(this, properties)
    }
}

export class BridgeNetworkOutput {
    NetworkName!: Value<string>
    Port!: Value<number>
    IpAddress!: Value<string>
    Protocol!: Value<string>
    Ttl!: Value<number>
    Name!: Value<string>

    constructor(properties: BridgeNetworkOutput) {
        Object.assign(this, properties)
    }
}

export class BridgeNetworkSource {
    NetworkName!: Value<string>
    MulticastIp!: Value<string>
    Port!: Value<number>
    Protocol!: Value<string>
    Name!: Value<string>

    constructor(properties: BridgeNetworkSource) {
        Object.assign(this, properties)
    }
}

export class BridgeOutput {
    NetworkOutput?: BridgeNetworkOutput

    constructor(properties: BridgeOutput) {
        Object.assign(this, properties)
    }
}

export class BridgeSource {
    NetworkSource?: BridgeNetworkSource
    FlowSource?: BridgeFlowSource

    constructor(properties: BridgeSource) {
        Object.assign(this, properties)
    }
}

export class EgressGatewayBridge {
    MaxBitrate!: Value<number>

    constructor(properties: EgressGatewayBridge) {
        Object.assign(this, properties)
    }
}

export class FailoverConfig {
    State?: Value<string>
    SourcePriority?: SourcePriority
    FailoverMode!: Value<string>

    constructor(properties: FailoverConfig) {
        Object.assign(this, properties)
    }
}

export class IngressGatewayBridge {
    MaxOutputs!: Value<number>
    MaxBitrate!: Value<number>

    constructor(properties: IngressGatewayBridge) {
        Object.assign(this, properties)
    }
}

export class SourcePriority {
    PrimarySource?: Value<string>

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

export interface BridgeProperties {
    SourceFailoverConfig?: FailoverConfig
    IngressGatewayBridge?: IngressGatewayBridge
    EgressGatewayBridge?: EgressGatewayBridge
    Outputs?: List<BridgeOutput>
    PlacementArn: Value<string>
    Sources: List<BridgeSource>
    Name: Value<string>
}

export default class Bridge extends ResourceBase<BridgeProperties> {
    static BridgeFlowSource = BridgeFlowSource
    static BridgeNetworkOutput = BridgeNetworkOutput
    static BridgeNetworkSource = BridgeNetworkSource
    static BridgeOutput = BridgeOutput
    static BridgeSource = BridgeSource
    static EgressGatewayBridge = EgressGatewayBridge
    static FailoverConfig = FailoverConfig
    static IngressGatewayBridge = IngressGatewayBridge
    static SourcePriority = SourcePriority
    static VpcInterfaceAttachment = VpcInterfaceAttachment

    constructor(properties: BridgeProperties) {
        super('AWS::MediaConnect::Bridge', properties)
    }
}
