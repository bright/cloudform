import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class FileFormatDescriptor {
    CsvFormatDescriptor?: CsvFormatDescriptor;
    JsonFormatDescriptor?: JsonFormatDescriptor;
    constructor(properties: FileFormatDescriptor);
}
export declare class CsvFormatDescriptor {
    FileCompression?: Value<string>;
    Charset?: Value<string>;
    Delimiter?: Value<string>;
    HeaderList?: List<Value<string>>;
    QuoteSymbol?: Value<string>;
    ContainsHeader?: Value<boolean>;
    constructor(properties: CsvFormatDescriptor);
}
export declare class VpcConfiguration {
    SubnetIdList: List<Value<string>>;
    SecurityGroupIdList: List<Value<string>>;
    constructor(properties: VpcConfiguration);
}
export declare class RDSSourceConfig {
    DBInstanceIdentifier: Value<string>;
    DatabaseHost: Value<string>;
    DatabasePort: Value<number>;
    SecretManagerArn: Value<string>;
    DatabaseName: Value<string>;
    TableName: Value<string>;
    RoleArn: Value<string>;
    VpcConfiguration: VpcConfiguration;
    constructor(properties: RDSSourceConfig);
}
export declare class TimestampColumn {
    ColumnName?: Value<string>;
    ColumnFormat?: Value<string>;
    constructor(properties: TimestampColumn);
}
export declare class JsonFormatDescriptor {
    FileCompression?: Value<string>;
    Charset?: Value<string>;
    constructor(properties: JsonFormatDescriptor);
}
export declare class AppFlowConfig {
    RoleArn: Value<string>;
    FlowName: Value<string>;
    constructor(properties: AppFlowConfig);
}
export declare class MetricSource {
    S3SourceConfig?: S3SourceConfig;
    RDSSourceConfig?: RDSSourceConfig;
    RedshiftSourceConfig?: RedshiftSourceConfig;
    CloudwatchConfig?: CloudwatchConfig;
    AppFlowConfig?: AppFlowConfig;
    constructor(properties: MetricSource);
}
export declare class RedshiftSourceConfig {
    ClusterIdentifier: Value<string>;
    DatabaseHost: Value<string>;
    DatabasePort: Value<number>;
    SecretManagerArn: Value<string>;
    DatabaseName: Value<string>;
    TableName: Value<string>;
    RoleArn: Value<string>;
    VpcConfiguration: VpcConfiguration;
    constructor(properties: RedshiftSourceConfig);
}
export declare class Metric {
    MetricName: Value<string>;
    AggregationFunction: Value<string>;
    Namespace?: Value<string>;
    constructor(properties: Metric);
}
export declare class MetricSet {
    MetricSetName: Value<string>;
    MetricSetDescription?: Value<string>;
    MetricSource: MetricSource;
    MetricList: List<Metric>;
    Offset?: Value<number>;
    TimestampColumn?: TimestampColumn;
    DimensionList?: List<Value<string>>;
    MetricSetFrequency?: Value<string>;
    Timezone?: Value<string>;
    constructor(properties: MetricSet);
}
export declare class CloudwatchConfig {
    RoleArn: Value<string>;
    constructor(properties: CloudwatchConfig);
}
export declare class S3SourceConfig {
    RoleArn: Value<string>;
    TemplatedPathList?: List<Value<string>>;
    HistoricalDataPathList?: List<Value<string>>;
    FileFormatDescriptor: FileFormatDescriptor;
    constructor(properties: S3SourceConfig);
}
export interface AnomalyDetectorProperties {
    AnomalyDetectorName?: Value<string>;
    AnomalyDetectorDescription?: Value<string>;
    AnomalyDetectorConfig: {
        [key: string]: any;
    };
    MetricSetList: List<MetricSet>;
    KmsKeyArn?: Value<string>;
}
export default class AnomalyDetector extends ResourceBase<AnomalyDetectorProperties> {
    static FileFormatDescriptor: typeof FileFormatDescriptor;
    static CsvFormatDescriptor: typeof CsvFormatDescriptor;
    static VpcConfiguration: typeof VpcConfiguration;
    static RDSSourceConfig: typeof RDSSourceConfig;
    static TimestampColumn: typeof TimestampColumn;
    static JsonFormatDescriptor: typeof JsonFormatDescriptor;
    static AppFlowConfig: typeof AppFlowConfig;
    static MetricSource: typeof MetricSource;
    static RedshiftSourceConfig: typeof RedshiftSourceConfig;
    static Metric: typeof Metric;
    static MetricSet: typeof MetricSet;
    static CloudwatchConfig: typeof CloudwatchConfig;
    static S3SourceConfig: typeof S3SourceConfig;
    constructor(properties: AnomalyDetectorProperties);
}
