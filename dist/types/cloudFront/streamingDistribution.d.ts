import { ResourceBase, ResourceTag } from '../resource';
import { Value } from '../dataTypes';
export interface TrustedSignersProperties {
    Enabled: Value<boolean>;
    AwsAccountNumbers?: Value<string>[];
}
export declare class TrustedSigners extends ResourceBase {
    constructor(properties: TrustedSignersProperties, dependsOn?: Value<string>);
}
export interface S3OriginProperties {
    DomainName: Value<string>;
    OriginAccessIdentity: Value<string>;
}
export declare class S3Origin extends ResourceBase {
    constructor(properties: S3OriginProperties, dependsOn?: Value<string>);
}
export interface LoggingProperties {
    Bucket: Value<string>;
    Enabled: Value<boolean>;
    Prefix: Value<string>;
}
export declare class Logging extends ResourceBase {
    constructor(properties: LoggingProperties, dependsOn?: Value<string>);
}
export interface StreamingDistributionConfigProperties {
    Logging?: Logging;
    Comment: Value<string>;
    PriceClass?: Value<string>;
    S3Origin: S3Origin;
    Enabled: Value<boolean>;
    Aliases?: Value<string>[];
    TrustedSigners: TrustedSigners;
}
export declare class StreamingDistributionConfig extends ResourceBase {
    constructor(properties: StreamingDistributionConfigProperties, dependsOn?: Value<string>);
}
export interface StreamingDistributionProperties {
    StreamingDistributionConfig: StreamingDistributionConfig;
    Tags?: ResourceTag[];
}
export default class StreamingDistribution extends ResourceBase {
    constructor(properties: StreamingDistributionProperties, dependsOn?: Value<string>);
}
