/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class ImageConfiguration {
    StartCommand?: Value<string>
    Port?: Value<string>

    constructor(properties: ImageConfiguration) {
        Object.assign(this, properties)
    }
}

export class InstanceConfiguration {
    Cpu?: Value<string>
    Memory?: Value<string>
    InstanceRoleArn?: Value<string>

    constructor(properties: InstanceConfiguration) {
        Object.assign(this, properties)
    }
}

export class AuthenticationConfiguration {
    ConnectionArn?: Value<string>
    AccessRoleArn?: Value<string>

    constructor(properties: AuthenticationConfiguration) {
        Object.assign(this, properties)
    }
}

export class KeyValuePair {
    Name?: Value<string>
    Value?: Value<string>

    constructor(properties: KeyValuePair) {
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
    Protocol?: Value<string>
    Path?: Value<string>
    Interval?: Value<number>
    Timeout?: Value<number>
    HealthyThreshold?: Value<number>
    UnhealthyThreshold?: Value<number>

    constructor(properties: HealthCheckConfiguration) {
        Object.assign(this, properties)
    }
}

export class CodeConfigurationValues {
    Runtime!: Value<string>
    BuildCommand?: Value<string>
    StartCommand?: Value<string>
    Port?: Value<string>

    constructor(properties: CodeConfigurationValues) {
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

export class ImageRepository {
    ImageIdentifier!: Value<string>
    ImageRepositoryType!: Value<string>

    constructor(properties: ImageRepository) {
        Object.assign(this, properties)
    }
}

export class SourceConfiguration {
    AutoDeploymentsEnabled?: Value<boolean>

    constructor(properties: SourceConfiguration) {
        Object.assign(this, properties)
    }
}

export class CodeRepository {
    RepositoryUrl!: Value<string>

    constructor(properties: CodeRepository) {
        Object.assign(this, properties)
    }
}

export class CodeConfiguration {
    ConfigurationSource!: Value<string>

    constructor(properties: CodeConfiguration) {
        Object.assign(this, properties)
    }
}

export interface ServiceProperties {
    ServiceName?: Value<string>
    AutoScalingConfigurationArn?: Value<string>
}

export default class Service extends ResourceBase<ServiceProperties> {
    static ImageConfiguration = ImageConfiguration
    static InstanceConfiguration = InstanceConfiguration
    static AuthenticationConfiguration = AuthenticationConfiguration
    static KeyValuePair = KeyValuePair
    static EncryptionConfiguration = EncryptionConfiguration
    static HealthCheckConfiguration = HealthCheckConfiguration
    static CodeConfigurationValues = CodeConfigurationValues
    static SourceCodeVersion = SourceCodeVersion
    static ImageRepository = ImageRepository
    static SourceConfiguration = SourceConfiguration
    static CodeRepository = CodeRepository
    static CodeConfiguration = CodeConfiguration

    constructor(properties: ServiceProperties) {
        super('AWS::AppRunner::Service', properties)
    }
}
