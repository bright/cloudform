/* Generated from: 
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class S3RecordingConfig {
    BucketArn?: Value<string>
    RoleArn?: Value<string>
    Prefix?: Value<string>

    constructor(properties: S3RecordingConfig) {
        Object.assign(this, properties)
    }
}

export class UplinkEchoConfig {
    Enabled?: Value<boolean>
    AntennaUplinkConfigArn?: Value<string>

    constructor(properties: UplinkEchoConfig) {
        Object.assign(this, properties)
    }
}

export class DataflowEndpointConfig {
    DataflowEndpointName?: Value<string>
    DataflowEndpointRegion?: Value<string>

    constructor(properties: DataflowEndpointConfig) {
        Object.assign(this, properties)
    }
}

export class AntennaDownlinkConfig {
    SpectrumConfig?: SpectrumConfig

    constructor(properties: AntennaDownlinkConfig) {
        Object.assign(this, properties)
    }
}

export class DemodulationConfig {
    UnvalidatedJSON?: Value<string>

    constructor(properties: DemodulationConfig) {
        Object.assign(this, properties)
    }
}

export class AntennaDownlinkDemodDecodeConfig {
    SpectrumConfig?: SpectrumConfig
    DemodulationConfig?: DemodulationConfig
    DecodeConfig?: DecodeConfig

    constructor(properties: AntennaDownlinkDemodDecodeConfig) {
        Object.assign(this, properties)
    }
}

export class UplinkSpectrumConfig {
    CenterFrequency?: Frequency
    Polarization?: Value<string>

    constructor(properties: UplinkSpectrumConfig) {
        Object.assign(this, properties)
    }
}

export class Frequency {
    Value?: Value<number>
    Units?: Value<string>

    constructor(properties: Frequency) {
        Object.assign(this, properties)
    }
}

export class SpectrumConfig {
    CenterFrequency?: Frequency
    Bandwidth?: FrequencyBandwidth
    Polarization?: Value<string>

    constructor(properties: SpectrumConfig) {
        Object.assign(this, properties)
    }
}

export class FrequencyBandwidth {
    Value?: Value<number>
    Units?: Value<string>

    constructor(properties: FrequencyBandwidth) {
        Object.assign(this, properties)
    }
}

export class TrackingConfig {
    Autotrack?: Value<string>

    constructor(properties: TrackingConfig) {
        Object.assign(this, properties)
    }
}

export class ConfigData {
    AntennaDownlinkConfig?: AntennaDownlinkConfig
    TrackingConfig?: TrackingConfig
    DataflowEndpointConfig?: DataflowEndpointConfig
    AntennaDownlinkDemodDecodeConfig?: AntennaDownlinkDemodDecodeConfig
    AntennaUplinkConfig?: AntennaUplinkConfig
    UplinkEchoConfig?: UplinkEchoConfig
    S3RecordingConfig?: S3RecordingConfig

    constructor(properties: ConfigData) {
        Object.assign(this, properties)
    }
}

export class AntennaUplinkConfig {
    SpectrumConfig?: UplinkSpectrumConfig
    TargetEirp?: Eirp
    TransmitDisabled?: Value<boolean>

    constructor(properties: AntennaUplinkConfig) {
        Object.assign(this, properties)
    }
}

export class DecodeConfig {
    UnvalidatedJSON?: Value<string>

    constructor(properties: DecodeConfig) {
        Object.assign(this, properties)
    }
}

export class Eirp {
    Value?: Value<number>
    Units?: Value<string>

    constructor(properties: Eirp) {
        Object.assign(this, properties)
    }
}

export interface ConfigProperties {
    Name: Value<string>
    Tags?: List<ResourceTag>
    ConfigData: ConfigData
}

export default class Config extends ResourceBase<ConfigProperties> {
    static S3RecordingConfig = S3RecordingConfig
    static UplinkEchoConfig = UplinkEchoConfig
    static DataflowEndpointConfig = DataflowEndpointConfig
    static AntennaDownlinkConfig = AntennaDownlinkConfig
    static DemodulationConfig = DemodulationConfig
    static AntennaDownlinkDemodDecodeConfig = AntennaDownlinkDemodDecodeConfig
    static UplinkSpectrumConfig = UplinkSpectrumConfig
    static Frequency = Frequency
    static SpectrumConfig = SpectrumConfig
    static FrequencyBandwidth = FrequencyBandwidth
    static TrackingConfig = TrackingConfig
    static ConfigData = ConfigData
    static AntennaUplinkConfig = AntennaUplinkConfig
    static DecodeConfig = DecodeConfig
    static Eirp = Eirp

    constructor(properties: ConfigProperties) {
        super('AWS::GroundStation::Config', properties)
    }
}
