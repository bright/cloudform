import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface CloudFrontOriginAccessIdentityConfigProperties {
    Comment: Value<string>;
}
export declare class CloudFrontOriginAccessIdentityConfig extends ResourceBase {
    constructor(properties: CloudFrontOriginAccessIdentityConfigProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface CloudFrontOriginAccessIdentityProperties {
    CloudFrontOriginAccessIdentityConfig: CloudFrontOriginAccessIdentityConfig;
}
export default class CloudFrontOriginAccessIdentity extends ResourceBase {
    constructor(properties: CloudFrontOriginAccessIdentityProperties, dependsOn?: Value<string> | Value<string>[]);
}
