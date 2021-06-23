import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class Task {
    ConnectorOperator?: ConnectorOperator;
    SourceFields: List<Value<string>>;
    DestinationField?: Value<string>;
    TaskType: Value<string>;
    TaskProperties?: List<TaskPropertiesMap>;
    constructor(properties: Task);
}
export declare class TriggerProperties {
    Scheduled?: ScheduledTriggerProperties;
    constructor(properties: TriggerProperties);
}
export declare class ScheduledTriggerProperties {
    ScheduleExpression: Value<string>;
    DataPullMode?: Value<string>;
    ScheduleStartTime?: Value<number>;
    ScheduleEndTime?: Value<number>;
    Timezone?: Value<string>;
    ScheduleOffset?: Value<number>;
    FirstExecutionFrom?: Value<number>;
    constructor(properties: ScheduledTriggerProperties);
}
export declare class S3SourceProperties {
    BucketName: Value<string>;
    BucketPrefix?: Value<string>;
    constructor(properties: S3SourceProperties);
}
export declare class FlowDefinition {
    FlowName: Value<string>;
    Description?: Value<string>;
    KmsArn: Value<string>;
    Tasks: List<Task>;
    TriggerConfig: TriggerConfig;
    SourceFlowConfig: SourceFlowConfig;
    constructor(properties: FlowDefinition);
}
export declare class IncrementalPullConfig {
    DatetimeTypeFieldName?: Value<string>;
    constructor(properties: IncrementalPullConfig);
}
export declare class MarketoSourceProperties {
    Object: Value<string>;
    constructor(properties: MarketoSourceProperties);
}
export declare class TaskPropertiesMap {
    OperatorPropertyKey: Value<string>;
    Property: Value<string>;
    constructor(properties: TaskPropertiesMap);
}
export declare class ConnectorOperator {
    Marketo?: Value<string>;
    S3?: Value<string>;
    Salesforce?: Value<string>;
    ServiceNow?: Value<string>;
    Zendesk?: Value<string>;
    constructor(properties: ConnectorOperator);
}
export declare class ZendeskSourceProperties {
    Object: Value<string>;
    constructor(properties: ZendeskSourceProperties);
}
export declare class SourceConnectorProperties {
    Marketo?: MarketoSourceProperties;
    S3?: S3SourceProperties;
    Salesforce?: SalesforceSourceProperties;
    ServiceNow?: ServiceNowSourceProperties;
    Zendesk?: ZendeskSourceProperties;
    constructor(properties: SourceConnectorProperties);
}
export declare class ServiceNowSourceProperties {
    Object: Value<string>;
    constructor(properties: ServiceNowSourceProperties);
}
export declare class SalesforceSourceProperties {
    Object: Value<string>;
    EnableDynamicFieldUpdate?: Value<boolean>;
    IncludeDeletedRecords?: Value<boolean>;
    constructor(properties: SalesforceSourceProperties);
}
export declare class TriggerConfig {
    TriggerType: Value<string>;
    TriggerProperties?: TriggerProperties;
    constructor(properties: TriggerConfig);
}
export declare class SourceFlowConfig {
    ConnectorType: Value<string>;
    ConnectorProfileName?: Value<string>;
    IncrementalPullConfig?: IncrementalPullConfig;
    SourceConnectorProperties: SourceConnectorProperties;
    constructor(properties: SourceFlowConfig);
}
export interface IntegrationProperties {
    DomainName: Value<string>;
    Uri?: Value<string>;
    FlowDefinition?: FlowDefinition;
    ObjectTypeName: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class Integration extends ResourceBase<IntegrationProperties> {
    static Task: typeof Task;
    static TriggerProperties: typeof TriggerProperties;
    static ScheduledTriggerProperties: typeof ScheduledTriggerProperties;
    static S3SourceProperties: typeof S3SourceProperties;
    static FlowDefinition: typeof FlowDefinition;
    static IncrementalPullConfig: typeof IncrementalPullConfig;
    static MarketoSourceProperties: typeof MarketoSourceProperties;
    static TaskPropertiesMap: typeof TaskPropertiesMap;
    static ConnectorOperator: typeof ConnectorOperator;
    static ZendeskSourceProperties: typeof ZendeskSourceProperties;
    static SourceConnectorProperties: typeof SourceConnectorProperties;
    static ServiceNowSourceProperties: typeof ServiceNowSourceProperties;
    static SalesforceSourceProperties: typeof SalesforceSourceProperties;
    static TriggerConfig: typeof TriggerConfig;
    static SourceFlowConfig: typeof SourceFlowConfig;
    constructor(properties: IntegrationProperties);
}
