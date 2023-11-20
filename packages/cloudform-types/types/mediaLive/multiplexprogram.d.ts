import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class MultiplexProgramPacketIdentifiersMap {
    EtvPlatformPid?: Value<number>;
    DvbTeletextPid?: Value<number>;
    KlvDataPids?: List<Value<number>>;
    PcrPid?: Value<number>;
    VideoPid?: Value<number>;
    PmtPid?: Value<number>;
    Scte27Pids?: List<Value<number>>;
    DvbSubPids?: List<Value<number>>;
    Scte35Pid?: Value<number>;
    EtvSignalPid?: Value<number>;
    PrivateMetadataPid?: Value<number>;
    TimedMetadataPid?: Value<number>;
    AudioPids?: List<Value<number>>;
    constructor(properties: MultiplexProgramPacketIdentifiersMap);
}
export declare class MultiplexProgramPipelineDetail {
    ActiveChannelPipeline?: Value<string>;
    PipelineId?: Value<string>;
    constructor(properties: MultiplexProgramPipelineDetail);
}
export declare class MultiplexProgramServiceDescriptor {
    ProviderName: Value<string>;
    ServiceName: Value<string>;
    constructor(properties: MultiplexProgramServiceDescriptor);
}
export declare class MultiplexProgramSettings {
    PreferredChannelPipeline?: Value<string>;
    ServiceDescriptor?: MultiplexProgramServiceDescriptor;
    VideoSettings?: MultiplexVideoSettings;
    ProgramNumber: Value<number>;
    constructor(properties: MultiplexProgramSettings);
}
export declare class MultiplexStatmuxVideoSettings {
    Priority?: Value<number>;
    MaximumBitrate?: Value<number>;
    MinimumBitrate?: Value<number>;
    constructor(properties: MultiplexStatmuxVideoSettings);
}
export declare class MultiplexVideoSettings {
    StatmuxSettings?: MultiplexStatmuxVideoSettings;
    ConstantBitrate?: Value<number>;
    constructor(properties: MultiplexVideoSettings);
}
export interface MultiplexprogramProperties {
    MultiplexId?: Value<string>;
    PreferredChannelPipeline?: Value<string>;
    PacketIdentifiersMap?: MultiplexProgramPacketIdentifiersMap;
    ChannelId?: Value<string>;
    PipelineDetails?: List<MultiplexProgramPipelineDetail>;
    MultiplexProgramSettings?: MultiplexProgramSettings;
    ProgramName?: Value<string>;
}
export default class Multiplexprogram extends ResourceBase<MultiplexprogramProperties> {
    static MultiplexProgramPacketIdentifiersMap: typeof MultiplexProgramPacketIdentifiersMap;
    static MultiplexProgramPipelineDetail: typeof MultiplexProgramPipelineDetail;
    static MultiplexProgramServiceDescriptor: typeof MultiplexProgramServiceDescriptor;
    static MultiplexProgramSettings: typeof MultiplexProgramSettings;
    static MultiplexStatmuxVideoSettings: typeof MultiplexStatmuxVideoSettings;
    static MultiplexVideoSettings: typeof MultiplexVideoSettings;
    constructor(properties?: MultiplexprogramProperties);
}
