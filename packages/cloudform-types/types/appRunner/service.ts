/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class AuthenticationConfiguration {
    AccessRoleArn?: Value<string>
    ConnectionArn?: Value<string>

    constructor(properties: AuthenticationConfiguration) {
        Object.assign(this, properties)
    }
}

export class CodeConfiguration {
    ConfigurationSource!: Value<string>
    CodeConfigurationValues?: CodeConfigurationValues

    constructor(properties: CodeConfiguration) {
        Object.assign(this, properties)
    }
}

export class CodeConfigurationValues {
    RuntimeEnvironmentSecrets?: List<KeyValuePair>
    Runtime!: Value<string>
    StartCommand?: Value<string>
    RuntimeEnvironmentVariables?: List<KeyValuePair>
    Port?: Value<string>
    BuildCommand?: Value<string>

    constructor(properties: CodeConfigurationValues) {
        Object.assign(this, properties)
    }
}

export class CodeRepository {
    SourceCodeVersion!: SourceCodeVersion
    CodeConfiguration?: CodeConfiguration
    SourceDirectory?: Value<string>
    RepositoryUrl!: Value<string>

    constructor(properties: CodeRepository) {
        Object.assign(this, properties)
    }
}

export class EgressConfiguration {
    VpcConnectorArn?: Value<string>
    EgressType!: Value<string>

    constructor(properties: EgressConfiguration) {
        Object.assign(this, properties)
    }
}

export class EncryptionConfiguration {
    KmsKey!: Value<string>

    constructor(properties: EncryptionConfiguration) {
        Object.assign(this, properties)
    }
}

export class HealthCheckConfiguration {
    Path?: Value<string>
    UnhealthyThreshold?: Value<number>
    Timeout?: Value<number>
    HealthyThreshold?: Value<number>
    Protocol?: Value<string>
    Interval?: Value<number>

    constructor(properties: HealthCheckConfiguration) {
        Object.assign(this, properties)
    }
}

export class ImageConfiguration {
    RuntimeEnvironmentSecrets?: List<KeyValuePair>
    StartCommand?: Value<string>
    RuntimeEnvironmentVariables?: List<KeyValuePair>
    Port?: Value<string>

    constructor(properties: ImageConfiguration) {
        Object.assign(this, properties)
    }
}

export class ImageRepository {
    ImageIdentifier!: Value<string>
    ImageConfiguration?: ImageConfiguration
    ImageRepositoryType!: Value<string>

    constructor(properties: ImageRepository) {
        Object.assign(this, properties)
    }
}

export class IngressConfiguration {
    IsPubliclyAccessible!: Value<boolean>

    constructor(properties: IngressConfiguration) {
        Object.assign(this, properties)
    }
}

export class InstanceConfiguration {
    InstanceRoleArn?: Value<string>
    Memory?: Value<string>
    Cpu?: Value<string>

    constructor(properties: InstanceConfiguration) {
        Object.assign(this, properties)
    }
}

export class KeyValuePair {
    Value?: Value<string>
    Name?: Value<string>

    constructor(properties: KeyValuePair) {
        Object.assign(this, properties)
    }
}

export class NetworkConfiguration {
    IpAddressType?: Value<string>
    EgressConfiguration?: EgressConfiguration
    IngressConfiguration?: IngressConfiguration

    constructor(properties: NetworkConfiguration) {
        Object.assign(this, properties)
    }
}

export class ServiceObservabilityConfiguration {
    ObservabilityEnabled!: Value<boolean>
    ObservabilityConfigurationArn?: Value<string>

    constructor(properties: ServiceObservabilityConfiguration) {
        Object.assign(this, properties)
    }
}

export class SourceCodeVersion {
    Type!: Value<string>
    Value!: Value<string>

    constructor(properties: SourceCodeVersion) {
        Object.assign(this, properties)
    }
}

export class SourceConfiguration {
    AuthenticationConfiguration?: AuthenticationConfiguration
    CodeRepository?: CodeRepository
    ImageRepository?: ImageRepository
    AutoDeploymentsEnabled?: Value<boolean>

    constructor(properties: SourceConfiguration) {
        Object.assign(this, properties)
    }
}

export interface ServiceProperties {
    HealthCheckConfiguration?: HealthCheckConfiguration
    InstanceConfiguration?: InstanceConfiguration
    EncryptionConfiguration?: EncryptionConfiguration
    ServiceName?: Value<string>
    ObservabilityConfiguration?: ServiceObservabilityConfiguration
    SourceConfiguration: SourceConfiguration
    AutoScalingConfigurationArn?: Value<string>
    NetworkConfiguration?: NetworkConfiguration
    Tags?: List<ResourceTag>
}

export default class Service extends ResourceBase<ServiceProperties> {
    static AuthenticationConfiguration = AuthenticationConfiguration
    static CodeConfiguration = CodeConfiguration
    static CodeConfigurationValues = CodeConfigurationValues
    static CodeRepository = CodeRepository
    static EgressConfiguration = EgressConfiguration
    static EncryptionConfiguration = EncryptionConfiguration
    static HealthCheckConfiguration = HealthCheckConfiguration
    static ImageConfiguration = ImageConfiguration
    static ImageRepository = ImageRepository
    static IngressConfiguration = IngressConfiguration
    static InstanceConfiguration = InstanceConfiguration
    static KeyValuePair = KeyValuePair
    static NetworkConfiguration = NetworkConfiguration
    static ServiceObservabilityConfiguration = ServiceObservabilityConfiguration
    static SourceCodeVersion = SourceCodeVersion
    static SourceConfiguration = SourceConfiguration

    constructor(properties: ServiceProperties) {
        super('AWS::AppRunner::Service', properties)
    }
}
