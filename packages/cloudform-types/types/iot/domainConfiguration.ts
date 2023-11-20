/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class AuthorizerConfig {
    DefaultAuthorizerName?: Value<string>
    AllowAuthorizerOverride?: Value<boolean>

    constructor(properties: AuthorizerConfig) {
        Object.assign(this, properties)
    }
}

export class ServerCertificateSummary {
    ServerCertificateStatusDetail?: Value<string>
    ServerCertificateArn?: Value<string>
    ServerCertificateStatus?: Value<string>

    constructor(properties: ServerCertificateSummary) {
        Object.assign(this, properties)
    }
}

export class TlsConfig {
    SecurityPolicy?: Value<string>

    constructor(properties: TlsConfig) {
        Object.assign(this, properties)
    }
}

export interface DomainConfigurationProperties {
    DomainConfigurationName?: Value<string>
    DomainName?: Value<string>
    ServiceType?: Value<string>
    DomainConfigurationStatus?: Value<string>
    ValidationCertificateArn?: Value<string>
    TlsConfig?: TlsConfig
    ServerCertificateArns?: List<Value<string>>
    AuthorizerConfig?: AuthorizerConfig
    Tags?: List<ResourceTag>
}

export default class DomainConfiguration extends ResourceBase<DomainConfigurationProperties> {
    static AuthorizerConfig = AuthorizerConfig
    static ServerCertificateSummary = ServerCertificateSummary
    static TlsConfig = TlsConfig

    constructor(properties?: DomainConfigurationProperties) {
        super('AWS::IoT::DomainConfiguration', properties || {})
    }
}
