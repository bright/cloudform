import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class EncryptionConfiguration {
    EncryptionType: Value<string>;
    KmsKey?: Value<string>;
    constructor(properties: EncryptionConfiguration);
}
export declare class ImageScanningConfiguration {
    ScanOnPush?: Value<boolean>;
    constructor(properties: ImageScanningConfiguration);
}
export declare class LifecyclePolicy {
    LifecyclePolicyText?: Value<string>;
    RegistryId?: Value<string>;
    constructor(properties: LifecyclePolicy);
}
export interface RepositoryProperties {
    EmptyOnDelete?: Value<boolean>;
    ImageScanningConfiguration?: ImageScanningConfiguration;
    EncryptionConfiguration?: EncryptionConfiguration;
    RepositoryPolicyText?: {
        [key: string]: any;
    };
    LifecyclePolicy?: LifecyclePolicy;
    RepositoryName?: Value<string>;
    Tags?: List<ResourceTag>;
    ImageTagMutability?: Value<string>;
}
export default class Repository extends ResourceBase<RepositoryProperties> {
    static EncryptionConfiguration: typeof EncryptionConfiguration;
    static ImageScanningConfiguration: typeof ImageScanningConfiguration;
    static LifecyclePolicy: typeof LifecyclePolicy;
    constructor(properties?: RepositoryProperties);
}
