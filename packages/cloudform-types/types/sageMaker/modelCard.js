"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserContext = exports.TrainingMetric = exports.TrainingJobDetails = exports.TrainingHyperParameter = exports.TrainingEnvironment = exports.TrainingDetails = exports.SourceAlgorithm = exports.SecurityConfig = exports.ObjectiveFunction = exports.ModelPackageDetails = exports.ModelPackageCreator = exports.ModelOverview = exports.MetricGroup = exports.MetricDataItems = exports.IntendedUses = exports.InferenceSpecification = exports.InferenceEnvironment = exports.Function = exports.EvaluationDetail = exports.Content = exports.Container = exports.BusinessDetails = exports.AdditionalInformation = void 0;
const resource_1 = require("../resource");
class AdditionalInformation {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AdditionalInformation = AdditionalInformation;
class BusinessDetails {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.BusinessDetails = BusinessDetails;
class Container {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Container = Container;
class Content {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Content = Content;
class EvaluationDetail {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.EvaluationDetail = EvaluationDetail;
class Function {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Function = Function;
class InferenceEnvironment {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.InferenceEnvironment = InferenceEnvironment;
class InferenceSpecification {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.InferenceSpecification = InferenceSpecification;
class IntendedUses {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.IntendedUses = IntendedUses;
class MetricDataItems {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.MetricDataItems = MetricDataItems;
class MetricGroup {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.MetricGroup = MetricGroup;
class ModelOverview {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ModelOverview = ModelOverview;
class ModelPackageCreator {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ModelPackageCreator = ModelPackageCreator;
class ModelPackageDetails {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ModelPackageDetails = ModelPackageDetails;
class ObjectiveFunction {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ObjectiveFunction = ObjectiveFunction;
class SecurityConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SecurityConfig = SecurityConfig;
class SourceAlgorithm {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SourceAlgorithm = SourceAlgorithm;
class TrainingDetails {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TrainingDetails = TrainingDetails;
class TrainingEnvironment {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TrainingEnvironment = TrainingEnvironment;
class TrainingHyperParameter {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TrainingHyperParameter = TrainingHyperParameter;
class TrainingJobDetails {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TrainingJobDetails = TrainingJobDetails;
class TrainingMetric {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TrainingMetric = TrainingMetric;
class UserContext {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.UserContext = UserContext;
class ModelCard extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::SageMaker::ModelCard', properties);
    }
}
exports.default = ModelCard;
ModelCard.AdditionalInformation = AdditionalInformation;
ModelCard.BusinessDetails = BusinessDetails;
ModelCard.Container = Container;
ModelCard.Content = Content;
ModelCard.EvaluationDetail = EvaluationDetail;
ModelCard.Function = Function;
ModelCard.InferenceEnvironment = InferenceEnvironment;
ModelCard.InferenceSpecification = InferenceSpecification;
ModelCard.IntendedUses = IntendedUses;
ModelCard.MetricDataItems = MetricDataItems;
ModelCard.MetricGroup = MetricGroup;
ModelCard.ModelOverview = ModelOverview;
ModelCard.ModelPackageCreator = ModelPackageCreator;
ModelCard.ModelPackageDetails = ModelPackageDetails;
ModelCard.ObjectiveFunction = ObjectiveFunction;
ModelCard.SecurityConfig = SecurityConfig;
ModelCard.SourceAlgorithm = SourceAlgorithm;
ModelCard.TrainingDetails = TrainingDetails;
ModelCard.TrainingEnvironment = TrainingEnvironment;
ModelCard.TrainingHyperParameter = TrainingHyperParameter;
ModelCard.TrainingJobDetails = TrainingJobDetails;
ModelCard.TrainingMetric = TrainingMetric;
ModelCard.UserContext = UserContext;
