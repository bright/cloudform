/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0
 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export class FileFormatDescriptor {
    CsvFormatDescriptor?: CsvFormatDescriptor
    JsonFormatDescriptor?: JsonFormatDescriptor

    constructor(properties: FileFormatDescriptor) {
        Object.assign(this, properties)
    }
}

export class CsvFormatDescriptor {
    FileCompression?: Value<string>
    Charset?: Value<string>
    Delimiter?: Value<string>
    HeaderList?: List<Value<string>>
    QuoteSymbol?: Value<string>
    ContainsHeader?: Value<boolean>

    constructor(properties: CsvFormatDescriptor) {
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

export class RDSSourceConfig {
    DBInstanceIdentifier!: Value<string>
    DatabaseHost!: Value<string>
    DatabasePort!: Value<number>
    SecretManagerArn!: Value<string>
    DatabaseName!: Value<string>
    TableName!: Value<string>
    RoleArn!: Value<string>
    VpcConfiguration!: VpcConfiguration

    constructor(properties: RDSSourceConfig) {
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

export class JsonFormatDescriptor {
    FileCompression?: Value<string>
    Charset?: Value<string>

    constructor(properties: JsonFormatDescriptor) {
        Object.assign(this, properties)
    }
}

export class AppFlowConfig {
    RoleArn!: Value<string>
    FlowName!: Value<string>

    constructor(properties: AppFlowConfig) {
        Object.assign(this, properties)
    }
}

export class MetricSource {
    S3SourceConfig?: S3SourceConfig
    RDSSourceConfig?: RDSSourceConfig
    RedshiftSourceConfig?: RedshiftSourceConfig
    CloudwatchConfig?: CloudwatchConfig
    AppFlowConfig?: AppFlowConfig

    constructor(properties: MetricSource) {
        Object.assign(this, properties)
    }
}

export class RedshiftSourceConfig {
    ClusterIdentifier!: Value<string>
    DatabaseHost!: Value<string>
    DatabasePort!: Value<number>
    SecretManagerArn!: Value<string>
    DatabaseName!: Value<string>
    TableName!: Value<string>
    RoleArn!: Value<string>
    VpcConfiguration!: VpcConfiguration

    constructor(properties: RedshiftSourceConfig) {
        Object.assign(this, properties)
    }
}

export class Metric {
    MetricName!: Value<string>
    AggregationFunction!: Value<string>
    Namespace?: Value<string>

    constructor(properties: Metric) {
        Object.assign(this, properties)
    }
}

export class MetricSet {
    MetricSetName!: Value<string>
    MetricSetDescription?: Value<string>
    MetricSource!: MetricSource
    MetricList!: List<Metric>
    Offset?: Value<number>
    TimestampColumn?: TimestampColumn
    DimensionList?: List<Value<string>>
    MetricSetFrequency?: Value<string>
    Timezone?: Value<string>

    constructor(properties: MetricSet) {
        Object.assign(this, properties)
    }
}

export class CloudwatchConfig {
    RoleArn!: Value<string>

    constructor(properties: CloudwatchConfig) {
        Object.assign(this, properties)
    }
}

export class S3SourceConfig {
    RoleArn!: Value<string>
    TemplatedPathList?: List<Value<string>>
    HistoricalDataPathList?: List<Value<string>>
    FileFormatDescriptor!: FileFormatDescriptor

    constructor(properties: S3SourceConfig) {
        Object.assign(this, properties)
    }
}

export interface AnomalyDetectorProperties {
    AnomalyDetectorName?: Value<string>
    AnomalyDetectorDescription?: Value<string>
    AnomalyDetectorConfig: {[key: string]: any}
    MetricSetList: List<MetricSet>
    KmsKeyArn?: Value<string>
}

export default class AnomalyDetector extends ResourceBase<AnomalyDetectorProperties> {
    static FileFormatDescriptor = FileFormatDescriptor
    static CsvFormatDescriptor = CsvFormatDescriptor
    static VpcConfiguration = VpcConfiguration
    static RDSSourceConfig = RDSSourceConfig
    static TimestampColumn = TimestampColumn
    static JsonFormatDescriptor = JsonFormatDescriptor
    static AppFlowConfig = AppFlowConfig
    static MetricSource = MetricSource
    static RedshiftSourceConfig = RedshiftSourceConfig
    static Metric = Metric
    static MetricSet = MetricSet
    static CloudwatchConfig = CloudwatchConfig
    static S3SourceConfig = S3SourceConfig

    constructor(properties: AnomalyDetectorProperties) {
        super('AWS::LookoutMetrics::AnomalyDetector', properties)
    }
}
