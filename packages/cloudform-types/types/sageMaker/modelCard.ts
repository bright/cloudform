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

export class AdditionalInformation {
    EthicalConsiderations?: Value<string>
    CaveatsAndRecommendations?: Value<string>
    CustomDetails?: {[key: string]: Value<string>}

    constructor(properties: AdditionalInformation) {
        Object.assign(this, properties)
    }
}

export class BusinessDetails {
    BusinessStakeholders?: Value<string>
    LineOfBusiness?: Value<string>
    BusinessProblem?: Value<string>

    constructor(properties: BusinessDetails) {
        Object.assign(this, properties)
    }
}

export class Container {
    NearestModelName?: Value<string>
    ModelDataUrl?: Value<string>
    Image!: Value<string>

    constructor(properties: Container) {
        Object.assign(this, properties)
    }
}

export class Content {
    IntendedUses?: IntendedUses
    AdditionalInformation?: AdditionalInformation
    ModelOverview?: ModelOverview
    TrainingDetails?: TrainingDetails
    EvaluationDetails?: List<EvaluationDetail>
    ModelPackageDetails?: ModelPackageDetails
    BusinessDetails?: BusinessDetails

    constructor(properties: Content) {
        Object.assign(this, properties)
    }
}

export class EvaluationDetail {
    Datasets?: List<Value<string>>
    EvaluationObservation?: Value<string>
    MetricGroups?: List<MetricGroup>
    Metadata?: {[key: string]: Value<string>}
    EvaluationJobArn?: Value<string>
    Name!: Value<string>

    constructor(properties: EvaluationDetail) {
        Object.assign(this, properties)
    }
}

export class Function {
    Condition?: Value<string>
    Function?: Value<string>
    Facet?: Value<string>

    constructor(properties: Function) {
        Object.assign(this, properties)
    }
}

export class InferenceEnvironment {
    ContainerImage?: List<Value<string>>

    constructor(properties: InferenceEnvironment) {
        Object.assign(this, properties)
    }
}

export class InferenceSpecification {
    Containers!: List<Container>

    constructor(properties: InferenceSpecification) {
        Object.assign(this, properties)
    }
}

export class IntendedUses {
    IntendedUses?: Value<string>
    FactorsAffectingModelEfficiency?: Value<string>
    PurposeOfModel?: Value<string>
    RiskRating?: Value<string>
    ExplanationsForRiskRating?: Value<string>

    constructor(properties: IntendedUses) {
        Object.assign(this, properties)
    }
}

export class MetricDataItems {
    XAxisName?: List<Value<string>>
    Type!: Value<string>
    Value!: {[key: string]: any}
    YAxisName?: List<Value<string>>
    Notes?: Value<string>
    Name!: Value<string>

    constructor(properties: MetricDataItems) {
        Object.assign(this, properties)
    }
}

export class MetricGroup {
    Name!: Value<string>
    MetricData!: List<MetricDataItems>

    constructor(properties: MetricGroup) {
        Object.assign(this, properties)
    }
}

export class ModelOverview {
    ModelOwner?: Value<string>
    ModelArtifact?: List<Value<string>>
    AlgorithmType?: Value<string>
    ModelName?: Value<string>
    InferenceEnvironment?: InferenceEnvironment
    ProblemType?: Value<string>
    ModelDescription?: Value<string>
    ModelVersion?: Value<number>
    ModelCreator?: Value<string>
    ModelId?: Value<string>

    constructor(properties: ModelOverview) {
        Object.assign(this, properties)
    }
}

export class ModelPackageCreator {
    UserProfileName?: Value<string>

    constructor(properties: ModelPackageCreator) {
        Object.assign(this, properties)
    }
}

export class ModelPackageDetails {
    ModelPackageGroupName?: Value<string>
    Task?: Value<string>
    CreatedBy?: ModelPackageCreator
    ApprovalDescription?: Value<string>
    ModelApprovalStatus?: Value<string>
    ModelPackageVersion?: Value<number>
    ModelPackageDescription?: Value<string>
    ModelPackageName?: Value<string>
    ModelPackageStatus?: Value<string>
    SourceAlgorithms?: List<SourceAlgorithm>
    InferenceSpecification?: InferenceSpecification
    ModelPackageArn?: Value<string>
    Domain?: Value<string>

