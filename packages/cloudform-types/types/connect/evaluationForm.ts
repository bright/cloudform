/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
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

export class EvaluationFormBaseItem {
    Section!: EvaluationFormSection

    constructor(properties: EvaluationFormBaseItem) {
        Object.assign(this, properties)
    }
}

export class EvaluationFormItem {
    Question?: EvaluationFormQuestion
    Section?: EvaluationFormSection

    constructor(properties: EvaluationFormItem) {
        Object.assign(this, properties)
    }
}

export class EvaluationFormNumericQuestionAutomation {
    PropertyValue!: NumericQuestionPropertyValueAutomation

    constructor(properties: EvaluationFormNumericQuestionAutomation) {
        Object.assign(this, properties)
    }
}

export class EvaluationFormNumericQuestionOption {
    Score?: Value<number>
    MinValue!: Value<number>
    MaxValue!: Value<number>
    AutomaticFail?: Value<boolean>

    constructor(properties: EvaluationFormNumericQuestionOption) {
        Object.assign(this, properties)
    }
}

export class EvaluationFormNumericQuestionProperties {
    Options?: List<EvaluationFormNumericQuestionOption>
    Automation?: EvaluationFormNumericQuestionAutomation
    MinValue!: Value<number>
    MaxValue!: Value<number>

    constructor(properties: EvaluationFormNumericQuestionProperties) {
        Object.assign(this, properties)
    }
}

export class EvaluationFormQuestion {
    NotApplicableEnabled?: Value<boolean>
    Title!: Value<string>
    QuestionType!: Value<string>
    Instructions?: Value<string>
    RefId!: Value<string>
    QuestionTypeProperties?: EvaluationFormQuestionTypeProperties
    Weight?: Value<number>

    constructor(properties: EvaluationFormQuestion) {
        Object.assign(this, properties)
    }
}

export class EvaluationFormQuestionTypeProperties {
    Numeric?: EvaluationFormNumericQuestionProperties
    SingleSelect?: EvaluationFormSingleSelectQuestionProperties

    constructor(properties: EvaluationFormQuestionTypeProperties) {
        Object.assign(this, properties)
    }
}

export class EvaluationFormSection {
    Title!: Value<string>
    Instructions?: Value<string>
    Items?: List<EvaluationFormItem>
    RefId!: Value<string>
    Weight?: Value<number>

    constructor(properties: EvaluationFormSection) {
        Object.assign(this, properties)
    }
}

export class EvaluationFormSingleSelectQuestionAutomation {
    Options!: List<EvaluationFormSingleSelectQuestionAutomationOption>
    DefaultOptionRefId?: Value<string>

    constructor(properties: EvaluationFormSingleSelectQuestionAutomation) {
        Object.assign(this, properties)
    }
}

export class EvaluationFormSingleSelectQuestionAutomationOption {
    RuleCategory!: SingleSelectQuestionRuleCategoryAutomation

    constructor(properties: EvaluationFormSingleSelectQuestionAutomationOption) {
        Object.assign(this, properties)
    }
}

export class EvaluationFormSingleSelectQuestionOption {
    Score?: Value<number>
    Text!: Value<string>
    RefId!: Value<string>
    AutomaticFail?: Value<boolean>

    constructor(properties: EvaluationFormSingleSelectQuestionOption) {
        Object.assign(this, properties)
    }
}

export class EvaluationFormSingleSelectQuestionProperties {
    DisplayAs?: Value<string>
    Options!: List<EvaluationFormSingleSelectQuestionOption>
    Automation?: EvaluationFormSingleSelectQuestionAutomation

    constructor(properties: EvaluationFormSingleSelectQuestionProperties) {
        Object.assign(this, properties)
    }
}

export class NumericQuestionPropertyValueAutomation {
    Label!: Value<string>

    constructor(properties: NumericQuestionPropertyValueAutomation) {
        Object.assign(this, properties)
    }
}

export class ScoringStrategy {
    Status!: Value<string>
    Mode!: Value<string>

    constructor(properties: ScoringStrategy) {
        Object.assign(this, properties)
    }
}

export class SingleSelectQuestionRuleCategoryAutomation {
    Condition!: Value<string>
    Category!: Value<string>
    OptionRefId!: Value<string>

    constructor(properties: SingleSelectQuestionRuleCategoryAutomation) {
        Object.assign(this, properties)
    }
}

export interface EvaluationFormProperties {
    ScoringStrategy?: ScoringStrategy
    Status: Value<string>
    Description?: Value<string>
    InstanceArn: Value<string>
    Title: Value<string>
    Items: List<EvaluationFormBaseItem>
    Tags?: List<ResourceTag>
}

export default class EvaluationForm extends ResourceBase<EvaluationFormProperties> {
    static EvaluationFormBaseItem = EvaluationFormBaseItem
    static EvaluationFormItem = EvaluationFormItem
    static EvaluationFormNumericQuestionAutomation = EvaluationFormNumericQuestionAutomation
    static EvaluationFormNumericQuestionOption = EvaluationFormNumericQuestionOption
    static EvaluationFormNumericQuestionProperties = EvaluationFormNumericQuestionProperties
    static EvaluationFormQuestion = EvaluationFormQuestion
    static EvaluationFormQuestionTypeProperties = EvaluationFormQuestionTypeProperties
    static EvaluationFormSection = EvaluationFormSection
    static EvaluationFormSingleSelectQuestionAutomation = EvaluationFormSingleSelectQuestionAutomation
    static EvaluationFormSingleSelectQuestionAutomationOption = EvaluationFormSingleSelectQuestionAutomationOption
    static EvaluationFormSingleSelectQuestionOption = EvaluationFormSingleSelectQuestionOption
    static EvaluationFormSingleSelectQuestionProperties = EvaluationFormSingleSelectQuestionProperties
    static NumericQuestionPropertyValueAutomation = NumericQuestionPropertyValueAutomation
    static ScoringStrategy = ScoringStrategy
    static SingleSelectQuestionRuleCategoryAutomation = SingleSelectQuestionRuleCategoryAutomation

    constructor(properties: EvaluationFormProperties) {
        super('AWS::Connect::EvaluationForm', properties)
    }
}
