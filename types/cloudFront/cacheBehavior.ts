import {ResourceBase} from '../resource'
import {Value} from '../internal'
import ForwardedValues from './forwardedValues'

export type AllowedMethods = "HEAD" | "GET" | "OPTIONS" | "DELETE" | "PATCH" | "POST" | "PUT" | "*"
export type CachedMethods = "HEAD" | "GET" | "OPTIONS" | "*"
export type ViewerProtocolPolicy = "allow-all" | "https-only" | "redirect-to-https" | "*"

export interface CacheBehaviorProperties {
    AllowedMethods?: Value<AllowedMethods>
    CachedMethods?: Value<CachedMethods>
    Compress?: Value<boolean>
    DefaultTTL?: Value<number>
    ForwardedValues: ForwardedValues
    MaxTTL?: Value<number>
    MinTTL?: Value<number>
    PathPattern: Value<string>
    SmoothStreaming?: Value<boolean>
    TargetOriginId: Value<string>
    TrustedSigners?: Value<string>[]
    ViewerProtocolPolicy: Value<ViewerProtocolPolicy>
}

export default class CacheBehavior extends ResourceBase {
    constructor(properties: CacheBehaviorProperties, dependsOn?: Value<string>) {
        super('AWS::CloudFront::CacheBehavior', properties, dependsOn)
    }
}