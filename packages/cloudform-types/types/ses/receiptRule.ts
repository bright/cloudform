/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export class Action {
    BounceAction?: BounceAction
    S3Action?: S3Action
    StopAction?: StopAction
    SNSAction?: SNSAction
    WorkmailAction?: WorkmailAction
    AddHeaderAction?: AddHeaderAction
    LambdaAction?: LambdaAction

    constructor(properties: Action) {
        Object.assign(this, properties)
    }
}

export class AddHeaderAction {
    HeaderValue!: Value<string>
    HeaderName!: Value<string>

    constructor(properties: AddHeaderAction) {
        Object.assign(this, properties)
    }
}

export class BounceAction {
    Sender!: Value<string>
    SmtpReplyCode!: Value<string>
    Message!: Value<string>
    TopicArn?: Value<string>
    StatusCode?: Value<string>

    constructor(properties: BounceAction) {
        Object.assign(this, properties)
    }
}

export class LambdaAction {
    FunctionArn!: Value<string>
    TopicArn?: Value<string>
    InvocationType?: Value<string>

    constructor(properties: LambdaAction) {
        Object.assign(this, properties)
    }
}

export class Rule {
    ScanEnabled?: Value<boolean>
    Recipients?: List<Value<string>>
    Actions?: List<Action>
    Enabled?: Value<boolean>
    Name?: Value<string>
    TlsPolicy?: Value<string>

    constructor(properties: Rule) {
        Object.assign(this, properties)
    }
}

export class S3Action {
    BucketName!: Value<string>
    KmsKeyArn?: Value<string>
    TopicArn?: Value<string>
    ObjectKeyPrefix?: Value<string>

    constructor(properties: S3Action) {
        Object.assign(this, properties)
    }
}

export class SNSAction {
    TopicArn?: Value<string>
    Encoding?: Value<string>

    constructor(properties: SNSAction) {
        Object.assign(this, properties)
    }
}

export class StopAction {
    Scope!: Value<string>
    TopicArn?: Value<string>

    constructor(properties: StopAction) {
        Object.assign(this, properties)
    }
}

export class WorkmailAction {
    TopicArn?: Value<string>
    OrganizationArn!: Value<string>

    constructor(properties: WorkmailAction) {
        Object.assign(this, properties)
    }
}

export interface ReceiptRuleProperties {
    After?: Value<string>
    Rule: Rule
    RuleSetName: Value<string>
}

export default class ReceiptRule extends ResourceBase<ReceiptRuleProperties> {
    static Action = Action
    static AddHeaderAction = AddHeaderAction
    static BounceAction = BounceAction
    static LambdaAction = LambdaAction
    static Rule = Rule
    static S3Action = S3Action
    static SNSAction = SNSAction
    static StopAction = StopAction
    static WorkmailAction = WorkmailAction

    constructor(properties: ReceiptRuleProperties) {
        super('AWS::SES::ReceiptRule', properties)
    }
}
