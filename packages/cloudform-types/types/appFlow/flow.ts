/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class IncrementalPullConfig {
    DatetimeTypeFieldName?: Value<string>

    constructor(properties: IncrementalPullConfig) {
        Object.assign(this, properties)
    }
}

export class PrefixConfig {
    PrefixType?: Value<string>
    PrefixFormat?: Value<string>

    constructor(properties: PrefixConfig) {
        Object.assign(this, properties)
    }
}

export class S3OutputFormatConfig {
    FileType?: Value<string>
    PrefixConfig?: PrefixConfig
    AggregationConfig?: AggregationConfig

    constructor(properties: S3OutputFormatConfig) {
        Object.assign(this, properties)
    }
}

export class DestinationFlowConfig {
    ConnectorType!: Value<string>
    ConnectorProfileName?: Value<string>
    DestinationConnectorProperties!: DestinationConnectorProperties

    constructor(properties: DestinationFlowConfig) {
        Object.assign(this, properties)
    }
}

export class DatadogSourceProperties {
    Object!: Value<string>

    constructor(properties: DatadogSourceProperties) {
        Object.assign(this, properties)
    }
}

export class AggregationConfig {
    AggregationType?: Value<string>

    constructor(properties: AggregationConfig) {
        Object.assign(this, properties)
    }
}

export class ScheduledTriggerProperties {
    ScheduleExpression!: Value<string>
    DataPullMode?: Value<string>
    ScheduleStartTime?: Value<number>
    ScheduleEndTime?: Value<number>
    TimeZone?: Value<string>

    constructor(properties: ScheduledTriggerProperties) {
        Object.assign(this, properties)
    }
}

export class DestinationConnectorProperties {
    Redshift?: RedshiftDestinationProperties
    S3?: S3DestinationProperties
    Salesforce?: SalesforceDestinationProperties
    Snowflake?: SnowflakeDestinationProperties
    EventBridge?: EventBridgeDestinationProperties
    Upsolver?: UpsolverDestinationProperties
    LookoutMetrics?: LookoutMetricsDestinationProperties
    Zendesk?: ZendeskDestinationProperties

    constructor(properties: DestinationConnectorProperties) {
        Object.assign(this, properties)
    }
}

export class ConnectorOperator {
    Amplitude?: Value<string>
    Datadog?: Value<string>
    Dynatrace?: Value<string>
    GoogleAnalytics?: Value<string>
    InforNexus?: Value<string>
    Marketo?: Value<string>
    S3?: Value<string>
    Salesforce?: Value<string>
    ServiceNow?: Value<string>
    Singular?: Value<string>
    Slack?: Value<string>
    Trendmicro?: Value<string>
    Veeva?: Value<string>
    Zendesk?: Value<string>

    constructor(properties: ConnectorOperator) {
        Object.assign(this, properties)
    }
}

export class ZendeskSourceProperties {
    Object!: Value<string>

    constructor(properties: ZendeskSourceProperties) {
        Object.assign(this, properties)
    }
}

export class SalesforceDestinationProperties {
    Object!: Value<string>
    ErrorHandlingConfig?: ErrorHandlingConfig
    IdFieldNames?: List<Value<string>>
    WriteOperationType?: Value<string>

    constructor(properties: SalesforceDestinationProperties) {
        Object.assign(this, properties)
    }
}

export class ErrorHandlingConfig {
    FailOnFirstError?: Value<boolean>
    BucketPrefix?: Value<string>
    BucketName?: Value<string>

    constructor(properties: ErrorHandlingConfig) {
        Object.assign(this, properties)
    }
}

export class S3SourceProperties {
    BucketName!: Value<string>
    BucketPrefix!: Value<string>

    constructor(properties: S3SourceProperties) {
        Object.assign(this, properties)
    }
}

export class SalesforceSourceProperties {
    Object!: Value<string>
    EnableDynamicFieldUpdate?: Value<boolean>
    IncludeDeletedRecords?: Value<boolean>

    constructor(properties: SalesforceSourceProperties) {
        Object.assign(this, properties)
    }
}

export class SingularSourceProperties {
    Object!: Value<string>

