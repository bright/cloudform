import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class ConnectorOperator {
    S3?: Value<string>;
    ServiceNow?: Value<string>;
    Zendesk?: Value<string>;
    Marketo?: Value<string>;
    Salesforce?: Value<string>;
    constructor(properties: ConnectorOperator);
}
export declare class FlowDefinition {
    Description?: Value<string>;
    Tasks: List<Task>;
    FlowName: Value<string>;
    TriggerConfig: TriggerConfig;
    SourceFlowConfig: SourceFlowConfig;
    KmsArn: Value<string>;
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
export declare class ObjectTypeMapping {
    Value: Value<string>;
    Key: Value<string>;
    constructor(properties: ObjectTypeMapping);
}
export declare class S3SourceProperties {
    BucketName: Value<string>;
    BucketPrefix?: Value<string>;
    constructor(properties: S3SourceProperties);
}
export declare class SalesforceSourceProperties {
    IncludeDeletedRecords?: Value<boolean>;
    Object: Value<string>;
    EnableDynamicFieldUpdate?: Value<boolean>;
    constructor(properties: SalesforceSourceProperties);
}
export declare class ScheduledTriggerProperties {
    ScheduleEndTime?: Value<number>;
    Timezone?: Value<string>;
    ScheduleExpression: Value<string>;
    FirstExecutionFrom?: Value<number>;
    ScheduleStartTime?: Value<number>;
    DataPullMode?: Value<string>;
    ScheduleOffset?: Value<number>;
    constructor(properties: ScheduledTriggerProperties);
}
export declare class ServiceNowSourceProperties {
    Object: Value<string>;
    constructor(properties: ServiceNowSourceProperties);
}
export declare class SourceConnectorProperties {
    S3?: S3SourceProperties;
    ServiceNow?: ServiceNowSourceProperties;
    Zendesk?: ZendeskSourceProperties;
    Marketo?: MarketoSourceProperties;
    Salesforce?: SalesforceSourceProperties;
    constructor(properties: SourceConnectorProperties);
}
export declare class SourceFlowConfig {
    ConnectorProfileName?: Value<string>;
    SourceConnectorProperties: SourceConnectorProperties;
    ConnectorType: Value<string>;
    IncrementalPullConfig?: IncrementalPullConfig;
    constructor(properties: SourceFlowConfig);
}
export declare class Task {
    SourceFields: List<Value<string>>;
    DestinationField?: Value<string>;
    ConnectorOperator?: ConnectorOperator;
    TaskType: Value<string>;
    TaskProperties?: List<TaskPropertiesMap>;
    constructor(properties: Task);
}
export declare class TaskPropertiesMap {
    OperatorPropertyKey: Value<string>;
    Property: Value<string>;
    constructor(properties: TaskPropertiesMap);
}
export declare class TriggerConfig {
    TriggerType: Value<string>;
    TriggerProperties?: TriggerProperties;
    constructor(properties: TriggerConfig);
}
export declare class TriggerProperties {
    Scheduled?: ScheduledTriggerProperties;
    constructor(properties: TriggerProperties);
}
export declare class ZendeskSourceProperties {
    Object: Value<string>;
    constructor(properties: ZendeskSourceProperties);
}
export interface IntegrationProperties {
    ObjectTypeNames?: List<ObjectTypeMapping>;
    DomainName: Value<string>;
    ObjectTypeName?: Value<string>;
    Uri?: Value<string>;
    FlowDefinition?: FlowDefinition;
    Tags?: List<ResourceTag>;
}
export default class Integration extends ResourceBase<IntegrationProperties> {
    static ConnectorOperator: typeof ConnectorOperator;
    static FlowDefinition: typeof FlowDefinition;
    static IncrementalPullConfig: typeof IncrementalPullConfig;
    static MarketoSourceProperties: typeof MarketoSourceProperties;
    static ObjectTypeMapping: typeof ObjectTypeMapping;
    static S3SourceProperties: typeof S3SourceProperties;
    static SalesforceSourceProperties: typeof SalesforceSourceProperties;
    static ScheduledTriggerProperties: typeof ScheduledTriggerProperties;
    static ServiceNowSourceProperties: typeof ServiceNowSourceProperties;
    static SourceConnectorProperties: typeof SourceConnectorProperties;
    static SourceFlowConfig: typeof SourceFlowConfig;
    static Task: typeof Task;
    static TaskPropertiesMap: typeof TaskPropertiesMap;
    static TriggerConfig: typeof TriggerConfig;
    static TriggerProperties: typeof TriggerProperties;
    static ZendeskSourceProperties: typeof ZendeskSourceProperties;
    constructor(properties: IntegrationProperties);
}
