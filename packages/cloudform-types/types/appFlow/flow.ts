/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class AggregationConfig {
    TargetFileSize?: Value<number>
    AggregationType?: Value<string>

    constructor(properties: AggregationConfig) {
        Object.assign(this, properties)
    }
}

export class AmplitudeSourceProperties {
    Object!: Value<string>

    constructor(properties: AmplitudeSourceProperties) {
        Object.assign(this, properties)
    }
}

export class ConnectorOperator {
    Amplitude?: Value<string>
    S3?: Value<string>
    GoogleAnalytics?: Value<string>
    ServiceNow?: Value<string>
    CustomConnector?: Value<string>
    SAPOData?: Value<string>
    Pardot?: Value<string>
    Veeva?: Value<string>
    Trendmicro?: Value<string>
    Datadog?: Value<string>
    Marketo?: Value<string>
    Singular?: Value<string>
    Slack?: Value<string>
    Dynatrace?: Value<string>
    Zendesk?: Value<string>
    InforNexus?: Value<string>
    Salesforce?: Value<string>

    constructor(properties: ConnectorOperator) {
        Object.assign(this, properties)
    }
}

export class CustomConnectorDestinationProperties {
    IdFieldNames?: List<Value<string>>
    EntityName!: Value<string>
    WriteOperationType?: Value<string>
    ErrorHandlingConfig?: ErrorHandlingConfig
    CustomProperties?: {[key: string]: Value<string>}

    constructor(properties: CustomConnectorDestinationProperties) {
        Object.assign(this, properties)
    }
}

export class CustomConnectorSourceProperties {
    EntityName!: Value<string>
    DataTransferApi?: DataTransferApi
    CustomProperties?: {[key: string]: Value<string>}

    constructor(properties: CustomConnectorSourceProperties) {
        Object.assign(this, properties)
    }
}

export class DataTransferApi {
    Type!: Value<string>
    Name!: Value<string>

    constructor(properties: DataTransferApi) {
        Object.assign(this, properties)
    }
}

export class DatadogSourceProperties {
    Object!: Value<string>

    constructor(properties: DatadogSourceProperties) {
        Object.assign(this, properties)
    }
}

export class DestinationConnectorProperties {
    S3?: S3DestinationProperties
    CustomConnector?: CustomConnectorDestinationProperties
    Upsolver?: UpsolverDestinationProperties
    SAPOData?: SAPODataDestinationProperties
    Snowflake?: SnowflakeDestinationProperties
    LookoutMetrics?: LookoutMetricsDestinationProperties
    EventBridge?: EventBridgeDestinationProperties
    Zendesk?: ZendeskDestinationProperties
    Marketo?: MarketoDestinationProperties
    Redshift?: RedshiftDestinationProperties
    Salesforce?: SalesforceDestinationProperties

    constructor(properties: DestinationConnectorProperties) {
        Object.assign(this, properties)
    }
}

export class DestinationFlowConfig {
    ConnectorProfileName?: Value<string>
    ApiVersion?: Value<string>
    ConnectorType!: Value<string>
    DestinationConnectorProperties!: DestinationConnectorProperties

    constructor(properties: DestinationFlowConfig) {
        Object.assign(this, properties)
    }
}

export class DynatraceSourceProperties {
    Object!: Value<string>

    constructor(properties: DynatraceSourceProperties) {
        Object.assign(this, properties)
    }
}

export class ErrorHandlingConfig {
    BucketName?: Value<string>
    BucketPrefix?: Value<string>
    FailOnFirstError?: Value<boolean>

    constructor(properties: ErrorHandlingConfig) {
        Object.assign(this, properties)
    }
}

export class EventBridgeDestinationProperties {
    Object!: Value<string>
    ErrorHandlingConfig?: ErrorHandlingConfig

    constructor(properties: EventBridgeDestinationProperties) {
        Object.assign(this, properties)
    }
}

export class GlueDataCatalog {
    DatabaseName!: Value<string>
    RoleArn!: Value<string>
    TablePrefix!: Value<string>

    constructor(properties: GlueDataCatalog) {
        Object.assign(this, properties)
    }
}

export class GoogleAnalyticsSourceProperties {
    Object!: Value<string>

    constructor(properties: GoogleAnalyticsSourceProperties) {
        Object.assign(this, properties)
    }
}

export class IncrementalPullConfig {
    DatetimeTypeFieldName?: Value<string>

    constructor(properties: IncrementalPullConfig) {
        Object.assign(this, properties)
    }
}

