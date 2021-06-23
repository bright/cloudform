import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class ImageConfiguration {
    StartCommand?: Value<string>;
    Port?: Value<string>;
    RuntimeEnvironmentVariables?: List<KeyValuePair>;
    constructor(properties: ImageConfiguration);
}
export declare class InstanceConfiguration {
    Cpu?: Value<string>;
    Memory?: Value<string>;
    InstanceRoleArn?: Value<string>;
    constructor(properties: InstanceConfiguration);
}
export declare class AuthenticationConfiguration {
    ConnectionArn?: Value<string>;
    AccessRoleArn?: Value<string>;
    constructor(properties: AuthenticationConfiguration);
}
export declare class KeyValuePair {
    Name?: Value<string>;
    Value?: Value<string>;
    constructor(properties: KeyValuePair);
}
export declare class EncryptionConfiguration {
    KmsKey: Value<string>;
    constructor(properties: EncryptionConfiguration);
}
export declare class HealthCheckConfiguration {
    Protocol?: Value<string>;
    Path?: Value<string>;
    Interval?: Value<number>;
    Timeout?: Value<number>;
    HealthyThreshold?: Value<number>;
    UnhealthyThreshold?: Value<number>;
    constructor(properties: HealthCheckConfiguration);
}
export declare class CodeConfigurationValues {
    Runtime: Value<string>;
    BuildCommand?: Value<string>;
    StartCommand?: Value<string>;
    Port?: Value<string>;
    RuntimeEnvironmentVariables?: List<KeyValuePair>;
    constructor(properties: CodeConfigurationValues);
}
export declare class SourceCodeVersion {
    Type: Value<string>;
    Value: Value<string>;
    constructor(properties: SourceCodeVersion);
}
export declare class ImageRepository {
    ImageIdentifier: Value<string>;
    ImageConfiguration?: ImageConfiguration;
    ImageRepositoryType: Value<string>;
    constructor(properties: ImageRepository);
}
export declare class SourceConfiguration {
    CodeRepository?: CodeRepository;
    ImageRepository?: ImageRepository;
    AutoDeploymentsEnabled?: Value<boolean>;
    AuthenticationConfiguration?: AuthenticationConfiguration;
    constructor(properties: SourceConfiguration);
}
export declare class CodeRepository {
    RepositoryUrl: Value<string>;
    SourceCodeVersion: SourceCodeVersion;
    CodeConfiguration?: CodeConfiguration;
    constructor(properties: CodeRepository);
}
export declare class CodeConfiguration {
    ConfigurationSource: Value<string>;
    CodeConfigurationValues?: CodeConfigurationValues;
    constructor(properties: CodeConfiguration);
}
export interface ServiceProperties {
    ServiceName?: Value<string>;
    SourceConfiguration: SourceConfiguration;
    InstanceConfiguration?: InstanceConfiguration;
    Tags?: List<ResourceTag>;
    EncryptionConfiguration?: EncryptionConfiguration;
    HealthCheckConfiguration?: HealthCheckConfiguration;
    AutoScalingConfigurationArn?: Value<string>;
}
export default class Service extends ResourceBase<ServiceProperties> {
    static ImageConfiguration: typeof ImageConfiguration;
    static InstanceConfiguration: typeof InstanceConfiguration;
    static AuthenticationConfiguration: typeof AuthenticationConfiguration;
    static KeyValuePair: typeof KeyValuePair;
    static EncryptionConfiguration: typeof EncryptionConfiguration;
    static HealthCheckConfiguration: typeof HealthCheckConfiguration;
    static CodeConfigurationValues: typeof CodeConfigurationValues;
    static SourceCodeVersion: typeof SourceCodeVersion;
    static ImageRepository: typeof ImageRepository;
    static SourceConfiguration: typeof SourceConfiguration;
    static CodeRepository: typeof CodeRepository;
    static CodeConfiguration: typeof CodeConfiguration;
    constructor(properties: ServiceProperties);
}
