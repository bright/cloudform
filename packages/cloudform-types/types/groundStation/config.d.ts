import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class S3RecordingConfig {
    BucketArn?: Value<string>;
    RoleArn?: Value<string>;
    Prefix?: Value<string>;
    constructor(properties: S3RecordingConfig);
}
export declare class UplinkEchoConfig {
    Enabled?: Value<boolean>;
    AntennaUplinkConfigArn?: Value<string>;
    constructor(properties: UplinkEchoConfig);
}
export declare class DataflowEndpointConfig {
    DataflowEndpointName?: Value<string>;
    DataflowEndpointRegion?: Value<string>;
    constructor(properties: DataflowEndpointConfig);
}
export declare class AntennaDownlinkConfig {
    SpectrumConfig?: SpectrumConfig;
    constructor(properties: AntennaDownlinkConfig);
}
export declare class DemodulationConfig {
    UnvalidatedJSON?: Value<string>;
    constructor(properties: DemodulationConfig);
}
export declare class AntennaDownlinkDemodDecodeConfig {
    SpectrumConfig?: SpectrumConfig;
    DemodulationConfig?: DemodulationConfig;
    DecodeConfig?: DecodeConfig;
    constructor(properties: AntennaDownlinkDemodDecodeConfig);
}
export declare class UplinkSpectrumConfig {
    CenterFrequency?: Frequency;
    Polarization?: Value<string>;
    constructor(properties: UplinkSpectrumConfig);
}
export declare class Frequency {
    Value?: Value<number>;
    Units?: Value<string>;
    constructor(properties: Frequency);
}
export declare class SpectrumConfig {
    CenterFrequency?: Frequency;
    Bandwidth?: FrequencyBandwidth;
    Polarization?: Value<string>;
    constructor(properties: SpectrumConfig);
}
export declare class FrequencyBandwidth {
    Value?: Value<number>;
    Units?: Value<string>;
    constructor(properties: FrequencyBandwidth);
}
export declare class TrackingConfig {
    Autotrack?: Value<string>;
    constructor(properties: TrackingConfig);
}
export declare class ConfigData {
    AntennaDownlinkConfig?: AntennaDownlinkConfig;
    TrackingConfig?: TrackingConfig;
    DataflowEndpointConfig?: DataflowEndpointConfig;
    AntennaDownlinkDemodDecodeConfig?: AntennaDownlinkDemodDecodeConfig;
    AntennaUplinkConfig?: AntennaUplinkConfig;
    UplinkEchoConfig?: UplinkEchoConfig;
    S3RecordingConfig?: S3RecordingConfig;
    constructor(properties: ConfigData);
}
export declare class AntennaUplinkConfig {
    SpectrumConfig?: UplinkSpectrumConfig;
    TargetEirp?: Eirp;
    TransmitDisabled?: Value<boolean>;
    constructor(properties: AntennaUplinkConfig);
}
export declare class DecodeConfig {
    UnvalidatedJSON?: Value<string>;
    constructor(properties: DecodeConfig);
}
export declare class Eirp {
    Value?: Value<number>;
    Units?: Value<string>;
    constructor(properties: Eirp);
}
export interface ConfigProperties {
    Name: Value<string>;
    Tags?: List<ResourceTag>;
    ConfigData: ConfigData;
}
export default class Config extends ResourceBase<ConfigProperties> {
    static S3RecordingConfig: typeof S3RecordingConfig;
    static UplinkEchoConfig: typeof UplinkEchoConfig;
    static DataflowEndpointConfig: typeof DataflowEndpointConfig;
    static AntennaDownlinkConfig: typeof AntennaDownlinkConfig;
    static DemodulationConfig: typeof DemodulationConfig;
    static AntennaDownlinkDemodDecodeConfig: typeof AntennaDownlinkDemodDecodeConfig;
    static UplinkSpectrumConfig: typeof UplinkSpectrumConfig;
    static Frequency: typeof Frequency;
    static SpectrumConfig: typeof SpectrumConfig;
    static FrequencyBandwidth: typeof FrequencyBandwidth;
    static TrackingConfig: typeof TrackingConfig;
    static ConfigData: typeof ConfigData;
    static AntennaUplinkConfig: typeof AntennaUplinkConfig;
    static DecodeConfig: typeof DecodeConfig;
    static Eirp: typeof Eirp;
    constructor(properties: ConfigProperties);
}