export class InforNexusSourceProperties {
    Object!: Value<string>

    constructor(properties: InforNexusSourceProperties) {
        Object.assign(this, properties)
    }
}

export class LookoutMetricsDestinationProperties {
    Object?: Value<string>

    constructor(properties: LookoutMetricsDestinationProperties) {
        Object.assign(this, properties)
    }
}

export class MarketoDestinationProperties {
    Object!: Value<string>
    ErrorHandlingConfig?: ErrorHandlingConfig

    constructor(properties: MarketoDestinationProperties) {
        Object.assign(this, properties)
    }
}

export class MarketoSourceProperties {
    Object!: Value<string>

    constructor(properties: MarketoSourceProperties) {
        Object.assign(this, properties)
    }
}

export class MetadataCatalogConfig {
    GlueDataCatalog?: GlueDataCatalog

    constructor(properties: MetadataCatalogConfig) {
        Object.assign(this, properties)
    }
}

export class PardotSourceProperties {
    Object!: Value<string>

    constructor(properties: PardotSourceProperties) {
        Object.assign(this, properties)
    }
}

export class PrefixConfig {
    PrefixType?: Value<string>
    PathPrefixHierarchy?: List<Value<string>>
    PrefixFormat?: Value<string>

    constructor(properties: PrefixConfig) {
        Object.assign(this, properties)
    }
}

export class RedshiftDestinationProperties {
    Object!: Value<string>
    BucketPrefix?: Value<string>
    IntermediateBucketName!: Value<string>
    ErrorHandlingConfig?: ErrorHandlingConfig

    constructor(properties: RedshiftDestinationProperties) {
        Object.assign(this, properties)
    }
}

export class S3DestinationProperties {
    BucketName!: Value<string>
    BucketPrefix?: Value<string>
    S3OutputFormatConfig?: S3OutputFormatConfig

    constructor(properties: S3DestinationProperties) {
        Object.assign(this, properties)
    }
}

export class S3InputFormatConfig {
    S3InputFileType?: Value<string>

    constructor(properties: S3InputFormatConfig) {
        Object.assign(this, properties)
    }
}

export class S3OutputFormatConfig {
    PrefixConfig?: PrefixConfig
    FileType?: Value<string>
    AggregationConfig?: AggregationConfig
    PreserveSourceDataTyping?: Value<boolean>

    constructor(properties: S3OutputFormatConfig) {
        Object.assign(this, properties)
    }
}

export class S3SourceProperties {
    S3InputFormatConfig?: S3InputFormatConfig
    BucketName!: Value<string>
    BucketPrefix!: Value<string>

    constructor(properties: S3SourceProperties) {
        Object.assign(this, properties)
    }
}

export class SAPODataDestinationProperties {
    IdFieldNames?: List<Value<string>>
    ObjectPath!: Value<string>
    WriteOperationType?: Value<string>
    ErrorHandlingConfig?: ErrorHandlingConfig
    SuccessResponseHandlingConfig?: SuccessResponseHandlingConfig

    constructor(properties: SAPODataDestinationProperties) {
        Object.assign(this, properties)
    }
}

export class SAPODataPaginationConfig {
    maxPageSize!: Value<number>

    constructor(properties: SAPODataPaginationConfig) {
        Object.assign(this, properties)
    }
}

export class SAPODataParallelismConfig {
    maxParallelism!: Value<number>

    constructor(properties: SAPODataParallelismConfig) {
        Object.assign(this, properties)
    }
}

export class SAPODataSourceProperties {
    ObjectPath!: Value<string>
    paginationConfig?: SAPODataPaginationConfig
    parallelismConfig?: SAPODataParallelismConfig

    constructor(properties: SAPODataSourceProperties) {
        Object.assign(this, properties)
    }
}

export class SalesforceDestinationProperties {
    IdFieldNames?: List<Value<string>>
    WriteOperationType?: Value<string>
    DataTransferApi?: Value<string>
    Object!: Value<string>
    ErrorHandlingConfig?: ErrorHandlingConfig

    constructor(properties: SalesforceDestinationProperties) {
        Object.assign(this, properties)
    }
}

export class SalesforceSourceProperties {
    IncludeDeletedRecords?: Value<boolean>
    DataTransferApi?: Value<string>
    Object!: Value<string>
    EnableDynamicFieldUpdate?: Value<boolean>

    constructor(properties: SalesforceSourceProperties) {
        Object.assign(this, properties)
    }
}

