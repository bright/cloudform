import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class AnomalyDetectorConfig {
    AnomalyDetectorFrequency: Value<string>;
    constructor(properties: AnomalyDetectorConfig);
}
export declare class AppFlowConfig {
    FlowName: Value<string>;
    RoleArn: Value<string>;
    constructor(properties: AppFlowConfig);
}
export declare class CloudwatchConfig {
    RoleArn: Value<string>;
    constructor(properties: CloudwatchConfig);
}
export declare class CsvFormatDescriptor {
    QuoteSymbol?: Value<string>;
    ContainsHeader?: Value<boolean>;
    Delimiter?: Value<string>;
    HeaderList?: List<Value<string>>;
    Charset?: Value<string>;
    FileCompression?: Value<string>;
    constructor(properties: CsvFormatDescriptor);
}
export declare class FileFormatDescriptor {
    JsonFormatDescriptor?: JsonFormatDescriptor;
    CsvFormatDescriptor?: CsvFormatDescriptor;
    constructor(properties: FileFormatDescriptor);
}
export declare class JsonFormatDescriptor {
    Charset?: Value<string>;
    FileCompression?: Value<string>;
    constructor(properties: JsonFormatDescriptor);
}
export declare class Metric {
    AggregationFunction: Value<string>;
    MetricName: Value<string>;
    Namespace?: Value<string>;
    constructor(properties: Metric);
}
export declare class MetricSet {
    Timezone?: Value<string>;
    MetricSetDescription?: Value<string>;
    MetricList: List<Metric>;
    MetricSource: MetricSource;
    TimestampColumn?: TimestampColumn;
    DimensionList?: List<Value<string>>;
    MetricSetFrequency?: Value<string>;
    MetricSetName: Value<string>;
    Offset?: Value<number>;
    constructor(properties: MetricSet);
}
export declare class MetricSource {
    S3SourceConfig?: S3SourceConfig;
    CloudwatchConfig?: CloudwatchConfig;
    RDSSourceConfig?: RDSSourceConfig;
    AppFlowConfig?: AppFlowConfig;
    RedshiftSourceConfig?: RedshiftSourceConfig;
    constructor(properties: MetricSource);
}
export declare class RDSSourceConfig {
    TableName: Value<string>;
    DatabasePort: Value<number>;
    DatabaseHost: Value<string>;
    DatabaseName: Value<string>;
    SecretManagerArn: Value<string>;
    VpcConfiguration: VpcConfiguration;
    DBInstanceIdentifier: Value<string>;
    RoleArn: Value<string>;
    constructor(properties: RDSSourceConfig);
}
export declare class RedshiftSourceConfig {
    TableName: Value<string>;
    DatabasePort: Value<number>;
    DatabaseHost: Value<string>;
    DatabaseName: Value<string>;
    SecretManagerArn: Value<string>;
    VpcConfiguration: VpcConfiguration;
    ClusterIdentifier: Value<string>;
    RoleArn: Value<string>;
    constructor(properties: RedshiftSourceConfig);
}
export declare class S3SourceConfig {
    TemplatedPathList?: List<Value<string>>;
    HistoricalDataPathList?: List<Value<string>>;
    RoleArn: Value<string>;
    FileFormatDescriptor: FileFormatDescriptor;
    constructor(properties: S3SourceConfig);
}
export declare class TimestampColumn {
    ColumnName?: Value<string>;
    ColumnFormat?: Value<string>;
    constructor(properties: TimestampColumn);
}
export declare class VpcConfiguration {
    SubnetIdList: List<Value<string>>;
    SecurityGroupIdList: List<Value<string>>;
    constructor(properties: VpcConfiguration);
}
export interface AnomalyDetectorProperties {
    AnomalyDetectorName?: Value<string>;
    KmsKeyArn?: Value<string>;
    AnomalyDetectorDescription?: Value<string>;
    AnomalyDetectorConfig: AnomalyDetectorConfig;
    MetricSetList: List<MetricSet>;
}
export default class AnomalyDetector extends ResourceBase<AnomalyDetectorProperties> {
    static AnomalyDetectorConfig: typeof AnomalyDetectorConfig;
    static AppFlowConfig: typeof AppFlowConfig;
    static CloudwatchConfig: typeof CloudwatchConfig;
    static CsvFormatDescriptor: typeof CsvFormatDescriptor;
    static FileFormatDescriptor: typeof FileFormatDescriptor;
    static JsonFormatDescriptor: typeof JsonFormatDescriptor;
    static Metric: typeof Metric;
    static MetricSet: typeof MetricSet;
    static MetricSource: typeof MetricSource;
    static RDSSourceConfig: typeof RDSSourceConfig;
    static RedshiftSourceConfig: typeof RedshiftSourceConfig;
    static S3SourceConfig: typeof S3SourceConfig;
    static TimestampColumn: typeof TimestampColumn;
    static VpcConfiguration: typeof VpcConfiguration;
    constructor(properties: AnomalyDetectorProperties);
}
