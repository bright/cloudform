import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class AntennaDownlinkConfig {
    SpectrumConfig?: SpectrumConfig;
    constructor(properties: AntennaDownlinkConfig);
}
export declare class AntennaDownlinkDemodDecodeConfig {
    DemodulationConfig?: DemodulationConfig;
    SpectrumConfig?: SpectrumConfig;
    DecodeConfig?: DecodeConfig;
    constructor(properties: AntennaDownlinkDemodDecodeConfig);
}
export declare class AntennaUplinkConfig {
    TransmitDisabled?: Value<boolean>;
    SpectrumConfig?: UplinkSpectrumConfig;
    TargetEirp?: Eirp;
    constructor(properties: AntennaUplinkConfig);
}
export declare class ConfigData {
    DataflowEndpointConfig?: DataflowEndpointConfig;
    UplinkEchoConfig?: UplinkEchoConfig;
    AntennaDownlinkConfig?: AntennaDownlinkConfig;
    AntennaDownlinkDemodDecodeConfig?: AntennaDownlinkDemodDecodeConfig;
    TrackingConfig?: TrackingConfig;
    AntennaUplinkConfig?: AntennaUplinkConfig;
    S3RecordingConfig?: S3RecordingConfig;
    constructor(properties: ConfigData);
}
export declare class DataflowEndpointConfig {
    DataflowEndpointName?: Value<string>;
    DataflowEndpointRegion?: Value<string>;
    constructor(properties: DataflowEndpointConfig);
}
export declare class DecodeConfig {
    UnvalidatedJSON?: Value<string>;
    constructor(properties: DecodeConfig);
}
export declare class DemodulationConfig {
    UnvalidatedJSON?: Value<string>;
    constructor(properties: DemodulationConfig);
}
export declare class Eirp {
    Value?: Value<number>;
    Units?: Value<string>;
    constructor(properties: Eirp);
}
export declare class Frequency {
    Value?: Value<number>;
    Units?: Value<string>;
    constructor(properties: Frequency);
}
export declare class FrequencyBandwidth {
    Value?: Value<number>;
    Units?: Value<string>;
    constructor(properties: FrequencyBandwidth);
}
export declare class S3RecordingConfig {
    BucketArn?: Value<string>;
    Prefix?: Value<string>;
    RoleArn?: Value<string>;
    constructor(properties: S3RecordingConfig);
}
export declare class SpectrumConfig {
    Polarization?: Value<string>;
    Bandwidth?: FrequencyBandwidth;
    CenterFrequency?: Frequency;
    constructor(properties: SpectrumConfig);
}
export declare class TrackingConfig {
    Autotrack?: Value<string>;
    constructor(properties: TrackingConfig);
}
export declare class UplinkEchoConfig {
    Enabled?: Value<boolean>;
    AntennaUplinkConfigArn?: Value<string>;
    constructor(properties: UplinkEchoConfig);
}
export declare class UplinkSpectrumConfig {
    Polarization?: Value<string>;
    CenterFrequency?: Frequency;
    constructor(properties: UplinkSpectrumConfig);
}
export interface ConfigProperties {
    ConfigData: ConfigData;
    Tags?: List<ResourceTag>;
    Name: Value<string>;
}
export default class Config extends ResourceBase<ConfigProperties> {
    static AntennaDownlinkConfig: typeof AntennaDownlinkConfig;
    static AntennaDownlinkDemodDecodeConfig: typeof AntennaDownlinkDemodDecodeConfig;
    static AntennaUplinkConfig: typeof AntennaUplinkConfig;
    static ConfigData: typeof ConfigData;
    static DataflowEndpointConfig: typeof DataflowEndpointConfig;
    static DecodeConfig: typeof DecodeConfig;
    static DemodulationConfig: typeof DemodulationConfig;
    static Eirp: typeof Eirp;
    static Frequency: typeof Frequency;
    static FrequencyBandwidth: typeof FrequencyBandwidth;
    static S3RecordingConfig: typeof S3RecordingConfig;
    static SpectrumConfig: typeof SpectrumConfig;
    static TrackingConfig: typeof TrackingConfig;
    static UplinkEchoConfig: typeof UplinkEchoConfig;
    static UplinkSpectrumConfig: typeof UplinkSpectrumConfig;
    constructor(properties: ConfigProperties);
}
