/* Generated from: 
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class CollectionScheme {
    TimeBasedCollectionScheme?: TimeBasedCollectionScheme
    ConditionBasedCollectionScheme?: ConditionBasedCollectionScheme

    constructor(properties: CollectionScheme) {
        Object.assign(this, properties)
    }
}

export class ConditionBasedCollectionScheme {
    MinimumTriggerIntervalMs?: Value<number>
    Expression!: Value<string>
    TriggerMode?: Value<string>
    ConditionLanguageVersion?: Value<number>

    constructor(properties: ConditionBasedCollectionScheme) {
        Object.assign(this, properties)
    }
}

export class DataDestinationConfig {
    S3Config?: S3Config
    TimestreamConfig?: TimestreamConfig

    constructor(properties: DataDestinationConfig) {
        Object.assign(this, properties)
    }
}

export class S3Config {
    BucketArn!: Value<string>
    DataFormat?: Value<string>
    StorageCompressionFormat?: Value<string>
    Prefix?: Value<string>

    constructor(properties: S3Config) {
        Object.assign(this, properties)
    }
}

export class SignalInformation {
    MaxSampleCount?: Value<number>
    MinimumSamplingIntervalMs?: Value<number>
    Name!: Value<string>

    constructor(properties: SignalInformation) {
        Object.assign(this, properties)
    }
}

export class TimeBasedCollectionScheme {
    PeriodMs!: Value<number>

    constructor(properties: TimeBasedCollectionScheme) {
        Object.assign(this, properties)
    }
}

export class TimestreamConfig {
    ExecutionRoleArn!: Value<string>
    TimestreamTableArn!: Value<string>

    constructor(properties: TimestreamConfig) {
        Object.assign(this, properties)
    }
}

export interface CampaignProperties {
    Action: Value<string>
    Compression?: Value<string>
    Description?: Value<string>
    Priority?: Value<number>
    SignalsToCollect?: List<SignalInformation>
    StartTime?: Value<string>
    ExpiryTime?: Value<string>
    SpoolingMode?: Value<string>
    DataDestinationConfigs?: List<DataDestinationConfig>
    SignalCatalogArn: Value<string>
    Name: Value<string>
    PostTriggerCollectionDuration?: Value<number>
    DataExtraDimensions?: List<Value<string>>
    DiagnosticsMode?: Value<string>
    TargetArn: Value<string>
    CollectionScheme: CollectionScheme
    Tags?: List<ResourceTag>
}

export default class Campaign extends ResourceBase<CampaignProperties> {
    static CollectionScheme = CollectionScheme
    static ConditionBasedCollectionScheme = ConditionBasedCollectionScheme
    static DataDestinationConfig = DataDestinationConfig
    static S3Config = S3Config
    static SignalInformation = SignalInformation
    static TimeBasedCollectionScheme = TimeBasedCollectionScheme
    static TimestreamConfig = TimestreamConfig

    constructor(properties: CampaignProperties) {
        super('AWS::IoTFleetWise::Campaign', properties)
    }
}
