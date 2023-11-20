import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class AdditionalInformation {
    EthicalConsiderations?: Value<string>;
    CaveatsAndRecommendations?: Value<string>;
    CustomDetails?: {
        [key: string]: Value<string>;
    };
    constructor(properties: AdditionalInformation);
}
export declare class BusinessDetails {
    BusinessStakeholders?: Value<string>;
    LineOfBusiness?: Value<string>;
    BusinessProblem?: Value<string>;
    constructor(properties: BusinessDetails);
}
export declare class Container {
    NearestModelName?: Value<string>;
    ModelDataUrl?: Value<string>;
    Image: Value<string>;
    constructor(properties: Container);
}
export declare class Content {
    IntendedUses?: IntendedUses;
    AdditionalInformation?: AdditionalInformation;
    ModelOverview?: ModelOverview;
    TrainingDetails?: TrainingDetails;
    EvaluationDetails?: List<EvaluationDetail>;
    ModelPackageDetails?: ModelPackageDetails;
    BusinessDetails?: BusinessDetails;
    constructor(properties: Content);
}
export declare class EvaluationDetail {
    Datasets?: List<Value<string>>;
    EvaluationObservation?: Value<string>;
    MetricGroups?: List<MetricGroup>;
    Metadata?: {
        [key: string]: Value<string>;
    };
    EvaluationJobArn?: Value<string>;
    Name: Value<string>;
    constructor(properties: EvaluationDetail);
}
export declare class Function {
    Condition?: Value<string>;
    Function?: Value<string>;
    Facet?: Value<string>;
    constructor(properties: Function);
}
export declare class InferenceEnvironment {
    ContainerImage?: List<Value<string>>;
    constructor(properties: InferenceEnvironment);
}
export declare class InferenceSpecification {
    Containers: List<Container>;
    constructor(properties: InferenceSpecification);
}
export declare class IntendedUses {
    IntendedUses?: Value<string>;
    FactorsAffectingModelEfficiency?: Value<string>;
    PurposeOfModel?: Value<string>;
    RiskRating?: Value<string>;
    ExplanationsForRiskRating?: Value<string>;
    constructor(properties: IntendedUses);
}
export declare class MetricDataItems {
    XAxisName?: List<Value<string>>;
    Type: Value<string>;
    Value: {
        [key: string]: any;
    };
    YAxisName?: List<Value<string>>;
    Notes?: Value<string>;
    Name: Value<string>;
    constructor(properties: MetricDataItems);
}
export declare class MetricGroup {
    Name: Value<string>;
    MetricData: List<MetricDataItems>;
    constructor(properties: MetricGroup);
}
export declare class ModelOverview {
    ModelOwner?: Value<string>;
    ModelArtifact?: List<Value<string>>;
    AlgorithmType?: Value<string>;
    ModelName?: Value<string>;
    InferenceEnvironment?: InferenceEnvironment;
    ProblemType?: Value<string>;
    ModelDescription?: Value<string>;
    ModelVersion?: Value<number>;
    ModelCreator?: Value<string>;
    ModelId?: Value<string>;
    constructor(properties: ModelOverview);
}
export declare class ModelPackageCreator {
    UserProfileName?: Value<string>;
    constructor(properties: ModelPackageCreator);
}
export declare class ModelPackageDetails {
    ModelPackageGroupName?: Value<string>;
    Task?: Value<string>;
    CreatedBy?: ModelPackageCreator;
    ApprovalDescription?: Value<string>;
    ModelApprovalStatus?: Value<string>;
    ModelPackageVersion?: Value<number>;
    ModelPackageDescription?: Value<string>;
    ModelPackageName?: Value<string>;
    ModelPackageStatus?: Value<string>;
    SourceAlgorithms?: List<SourceAlgorithm>;
    InferenceSpecification?: InferenceSpecification;
    ModelPackageArn?: Value<string>;
    Domain?: Value<string>;
    constructor(properties: ModelPackageDetails);
}
export declare class ObjectiveFunction {
    Function?: Function;
    Notes?: Value<string>;
    constructor(properties: ObjectiveFunction);
}
export declare class SecurityConfig {
    KmsKeyId?: Value<string>;
    constructor(properties: SecurityConfig);
}
export declare class SourceAlgorithm {
    ModelDataUrl?: Value<string>;
    AlgorithmName: Value<string>;
    constructor(properties: SourceAlgorithm);
}
export declare class TrainingDetails {
    ObjectiveFunction?: ObjectiveFunction;
    TrainingObservations?: Value<string>;
    TrainingJobDetails?: TrainingJobDetails;
    constructor(properties: TrainingDetails);
}
export declare class TrainingEnvironment {
    ContainerImage?: List<Value<string>>;
    constructor(properties: TrainingEnvironment);
}
export declare class TrainingHyperParameter {
    Value: Value<string>;
    Name: Value<string>;
    constructor(properties: TrainingHyperParameter);
}
export declare class TrainingJobDetails {
    TrainingMetrics?: List<TrainingMetric>;
    HyperParameters?: List<TrainingHyperParameter>;
    TrainingArn?: Value<string>;
    UserProvidedTrainingMetrics?: List<TrainingMetric>;
    TrainingEnvironment?: TrainingEnvironment;
    TrainingDatasets?: List<Value<string>>;
    UserProvidedHyperParameters?: List<TrainingHyperParameter>;
    constructor(properties: TrainingJobDetails);
}
export declare class TrainingMetric {
    Value: Value<number>;
    Notes?: Value<string>;
    Name: Value<string>;
    constructor(properties: TrainingMetric);
}
export declare class UserContext {
    DomainId?: Value<string>;
    UserProfileArn?: Value<string>;
    UserProfileName?: Value<string>;
    constructor(properties: UserContext);
}
export interface ModelCardProperties {
    LastModifiedBy?: UserContext;
    ModelCardName: Value<string>;
    ModelCardStatus: Value<string>;
    CreatedBy?: UserContext;
    SecurityConfig?: SecurityConfig;
    Content: Content;
    Tags?: List<ResourceTag>;
}
export default class ModelCard extends ResourceBase<ModelCardProperties> {
    static AdditionalInformation: typeof AdditionalInformation;
    static BusinessDetails: typeof BusinessDetails;
    static Container: typeof Container;
    static Content: typeof Content;
    static EvaluationDetail: typeof EvaluationDetail;
    static Function: typeof Function;
    static InferenceEnvironment: typeof InferenceEnvironment;
    static InferenceSpecification: typeof InferenceSpecification;
    static IntendedUses: typeof IntendedUses;
    static MetricDataItems: typeof MetricDataItems;
    static MetricGroup: typeof MetricGroup;
    static ModelOverview: typeof ModelOverview;
    static ModelPackageCreator: typeof ModelPackageCreator;
    static ModelPackageDetails: typeof ModelPackageDetails;
    static ObjectiveFunction: typeof ObjectiveFunction;
    static SecurityConfig: typeof SecurityConfig;
    static SourceAlgorithm: typeof SourceAlgorithm;
    static TrainingDetails: typeof TrainingDetails;
    static TrainingEnvironment: typeof TrainingEnvironment;
    static TrainingHyperParameter: typeof TrainingHyperParameter;
    static TrainingJobDetails: typeof TrainingJobDetails;
    static TrainingMetric: typeof TrainingMetric;
    static UserContext: typeof UserContext;
    constructor(properties: ModelCardProperties);
}
