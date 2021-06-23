import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export declare class ImageTestsConfiguration {
    ImageTestsEnabled?: Value<boolean>;
    TimeoutMinutes?: Value<number>;
    constructor(properties: ImageTestsConfiguration);
}
export declare class Schedule {
    ScheduleExpression?: Value<string>;
    PipelineExecutionStartCondition?: Value<string>;
    constructor(properties: Schedule);
}
export interface ImagePipelineProperties {
    Name: Value<string>;
    Description?: Value<string>;
    ImageTestsConfiguration?: ImageTestsConfiguration;
    Status?: Value<string>;
    Schedule?: Schedule;
    ImageRecipeArn?: Value<string>;
    ContainerRecipeArn?: Value<string>;
    DistributionConfigurationArn?: Value<string>;
    InfrastructureConfigurationArn: Value<string>;
    EnhancedImageMetadataEnabled?: Value<boolean>;
    Tags?: {
        [key: string]: Value<string>;
    };
}
export default class ImagePipeline extends ResourceBase<ImagePipelineProperties> {
    static ImageTestsConfiguration: typeof ImageTestsConfiguration;
    static Schedule: typeof Schedule;
    constructor(properties: ImagePipelineProperties);
}
