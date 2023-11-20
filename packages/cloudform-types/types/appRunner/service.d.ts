import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class AuthenticationConfiguration {
    AccessRoleArn?: Value<string>;
    ConnectionArn?: Value<string>;
    constructor(properties: AuthenticationConfiguration);
}
export declare class CodeConfiguration {
    ConfigurationSource: Value<string>;
    CodeConfigurationValues?: CodeConfigurationValues;
    constructor(properties: CodeConfiguration);
}
export declare class CodeConfigurationValues {
    RuntimeEnvironmentSecrets?: List<KeyValuePair>;
    Runtime: Value<string>;
    StartCommand?: Value<string>;
    RuntimeEnvironmentVariables?: List<KeyValuePair>;
    Port?: Value<string>;
    BuildCommand?: Value<string>;
    constructor(properties: CodeConfigurationValues);
}
export declare class CodeRepository {
    SourceCodeVersion: SourceCodeVersion;
    CodeConfiguration?: CodeConfiguration;
    SourceDirectory?: Value<string>;
    RepositoryUrl: Value<string>;
    constructor(properties: CodeRepository);
}
export declare class EgressConfiguration {
    VpcConnectorArn?: Value<string>;
    EgressType: Value<string>;
    constructor(properties: EgressConfiguration);
}
export declare class EncryptionConfiguration {
    KmsKey: Value<string>;
    constructor(properties: EncryptionConfiguration);
}
export declare class HealthCheckConfiguration {
    Path?: Value<string>;
    UnhealthyThreshold?: Value<number>;
    Timeout?: Value<number>;
    HealthyThreshold?: Value<number>;
    Protocol?: Value<string>;
    Interval?: Value<number>;
    constructor(properties: HealthCheckConfiguration);
}
export declare class ImageConfiguration {
    RuntimeEnvironmentSecrets?: List<KeyValuePair>;
    StartCommand?: Value<string>;
    RuntimeEnvironmentVariables?: List<KeyValuePair>;
    Port?: Value<string>;
    constructor(properties: ImageConfiguration);
}
export declare class ImageRepository {
    ImageIdentifier: Value<string>;
    ImageConfiguration?: ImageConfiguration;
    ImageRepositoryType: Value<string>;
    constructor(properties: ImageRepository);
}
export declare class IngressConfiguration {
    IsPubliclyAccessible: Value<boolean>;
    constructor(properties: IngressConfiguration);
}
export declare class InstanceConfiguration {
    InstanceRoleArn?: Value<string>;
    Memory?: Value<string>;
    Cpu?: Value<string>;
    constructor(properties: InstanceConfiguration);
}
export declare class KeyValuePair {
    Value?: Value<string>;
    Name?: Value<string>;
    constructor(properties: KeyValuePair);
}
export declare class NetworkConfiguration {
    IpAddressType?: Value<string>;
    EgressConfiguration?: EgressConfiguration;
    IngressConfiguration?: IngressConfiguration;
    constructor(properties: NetworkConfiguration);
}
export declare class ServiceObservabilityConfiguration {
    ObservabilityEnabled: Value<boolean>;
    ObservabilityConfigurationArn?: Value<string>;
    constructor(properties: ServiceObservabilityConfiguration);
}
export declare class SourceCodeVersion {
    Type: Value<string>;
    Value: Value<string>;
    constructor(properties: SourceCodeVersion);
}
export declare class SourceConfiguration {
    AuthenticationConfiguration?: AuthenticationConfiguration;
    CodeRepository?: CodeRepository;
    ImageRepository?: ImageRepository;
    AutoDeploymentsEnabled?: Value<boolean>;
    constructor(properties: SourceConfiguration);
}
export interface ServiceProperties {
    HealthCheckConfiguration?: HealthCheckConfiguration;
    InstanceConfiguration?: InstanceConfiguration;
    EncryptionConfiguration?: EncryptionConfiguration;
    ServiceName?: Value<string>;
    ObservabilityConfiguration?: ServiceObservabilityConfiguration;
    SourceConfiguration: SourceConfiguration;
    AutoScalingConfigurationArn?: Value<string>;
    NetworkConfiguration?: NetworkConfiguration;
    Tags?: List<ResourceTag>;
}
export default class Service extends ResourceBase<ServiceProperties> {
    static AuthenticationConfiguration: typeof AuthenticationConfiguration;
    static CodeConfiguration: typeof CodeConfiguration;
    static CodeConfigurationValues: typeof CodeConfigurationValues;
    static CodeRepository: typeof CodeRepository;
    static EgressConfiguration: typeof EgressConfiguration;
    static EncryptionConfiguration: typeof EncryptionConfiguration;
    static HealthCheckConfiguration: typeof HealthCheckConfiguration;
    static ImageConfiguration: typeof ImageConfiguration;
    static ImageRepository: typeof ImageRepository;
    static IngressConfiguration: typeof IngressConfiguration;
    static InstanceConfiguration: typeof InstanceConfiguration;
    static KeyValuePair: typeof KeyValuePair;
    static NetworkConfiguration: typeof NetworkConfiguration;
    static ServiceObservabilityConfiguration: typeof ServiceObservabilityConfiguration;
    static SourceCodeVersion: typeof SourceCodeVersion;
    static SourceConfiguration: typeof SourceConfiguration;
    constructor(properties: ServiceProperties);
}