    constructor(properties: ModelPackageDetails) {
        Object.assign(this, properties)
    }
}

export class ObjectiveFunction {
    Function?: Function
    Notes?: Value<string>

    constructor(properties: ObjectiveFunction) {
        Object.assign(this, properties)
    }
}

export class SecurityConfig {
    KmsKeyId?: Value<string>

    constructor(properties: SecurityConfig) {
        Object.assign(this, properties)
    }
}

export class SourceAlgorithm {
    ModelDataUrl?: Value<string>
    AlgorithmName!: Value<string>

    constructor(properties: SourceAlgorithm) {
        Object.assign(this, properties)
    }
}

export class TrainingDetails {
    ObjectiveFunction?: ObjectiveFunction
    TrainingObservations?: Value<string>
    TrainingJobDetails?: TrainingJobDetails

    constructor(properties: TrainingDetails) {
        Object.assign(this, properties)
    }
}

export class TrainingEnvironment {
    ContainerImage?: List<Value<string>>

    constructor(properties: TrainingEnvironment) {
        Object.assign(this, properties)
    }
}

export class TrainingHyperParameter {
    Value!: Value<string>
    Name!: Value<string>

    constructor(properties: TrainingHyperParameter) {
        Object.assign(this, properties)
    }
}

export class TrainingJobDetails {
    TrainingMetrics?: List<TrainingMetric>
    HyperParameters?: List<TrainingHyperParameter>
    TrainingArn?: Value<string>
    UserProvidedTrainingMetrics?: List<TrainingMetric>
    TrainingEnvironment?: TrainingEnvironment
    TrainingDatasets?: List<Value<string>>
    UserProvidedHyperParameters?: List<TrainingHyperParameter>

    constructor(properties: TrainingJobDetails) {
        Object.assign(this, properties)
    }
}

export class TrainingMetric {
    Value!: Value<number>
    Notes?: Value<string>
    Name!: Value<string>

    constructor(properties: TrainingMetric) {
        Object.assign(this, properties)
    }
}

export class UserContext {
    DomainId?: Value<string>
    UserProfileArn?: Value<string>
    UserProfileName?: Value<string>

    constructor(properties: UserContext) {
        Object.assign(this, properties)
    }
}

export interface ModelCardProperties {
    LastModifiedBy?: UserContext
    ModelCardName: Value<string>
    ModelCardStatus: Value<string>
    CreatedBy?: UserContext
    SecurityConfig?: SecurityConfig
    Content: Content
    Tags?: List<ResourceTag>
}

export default class ModelCard extends ResourceBase<ModelCardProperties> {
    static AdditionalInformation = AdditionalInformation
    static BusinessDetails = BusinessDetails
    static Container = Container
    static Content = Content
    static EvaluationDetail = EvaluationDetail
    static Function = Function
    static InferenceEnvironment = InferenceEnvironment
    static InferenceSpecification = InferenceSpecification
    static IntendedUses = IntendedUses
    static MetricDataItems = MetricDataItems
    static MetricGroup = MetricGroup
    static ModelOverview = ModelOverview
    static ModelPackageCreator = ModelPackageCreator
    static ModelPackageDetails = ModelPackageDetails
    static ObjectiveFunction = ObjectiveFunction
    static SecurityConfig = SecurityConfig
    static SourceAlgorithm = SourceAlgorithm
    static TrainingDetails = TrainingDetails
    static TrainingEnvironment = TrainingEnvironment
    static TrainingHyperParameter = TrainingHyperParameter
    static TrainingJobDetails = TrainingJobDetails
    static TrainingMetric = TrainingMetric
    static UserContext = UserContext

    constructor(properties: ModelCardProperties) {
        super('AWS::SageMaker::ModelCard', properties)
    }
}
