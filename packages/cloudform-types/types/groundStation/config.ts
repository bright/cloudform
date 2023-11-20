/* Generated from: 
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class AntennaDownlinkConfig {
    SpectrumConfig?: SpectrumConfig

    constructor(properties: AntennaDownlinkConfig) {
        Object.assign(this, properties)
    }
}

export class AntennaDownlinkDemodDecodeConfig {
    DemodulationConfig?: DemodulationConfig
    SpectrumConfig?: SpectrumConfig
    DecodeConfig?: DecodeConfig

    constructor(properties: AntennaDownlinkDemodDecodeConfig) {
        Object.assign(this, properties)
    }
}

export class AntennaUplinkConfig {
    TransmitDisabled?: Value<boolean>
    SpectrumConfig?: UplinkSpectrumConfig
    TargetEirp?: Eirp

    constructor(properties: AntennaUplinkConfig) {
        Object.assign(this, properties)
    }
}

export class ConfigData {
    DataflowEndpointConfig?: DataflowEndpointConfig
    UplinkEchoConfig?: UplinkEchoConfig
    AntennaDownlinkConfig?: AntennaDownlinkConfig
    AntennaDownlinkDemodDecodeConfig?: AntennaDownlinkDemodDecodeConfig
    TrackingConfig?: TrackingConfig
    AntennaUplinkConfig?: AntennaUplinkConfig
    S3RecordingConfig?: S3RecordingConfig

    constructor(properties: ConfigData) {
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

export class DecodeConfig {
    UnvalidatedJSON?: Value<string>

    constructor(properties: DecodeConfig) {
        Object.assign(this, properties)
    }
}

export class DemodulationConfig {
    UnvalidatedJSON?: Value<string>

    constructor(properties: DemodulationConfig) {
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

export class Frequency {
    Value?: Value<number>
    Units?: Value<string>

    constructor(properties: Frequency) {
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

export class S3RecordingConfig {
    BucketArn?: Value<string>
    Prefix?: Value<string>
    RoleArn?: Value<string>

    constructor(properties: S3RecordingConfig) {
        Object.assign(this, properties)
    }
}

export class SpectrumConfig {
    Polarization?: Value<string>
    Bandwidth?: FrequencyBandwidth
    CenterFrequency?: Frequency

    constructor(properties: SpectrumConfig) {
        Object.assign(this, properties)
    }
}

export class TrackingConfig {
    Autotrack?: Value<string>

    constructor(properties: TrackingConfig) {
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

export class UplinkSpectrumConfig {
    Polarization?: Value<string>
    CenterFrequency?: Frequency

    constructor(properties: UplinkSpectrumConfig) {
        Object.assign(this, properties)
    }
}

export interface ConfigProperties {
    ConfigData: ConfigData
    Tags?: List<ResourceTag>
    Name: Value<string>
}

export default class Config extends ResourceBase<ConfigProperties> {
    static AntennaDownlinkConfig = AntennaDownlinkConfig
    static AntennaDownlinkDemodDecodeConfig = AntennaDownlinkDemodDecodeConfig
    static AntennaUplinkConfig = AntennaUplinkConfig
    static ConfigData = ConfigData
    static DataflowEndpointConfig = DataflowEndpointConfig
    static DecodeConfig = DecodeConfig
    static DemodulationConfig = DemodulationConfig
    static Eirp = Eirp
    static Frequency = Frequency
    static FrequencyBandwidth = FrequencyBandwidth
    static S3RecordingConfig = S3RecordingConfig
    static SpectrumConfig = SpectrumConfig
    static TrackingConfig = TrackingConfig
    static UplinkEchoConfig = UplinkEchoConfig
    static UplinkSpectrumConfig = UplinkSpectrumConfig

    constructor(properties: ConfigProperties) {
        super('AWS::GroundStation::Config', properties)
    }
}
