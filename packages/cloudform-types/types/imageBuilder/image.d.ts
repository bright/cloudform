import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export declare class ImageTestsConfiguration {
    ImageTestsEnabled?: Value<boolean>;
    TimeoutMinutes?: Value<number>;
    constructor(properties: ImageTestsConfiguration);
}
export interface ImageProperties {
    ImageTestsConfiguration?: ImageTestsConfiguration;
    ImageRecipeArn: Value<string>;
    DistributionConfigurationArn?: Value<string>;
    InfrastructureConfigurationArn: Value<string>;
    EnhancedImageMetadataEnabled?: Value<boolean>;
    Tags?: {
        [key: string]: Value<string>;
    };
}
export default class Image extends ResourceBase<ImageProperties> {
    static ImageTestsConfiguration: typeof ImageTestsConfiguration;
    constructor(properties: ImageProperties);
}
