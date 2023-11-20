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

export class Actions {
    EventBridgeActions?: List<EventBridgeAction>
    AssignContactCategoryActions?: List<{[key: string]: any}>
    TaskActions?: List<TaskAction>
    SendNotificationActions?: List<SendNotificationAction>

    constructor(properties: Actions) {
        Object.assign(this, properties)
    }
}

export class EventBridgeAction {
    Name!: Value<string>

    constructor(properties: EventBridgeAction) {
        Object.assign(this, properties)
    }
}

export class NotificationRecipientType {
    UserTags?: {[key: string]: Value<string>}
    UserArns?: List<Value<string>>

    constructor(properties: NotificationRecipientType) {
        Object.assign(this, properties)
    }
}

export class Reference {
    Type!: Value<string>
    Value!: Value<string>

    constructor(properties: Reference) {
        Object.assign(this, properties)
    }
}

export class RuleTriggerEventSource {
    IntegrationAssociationArn?: Value<string>
    EventSourceName!: Value<string>

    constructor(properties: RuleTriggerEventSource) {
        Object.assign(this, properties)
    }
}

export class SendNotificationAction {
    DeliveryMethod!: Value<string>
    ContentType!: Value<string>
    Content!: Value<string>
    Recipient!: NotificationRecipientType
    Subject?: Value<string>

    constructor(properties: SendNotificationAction) {
        Object.assign(this, properties)
    }
}

export class TaskAction {
    Description?: Value<string>
    References?: {[key: string]: Reference}
    ContactFlowArn!: Value<string>
    Name!: Value<string>

    constructor(properties: TaskAction) {
        Object.assign(this, properties)
    }
}

export interface RuleProperties {
    Function: Value<string>
    TriggerEventSource: RuleTriggerEventSource
    Actions: Actions
    InstanceArn: Value<string>
    Tags?: List<ResourceTag>
    Name: Value<string>
    PublishStatus: Value<string>
}

export default class Rule extends ResourceBase<RuleProperties> {
    static Actions = Actions
    static EventBridgeAction = EventBridgeAction
    static NotificationRecipientType = NotificationRecipientType
    static Reference = Reference
    static RuleTriggerEventSource = RuleTriggerEventSource
    static SendNotificationAction = SendNotificationAction
    static TaskAction = TaskAction

    constructor(properties: RuleProperties) {
        super('AWS::Connect::Rule', properties)
    }
}
