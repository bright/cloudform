import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class LifecyclePolicy {
    LifecyclePolicyText?: Value<string>;
    RegistryId?: Value<string>;
    constructor(properties: LifecyclePolicy);
}
export declare class ImageScanningConfiguration {
    ScanOnPush?: Value<boolean>;
    constructor(properties: ImageScanningConfiguration);
}
export declare class EncryptionConfiguration {
    EncryptionType: Value<string>;
    KmsKey?: Value<string>;
    constructor(properties: EncryptionConfiguration);
}
export interface RepositoryProperties {
    LifecyclePolicy?: LifecyclePolicy;
    RepositoryName?: Value<string>;
    RepositoryPolicyText?: {
        [key: string]: any;
    };
    Tags?: List<ResourceTag>;
    ImageTagMutability?: Value<string>;
    ImageScanningConfiguration?: ImageScanningConfiguration;
    EncryptionConfiguration?: EncryptionConfiguration;
}
export default class Repository extends ResourceBase<RepositoryProperties> {
    static LifecyclePolicy: typeof LifecyclePolicy;
    static ImageScanningConfiguration: typeof ImageScanningConfiguration;
    static EncryptionConfiguration: typeof EncryptionConfiguration;
    constructor(properties?: RepositoryProperties);
}
