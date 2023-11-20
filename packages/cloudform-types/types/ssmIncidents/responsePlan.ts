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

export class Action {
    SsmAutomation?: SsmAutomation

    constructor(properties: Action) {
        Object.assign(this, properties)
    }
}

export class ChatChannel {
    ChatbotSns?: List<Value<string>>

    constructor(properties: ChatChannel) {
        Object.assign(this, properties)
    }
}

export class DynamicSsmParameter {
    Value!: DynamicSsmParameterValue
    Key!: Value<string>

    constructor(properties: DynamicSsmParameter) {
        Object.assign(this, properties)
    }
}

export class DynamicSsmParameterValue {
    Variable?: Value<string>

    constructor(properties: DynamicSsmParameterValue) {
        Object.assign(this, properties)
    }
}

export class IncidentTemplate {
    Impact!: Value<number>
    IncidentTags?: List<ResourceTag>
    Summary?: Value<string>
    Title!: Value<string>
    NotificationTargets?: List<NotificationTargetItem>
    DedupeString?: Value<string>

    constructor(properties: IncidentTemplate) {
        Object.assign(this, properties)
    }
}

export class Integration {
    PagerDutyConfiguration!: PagerDutyConfiguration

    constructor(properties: Integration) {
        Object.assign(this, properties)
    }
}

export class NotificationTargetItem {
    SnsTopicArn?: Value<string>

    constructor(properties: NotificationTargetItem) {
        Object.assign(this, properties)
    }
}

export class PagerDutyConfiguration {
    SecretId!: Value<string>
    PagerDutyIncidentConfiguration!: PagerDutyIncidentConfiguration
    Name!: Value<string>

    constructor(properties: PagerDutyConfiguration) {
        Object.assign(this, properties)
    }
}

export class PagerDutyIncidentConfiguration {
    ServiceId!: Value<string>

    constructor(properties: PagerDutyIncidentConfiguration) {
        Object.assign(this, properties)
    }
}

export class SsmAutomation {
    Parameters?: List<SsmParameter>
    TargetAccount?: Value<string>
    DynamicParameters?: List<DynamicSsmParameter>
    DocumentVersion?: Value<string>
    RoleArn!: Value<string>
    DocumentName!: Value<string>

    constructor(properties: SsmAutomation) {
        Object.assign(this, properties)
    }
}

export class SsmParameter {
    Values!: List<Value<string>>
    Key!: Value<string>

    constructor(properties: SsmParameter) {
        Object.assign(this, properties)
    }
}

export interface ResponsePlanProperties {
    ChatChannel?: ChatChannel
    Integrations?: List<Integration>
    Actions?: List<Action>
    DisplayName?: Value<string>
    IncidentTemplate: IncidentTemplate
    Engagements?: List<Value<string>>
    Tags?: List<ResourceTag>
    Name: Value<string>
}

export default class ResponsePlan extends ResourceBase<ResponsePlanProperties> {
    static Action = Action
    static ChatChannel = ChatChannel
    static DynamicSsmParameter = DynamicSsmParameter
    static DynamicSsmParameterValue = DynamicSsmParameterValue
    static IncidentTemplate = IncidentTemplate
    static Integration = Integration
    static NotificationTargetItem = NotificationTargetItem
    static PagerDutyConfiguration = PagerDutyConfiguration
    static PagerDutyIncidentConfiguration = PagerDutyIncidentConfiguration
    static SsmAutomation = SsmAutomation
    static SsmParameter = SsmParameter

    constructor(properties: ResponsePlanProperties) {
        super('AWS::SSMIncidents::ResponsePlan', properties)
    }
}
