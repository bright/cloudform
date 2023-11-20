/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class AppIntegrationsConfiguration {
    ObjectFields?: List<Value<string>>
    AppIntegrationArn!: Value<string>

    constructor(properties: AppIntegrationsConfiguration) {
        Object.assign(this, properties)
    }
}

export class RenderingConfiguration {
    TemplateUri?: Value<string>

    constructor(properties: RenderingConfiguration) {
        Object.assign(this, properties)
    }
}

export class ServerSideEncryptionConfiguration {
    KmsKeyId?: Value<string>

    constructor(properties: ServerSideEncryptionConfiguration) {
        Object.assign(this, properties)
    }
}

export class SourceConfiguration {
    AppIntegrations!: AppIntegrationsConfiguration

    constructor(properties: SourceConfiguration) {
        Object.assign(this, properties)
    }
}

export interface KnowledgeBaseProperties {
    Description?: Value<string>
    KnowledgeBaseType: Value<string>
    SourceConfiguration?: SourceConfiguration
    ServerSideEncryptionConfiguration?: ServerSideEncryptionConfiguration
    RenderingConfiguration?: RenderingConfiguration
    Tags?: List<ResourceTag>
    Name: Value<string>
}

export default class KnowledgeBase extends ResourceBase<KnowledgeBaseProperties> {
    static AppIntegrationsConfiguration = AppIntegrationsConfiguration
    static RenderingConfiguration = RenderingConfiguration
    static ServerSideEncryptionConfiguration = ServerSideEncryptionConfiguration
    static SourceConfiguration = SourceConfiguration

    constructor(properties: KnowledgeBaseProperties) {
        super('AWS::Wisdom::KnowledgeBase', properties)
    }
}
