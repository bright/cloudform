/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export class AnomalyDetectorConfig {
    AnomalyDetectorFrequency!: Value<string>

    constructor(properties: AnomalyDetectorConfig) {
        Object.assign(this, properties)
    }
}

export class AppFlowConfig {
    FlowName!: Value<string>
    RoleArn!: Value<string>

    constructor(properties: AppFlowConfig) {
        Object.assign(this, properties)
    }
}

export class CloudwatchConfig {
    RoleArn!: Value<string>

    constructor(properties: CloudwatchConfig) {
        Object.assign(this, properties)
    }
}

export class CsvFormatDescriptor {
    QuoteSymbol?: Value<string>
    ContainsHeader?: Value<boolean>
    Delimiter?: Value<string>
    HeaderList?: List<Value<string>>
    Charset?: Value<string>
    FileCompression?: Value<string>

    constructor(properties: CsvFormatDescriptor) {
        Object.assign(this, properties)
    }
}

export class FileFormatDescriptor {
    JsonFormatDescriptor?: JsonFormatDescriptor
    CsvFormatDescriptor?: CsvFormatDescriptor

    constructor(properties: FileFormatDescriptor) {
        Object.assign(this, properties)
    }
}

export class JsonFormatDescriptor {
    Charset?: Value<string>
    FileCompression?: Value<string>

    constructor(properties: JsonFormatDescriptor) {
        Object.assign(this, properties)
    }
}

export class Metric {
    AggregationFunction!: Value<string>
    MetricName!: Value<string>
    Namespace?: Value<string>

    constructor(properties: Metric) {
        Object.assign(this, properties)
    }
}

export class MetricSet {
    Timezone?: Value<string>
    MetricSetDescription?: Value<string>
    MetricList!: List<Metric>
    MetricSource!: MetricSource
    TimestampColumn?: TimestampColumn
    DimensionList?: List<Value<string>>
    MetricSetFrequency?: Value<string>
    MetricSetName!: Value<string>
    Offset?: Value<number>

    constructor(properties: MetricSet) {
        Object.assign(this, properties)
    }
}

export class MetricSource {
    S3SourceConfig?: S3SourceConfig
    CloudwatchConfig?: CloudwatchConfig
    RDSSourceConfig?: RDSSourceConfig
    AppFlowConfig?: AppFlowConfig
    RedshiftSourceConfig?: RedshiftSourceConfig

    constructor(properties: MetricSource) {
        Object.assign(this, properties)
    }
}

export class RDSSourceConfig {
    TableName!: Value<string>
    DatabasePort!: Value<number>
    DatabaseHost!: Value<string>
    DatabaseName!: Value<string>
    SecretManagerArn!: Value<string>
    VpcConfiguration!: VpcConfiguration
    DBInstanceIdentifier!: Value<string>
    RoleArn!: Value<string>

    constructor(properties: RDSSourceConfig) {
        Object.assign(this, properties)
    }
}

export class RedshiftSourceConfig {
    TableName!: Value<string>
    DatabasePort!: Value<number>
    DatabaseHost!: Value<string>
    DatabaseName!: Value<string>
    SecretManagerArn!: Value<string>
    VpcConfiguration!: VpcConfiguration
    ClusterIdentifier!: Value<string>
    RoleArn!: Value<string>

    constructor(properties: RedshiftSourceConfig) {
        Object.assign(this, properties)
    }
}

export class S3SourceConfig {
    TemplatedPathList?: List<Value<string>>
    HistoricalDataPathList?: List<Value<string>>
    RoleArn!: Value<string>
    FileFormatDescriptor!: FileFormatDescriptor

    constructor(properties: S3SourceConfig) {
        Object.assign(this, properties)
    }
}

export class TimestampColumn {
    ColumnName?: Value<string>
    ColumnFormat?: Value<string>

    constructor(properties: TimestampColumn) {
        Object.assign(this, properties)
    }
}

export class VpcConfiguration {
    SubnetIdList!: List<Value<string>>
    SecurityGroupIdList!: List<Value<string>>

    constructor(properties: VpcConfiguration) {
        Object.assign(this, properties)
    }
}

export interface AnomalyDetectorProperties {
    AnomalyDetectorName?: Value<string>
    KmsKeyArn?: Value<string>
    AnomalyDetectorDescription?: Value<string>
    AnomalyDetectorConfig: AnomalyDetectorConfig
    MetricSetList: List<MetricSet>
}

export default class AnomalyDetector extends ResourceBase<AnomalyDetectorProperties> {
    static AnomalyDetectorConfig = AnomalyDetectorConfig
    static AppFlowConfig = AppFlowConfig
    static CloudwatchConfig = CloudwatchConfig
    static CsvFormatDescriptor = CsvFormatDescriptor
    static FileFormatDescriptor = FileFormatDescriptor
    static JsonFormatDescriptor = JsonFormatDescriptor
    static Metric = Metric
    static MetricSet = MetricSet
    static MetricSource = MetricSource
    static RDSSourceConfig = RDSSourceConfig
    static RedshiftSourceConfig = RedshiftSourceConfig
    static S3SourceConfig = S3SourceConfig
    static TimestampColumn = TimestampColumn
    static VpcConfiguration = VpcConfiguration

    constructor(properties: AnomalyDetectorProperties) {
        super('AWS::LookoutMetrics::AnomalyDetector', properties)
    }
}
