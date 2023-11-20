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
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export class ActionThreshold {
    Type!: Value<string>
    Value!: Value<number>

    constructor(properties: ActionThreshold) {
        Object.assign(this, properties)
    }
}

export class Definition {
    SsmActionDefinition?: SsmActionDefinition
    IamActionDefinition?: IamActionDefinition
    ScpActionDefinition?: ScpActionDefinition

    constructor(properties: Definition) {
        Object.assign(this, properties)
    }
}

export class IamActionDefinition {
    PolicyArn!: Value<string>
    Groups?: List<Value<string>>
    Roles?: List<Value<string>>
    Users?: List<Value<string>>

    constructor(properties: IamActionDefinition) {
        Object.assign(this, properties)
    }
}

export class ScpActionDefinition {
    TargetIds!: List<Value<string>>
    PolicyId!: Value<string>

    constructor(properties: ScpActionDefinition) {
        Object.assign(this, properties)
    }
}

export class SsmActionDefinition {
    Region!: Value<string>
    InstanceIds!: List<Value<string>>
    Subtype!: Value<string>

    constructor(properties: SsmActionDefinition) {
        Object.assign(this, properties)
    }
}

export class Subscriber {
    Type!: Value<string>
    Address!: Value<string>

    constructor(properties: Subscriber) {
        Object.assign(this, properties)
    }
}

export interface BudgetsActionProperties {
    ExecutionRoleArn: Value<string>
    ActionType: Value<string>
    NotificationType: Value<string>
    ActionThreshold: ActionThreshold
    Definition: Definition
    ApprovalModel?: Value<string>
    Subscribers: List<Subscriber>
    BudgetName: Value<string>
}

export default class BudgetsAction extends ResourceBase<BudgetsActionProperties> {
    static ActionThreshold = ActionThreshold
    static Definition = Definition
    static IamActionDefinition = IamActionDefinition
    static ScpActionDefinition = ScpActionDefinition
    static SsmActionDefinition = SsmActionDefinition
    static Subscriber = Subscriber

    constructor(properties: BudgetsActionProperties) {
        super('AWS::Budgets::BudgetsAction', properties)
    }
}
