"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SingleSelectQuestionRuleCategoryAutomation = exports.ScoringStrategy = exports.NumericQuestionPropertyValueAutomation = exports.EvaluationFormSingleSelectQuestionProperties = exports.EvaluationFormSingleSelectQuestionOption = exports.EvaluationFormSingleSelectQuestionAutomationOption = exports.EvaluationFormSingleSelectQuestionAutomation = exports.EvaluationFormSection = exports.EvaluationFormQuestionTypeProperties = exports.EvaluationFormQuestion = exports.EvaluationFormNumericQuestionProperties = exports.EvaluationFormNumericQuestionOption = exports.EvaluationFormNumericQuestionAutomation = exports.EvaluationFormItem = exports.EvaluationFormBaseItem = void 0;
const resource_1 = require("../resource");
class EvaluationFormBaseItem {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.EvaluationFormBaseItem = EvaluationFormBaseItem;
class EvaluationFormItem {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.EvaluationFormItem = EvaluationFormItem;
class EvaluationFormNumericQuestionAutomation {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.EvaluationFormNumericQuestionAutomation = EvaluationFormNumericQuestionAutomation;
class EvaluationFormNumericQuestionOption {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.EvaluationFormNumericQuestionOption = EvaluationFormNumericQuestionOption;
class EvaluationFormNumericQuestionProperties {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.EvaluationFormNumericQuestionProperties = EvaluationFormNumericQuestionProperties;
class EvaluationFormQuestion {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.EvaluationFormQuestion = EvaluationFormQuestion;
class EvaluationFormQuestionTypeProperties {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.EvaluationFormQuestionTypeProperties = EvaluationFormQuestionTypeProperties;
class EvaluationFormSection {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.EvaluationFormSection = EvaluationFormSection;
class EvaluationFormSingleSelectQuestionAutomation {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.EvaluationFormSingleSelectQuestionAutomation = EvaluationFormSingleSelectQuestionAutomation;
class EvaluationFormSingleSelectQuestionAutomationOption {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.EvaluationFormSingleSelectQuestionAutomationOption = EvaluationFormSingleSelectQuestionAutomationOption;
class EvaluationFormSingleSelectQuestionOption {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.EvaluationFormSingleSelectQuestionOption = EvaluationFormSingleSelectQuestionOption;
class EvaluationFormSingleSelectQuestionProperties {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.EvaluationFormSingleSelectQuestionProperties = EvaluationFormSingleSelectQuestionProperties;
class NumericQuestionPropertyValueAutomation {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.NumericQuestionPropertyValueAutomation = NumericQuestionPropertyValueAutomation;
class ScoringStrategy {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ScoringStrategy = ScoringStrategy;
class SingleSelectQuestionRuleCategoryAutomation {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SingleSelectQuestionRuleCategoryAutomation = SingleSelectQuestionRuleCategoryAutomation;
class EvaluationForm extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::Connect::EvaluationForm', properties);
    }
}
exports.default = EvaluationForm;
EvaluationForm.EvaluationFormBaseItem = EvaluationFormBaseItem;
EvaluationForm.EvaluationFormItem = EvaluationFormItem;
EvaluationForm.EvaluationFormNumericQuestionAutomation = EvaluationFormNumericQuestionAutomation;
EvaluationForm.EvaluationFormNumericQuestionOption = EvaluationFormNumericQuestionOption;
EvaluationForm.EvaluationFormNumericQuestionProperties = EvaluationFormNumericQuestionProperties;
EvaluationForm.EvaluationFormQuestion = EvaluationFormQuestion;
EvaluationForm.EvaluationFormQuestionTypeProperties = EvaluationFormQuestionTypeProperties;
EvaluationForm.EvaluationFormSection = EvaluationFormSection;
EvaluationForm.EvaluationFormSingleSelectQuestionAutomation = EvaluationFormSingleSelectQuestionAutomation;
EvaluationForm.EvaluationFormSingleSelectQuestionAutomationOption = EvaluationFormSingleSelectQuestionAutomationOption;
EvaluationForm.EvaluationFormSingleSelectQuestionOption = EvaluationFormSingleSelectQuestionOption;
EvaluationForm.EvaluationFormSingleSelectQuestionProperties = EvaluationFormSingleSelectQuestionProperties;
EvaluationForm.NumericQuestionPropertyValueAutomation = NumericQuestionPropertyValueAutomation;
EvaluationForm.ScoringStrategy = ScoringStrategy;
EvaluationForm.SingleSelectQuestionRuleCategoryAutomation = SingleSelectQuestionRuleCategoryAutomation;
