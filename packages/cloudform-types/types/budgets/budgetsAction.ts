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
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export class IamActionDefinition {
    PolicyArn!: Value<string>
    Roles?: List<Value<string>>
    Groups?: List<Value<string>>
    Users?: List<Value<string>>

    constructor(properties: IamActionDefinition) {
        Object.assign(this, properties)
    }
}

export class Definition {
    IamActionDefinition?: IamActionDefinition
    ScpActionDefinition?: ScpActionDefinition
    SsmActionDefinition?: SsmActionDefinition

    constructor(properties: Definition) {
        Object.assign(this, properties)
    }
}

export class ScpActionDefinition {
    PolicyId!: Value<string>
    TargetIds!: List<Value<string>>

    constructor(properties: ScpActionDefinition) {
        Object.assign(this, properties)
    }
}

export class SsmActionDefinition {
    Subtype!: Value<string>
    Region!: Value<string>
    InstanceIds!: List<Value<string>>

    constructor(properties: SsmActionDefinition) {
        Object.assign(this, properties)
    }
}

export class ActionThreshold {
    Value!: Value<number>
    Type!: Value<string>

    constructor(properties: ActionThreshold) {
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
    BudgetName: Value<string>
    NotificationType: Value<string>
    ActionType: Value<string>
    ActionThreshold: ActionThreshold
    ExecutionRoleArn: Value<string>
    ApprovalModel?: Value<string>
    Subscribers?: List<Subscriber>
    Definition: Definition
}

export default class BudgetsAction extends ResourceBase<BudgetsActionProperties> {
    static IamActionDefinition = IamActionDefinition
    static Definition = Definition
    static ScpActionDefinition = ScpActionDefinition
    static SsmActionDefinition = SsmActionDefinition
    static ActionThreshold = ActionThreshold
    static Subscriber = Subscriber

    constructor(properties: BudgetsActionProperties) {
        super('AWS::Budgets::BudgetsAction', properties)
    }
}
