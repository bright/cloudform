import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class IncrementalPullConfig {
    DatetimeTypeFieldName?: Value<string>;
    constructor(properties: IncrementalPullConfig);
}
export declare class PrefixConfig {
    PrefixType?: Value<string>;
    PrefixFormat?: Value<string>;
    constructor(properties: PrefixConfig);
}
export declare class S3OutputFormatConfig {
    FileType?: Value<string>;
    PrefixConfig?: PrefixConfig;
    AggregationConfig?: AggregationConfig;
    constructor(properties: S3OutputFormatConfig);
}
export declare class DestinationFlowConfig {
    ConnectorType: Value<string>;
    ConnectorProfileName?: Value<string>;
    DestinationConnectorProperties: DestinationConnectorProperties;
    constructor(properties: DestinationFlowConfig);
}
export declare class DatadogSourceProperties {
    Object: Value<string>;
    constructor(properties: DatadogSourceProperties);
}
export declare class AggregationConfig {
    AggregationType?: Value<string>;
    constructor(properties: AggregationConfig);
}
export declare class ScheduledTriggerProperties {
    ScheduleExpression: Value<string>;
    DataPullMode?: Value<string>;
    ScheduleStartTime?: Value<number>;
    ScheduleEndTime?: Value<number>;
    TimeZone?: Value<string>;
    constructor(properties: ScheduledTriggerProperties);
}
export declare class DestinationConnectorProperties {
    Redshift?: RedshiftDestinationProperties;
    S3?: S3DestinationProperties;
    Salesforce?: SalesforceDestinationProperties;
    Snowflake?: SnowflakeDestinationProperties;
    EventBridge?: EventBridgeDestinationProperties;
    Upsolver?: UpsolverDestinationProperties;
    LookoutMetrics?: LookoutMetricsDestinationProperties;
    Zendesk?: ZendeskDestinationProperties;
    constructor(properties: DestinationConnectorProperties);
}
export declare class ConnectorOperator {
    Amplitude?: Value<string>;
    Datadog?: Value<string>;
    Dynatrace?: Value<string>;
    GoogleAnalytics?: Value<string>;
    InforNexus?: Value<string>;
    Marketo?: Value<string>;
    S3?: Value<string>;
    Salesforce?: Value<string>;
    ServiceNow?: Value<string>;
    Singular?: Value<string>;
    Slack?: Value<string>;
    Trendmicro?: Value<string>;
    Veeva?: Value<string>;
    Zendesk?: Value<string>;
    constructor(properties: ConnectorOperator);
}
export declare class ZendeskSourceProperties {
    Object: Value<string>;
    constructor(properties: ZendeskSourceProperties);
}
export declare class SalesforceDestinationProperties {
    Object: Value<string>;
    ErrorHandlingConfig?: ErrorHandlingConfig;
    IdFieldNames?: List<Value<string>>;
    WriteOperationType?: Value<string>;
    constructor(properties: SalesforceDestinationProperties);
}
export declare class ErrorHandlingConfig {
    FailOnFirstError?: Value<boolean>;
    BucketPrefix?: Value<string>;
    BucketName?: Value<string>;
    constructor(properties: ErrorHandlingConfig);
}
export declare class S3SourceProperties {
    BucketName: Value<string>;
    BucketPrefix: Value<string>;
    constructor(properties: S3SourceProperties);
}
export declare class SalesforceSourceProperties {
    Object: Value<string>;
    EnableDynamicFieldUpdate?: Value<boolean>;
    IncludeDeletedRecords?: Value<boolean>;
    constructor(properties: SalesforceSourceProperties);
}
export declare class SingularSourceProperties {
    Object: Value<string>;
    constructor(properties: SingularSourceProperties);
}
export declare class EventBridgeDestinationProperties {
    Object: Value<string>;
    ErrorHandlingConfig?: ErrorHandlingConfig;
    constructor(properties: EventBridgeDestinationProperties);
}
export declare class MarketoSourceProperties {
    Object: Value<string>;
    constructor(properties: MarketoSourceProperties);
}
export declare class SlackSourceProperties {
    Object: Value<string>;
    constructor(properties: SlackSourceProperties);
}
export declare class RedshiftDestinationProperties {
    Object: Value<string>;
    IntermediateBucketName: Value<string>;
    BucketPrefix?: Value<string>;
    ErrorHandlingConfig?: ErrorHandlingConfig;
    constructor(properties: RedshiftDestinationProperties);
}
export declare class LookoutMetricsDestinationProperties {
    Object?: Value<string>;
    constructor(properties: LookoutMetricsDestinationProperties);
}
export declare class SourceFlowConfig {
    ConnectorType: Value<string>;
    ConnectorProfileName?: Value<string>;
    SourceConnectorProperties: SourceConnectorProperties;
    IncrementalPullConfig?: IncrementalPullConfig;
    constructor(properties: SourceFlowConfig);
}
export declare class UpsolverS3OutputFormatConfig {
    FileType?: Value<string>;
    PrefixConfig: PrefixConfig;
    AggregationConfig?: AggregationConfig;
    constructor(properties: UpsolverS3OutputFormatConfig);
}
export declare class UpsolverDestinationProperties {
    BucketName: Value<string>;
    BucketPrefix?: Value<string>;
    S3OutputFormatConfig: UpsolverS3OutputFormatConfig;
    constructor(properties: UpsolverDestinationProperties);
}
export declare class ServiceNowSourceProperties {
    Object: Value<string>;
    constructor(properties: ServiceNowSourceProperties);
}
export declare class ZendeskDestinationProperties {
    Object: Value<string>;
    ErrorHandlingConfig?: ErrorHandlingConfig;
    IdFieldNames?: List<Value<string>>;
    WriteOperationType?: Value<string>;
    constructor(properties: ZendeskDestinationProperties);
}
export declare class InforNexusSourceProperties {
    Object: Value<string>;
    constructor(properties: InforNexusSourceProperties);
}
export declare class S3DestinationProperties {
    BucketName: Value<string>;
    BucketPrefix?: Value<string>;
    S3OutputFormatConfig?: S3OutputFormatConfig;
    constructor(properties: S3DestinationProperties);
}
export declare class SourceConnectorProperties {
    Amplitude?: AmplitudeSourceProperties;
    Datadog?: DatadogSourceProperties;
    Dynatrace?: DynatraceSourceProperties;
    GoogleAnalytics?: GoogleAnalyticsSourceProperties;
    InforNexus?: InforNexusSourceProperties;
    Marketo?: MarketoSourceProperties;
    S3?: S3SourceProperties;
    Salesforce?: SalesforceSourceProperties;
    ServiceNow?: ServiceNowSourceProperties;
    Singular?: SingularSourceProperties;
    Slack?: SlackSourceProperties;
    Trendmicro?: TrendmicroSourceProperties;
    Veeva?: VeevaSourceProperties;
    Zendesk?: ZendeskSourceProperties;
    constructor(properties: SourceConnectorProperties);
}
export declare class TrendmicroSourceProperties {
    Object: Value<string>;
    constructor(properties: TrendmicroSourceProperties);
}
export declare class SnowflakeDestinationProperties {
    Object: Value<string>;
    IntermediateBucketName: Value<string>;
    BucketPrefix?: Value<string>;
    ErrorHandlingConfig?: ErrorHandlingConfig;
    constructor(properties: SnowflakeDestinationProperties);
}
export declare class GoogleAnalyticsSourceProperties {
    Object: Value<string>;
    constructor(properties: GoogleAnalyticsSourceProperties);
}
export declare class VeevaSourceProperties {
    Object: Value<string>;
    constructor(properties: VeevaSourceProperties);
}
export declare class DynatraceSourceProperties {
    Object: Value<string>;
    constructor(properties: DynatraceSourceProperties);
}
export declare class Task {
    SourceFields: List<Value<string>>;
    ConnectorOperator?: ConnectorOperator;
    DestinationField?: Value<string>;
    TaskType: Value<string>;
    TaskProperties?: List<TaskPropertiesObject>;
    constructor(properties: Task);
}
export declare class TaskPropertiesObject {
    Key: Value<string>;
    Value: Value<string>;
    constructor(properties: TaskPropertiesObject);
}
export declare class TriggerConfig {
    TriggerType: Value<string>;
    TriggerProperties?: ScheduledTriggerProperties;
    constructor(properties: TriggerConfig);
}
export declare class AmplitudeSourceProperties {
    Object: Value<string>;
    constructor(properties: AmplitudeSourceProperties);
}
export interface FlowProperties {
    FlowName: Value<string>;
    Description?: Value<string>;
    KMSArn?: Value<string>;
    TriggerConfig: TriggerConfig;
    SourceFlowConfig: SourceFlowConfig;
    DestinationFlowConfigList: List<DestinationFlowConfig>;
    Tasks: List<Task>;
    Tags?: List<ResourceTag>;
}
export default class Flow extends ResourceBase<FlowProperties> {
    static IncrementalPullConfig: typeof IncrementalPullConfig;
    static PrefixConfig: typeof PrefixConfig;
    static S3OutputFormatConfig: typeof S3OutputFormatConfig;
    static DestinationFlowConfig: typeof DestinationFlowConfig;
    static DatadogSourceProperties: typeof DatadogSourceProperties;
    static AggregationConfig: typeof AggregationConfig;
    static ScheduledTriggerProperties: typeof ScheduledTriggerProperties;
    static DestinationConnectorProperties: typeof DestinationConnectorProperties;
    static ConnectorOperator: typeof ConnectorOperator;
    static ZendeskSourceProperties: typeof ZendeskSourceProperties;
    static SalesforceDestinationProperties: typeof SalesforceDestinationProperties;
    static ErrorHandlingConfig: typeof ErrorHandlingConfig;
    static S3SourceProperties: typeof S3SourceProperties;
    static SalesforceSourceProperties: typeof SalesforceSourceProperties;
    static SingularSourceProperties: typeof SingularSourceProperties;
    static EventBridgeDestinationProperties: typeof EventBridgeDestinationProperties;
    static MarketoSourceProperties: typeof MarketoSourceProperties;
    static SlackSourceProperties: typeof SlackSourceProperties;
    static RedshiftDestinationProperties: typeof RedshiftDestinationProperties;
    static LookoutMetricsDestinationProperties: typeof LookoutMetricsDestinationProperties;
    static SourceFlowConfig: typeof SourceFlowConfig;
    static UpsolverS3OutputFormatConfig: typeof UpsolverS3OutputFormatConfig;
    static UpsolverDestinationProperties: typeof UpsolverDestinationProperties;
    static ServiceNowSourceProperties: typeof ServiceNowSourceProperties;
    static ZendeskDestinationProperties: typeof ZendeskDestinationProperties;
    static InforNexusSourceProperties: typeof InforNexusSourceProperties;
    static S3DestinationProperties: typeof S3DestinationProperties;
    static SourceConnectorProperties: typeof SourceConnectorProperties;
    static TrendmicroSourceProperties: typeof TrendmicroSourceProperties;
    static SnowflakeDestinationProperties: typeof SnowflakeDestinationProperties;
    static GoogleAnalyticsSourceProperties: typeof GoogleAnalyticsSourceProperties;
    static VeevaSourceProperties: typeof VeevaSourceProperties;
    static DynatraceSourceProperties: typeof DynatraceSourceProperties;
    static Task: typeof Task;
    static TaskPropertiesObject: typeof TaskPropertiesObject;
    static TriggerConfig: typeof TriggerConfig;
    static AmplitudeSourceProperties: typeof AmplitudeSourceProperties;
    constructor(properties: FlowProperties);
}
