import {ResourceBase} from '../resource'
import {Value} from '../internal'
import ForwardedValues from './forwardedValues'

export type AllowedMethods = "HEAD" | "GET" | "OPTIONS" | "DELETE" | "PATCH" | "POST" | "PUT" | "*"
export type CachedMethods = "HEAD" | "GET" | "OPTIONS" | "*"
export type ViewerProtocolPolicy = "allow-all" | "https-only" | "redirect-to-https" | "*"

export interface DefaultCacheBehaviorProperties {
    AllowedMethods?: Value<AllowedMethods>
    CachedMethods?: Value<CachedMethods>
    Compress?: Value<boolean>
    DefaultTTL?: Value<number>
    ForwardedValues: ForwardedValues
    MaxTTL?: Value<number>
    MinTTL?: Value<number>
    SmoothStreaming?: Value<boolean>
    TargetOriginId: Value<string>
    TrustedSigners?: Value<string>[]
    ViewerProtocolPolicy: Value<ViewerProtocolPolicy>
}

export default class DefaultCacheBehavior extends ResourceBase {
    constructor(properties: DefaultCacheBehaviorProperties, dependsOn?: Value<string>) {
        super('AWS::CloudFront::DefaultCacheBehavior', properties, dependsOn)
    }
}