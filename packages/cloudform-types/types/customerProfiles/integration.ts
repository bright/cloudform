/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class Task {
    DestinationField?: Value<string>
    TaskType!: Value<string>

    constructor(properties: Task) {
        Object.assign(this, properties)
    }
}

export class TriggerProperties {


    constructor(properties: TriggerProperties) {
        Object.assign(this, properties)
    }
}

export class ScheduledTriggerProperties {
    ScheduleExpression!: Value<string>
    DataPullMode?: Value<string>
    ScheduleStartTime?: Value<number>
    ScheduleEndTime?: Value<number>
    Timezone?: Value<string>
    ScheduleOffset?: Value<number>
    FirstExecutionFrom?: Value<number>

    constructor(properties: ScheduledTriggerProperties) {
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

export class FlowDefinition {
    FlowName!: Value<string>
    Description?: Value<string>
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

export class TaskPropertiesMap {
    OperatorPropertyKey!: Value<string>
    Property!: Value<string>

    constructor(properties: TaskPropertiesMap) {
        Object.assign(this, properties)
    }
}

export class ConnectorOperator {
    Marketo?: Value<string>
    S3?: Value<string>
    Salesforce?: Value<string>
    ServiceNow?: Value<string>
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

export class SourceConnectorProperties {


    constructor(properties: SourceConnectorProperties) {
        Object.assign(this, properties)
    }
}

export class ServiceNowSourceProperties {
    Object!: Value<string>

    constructor(properties: ServiceNowSourceProperties) {
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

export class TriggerConfig {
    TriggerType!: Value<string>

    constructor(properties: TriggerConfig) {
        Object.assign(this, properties)
    }
}

export class SourceFlowConfig {
    ConnectorType!: Value<string>
    ConnectorProfileName?: Value<string>

    constructor(properties: SourceFlowConfig) {
        Object.assign(this, properties)
    }
}

export interface IntegrationProperties {
    DomainName: Value<string>
    Uri?: Value<string>
    ObjectTypeName: Value<string>
}

export default class Integration extends ResourceBase<IntegrationProperties> {
    static Task = Task
    static TriggerProperties = TriggerProperties
    static ScheduledTriggerProperties = ScheduledTriggerProperties
    static S3SourceProperties = S3SourceProperties
    static FlowDefinition = FlowDefinition
    static IncrementalPullConfig = IncrementalPullConfig
    static MarketoSourceProperties = MarketoSourceProperties
    static TaskPropertiesMap = TaskPropertiesMap
    static ConnectorOperator = ConnectorOperator
    static ZendeskSourceProperties = ZendeskSourceProperties
    static SourceConnectorProperties = SourceConnectorProperties
    static ServiceNowSourceProperties = ServiceNowSourceProperties
    static SalesforceSourceProperties = SalesforceSourceProperties
    static TriggerConfig = TriggerConfig
    static SourceFlowConfig = SourceFlowConfig

    constructor(properties: IntegrationProperties) {
        super('AWS::CustomerProfiles::Integration', properties)
    }
}