export class ScheduledTriggerProperties {
    ScheduleEndTime?: Value<number>
    ScheduleExpression!: Value<string>
    FirstExecutionFrom?: Value<number>
    TimeZone?: Value<string>
    ScheduleStartTime?: Value<number>
    DataPullMode?: Value<string>
    ScheduleOffset?: Value<number>
    FlowErrorDeactivationThreshold?: Value<number>

    constructor(properties: ScheduledTriggerProperties) {
        Object.assign(this, properties)
    }
}

export class ServiceNowSourceProperties {
    Object!: Value<string>

    constructor(properties: ServiceNowSourceProperties) {
        Object.assign(this, properties)
    }
}

export class SingularSourceProperties {
    Object!: Value<string>

    constructor(properties: SingularSourceProperties) {
        Object.assign(this, properties)
    }
}

export class SlackSourceProperties {
    Object!: Value<string>

    constructor(properties: SlackSourceProperties) {
        Object.assign(this, properties)
    }
}

export class SnowflakeDestinationProperties {
    Object!: Value<string>
    BucketPrefix?: Value<string>
    IntermediateBucketName!: Value<string>
    ErrorHandlingConfig?: ErrorHandlingConfig

    constructor(properties: SnowflakeDestinationProperties) {
        Object.assign(this, properties)
    }
}

export class SourceConnectorProperties {
    Amplitude?: AmplitudeSourceProperties
    S3?: S3SourceProperties
    GoogleAnalytics?: GoogleAnalyticsSourceProperties
    ServiceNow?: ServiceNowSourceProperties
    CustomConnector?: CustomConnectorSourceProperties
    SAPOData?: SAPODataSourceProperties
    Pardot?: PardotSourceProperties
    Veeva?: VeevaSourceProperties
    Trendmicro?: TrendmicroSourceProperties
    Datadog?: DatadogSourceProperties
    Marketo?: MarketoSourceProperties
    Singular?: SingularSourceProperties
    Slack?: SlackSourceProperties
    Dynatrace?: DynatraceSourceProperties
    Zendesk?: ZendeskSourceProperties
    InforNexus?: InforNexusSourceProperties
    Salesforce?: SalesforceSourceProperties

    constructor(properties: SourceConnectorProperties) {
        Object.assign(this, properties)
    }
}

export class SourceFlowConfig {
    ConnectorProfileName?: Value<string>
    ApiVersion?: Value<string>
    SourceConnectorProperties!: SourceConnectorProperties
    ConnectorType!: Value<string>
    IncrementalPullConfig?: IncrementalPullConfig

    constructor(properties: SourceFlowConfig) {
        Object.assign(this, properties)
    }
}

export class SuccessResponseHandlingConfig {
    BucketName?: Value<string>
    BucketPrefix?: Value<string>

    constructor(properties: SuccessResponseHandlingConfig) {
        Object.assign(this, properties)
    }
}

export class Task {
    SourceFields!: List<Value<string>>
    DestinationField?: Value<string>
    ConnectorOperator?: ConnectorOperator
    TaskType!: Value<string>
    TaskProperties?: List<TaskPropertiesObject>

    constructor(properties: Task) {
        Object.assign(this, properties)
    }
}

export class TaskPropertiesObject {
    Value!: Value<string>
    Key!: Value<string>

    constructor(properties: TaskPropertiesObject) {
        Object.assign(this, properties)
    }
}

export class TrendmicroSourceProperties {
    Object!: Value<string>

    constructor(properties: TrendmicroSourceProperties) {
        Object.assign(this, properties)
    }
}

export class TriggerConfig {
    TriggerType!: Value<string>
    TriggerProperties?: ScheduledTriggerProperties

    constructor(properties: TriggerConfig) {
        Object.assign(this, properties)
    }
}

export class UpsolverDestinationProperties {
    BucketName!: Value<string>
    BucketPrefix?: Value<string>
    S3OutputFormatConfig!: UpsolverS3OutputFormatConfig

    constructor(properties: UpsolverDestinationProperties) {
        Object.assign(this, properties)
    }
}

export class UpsolverS3OutputFormatConfig {
    PrefixConfig!: PrefixConfig
    FileType?: Value<string>
    AggregationConfig?: AggregationConfig

    constructor(properties: UpsolverS3OutputFormatConfig) {
        Object.assign(this, properties)
    }
}

export class VeevaSourceProperties {
    IncludeAllVersions?: Value<boolean>
    IncludeRenditions?: Value<boolean>
    DocumentType?: Value<string>
    Object!: Value<string>
    IncludeSourceFiles?: Value<boolean>

