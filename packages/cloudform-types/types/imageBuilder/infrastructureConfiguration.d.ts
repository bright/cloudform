import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class InstanceMetadataOptions {
    HttpPutResponseHopLimit?: Value<number>;
    HttpTokens?: Value<string>;
    constructor(properties: InstanceMetadataOptions);
}
export declare class Logging {
    S3Logs?: S3Logs;
    constructor(properties: Logging);
}
export declare class S3Logs {
    S3KeyPrefix?: Value<string>;
    S3BucketName?: Value<string>;
    constructor(properties: S3Logs);
}
export interface InfrastructureConfigurationProperties {
    Logging?: Logging;
    KeyPair?: Value<string>;
    Description?: Value<string>;
    InstanceProfileName: Value<string>;
    ResourceTags?: {
        [key: string]: Value<string>;
    };
    TerminateInstanceOnFailure?: Value<boolean>;
    SubnetId?: Value<string>;
    SecurityGroupIds?: List<Value<string>>;
    Name: Value<string>;
    InstanceMetadataOptions?: InstanceMetadataOptions;
    InstanceTypes?: List<Value<string>>;
    SnsTopicArn?: Value<string>;
    Tags?: {
        [key: string]: Value<string>;
    };
}
export default class InfrastructureConfiguration extends ResourceBase<InfrastructureConfigurationProperties> {
    static InstanceMetadataOptions: typeof InstanceMetadataOptions;
    static Logging: typeof Logging;
    static S3Logs: typeof S3Logs;
    constructor(properties: InfrastructureConfigurationProperties);
}
