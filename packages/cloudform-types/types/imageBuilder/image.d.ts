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
export interface ImageProperties {
    ImageScanningConfiguration?: ImageScanningConfiguration;
    InfrastructureConfigurationArn: Value<string>;
    ImageRecipeArn?: Value<string>;
    DistributionConfigurationArn?: Value<string>;
    ContainerRecipeArn?: Value<string>;
    ImageTestsConfiguration?: ImageTestsConfiguration;
    EnhancedImageMetadataEnabled?: Value<boolean>;
    Tags?: {
        [key: string]: Value<string>;
    };
}
export default class Image extends ResourceBase<ImageProperties> {
    static EcrConfiguration: typeof EcrConfiguration;
    static ImageScanningConfiguration: typeof ImageScanningConfiguration;
    static ImageTestsConfiguration: typeof ImageTestsConfiguration;
    constructor(properties: ImageProperties);
}
