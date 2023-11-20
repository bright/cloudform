import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class Logging {
    Bucket: Value<string>;
    Enabled: Value<boolean>;
    Prefix: Value<string>;
    constructor(properties: Logging);
}
export declare class S3Origin {
    DomainName: Value<string>;
    OriginAccessIdentity: Value<string>;
    constructor(properties: S3Origin);
}
export declare class StreamingDistributionConfig {
    Logging?: Logging;
    Comment: Value<string>;
    PriceClass?: Value<string>;
    S3Origin: S3Origin;
    Enabled: Value<boolean>;
    Aliases?: List<Value<string>>;
    TrustedSigners: TrustedSigners;
    constructor(properties: StreamingDistributionConfig);
}
export declare class TrustedSigners {
    Enabled: Value<boolean>;
    AwsAccountNumbers?: List<Value<string>>;
    constructor(properties: TrustedSigners);
}
export interface StreamingDistributionProperties {
    StreamingDistributionConfig: StreamingDistributionConfig;
    Tags: List<ResourceTag>;
}
export default class StreamingDistribution extends ResourceBase<StreamingDistributionProperties> {
    static Logging: typeof Logging;
    static S3Origin: typeof S3Origin;
    static StreamingDistributionConfig: typeof StreamingDistributionConfig;
    static TrustedSigners: typeof TrustedSigners;
    constructor(properties: StreamingDistributionProperties);
}
