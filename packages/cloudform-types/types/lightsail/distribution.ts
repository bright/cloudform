/* Generated from: 
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class CacheBehavior {
    Behavior?: Value<string>

    constructor(properties: CacheBehavior) {
        Object.assign(this, properties)
    }
}

export class CacheBehaviorPerPath {
    Path?: Value<string>
    Behavior?: Value<string>

    constructor(properties: CacheBehaviorPerPath) {
        Object.assign(this, properties)
    }
}

export class CacheSettings {
    ForwardedCookies?: CookieObject
    MinimumTTL?: Value<number>
    CachedHTTPMethods?: Value<string>
    AllowedHTTPMethods?: Value<string>
    MaximumTTL?: Value<number>
    ForwardedHeaders?: HeaderObject
    DefaultTTL?: Value<number>
    ForwardedQueryStrings?: QueryStringObject

    constructor(properties: CacheSettings) {
        Object.assign(this, properties)
    }
}

export class CookieObject {
    CookiesAllowList?: List<Value<string>>
    Option?: Value<string>

    constructor(properties: CookieObject) {
        Object.assign(this, properties)
    }
}

export class HeaderObject {
    HeadersAllowList?: List<Value<string>>
    Option?: Value<string>

    constructor(properties: HeaderObject) {
        Object.assign(this, properties)
    }
}

export class InputOrigin {
    RegionName?: Value<string>
    ProtocolPolicy?: Value<string>
    Name?: Value<string>

    constructor(properties: InputOrigin) {
        Object.assign(this, properties)
    }
}

export class QueryStringObject {
    Option?: Value<boolean>
    QueryStringsAllowList?: List<Value<string>>

    constructor(properties: QueryStringObject) {
        Object.assign(this, properties)
    }
}

export interface DistributionProperties {
    IpAddressType?: Value<string>
    Origin: InputOrigin
    DistributionName: Value<string>
    BundleId: Value<string>
    DefaultCacheBehavior: CacheBehavior
    IsEnabled?: Value<boolean>
    CacheBehaviorSettings?: CacheSettings
    CertificateName?: Value<string>
    Tags?: List<ResourceTag>
    CacheBehaviors?: List<CacheBehaviorPerPath>
}

export default class Distribution extends ResourceBase<DistributionProperties> {
    static CacheBehavior = CacheBehavior
    static CacheBehaviorPerPath = CacheBehaviorPerPath
    static CacheSettings = CacheSettings
    static CookieObject = CookieObject
    static HeaderObject = HeaderObject
    static InputOrigin = InputOrigin
    static QueryStringObject = QueryStringObject

    constructor(properties: DistributionProperties) {
        super('AWS::Lightsail::Distribution', properties)
    }
}
