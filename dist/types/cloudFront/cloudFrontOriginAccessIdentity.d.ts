import { ResourceBase } from '../resource';
import { Value } from '../internal';
export interface CloudFrontOriginAccessIdentityConfigProperties {
    Comment: Value<string>;
}
export declare class CloudFrontOriginAccessIdentityConfig extends ResourceBase {
    constructor(properties: CloudFrontOriginAccessIdentityConfigProperties, dependsOn?: Value<string>);
}
export interface CloudFrontOriginAccessIdentityProperties {
    CloudFrontOriginAccessIdentityConfig: CloudFrontOriginAccessIdentityConfig;
}
export default class CloudFrontOriginAccessIdentity extends ResourceBase {
    constructor(properties: CloudFrontOriginAccessIdentityProperties, dependsOn?: Value<string>);
}
