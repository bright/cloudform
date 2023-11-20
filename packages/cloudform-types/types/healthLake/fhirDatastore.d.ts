import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class CreatedAt {
    Nanos: Value<number>;
    Seconds: Value<string>;
    constructor(properties: CreatedAt);
}
export declare class IdentityProviderConfiguration {
    AuthorizationStrategy: Value<string>;
    IdpLambdaArn?: Value<string>;
    FineGrainedAuthorizationEnabled?: Value<boolean>;
    Metadata?: Value<string>;
    constructor(properties: IdentityProviderConfiguration);
}
export declare class KmsEncryptionConfig {
    KmsKeyId?: Value<string>;
    CmkType: Value<string>;
    constructor(properties: KmsEncryptionConfig);
}
export declare class PreloadDataConfig {
    PreloadDataType: Value<string>;
    constructor(properties: PreloadDataConfig);
}
export declare class SseConfiguration {
    KmsEncryptionConfig: KmsEncryptionConfig;
    constructor(properties: SseConfiguration);
}
export interface FHIRDatastoreProperties {
    DatastoreTypeVersion: Value<string>;
    DatastoreName?: Value<string>;
    IdentityProviderConfiguration?: IdentityProviderConfiguration;
    Tags?: List<ResourceTag>;
    PreloadDataConfig?: PreloadDataConfig;
    SseConfiguration?: SseConfiguration;
}
export default class FHIRDatastore extends ResourceBase<FHIRDatastoreProperties> {
    static CreatedAt: typeof CreatedAt;
    static IdentityProviderConfiguration: typeof IdentityProviderConfiguration;
    static KmsEncryptionConfig: typeof KmsEncryptionConfig;
    static PreloadDataConfig: typeof PreloadDataConfig;
    static SseConfiguration: typeof SseConfiguration;
    constructor(properties: FHIRDatastoreProperties);
}
