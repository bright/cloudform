/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-3 (https://d2zq80gdmjim8k.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
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
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export class CachePolicyConfig {
    Comment?: Value<string>
    MinTTL!: Value<number>
    MaxTTL!: Value<number>
    ParametersInCacheKeyAndForwardedToOrigin!: ParametersInCacheKeyAndForwardedToOrigin
    DefaultTTL!: Value<number>
    Name!: Value<string>

    constructor(properties: CachePolicyConfig) {
        Object.assign(this, properties)
    }
}

export class CookiesConfig {
    Cookies?: List<Value<string>>
    CookieBehavior!: Value<string>

    constructor(properties: CookiesConfig) {
        Object.assign(this, properties)
    }
}

export class HeadersConfig {
    Headers?: List<Value<string>>
    HeaderBehavior!: Value<string>

    constructor(properties: HeadersConfig) {
        Object.assign(this, properties)
    }
}

export class ParametersInCacheKeyAndForwardedToOrigin {
    EnableAcceptEncodingBrotli?: Value<boolean>
    HeadersConfig!: HeadersConfig
    CookiesConfig!: CookiesConfig
    EnableAcceptEncodingGzip!: Value<boolean>
    QueryStringsConfig!: QueryStringsConfig

    constructor(properties: ParametersInCacheKeyAndForwardedToOrigin) {
        Object.assign(this, properties)
    }
}

export class QueryStringsConfig {
    QueryStrings?: List<Value<string>>
    QueryStringBehavior!: Value<string>

    constructor(properties: QueryStringsConfig) {
        Object.assign(this, properties)
    }
}

export interface CachePolicyProperties {
    CachePolicyConfig: CachePolicyConfig
}

export default class CachePolicy extends ResourceBase<CachePolicyProperties> {
    static CachePolicyConfig = CachePolicyConfig
    static CookiesConfig = CookiesConfig
    static HeadersConfig = HeadersConfig
    static ParametersInCacheKeyAndForwardedToOrigin = ParametersInCacheKeyAndForwardedToOrigin
    static QueryStringsConfig = QueryStringsConfig

    constructor(properties: CachePolicyProperties) {
        super('AWS::CloudFront::CachePolicy', properties)
    }
}
