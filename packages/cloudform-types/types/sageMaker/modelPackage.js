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
exports.ValidationSpecification = exports.ValidationProfile = exports.TransformResources = exports.TransformOutput = exports.TransformJobDefinition = exports.TransformInput = exports.SourceAlgorithmSpecification = exports.SourceAlgorithm = exports.S3DataSource = exports.ModelQuality = exports.ModelPackageStatusItem = exports.ModelPackageStatusDetails = exports.ModelPackageContainerDefinition = exports.ModelMetrics = exports.ModelInput = exports.ModelDataQuality = exports.MetricsSource = exports.MetadataProperties = exports.InferenceSpecification = exports.FileSource = exports.Explainability = exports.DriftCheckModelQuality = exports.DriftCheckModelDataQuality = exports.DriftCheckExplainability = exports.DriftCheckBias = exports.DriftCheckBaselines = exports.DataSource = exports.Bias = exports.AdditionalInferenceSpecificationDefinition = void 0;
const resource_1 = require("../resource");
class AdditionalInferenceSpecificationDefinition {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AdditionalInferenceSpecificationDefinition = AdditionalInferenceSpecificationDefinition;
class Bias {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Bias = Bias;
class DataSource {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DataSource = DataSource;
class DriftCheckBaselines {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DriftCheckBaselines = DriftCheckBaselines;
class DriftCheckBias {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DriftCheckBias = DriftCheckBias;
class DriftCheckExplainability {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DriftCheckExplainability = DriftCheckExplainability;
class DriftCheckModelDataQuality {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DriftCheckModelDataQuality = DriftCheckModelDataQuality;
class DriftCheckModelQuality {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DriftCheckModelQuality = DriftCheckModelQuality;
class Explainability {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Explainability = Explainability;
class FileSource {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.FileSource = FileSource;
class InferenceSpecification {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.InferenceSpecification = InferenceSpecification;
class MetadataProperties {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.MetadataProperties = MetadataProperties;
class MetricsSource {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.MetricsSource = MetricsSource;
class ModelDataQuality {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ModelDataQuality = ModelDataQuality;
class ModelInput {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ModelInput = ModelInput;
class ModelMetrics {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ModelMetrics = ModelMetrics;
class ModelPackageContainerDefinition {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ModelPackageContainerDefinition = ModelPackageContainerDefinition;
class ModelPackageStatusDetails {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ModelPackageStatusDetails = ModelPackageStatusDetails;
class ModelPackageStatusItem {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ModelPackageStatusItem = ModelPackageStatusItem;
class ModelQuality {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ModelQuality = ModelQuality;
class S3DataSource {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.S3DataSource = S3DataSource;
class SourceAlgorithm {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SourceAlgorithm = SourceAlgorithm;
class SourceAlgorithmSpecification {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SourceAlgorithmSpecification = SourceAlgorithmSpecification;
class TransformInput {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TransformInput = TransformInput;
class TransformJobDefinition {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TransformJobDefinition = TransformJobDefinition;
class TransformOutput {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TransformOutput = TransformOutput;
class TransformResources {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TransformResources = TransformResources;
class ValidationProfile {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ValidationProfile = ValidationProfile;
class ValidationSpecification {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ValidationSpecification = ValidationSpecification;
class ModelPackage extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::SageMaker::ModelPackage', properties || {});
    }
}
exports.default = ModelPackage;
ModelPackage.AdditionalInferenceSpecificationDefinition = AdditionalInferenceSpecificationDefinition;
ModelPackage.Bias = Bias;
ModelPackage.DataSource = DataSource;
ModelPackage.DriftCheckBaselines = DriftCheckBaselines;
ModelPackage.DriftCheckBias = DriftCheckBias;
ModelPackage.DriftCheckExplainability = DriftCheckExplainability;
ModelPackage.DriftCheckModelDataQuality = DriftCheckModelDataQuality;
ModelPackage.DriftCheckModelQuality = DriftCheckModelQuality;
ModelPackage.Explainability = Explainability;
ModelPackage.FileSource = FileSource;
ModelPackage.InferenceSpecification = InferenceSpecification;
ModelPackage.MetadataProperties = MetadataProperties;
ModelPackage.MetricsSource = MetricsSource;
ModelPackage.ModelDataQuality = ModelDataQuality;
ModelPackage.ModelInput = ModelInput;
ModelPackage.ModelMetrics = ModelMetrics;
ModelPackage.ModelPackageContainerDefinition = ModelPackageContainerDefinition;
ModelPackage.ModelPackageStatusDetails = ModelPackageStatusDetails;
ModelPackage.ModelPackageStatusItem = ModelPackageStatusItem;
ModelPackage.ModelQuality = ModelQuality;
ModelPackage.S3DataSource = S3DataSource;
ModelPackage.SourceAlgorithm = SourceAlgorithm;
ModelPackage.SourceAlgorithmSpecification = SourceAlgorithmSpecification;
ModelPackage.TransformInput = TransformInput;
ModelPackage.TransformJobDefinition = TransformJobDefinition;
ModelPackage.TransformOutput = TransformOutput;
ModelPackage.TransformResources = TransformResources;
ModelPackage.ValidationProfile = ValidationProfile;
ModelPackage.ValidationSpecification = ValidationSpecification;
