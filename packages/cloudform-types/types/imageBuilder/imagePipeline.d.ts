import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class EcrConfiguration {
    ContainerTags?: List<Value<string>>;
    RepositoryName?: Value<string>;
    constructor(properties: EcrConfiguration);
}
export declare class ImageScanningConfiguration {
    EcrConfiguration?: EcrConfiguration;
    ImageScanningEnabled?: Value<boolean>;
    constructor(properties: ImageScanningConfiguration);
}
export declare class ImageTestsConfiguration {
    TimeoutMinutes?: Value<number>;
    ImageTestsEnabled?: Value<boolean>;
    constructor(properties: ImageTestsConfiguration);
}
export declare class Schedule {
    ScheduleExpression?: Value<string>;
    PipelineExecutionStartCondition?: Value<string>;
    constructor(properties: Schedule);
}
export interface ImagePipelineProperties {
    Status?: Value<string>;
    ImageScanningConfiguration?: ImageScanningConfiguration;
    InfrastructureConfigurationArn: Value<string>;
    ImageRecipeArn?: Value<string>;
    Description?: Value<string>;
    DistributionConfigurationArn?: Value<string>;
    ContainerRecipeArn?: Value<string>;
    Schedule?: Schedule;
    ImageTestsConfiguration?: ImageTestsConfiguration;
    EnhancedImageMetadataEnabled?: Value<boolean>;
    Tags?: {
        [key: string]: Value<string>;
    };
    Name: Value<string>;
}
export default class ImagePipeline extends ResourceBase<ImagePipelineProperties> {
    static EcrConfiguration: typeof EcrConfiguration;
    static ImageScanningConfiguration: typeof ImageScanningConfiguration;
    static ImageTestsConfiguration: typeof ImageTestsConfiguration;
    static Schedule: typeof Schedule;
    constructor(properties: ImagePipelineProperties);
}
