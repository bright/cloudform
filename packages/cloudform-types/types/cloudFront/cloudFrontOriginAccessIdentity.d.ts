import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export declare class CloudFrontOriginAccessIdentityConfig {
    Comment: Value<string>;
    constructor(properties: CloudFrontOriginAccessIdentityConfig);
}
export interface CloudFrontOriginAccessIdentityProperties {
    CloudFrontOriginAccessIdentityConfig: CloudFrontOriginAccessIdentityConfig;
}
export default class CloudFrontOriginAccessIdentity extends ResourceBase<CloudFrontOriginAccessIdentityProperties> {
    static CloudFrontOriginAccessIdentityConfig: typeof CloudFrontOriginAccessIdentityConfig;
    constructor(properties: CloudFrontOriginAccessIdentityProperties);
}
