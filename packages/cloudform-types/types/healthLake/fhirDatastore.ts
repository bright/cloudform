/* Generated from: 
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class CreatedAt {
    Nanos!: Value<number>
    Seconds!: Value<string>

    constructor(properties: CreatedAt) {
        Object.assign(this, properties)
    }
}

export class IdentityProviderConfiguration {
    AuthorizationStrategy!: Value<string>
    IdpLambdaArn?: Value<string>
    FineGrainedAuthorizationEnabled?: Value<boolean>
    Metadata?: Value<string>

    constructor(properties: IdentityProviderConfiguration) {
        Object.assign(this, properties)
    }
}

export class KmsEncryptionConfig {
    KmsKeyId?: Value<string>
    CmkType!: Value<string>

    constructor(properties: KmsEncryptionConfig) {
        Object.assign(this, properties)
    }
}

export class PreloadDataConfig {
    PreloadDataType!: Value<string>

    constructor(properties: PreloadDataConfig) {
        Object.assign(this, properties)
    }
}

export class SseConfiguration {
    KmsEncryptionConfig!: KmsEncryptionConfig

    constructor(properties: SseConfiguration) {
        Object.assign(this, properties)
    }
}

export interface FHIRDatastoreProperties {
    DatastoreTypeVersion: Value<string>
    DatastoreName?: Value<string>
    IdentityProviderConfiguration?: IdentityProviderConfiguration
    Tags?: List<ResourceTag>
    PreloadDataConfig?: PreloadDataConfig
    SseConfiguration?: SseConfiguration
}

export default class FHIRDatastore extends ResourceBase<FHIRDatastoreProperties> {
    static CreatedAt = CreatedAt
    static IdentityProviderConfiguration = IdentityProviderConfiguration
    static KmsEncryptionConfig = KmsEncryptionConfig
    static PreloadDataConfig = PreloadDataConfig
    static SseConfiguration = SseConfiguration

    constructor(properties: FHIRDatastoreProperties) {
        super('AWS::HealthLake::FHIRDatastore', properties)
    }
}
