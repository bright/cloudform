import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class S3Logs {
    S3BucketName?: Value<string>;
    S3KeyPrefix?: Value<string>;
    constructor(properties: S3Logs);
}
export declare class Logging {
    S3Logs?: S3Logs;
    constructor(properties: Logging);
}
export interface InfrastructureConfigurationProperties {
    Name: Value<string>;
    Description?: Value<string>;
    InstanceTypes?: List<Value<string>>;
    SecurityGroupIds?: List<Value<string>>;
    Logging?: Logging;
    SubnetId?: Value<string>;
    KeyPair?: Value<string>;
    TerminateInstanceOnFailure?: Value<boolean>;
    InstanceProfileName: Value<string>;
    SnsTopicArn?: Value<string>;
    ResourceTags?: {
        [key: string]: Value<string>;
    };
    Tags?: {
        [key: string]: Value<string>;
    };
}
export default class InfrastructureConfiguration extends ResourceBase<InfrastructureConfigurationProperties> {
    static S3Logs: typeof S3Logs;
    static Logging: typeof Logging;
    constructor(properties: InfrastructureConfigurationProperties);
}