    constructor(properties: SingularSourceProperties) {
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

export class MarketoSourceProperties {
    Object!: Value<string>

    constructor(properties: MarketoSourceProperties) {
        Object.assign(this, properties)
    }
}

export class SlackSourceProperties {
    Object!: Value<string>

    constructor(properties: SlackSourceProperties) {
        Object.assign(this, properties)
    }
}

export class RedshiftDestinationProperties {
    Object!: Value<string>
    IntermediateBucketName!: Value<string>
    BucketPrefix?: Value<string>
    ErrorHandlingConfig?: ErrorHandlingConfig

    constructor(properties: RedshiftDestinationProperties) {
        Object.assign(this, properties)
    }
}

export class LookoutMetricsDestinationProperties {
    Object?: Value<string>

    constructor(properties: LookoutMetricsDestinationProperties) {
        Object.assign(this, properties)
    }
}

export class SourceFlowConfig {
    ConnectorType!: Value<string>
    ConnectorProfileName?: Value<string>
    SourceConnectorProperties!: SourceConnectorProperties
    IncrementalPullConfig?: IncrementalPullConfig

    constructor(properties: SourceFlowConfig) {
        Object.assign(this, properties)
    }
}

export class UpsolverS3OutputFormatConfig {
    FileType?: Value<string>
    PrefixConfig!: PrefixConfig
    AggregationConfig?: AggregationConfig

    constructor(properties: UpsolverS3OutputFormatConfig) {
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

export class ServiceNowSourceProperties {
    Object!: Value<string>

    constructor(properties: ServiceNowSourceProperties) {
        Object.assign(this, properties)
    }
}

export class ZendeskDestinationProperties {
    Object!: Value<string>
    ErrorHandlingConfig?: ErrorHandlingConfig
    IdFieldNames?: List<Value<string>>
    WriteOperationType?: Value<string>

    constructor(properties: ZendeskDestinationProperties) {
        Object.assign(this, properties)
    }
}

export class InforNexusSourceProperties {
    Object!: Value<string>

    constructor(properties: InforNexusSourceProperties) {
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

export class SourceConnectorProperties {
    Amplitude?: AmplitudeSourceProperties
    Datadog?: DatadogSourceProperties
    Dynatrace?: DynatraceSourceProperties
    GoogleAnalytics?: GoogleAnalyticsSourceProperties
    InforNexus?: InforNexusSourceProperties
    Marketo?: MarketoSourceProperties
    S3?: S3SourceProperties
    Salesforce?: SalesforceSourceProperties
    ServiceNow?: ServiceNowSourceProperties
    Singular?: SingularSourceProperties
    Slack?: SlackSourceProperties
    Trendmicro?: TrendmicroSourceProperties
    Veeva?: VeevaSourceProperties
    Zendesk?: ZendeskSourceProperties

    constructor(properties: SourceConnectorProperties) {
        Object.assign(this, properties)
    }
}

export class TrendmicroSourceProperties {
    Object!: Value<string>

    constructor(properties: TrendmicroSourceProperties) {
        Object.assign(this, properties)
    }
}

export class SnowflakeDestinationProperties {
    Object!: Value<string>
    IntermediateBucketName!: Value<string>
    BucketPrefix?: Value<string>
    ErrorHandlingConfig?: ErrorHandlingConfig

    constructor(properties: SnowflakeDestinationProperties) {
        Object.assign(this, properties)
    }
}

export class GoogleAnalyticsSourceProperties {
    Object!: Value<string>

    constructor(properties: GoogleAnalyticsSourceProperties) {
        Object.assign(this, properties)
    }
}

export class VeevaSourceProperties {
    Object!: Value<string>

    constructor(properties: VeevaSourceProperties) {
        Object.assign(this, properties)
    }
}

export class DynatraceSourceProperties {
    Object!: Value<string>

    constructor(properties: DynatraceSourceProperties) {
        Object.assign(this, properties)
    }
}

export class Task {
    SourceFields!: List<Value<string>>
    ConnectorOperator?: ConnectorOperator
    DestinationField?: Value<string>
    TaskType!: Value<string>
    TaskProperties?: List<TaskPropertiesObject>

    constructor(properties: Task) {
        Object.assign(this, properties)
    }
}

export class TaskPropertiesObject {
    Key!: Value<string>
    Value!: Value<string>

    constructor(properties: TaskPropertiesObject) {
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

export class AmplitudeSourceProperties {
    Object!: Value<string>

    constructor(properties: AmplitudeSourceProperties) {
        Object.assign(this, properties)
    }
}

export interface FlowProperties {
    FlowName: Value<string>
    Description?: Value<string>
    KMSArn?: Value<string>
    TriggerConfig: TriggerConfig
    SourceFlowConfig: SourceFlowConfig
    DestinationFlowConfigList: List<DestinationFlowConfig>
    Tasks: List<Task>
    Tags?: List<ResourceTag>
}

export default class Flow extends ResourceBase<FlowProperties> {
    static IncrementalPullConfig = IncrementalPullConfig
    static PrefixConfig = PrefixConfig
    static S3OutputFormatConfig = S3OutputFormatConfig
    static DestinationFlowConfig = DestinationFlowConfig
    static DatadogSourceProperties = DatadogSourceProperties
    static AggregationConfig = AggregationConfig
    static ScheduledTriggerProperties = ScheduledTriggerProperties
    static DestinationConnectorProperties = DestinationConnectorProperties
    static ConnectorOperator = ConnectorOperator
    static ZendeskSourceProperties = ZendeskSourceProperties
    static SalesforceDestinationProperties = SalesforceDestinationProperties
    static ErrorHandlingConfig = ErrorHandlingConfig
    static S3SourceProperties = S3SourceProperties
    static SalesforceSourceProperties = SalesforceSourceProperties
    static SingularSourceProperties = SingularSourceProperties
    static EventBridgeDestinationProperties = EventBridgeDestinationProperties
    static MarketoSourceProperties = MarketoSourceProperties
    static SlackSourceProperties = SlackSourceProperties
    static RedshiftDestinationProperties = RedshiftDestinationProperties
    static LookoutMetricsDestinationProperties = LookoutMetricsDestinationProperties
    static SourceFlowConfig = SourceFlowConfig
    static UpsolverS3OutputFormatConfig = UpsolverS3OutputFormatConfig
    static UpsolverDestinationProperties = UpsolverDestinationProperties
    static ServiceNowSourceProperties = ServiceNowSourceProperties
    static ZendeskDestinationProperties = ZendeskDestinationProperties
    static InforNexusSourceProperties = InforNexusSourceProperties
    static S3DestinationProperties = S3DestinationProperties
    static SourceConnectorProperties = SourceConnectorProperties
    static TrendmicroSourceProperties = TrendmicroSourceProperties
    static SnowflakeDestinationProperties = SnowflakeDestinationProperties
    static GoogleAnalyticsSourceProperties = GoogleAnalyticsSourceProperties
    static VeevaSourceProperties = VeevaSourceProperties
    static DynatraceSourceProperties = DynatraceSourceProperties
    static Task = Task
    static TaskPropertiesObject = TaskPropertiesObject
    static TriggerConfig = TriggerConfig
    static AmplitudeSourceProperties = AmplitudeSourceProperties

    constructor(properties: FlowProperties) {
        super('AWS::AppFlow::Flow', properties)
    }
}