    constructor(properties: VeevaSourceProperties) {
        Object.assign(this, properties)
    }
}

export class ZendeskDestinationProperties {
    IdFieldNames?: List<Value<string>>
    WriteOperationType?: Value<string>
    Object!: Value<string>
    ErrorHandlingConfig?: ErrorHandlingConfig

    constructor(properties: ZendeskDestinationProperties) {
        Object.assign(this, properties)
    }
}

export class ZendeskSourceProperties {
    Object!: Value<string>

    constructor(properties: ZendeskSourceProperties) {
        Object.assign(this, properties)
    }
}

export interface FlowProperties {
    Description?: Value<string>
    KMSArn?: Value<string>
    Tasks: List<Task>
    FlowName: Value<string>
    TriggerConfig: TriggerConfig
    DestinationFlowConfigList: List<DestinationFlowConfig>
    SourceFlowConfig: SourceFlowConfig
    FlowStatus?: Value<string>
    Tags?: List<ResourceTag>
    MetadataCatalogConfig?: MetadataCatalogConfig
}

export default class Flow extends ResourceBase<FlowProperties> {
    static AggregationConfig = AggregationConfig
    static AmplitudeSourceProperties = AmplitudeSourceProperties
    static ConnectorOperator = ConnectorOperator
    static CustomConnectorDestinationProperties = CustomConnectorDestinationProperties
    static CustomConnectorSourceProperties = CustomConnectorSourceProperties
    static DataTransferApi = DataTransferApi
    static DatadogSourceProperties = DatadogSourceProperties
    static DestinationConnectorProperties = DestinationConnectorProperties
    static DestinationFlowConfig = DestinationFlowConfig
    static DynatraceSourceProperties = DynatraceSourceProperties
    static ErrorHandlingConfig = ErrorHandlingConfig
    static EventBridgeDestinationProperties = EventBridgeDestinationProperties
    static GlueDataCatalog = GlueDataCatalog
    static GoogleAnalyticsSourceProperties = GoogleAnalyticsSourceProperties
    static IncrementalPullConfig = IncrementalPullConfig
    static InforNexusSourceProperties = InforNexusSourceProperties
    static LookoutMetricsDestinationProperties = LookoutMetricsDestinationProperties
    static MarketoDestinationProperties = MarketoDestinationProperties
    static MarketoSourceProperties = MarketoSourceProperties
    static MetadataCatalogConfig = MetadataCatalogConfig
    static PardotSourceProperties = PardotSourceProperties
    static PrefixConfig = PrefixConfig
    static RedshiftDestinationProperties = RedshiftDestinationProperties
    static S3DestinationProperties = S3DestinationProperties
    static S3InputFormatConfig = S3InputFormatConfig
    static S3OutputFormatConfig = S3OutputFormatConfig
    static S3SourceProperties = S3SourceProperties
    static SAPODataDestinationProperties = SAPODataDestinationProperties
    static SAPODataPaginationConfig = SAPODataPaginationConfig
    static SAPODataParallelismConfig = SAPODataParallelismConfig
    static SAPODataSourceProperties = SAPODataSourceProperties
    static SalesforceDestinationProperties = SalesforceDestinationProperties
    static SalesforceSourceProperties = SalesforceSourceProperties
    static ScheduledTriggerProperties = ScheduledTriggerProperties
    static ServiceNowSourceProperties = ServiceNowSourceProperties
    static SingularSourceProperties = SingularSourceProperties
    static SlackSourceProperties = SlackSourceProperties
    static SnowflakeDestinationProperties = SnowflakeDestinationProperties
    static SourceConnectorProperties = SourceConnectorProperties
    static SourceFlowConfig = SourceFlowConfig
    static SuccessResponseHandlingConfig = SuccessResponseHandlingConfig
    static Task = Task
    static TaskPropertiesObject = TaskPropertiesObject
    static TrendmicroSourceProperties = TrendmicroSourceProperties
    static TriggerConfig = TriggerConfig
    static UpsolverDestinationProperties = UpsolverDestinationProperties
    static UpsolverS3OutputFormatConfig = UpsolverS3OutputFormatConfig
    static VeevaSourceProperties = VeevaSourceProperties
    static ZendeskDestinationProperties = ZendeskDestinationProperties
    static ZendeskSourceProperties = ZendeskSourceProperties

    constructor(properties: FlowProperties) {
        super('AWS::AppFlow::Flow', properties)
    }
}
