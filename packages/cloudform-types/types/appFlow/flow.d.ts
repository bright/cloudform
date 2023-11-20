import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class AggregationConfig {
    TargetFileSize?: Value<number>;
    AggregationType?: Value<string>;
    constructor(properties: AggregationConfig);
}
export declare class AmplitudeSourceProperties {
    Object: Value<string>;
    constructor(properties: AmplitudeSourceProperties);
}
export declare class ConnectorOperator {
    Amplitude?: Value<string>;
    S3?: Value<string>;
    GoogleAnalytics?: Value<string>;
    ServiceNow?: Value<string>;
    CustomConnector?: Value<string>;
    SAPOData?: Value<string>;
    Pardot?: Value<string>;
    Veeva?: Value<string>;
    Trendmicro?: Value<string>;
    Datadog?: Value<string>;
    Marketo?: Value<string>;
    Singular?: Value<string>;
    Slack?: Value<string>;
    Dynatrace?: Value<string>;
    Zendesk?: Value<string>;
    InforNexus?: Value<string>;
    Salesforce?: Value<string>;
    constructor(properties: ConnectorOperator);
}
export declare class CustomConnectorDestinationProperties {
    IdFieldNames?: List<Value<string>>;
    EntityName: Value<string>;
    WriteOperationType?: Value<string>;
    ErrorHandlingConfig?: ErrorHandlingConfig;
    CustomProperties?: {
        [key: string]: Value<string>;
    };
    constructor(properties: CustomConnectorDestinationProperties);
}
export declare class CustomConnectorSourceProperties {
    EntityName: Value<string>;
    DataTransferApi?: DataTransferApi;
    CustomProperties?: {
        [key: string]: Value<string>;
    };
    constructor(properties: CustomConnectorSourceProperties);
}
export declare class DataTransferApi {
    Type: Value<string>;
    Name: Value<string>;
    constructor(properties: DataTransferApi);
}
export declare class DatadogSourceProperties {
    Object: Value<string>;
    constructor(properties: DatadogSourceProperties);
}
export declare class DestinationConnectorProperties {
    S3?: S3DestinationProperties;
    CustomConnector?: CustomConnectorDestinationProperties;
    Upsolver?: UpsolverDestinationProperties;
    SAPOData?: SAPODataDestinationProperties;
    Snowflake?: SnowflakeDestinationProperties;
    LookoutMetrics?: LookoutMetricsDestinationProperties;
    EventBridge?: EventBridgeDestinationProperties;
    Zendesk?: ZendeskDestinationProperties;
    Marketo?: MarketoDestinationProperties;
    Redshift?: RedshiftDestinationProperties;
    Salesforce?: SalesforceDestinationProperties;
    constructor(properties: DestinationConnectorProperties);
}
export declare class DestinationFlowConfig {
    ConnectorProfileName?: Value<string>;
    ApiVersion?: Value<string>;
    ConnectorType: Value<string>;
    DestinationConnectorProperties: DestinationConnectorProperties;
    constructor(properties: DestinationFlowConfig);
}
export declare class DynatraceSourceProperties {
    Object: Value<string>;
    constructor(properties: DynatraceSourceProperties);
}
export declare class ErrorHandlingConfig {
    BucketName?: Value<string>;
    BucketPrefix?: Value<string>;
    FailOnFirstError?: Value<boolean>;
    constructor(properties: ErrorHandlingConfig);
}
export declare class EventBridgeDestinationProperties {
    Object: Value<string>;
    ErrorHandlingConfig?: ErrorHandlingConfig;
    constructor(properties: EventBridgeDestinationProperties);
}
export declare class GlueDataCatalog {
    DatabaseName: Value<string>;
    RoleArn: Value<string>;
    TablePrefix: Value<string>;
    constructor(properties: GlueDataCatalog);
}
export declare class GoogleAnalyticsSourceProperties {
    Object: Value<string>;
    constructor(properties: GoogleAnalyticsSourceProperties);
}
export declare class IncrementalPullConfig {
    DatetimeTypeFieldName?: Value<string>;
    constructor(properties: IncrementalPullConfig);
}
export declare class InforNexusSourceProperties {
    Object: Value<string>;
    constructor(properties: InforNexusSourceProperties);
}
export declare class LookoutMetricsDestinationProperties {
    Object?: Value<string>;
    constructor(properties: LookoutMetricsDestinationProperties);
}
export declare class MarketoDestinationProperties {
    Object: Value<string>;
    ErrorHandlingConfig?: ErrorHandlingConfig;
    constructor(properties: MarketoDestinationProperties);
}
export declare class MarketoSourceProperties {
    Object: Value<string>;
    constructor(properties: MarketoSourceProperties);
}
export declare class MetadataCatalogConfig {
    GlueDataCatalog?: GlueDataCatalog;
    constructor(properties: MetadataCatalogConfig);
}
export declare class PardotSourceProperties {
    Object: Value<string>;
    constructor(properties: PardotSourceProperties);
}
export declare class PrefixConfig {
    PrefixType?: Value<string>;
    PathPrefixHierarchy?: List<Value<string>>;
    PrefixFormat?: Value<string>;
    constructor(properties: PrefixConfig);
}
export declare class RedshiftDestinationProperties {
    Object: Value<string>;
    BucketPrefix?: Value<string>;
    IntermediateBucketName: Value<string>;
    ErrorHandlingConfig?: ErrorHandlingConfig;
    constructor(properties: RedshiftDestinationProperties);
}
export declare class S3DestinationProperties {
    BucketName: Value<string>;
    BucketPrefix?: Value<string>;
    S3OutputFormatConfig?: S3OutputFormatConfig;
    constructor(properties: S3DestinationProperties);
}
export declare class S3InputFormatConfig {
    S3InputFileType?: Value<string>;
    constructor(properties: S3InputFormatConfig);
}
export declare class S3OutputFormatConfig {
    PrefixConfig?: PrefixConfig;
    FileType?: Value<string>;
    AggregationConfig?: AggregationConfig;
    PreserveSourceDataTyping?: Value<boolean>;
    constructor(properties: S3OutputFormatConfig);
}
export declare class S3SourceProperties {
    S3InputFormatConfig?: S3InputFormatConfig;
    BucketName: Value<string>;
    BucketPrefix: Value<string>;
    constructor(properties: S3SourceProperties);
}
export declare class SAPODataDestinationProperties {
    IdFieldNames?: List<Value<string>>;
    ObjectPath: Value<string>;
    WriteOperationType?: Value<string>;
    ErrorHandlingConfig?: ErrorHandlingConfig;
    SuccessResponseHandlingConfig?: SuccessResponseHandlingConfig;
    constructor(properties: SAPODataDestinationProperties);
}
export declare class SAPODataPaginationConfig {
    maxPageSize: Value<number>;
    constructor(properties: SAPODataPaginationConfig);
}
export declare class SAPODataParallelismConfig {
    maxParallelism: Value<number>;
    constructor(properties: SAPODataParallelismConfig);
}
export declare class SAPODataSourceProperties {
    ObjectPath: Value<string>;
    paginationConfig?: SAPODataPaginationConfig;
    parallelismConfig?: SAPODataParallelismConfig;
    constructor(properties: SAPODataSourceProperties);
}
export declare class SalesforceDestinationProperties {
    IdFieldNames?: List<Value<string>>;
    WriteOperationType?: Value<string>;
    DataTransferApi?: Value<string>;
    Object: Value<string>;
    ErrorHandlingConfig?: ErrorHandlingConfig;
    constructor(properties: SalesforceDestinationProperties);
}
export declare class SalesforceSourceProperties {
    IncludeDeletedRecords?: Value<boolean>;
    DataTransferApi?: Value<string>;
    Object: Value<string>;
    EnableDynamicFieldUpdate?: Value<boolean>;
    constructor(properties: SalesforceSourceProperties);
}
export declare class ScheduledTriggerProperties {
    ScheduleEndTime?: Value<number>;
    ScheduleExpression: Value<string>;
    FirstExecutionFrom?: Value<number>;
    TimeZone?: Value<string>;
    ScheduleStartTime?: Value<number>;
    DataPullMode?: Value<string>;
    ScheduleOffset?: Value<number>;
    FlowErrorDeactivationThreshold?: Value<number>;
    constructor(properties: ScheduledTriggerProperties);
}
export declare class ServiceNowSourceProperties {
    Object: Value<string>;
    constructor(properties: ServiceNowSourceProperties);
}
export declare class SingularSourceProperties {
    Object: Value<string>;
    constructor(properties: SingularSourceProperties);
}
export declare class SlackSourceProperties {
    Object: Value<string>;
    constructor(properties: SlackSourceProperties);
}
export declare class SnowflakeDestinationProperties {
    Object: Value<string>;
    BucketPrefix?: Value<string>;
    IntermediateBucketName: Value<string>;
    ErrorHandlingConfig?: ErrorHandlingConfig;
    constructor(properties: SnowflakeDestinationProperties);
}
export declare class SourceConnectorProperties {
    Amplitude?: AmplitudeSourceProperties;
    S3?: S3SourceProperties;
    GoogleAnalytics?: GoogleAnalyticsSourceProperties;
    ServiceNow?: ServiceNowSourceProperties;
    CustomConnector?: CustomConnectorSourceProperties;
    SAPOData?: SAPODataSourceProperties;
    Pardot?: PardotSourceProperties;
    Veeva?: VeevaSourceProperties;
    Trendmicro?: TrendmicroSourceProperties;
    Datadog?: DatadogSourceProperties;
    Marketo?: MarketoSourceProperties;
    Singular?: SingularSourceProperties;
    Slack?: SlackSourceProperties;
    Dynatrace?: DynatraceSourceProperties;
    Zendesk?: ZendeskSourceProperties;
    InforNexus?: InforNexusSourceProperties;
    Salesforce?: SalesforceSourceProperties;
    constructor(properties: SourceConnectorProperties);
}
export declare class SourceFlowConfig {
    ConnectorProfileName?: Value<string>;
    ApiVersion?: Value<string>;
    SourceConnectorProperties: SourceConnectorProperties;
    ConnectorType: Value<string>;
    IncrementalPullConfig?: IncrementalPullConfig;
    constructor(properties: SourceFlowConfig);
}
export declare class SuccessResponseHandlingConfig {
    BucketName?: Value<string>;
    BucketPrefix?: Value<string>;
    constructor(properties: SuccessResponseHandlingConfig);
}
export declare class Task {
    SourceFields: List<Value<string>>;
    DestinationField?: Value<string>;
    ConnectorOperator?: ConnectorOperator;
    TaskType: Value<string>;
    TaskProperties?: List<TaskPropertiesObject>;
    constructor(properties: Task);
}
export declare class TaskPropertiesObject {
    Value: Value<string>;
    Key: Value<string>;
    constructor(properties: TaskPropertiesObject);
}
export declare class TrendmicroSourceProperties {
    Object: Value<string>;
    constructor(properties: TrendmicroSourceProperties);
}
export declare class TriggerConfig {
    TriggerType: Value<string>;
    TriggerProperties?: ScheduledTriggerProperties;
    constructor(properties: TriggerConfig);
}
export declare class UpsolverDestinationProperties {
    BucketName: Value<string>;
    BucketPrefix?: Value<string>;
    S3OutputFormatConfig: UpsolverS3OutputFormatConfig;
    constructor(properties: UpsolverDestinationProperties);
}
export declare class UpsolverS3OutputFormatConfig {
    PrefixConfig: PrefixConfig;
    FileType?: Value<string>;
    AggregationConfig?: AggregationConfig;
    constructor(properties: UpsolverS3OutputFormatConfig);
}
export declare class VeevaSourceProperties {
    IncludeAllVersions?: Value<boolean>;
    IncludeRenditions?: Value<boolean>;
    DocumentType?: Value<string>;
    Object: Value<string>;
    IncludeSourceFiles?: Value<boolean>;
    constructor(properties: VeevaSourceProperties);
}
export declare class ZendeskDestinationProperties {
    IdFieldNames?: List<Value<string>>;
    WriteOperationType?: Value<string>;
    Object: Value<string>;
    ErrorHandlingConfig?: ErrorHandlingConfig;
    constructor(properties: ZendeskDestinationProperties);
}
export declare class ZendeskSourceProperties {
    Object: Value<string>;
    constructor(properties: ZendeskSourceProperties);
}
export interface FlowProperties {
    Description?: Value<string>;
    KMSArn?: Value<string>;
    Tasks: List<Task>;
    FlowName: Value<string>;
    TriggerConfig: TriggerConfig;
    DestinationFlowConfigList: List<DestinationFlowConfig>;
    SourceFlowConfig: SourceFlowConfig;
    FlowStatus?: Value<string>;
    Tags?: List<ResourceTag>;
    MetadataCatalogConfig?: MetadataCatalogConfig;
}
export default class Flow extends ResourceBase<FlowProperties> {
    static AggregationConfig: typeof AggregationConfig;
    static AmplitudeSourceProperties: typeof AmplitudeSourceProperties;
    static ConnectorOperator: typeof ConnectorOperator;
    static CustomConnectorDestinationProperties: typeof CustomConnectorDestinationProperties;
    static CustomConnectorSourceProperties: typeof CustomConnectorSourceProperties;
    static DataTransferApi: typeof DataTransferApi;
    static DatadogSourceProperties: typeof DatadogSourceProperties;
    static DestinationConnectorProperties: typeof DestinationConnectorProperties;
    static DestinationFlowConfig: typeof DestinationFlowConfig;
    static DynatraceSourceProperties: typeof DynatraceSourceProperties;
    static ErrorHandlingConfig: typeof ErrorHandlingConfig;
    static EventBridgeDestinationProperties: typeof EventBridgeDestinationProperties;
    static GlueDataCatalog: typeof GlueDataCatalog;
    static GoogleAnalyticsSourceProperties: typeof GoogleAnalyticsSourceProperties;
    static IncrementalPullConfig: typeof IncrementalPullConfig;
    static InforNexusSourceProperties: typeof InforNexusSourceProperties;
    static LookoutMetricsDestinationProperties: typeof LookoutMetricsDestinationProperties;
    static MarketoDestinationProperties: typeof MarketoDestinationProperties;
    static MarketoSourceProperties: typeof MarketoSourceProperties;
    static MetadataCatalogConfig: typeof MetadataCatalogConfig;
    static PardotSourceProperties: typeof PardotSourceProperties;
    static PrefixConfig: typeof PrefixConfig;
    static RedshiftDestinationProperties: typeof RedshiftDestinationProperties;
    static S3DestinationProperties: typeof S3DestinationProperties;
    static S3InputFormatConfig: typeof S3InputFormatConfig;
    static S3OutputFormatConfig: typeof S3OutputFormatConfig;
    static S3SourceProperties: typeof S3SourceProperties;
    static SAPODataDestinationProperties: typeof SAPODataDestinationProperties;
    static SAPODataPaginationConfig: typeof SAPODataPaginationConfig;
    static SAPODataParallelismConfig: typeof SAPODataParallelismConfig;
    static SAPODataSourceProperties: typeof SAPODataSourceProperties;
    static SalesforceDestinationProperties: typeof SalesforceDestinationProperties;
    static SalesforceSourceProperties: typeof SalesforceSourceProperties;
    static ScheduledTriggerProperties: typeof ScheduledTriggerProperties;
    static ServiceNowSourceProperties: typeof ServiceNowSourceProperties;
    static SingularSourceProperties: typeof SingularSourceProperties;
    static SlackSourceProperties: typeof SlackSourceProperties;
    static SnowflakeDestinationProperties: typeof SnowflakeDestinationProperties;
    static SourceConnectorProperties: typeof SourceConnectorProperties;
    static SourceFlowConfig: typeof SourceFlowConfig;
    static SuccessResponseHandlingConfig: typeof SuccessResponseHandlingConfig;
    static Task: typeof Task;
    static TaskPropertiesObject: typeof TaskPropertiesObject;
    static TrendmicroSourceProperties: typeof TrendmicroSourceProperties;
    static TriggerConfig: typeof TriggerConfig;
    static UpsolverDestinationProperties: typeof UpsolverDestinationProperties;
    static UpsolverS3OutputFormatConfig: typeof UpsolverS3OutputFormatConfig;
    static VeevaSourceProperties: typeof VeevaSourceProperties;
    static ZendeskDestinationProperties: typeof ZendeskDestinationProperties;
    static ZendeskSourceProperties: typeof ZendeskSourceProperties;
    constructor(properties: FlowProperties);
}
