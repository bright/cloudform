/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class SsmParameter {
    Key!: Value<string>
    Values!: List<Value<string>>

    constructor(properties: SsmParameter) {
        Object.assign(this, properties)
    }
}

export class SsmAutomation {
    RoleArn!: Value<string>
    DocumentName!: Value<string>
    DocumentVersion?: Value<string>
    TargetAccount?: Value<string>
    Parameters?: List<SsmParameter>

    constructor(properties: SsmAutomation) {
        Object.assign(this, properties)
    }
}

export class Action {
    SsmAutomation?: SsmAutomation

    constructor(properties: Action) {
        Object.assign(this, properties)
    }
}

export class NotificationTargetItem {
    SnsTopicArn?: Value<string>

    constructor(properties: NotificationTargetItem) {
        Object.assign(this, properties)
    }
}

export class ChatChannel {
    ChatbotSns?: List<Value<string>>

    constructor(properties: ChatChannel) {
        Object.assign(this, properties)
    }
}

export class IncidentTemplate {
    DedupeString?: Value<string>
    Impact!: Value<number>
    NotificationTargets?: List<NotificationTargetItem>
    Summary?: Value<string>
    Title!: Value<string>

    constructor(properties: IncidentTemplate) {
        Object.assign(this, properties)
    }
}

export interface ResponsePlanProperties {
    Name: Value<string>
    DisplayName?: Value<string>
    ChatChannel?: ChatChannel
    Engagements?: List<Value<string>>
    Actions?: List<Action>
    Tags?: List<ResourceTag>
    IncidentTemplate: IncidentTemplate
}

export default class ResponsePlan extends ResourceBase<ResponsePlanProperties> {
    static SsmParameter = SsmParameter
    static SsmAutomation = SsmAutomation
    static Action = Action
    static NotificationTargetItem = NotificationTargetItem
    static ChatChannel = ChatChannel
    static IncidentTemplate = IncidentTemplate

    constructor(properties: ResponsePlanProperties) {
        super('AWS::SSMIncidents::ResponsePlan', properties)
    }
}
