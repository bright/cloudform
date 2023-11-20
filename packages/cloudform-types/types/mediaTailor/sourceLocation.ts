/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class AccessConfiguration {
    SecretsManagerAccessTokenConfiguration?: SecretsManagerAccessTokenConfiguration
    AccessType?: Value<string>

    constructor(properties: AccessConfiguration) {
        Object.assign(this, properties)
    }
}

export class DefaultSegmentDeliveryConfiguration {
    BaseUrl?: Value<string>

    constructor(properties: DefaultSegmentDeliveryConfiguration) {
        Object.assign(this, properties)
    }
}

export class HttpConfiguration {
    BaseUrl!: Value<string>

    constructor(properties: HttpConfiguration) {
        Object.assign(this, properties)
    }
}

export class SecretsManagerAccessTokenConfiguration {
    SecretArn?: Value<string>
    HeaderName?: Value<string>
    SecretStringKey?: Value<string>

    constructor(properties: SecretsManagerAccessTokenConfiguration) {
        Object.assign(this, properties)
    }
}

export class SegmentDeliveryConfiguration {
    BaseUrl?: Value<string>
    Name?: Value<string>

    constructor(properties: SegmentDeliveryConfiguration) {
        Object.assign(this, properties)
    }
}

export interface SourceLocationProperties {
    SourceLocationName: Value<string>
    DefaultSegmentDeliveryConfiguration?: DefaultSegmentDeliveryConfiguration
    SegmentDeliveryConfigurations?: List<SegmentDeliveryConfiguration>
    HttpConfiguration: HttpConfiguration
    AccessConfiguration?: AccessConfiguration
    Tags?: List<ResourceTag>
}

export default class SourceLocation extends ResourceBase<SourceLocationProperties> {
    static AccessConfiguration = AccessConfiguration
    static DefaultSegmentDeliveryConfiguration = DefaultSegmentDeliveryConfiguration
    static HttpConfiguration = HttpConfiguration
    static SecretsManagerAccessTokenConfiguration = SecretsManagerAccessTokenConfiguration
    static SegmentDeliveryConfiguration = SegmentDeliveryConfiguration

    constructor(properties: SourceLocationProperties) {
        super('AWS::MediaTailor::SourceLocation', properties)
    }
}
