import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class EvaluationFormBaseItem {
    Section: EvaluationFormSection;
    constructor(properties: EvaluationFormBaseItem);
}
export declare class EvaluationFormItem {
    Question?: EvaluationFormQuestion;
    Section?: EvaluationFormSection;
    constructor(properties: EvaluationFormItem);
}
export declare class EvaluationFormNumericQuestionAutomation {
    PropertyValue: NumericQuestionPropertyValueAutomation;
    constructor(properties: EvaluationFormNumericQuestionAutomation);
}
export declare class EvaluationFormNumericQuestionOption {
    Score?: Value<number>;
    MinValue: Value<number>;
    MaxValue: Value<number>;
    AutomaticFail?: Value<boolean>;
    constructor(properties: EvaluationFormNumericQuestionOption);
}
export declare class EvaluationFormNumericQuestionProperties {
    Options?: List<EvaluationFormNumericQuestionOption>;
    Automation?: EvaluationFormNumericQuestionAutomation;
    MinValue: Value<number>;
    MaxValue: Value<number>;
    constructor(properties: EvaluationFormNumericQuestionProperties);
}
export declare class EvaluationFormQuestion {
    NotApplicableEnabled?: Value<boolean>;
    Title: Value<string>;
    QuestionType: Value<string>;
    Instructions?: Value<string>;
    RefId: Value<string>;
    QuestionTypeProperties?: EvaluationFormQuestionTypeProperties;
    Weight?: Value<number>;
    constructor(properties: EvaluationFormQuestion);
}
export declare class EvaluationFormQuestionTypeProperties {
    Numeric?: EvaluationFormNumericQuestionProperties;
    SingleSelect?: EvaluationFormSingleSelectQuestionProperties;
    constructor(properties: EvaluationFormQuestionTypeProperties);
}
export declare class EvaluationFormSection {
    Title: Value<string>;
    Instructions?: Value<string>;
    Items?: List<EvaluationFormItem>;
    RefId: Value<string>;
    Weight?: Value<number>;
    constructor(properties: EvaluationFormSection);
}
export declare class EvaluationFormSingleSelectQuestionAutomation {
    Options: List<EvaluationFormSingleSelectQuestionAutomationOption>;
    DefaultOptionRefId?: Value<string>;
    constructor(properties: EvaluationFormSingleSelectQuestionAutomation);
}
export declare class EvaluationFormSingleSelectQuestionAutomationOption {
    RuleCategory: SingleSelectQuestionRuleCategoryAutomation;
    constructor(properties: EvaluationFormSingleSelectQuestionAutomationOption);
}
export declare class EvaluationFormSingleSelectQuestionOption {
    Score?: Value<number>;
    Text: Value<string>;
    RefId: Value<string>;
    AutomaticFail?: Value<boolean>;
    constructor(properties: EvaluationFormSingleSelectQuestionOption);
}
export declare class EvaluationFormSingleSelectQuestionProperties {
    DisplayAs?: Value<string>;
    Options: List<EvaluationFormSingleSelectQuestionOption>;
    Automation?: EvaluationFormSingleSelectQuestionAutomation;
    constructor(properties: EvaluationFormSingleSelectQuestionProperties);
}
export declare class NumericQuestionPropertyValueAutomation {
    Label: Value<string>;
    constructor(properties: NumericQuestionPropertyValueAutomation);
}
export declare class ScoringStrategy {
    Status: Value<string>;
    Mode: Value<string>;
    constructor(properties: ScoringStrategy);
}
export declare class SingleSelectQuestionRuleCategoryAutomation {
    Condition: Value<string>;
    Category: Value<string>;
    OptionRefId: Value<string>;
    constructor(properties: SingleSelectQuestionRuleCategoryAutomation);
}
export interface EvaluationFormProperties {
    ScoringStrategy?: ScoringStrategy;
    Status: Value<string>;
    Description?: Value<string>;
    InstanceArn: Value<string>;
    Title: Value<string>;
    Items: List<EvaluationFormBaseItem>;
    Tags?: List<ResourceTag>;
}
export default class EvaluationForm extends ResourceBase<EvaluationFormProperties> {
    static EvaluationFormBaseItem: typeof EvaluationFormBaseItem;
    static EvaluationFormItem: typeof EvaluationFormItem;
    static EvaluationFormNumericQuestionAutomation: typeof EvaluationFormNumericQuestionAutomation;
    static EvaluationFormNumericQuestionOption: typeof EvaluationFormNumericQuestionOption;
    static EvaluationFormNumericQuestionProperties: typeof EvaluationFormNumericQuestionProperties;
    static EvaluationFormQuestion: typeof EvaluationFormQuestion;
    static EvaluationFormQuestionTypeProperties: typeof EvaluationFormQuestionTypeProperties;
    static EvaluationFormSection: typeof EvaluationFormSection;
    static EvaluationFormSingleSelectQuestionAutomation: typeof EvaluationFormSingleSelectQuestionAutomation;
    static EvaluationFormSingleSelectQuestionAutomationOption: typeof EvaluationFormSingleSelectQuestionAutomationOption;
    static EvaluationFormSingleSelectQuestionOption: typeof EvaluationFormSingleSelectQuestionOption;
    static EvaluationFormSingleSelectQuestionProperties: typeof EvaluationFormSingleSelectQuestionProperties;
    static NumericQuestionPropertyValueAutomation: typeof NumericQuestionPropertyValueAutomation;
    static ScoringStrategy: typeof ScoringStrategy;
    static SingleSelectQuestionRuleCategoryAutomation: typeof SingleSelectQuestionRuleCategoryAutomation;
    constructor(properties: EvaluationFormProperties);
}
