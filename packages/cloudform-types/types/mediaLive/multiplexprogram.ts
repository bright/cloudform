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
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export class MultiplexProgramPacketIdentifiersMap {
    EtvPlatformPid?: Value<number>
    DvbTeletextPid?: Value<number>
    KlvDataPids?: List<Value<number>>
    PcrPid?: Value<number>
    VideoPid?: Value<number>
    PmtPid?: Value<number>
    Scte27Pids?: List<Value<number>>
    DvbSubPids?: List<Value<number>>
    Scte35Pid?: Value<number>
    EtvSignalPid?: Value<number>
    PrivateMetadataPid?: Value<number>
    TimedMetadataPid?: Value<number>
    AudioPids?: List<Value<number>>

    constructor(properties: MultiplexProgramPacketIdentifiersMap) {
        Object.assign(this, properties)
    }
}

export class MultiplexProgramPipelineDetail {
    ActiveChannelPipeline?: Value<string>
    PipelineId?: Value<string>

    constructor(properties: MultiplexProgramPipelineDetail) {
        Object.assign(this, properties)
    }
}

export class MultiplexProgramServiceDescriptor {
    ProviderName!: Value<string>
    ServiceName!: Value<string>

    constructor(properties: MultiplexProgramServiceDescriptor) {
        Object.assign(this, properties)
    }
}

export class MultiplexProgramSettings {
    PreferredChannelPipeline?: Value<string>
    ServiceDescriptor?: MultiplexProgramServiceDescriptor
    VideoSettings?: MultiplexVideoSettings
    ProgramNumber!: Value<number>

    constructor(properties: MultiplexProgramSettings) {
        Object.assign(this, properties)
    }
}

export class MultiplexStatmuxVideoSettings {
    Priority?: Value<number>
    MaximumBitrate?: Value<number>
    MinimumBitrate?: Value<number>

    constructor(properties: MultiplexStatmuxVideoSettings) {
        Object.assign(this, properties)
    }
}

export class MultiplexVideoSettings {
    StatmuxSettings?: MultiplexStatmuxVideoSettings
    ConstantBitrate?: Value<number>

    constructor(properties: MultiplexVideoSettings) {
        Object.assign(this, properties)
    }
}

export interface MultiplexprogramProperties {
    MultiplexId?: Value<string>
    PreferredChannelPipeline?: Value<string>
    PacketIdentifiersMap?: MultiplexProgramPacketIdentifiersMap
    ChannelId?: Value<string>
    PipelineDetails?: List<MultiplexProgramPipelineDetail>
    MultiplexProgramSettings?: MultiplexProgramSettings
    ProgramName?: Value<string>
}

export default class Multiplexprogram extends ResourceBase<MultiplexprogramProperties> {
    static MultiplexProgramPacketIdentifiersMap = MultiplexProgramPacketIdentifiersMap
    static MultiplexProgramPipelineDetail = MultiplexProgramPipelineDetail
    static MultiplexProgramServiceDescriptor = MultiplexProgramServiceDescriptor
    static MultiplexProgramSettings = MultiplexProgramSettings
    static MultiplexStatmuxVideoSettings = MultiplexStatmuxVideoSettings
    static MultiplexVideoSettings = MultiplexVideoSettings

    constructor(properties?: MultiplexprogramProperties) {
        super('AWS::MediaLive::Multiplexprogram', properties || {})
    }
}
