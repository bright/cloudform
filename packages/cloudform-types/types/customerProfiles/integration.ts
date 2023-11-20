/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class ConnectorOperator {
    S3?: Value<string>
    ServiceNow?: Value<string>
    Zendesk?: Value<string>
    Marketo?: Value<string>
    Salesforce?: Value<string>

    constructor(properties: ConnectorOperator) {
        Object.assign(this, properties)
    }
}

export class FlowDefinition {
    Description?: Value<string>
    Tasks!: List<Task>
    FlowName!: Value<string>
    TriggerConfig!: TriggerConfig
    SourceFlowConfig!: SourceFlowConfig
    KmsArn!: Value<string>

    constructor(properties: FlowDefinition) {
        Object.assign(this, properties)
    }
}

export class IncrementalPullConfig {
    DatetimeTypeFieldName?: Value<string>

    constructor(properties: IncrementalPullConfig) {
        Object.assign(this, properties)
    }
}

export class MarketoSourceProperties {
    Object!: Value<string>

    constructor(properties: MarketoSourceProperties) {
        Object.assign(this, properties)
    }
}

export class ObjectTypeMapping {
    Value!: Value<string>
    Key!: Value<string>

    constructor(properties: ObjectTypeMapping) {
        Object.assign(this, properties)
    }
}

export class S3SourceProperties {
    BucketName!: Value<string>
    BucketPrefix?: Value<string>

    constructor(properties: S3SourceProperties) {
        Object.assign(this, properties)
    }
}

export class SalesforceSourceProperties {
    IncludeDeletedRecords?: Value<boolean>
    Object!: Value<string>
    EnableDynamicFieldUpdate?: Value<boolean>

    constructor(properties: SalesforceSourceProperties) {
        Object.assign(this, properties)
    }
}

export class ScheduledTriggerProperties {
    ScheduleEndTime?: Value<number>
    Timezone?: Value<string>
    ScheduleExpression!: Value<string>
    FirstExecutionFrom?: Value<number>
    ScheduleStartTime?: Value<number>
    DataPullMode?: Value<string>
    ScheduleOffset?: Value<number>

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

export class SourceConnectorProperties {
    S3?: S3SourceProperties
    ServiceNow?: ServiceNowSourceProperties
    Zendesk?: ZendeskSourceProperties
    Marketo?: MarketoSourceProperties
    Salesforce?: SalesforceSourceProperties

    constructor(properties: SourceConnectorProperties) {
        Object.assign(this, properties)
    }
}

export class SourceFlowConfig {
    ConnectorProfileName?: Value<string>
    SourceConnectorProperties!: SourceConnectorProperties
    ConnectorType!: Value<string>
    IncrementalPullConfig?: IncrementalPullConfig

    constructor(properties: SourceFlowConfig) {
        Object.assign(this, properties)
    }
}

export class Task {
    SourceFields!: List<Value<string>>
    DestinationField?: Value<string>
    ConnectorOperator?: ConnectorOperator
    TaskType!: Value<string>
    TaskProperties?: List<TaskPropertiesMap>

    constructor(properties: Task) {
        Object.assign(this, properties)
    }
}

export class TaskPropertiesMap {
    OperatorPropertyKey!: Value<string>
    Property!: Value<string>

    constructor(properties: TaskPropertiesMap) {
        Object.assign(this, properties)
    }
}

export class TriggerConfig {
    TriggerType!: Value<string>
    TriggerProperties?: TriggerProperties

    constructor(properties: TriggerConfig) {
        Object.assign(this, properties)
    }
}

export class TriggerProperties {
    Scheduled?: ScheduledTriggerProperties

    constructor(properties: TriggerProperties) {
        Object.assign(this, properties)
    }
}

export class ZendeskSourceProperties {
    Object!: Value<string>

    constructor(properties: ZendeskSourceProperties) {
        Object.assign(this, properties)
    }
}

export interface IntegrationProperties {
    ObjectTypeNames?: List<ObjectTypeMapping>
    DomainName: Value<string>
    ObjectTypeName?: Value<string>
    Uri?: Value<string>
    FlowDefinition?: FlowDefinition
    Tags?: List<ResourceTag>
}

export default class Integration extends ResourceBase<IntegrationProperties> {
    static ConnectorOperator = ConnectorOperator
    static FlowDefinition = FlowDefinition
    static IncrementalPullConfig = IncrementalPullConfig
    static MarketoSourceProperties = MarketoSourceProperties
    static ObjectTypeMapping = ObjectTypeMapping
    static S3SourceProperties = S3SourceProperties
    static SalesforceSourceProperties = SalesforceSourceProperties
    static ScheduledTriggerProperties = ScheduledTriggerProperties
    static ServiceNowSourceProperties = ServiceNowSourceProperties
    static SourceConnectorProperties = SourceConnectorProperties
    static SourceFlowConfig = SourceFlowConfig
    static Task = Task
    static TaskPropertiesMap = TaskPropertiesMap
    static TriggerConfig = TriggerConfig
    static TriggerProperties = TriggerProperties
    static ZendeskSourceProperties = ZendeskSourceProperties

    constructor(properties: IntegrationProperties) {
        super('AWS::CustomerProfiles::Integration', properties)
    }
}
