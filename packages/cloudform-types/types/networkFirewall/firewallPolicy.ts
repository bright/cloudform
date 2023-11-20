/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-3 (https://d2zq80gdmjim8k.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
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

export class ActionDefinition {
    PublishMetricAction?: PublishMetricAction

    constructor(properties: ActionDefinition) {
        Object.assign(this, properties)
    }
}

export class CustomAction {
    ActionName!: Value<string>
    ActionDefinition!: ActionDefinition

    constructor(properties: CustomAction) {
        Object.assign(this, properties)
    }
}

export class Dimension {
    Value!: Value<string>

    constructor(properties: Dimension) {
        Object.assign(this, properties)
    }
}

export class FirewallPolicyInner {
    StatelessRuleGroupReferences?: List<StatelessRuleGroupReference>
    StatefulRuleGroupReferences?: List<StatefulRuleGroupReference>
    StatelessDefaultActions!: List<Value<string>>
    StatefulEngineOptions?: StatefulEngineOptions
    StatelessCustomActions?: List<CustomAction>
    StatelessFragmentDefaultActions!: List<Value<string>>
    PolicyVariables?: PolicyVariables
    StatefulDefaultActions?: List<Value<string>>
    TLSInspectionConfigurationArn?: Value<string>

    constructor(properties: FirewallPolicyInner) {
        Object.assign(this, properties)
    }
}

export class IPSet {
    Definition?: List<Value<string>>

    constructor(properties: IPSet) {
        Object.assign(this, properties)
    }
}

export class PolicyVariables {
    RuleVariables?: {[key: string]: IPSet}

    constructor(properties: PolicyVariables) {
        Object.assign(this, properties)
    }
}

export class PublishMetricAction {
    Dimensions!: List<Dimension>

    constructor(properties: PublishMetricAction) {
        Object.assign(this, properties)
    }
}

export class StatefulEngineOptions {
    StreamExceptionPolicy?: Value<string>
    RuleOrder?: Value<string>

    constructor(properties: StatefulEngineOptions) {
        Object.assign(this, properties)
    }
}

export class StatefulRuleGroupOverride {
    Action?: Value<string>

    constructor(properties: StatefulRuleGroupOverride) {
        Object.assign(this, properties)
    }
}

export class StatefulRuleGroupReference {
    ResourceArn!: Value<string>
    Priority?: Value<number>
    Override?: StatefulRuleGroupOverride

    constructor(properties: StatefulRuleGroupReference) {
        Object.assign(this, properties)
    }
}

export class StatelessRuleGroupReference {
    ResourceArn!: Value<string>
    Priority!: Value<number>

    constructor(properties: StatelessRuleGroupReference) {
        Object.assign(this, properties)
    }
}

export interface FirewallPolicyProperties {
    Description?: Value<string>
    FirewallPolicyName: Value<string>
    Tags?: List<ResourceTag>
    FirewallPolicy: FirewallPolicy
}

export default class FirewallPolicy extends ResourceBase<FirewallPolicyProperties> {
    static ActionDefinition = ActionDefinition
    static CustomAction = CustomAction
    static Dimension = Dimension
    static FirewallPolicy = FirewallPolicyInner
    static IPSet = IPSet
    static PolicyVariables = PolicyVariables
    static PublishMetricAction = PublishMetricAction
    static StatefulEngineOptions = StatefulEngineOptions
    static StatefulRuleGroupOverride = StatefulRuleGroupOverride
    static StatefulRuleGroupReference = StatefulRuleGroupReference
    static StatelessRuleGroupReference = StatelessRuleGroupReference

    constructor(properties: FirewallPolicyProperties) {
        super('AWS::NetworkFirewall::FirewallPolicy', properties)
    }
}
