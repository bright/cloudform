import {ResourceBase} from '../resource'
import {Value} from '../internal'
import CacheBehavior from './cacheBehavior'
import CustomErrorResponse from './customErrorResponse'
import DefaultCacheBehavior from './defaultCacheBehavior'
import Logging from './logging'
import Origin from './origin'
import Restrictions from './restrictions'
import ViewerCertificate from './viewerCertificate'

export type HttpVersion = "http1.1" | "http2" | "*"

export interface DistributionConfigProperties {
    Aliases?: Value<string>[]
    CacheBehaviors?: CacheBehavior[]
    Comment?: Value<string>
    CustomErrorResponses?: CustomErrorResponse[]
    DefaultCacheBehavior: DefaultCacheBehavior
    DefaultRootObject?: Value<string>
    Enabled: Value<boolean>
    HttpVersion?: Value<HttpVersion>
    Logging?: Logging
    Origins?: Origin[]
    PriceClass?: Value<string>
    Restrictions?: Restrictions
    ViewerCertificate?: ViewerCertificate
    WebACLId?: Value<string>
}

export default class DistributionConfig extends ResourceBase {
    constructor(properties: DistributionConfigProperties, dependsOn?: Value<string>) {
        super('AWS::CloudFront::DistributionConfig', properties, dependsOn)
    }
}