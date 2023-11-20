/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class DeviceOptions {
    TenantId?: Value<string>

    constructor(properties: DeviceOptions) {
        Object.assign(this, properties)
    }
}

export class OidcOptions {
    TokenEndpoint?: Value<string>
    Scope?: Value<string>
    Issuer?: Value<string>
    ClientSecret?: Value<string>
    UserInfoEndpoint?: Value<string>
    ClientId?: Value<string>
    AuthorizationEndpoint?: Value<string>

    constructor(properties: OidcOptions) {
        Object.assign(this, properties)
    }
}

export class SseSpecification {
    CustomerManagedKeyEnabled?: Value<boolean>
    KmsKeyArn?: Value<string>

    constructor(properties: SseSpecification) {
        Object.assign(this, properties)
    }
}

export interface VerifiedAccessTrustProviderProperties {
    PolicyReferenceName: Value<string>
    DeviceOptions?: DeviceOptions
    DeviceTrustProviderType?: Value<string>
    Description?: Value<string>
    OidcOptions?: OidcOptions
    TrustProviderType: Value<string>
    SseSpecification?: SseSpecification
    UserTrustProviderType?: Value<string>
    Tags?: List<ResourceTag>
}

export default class VerifiedAccessTrustProvider extends ResourceBase<VerifiedAccessTrustProviderProperties> {
    static DeviceOptions = DeviceOptions
    static OidcOptions = OidcOptions
    static SseSpecification = SseSpecification

    constructor(properties: VerifiedAccessTrustProviderProperties) {
        super('AWS::EC2::VerifiedAccessTrustProvider', properties)
    }
}
