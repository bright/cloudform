import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class DataInputConfiguration {
    InferenceInputNameConfiguration?: InputNameConfiguration;
    S3InputConfiguration: S3InputConfiguration;
    InputTimeZoneOffset?: Value<string>;
    constructor(properties: DataInputConfiguration);
}
export declare class DataOutputConfiguration {
    KmsKeyId?: Value<string>;
    S3OutputConfiguration: S3OutputConfiguration;
    constructor(properties: DataOutputConfiguration);
}
export declare class InputNameConfiguration {
    ComponentTimestampDelimiter?: Value<string>;
    TimestampFormat?: Value<string>;
    constructor(properties: InputNameConfiguration);
}
export declare class S3InputConfiguration {
    Bucket: Value<string>;
    Prefix?: Value<string>;
    constructor(properties: S3InputConfiguration);
}
export declare class S3OutputConfiguration {
    Bucket: Value<string>;
    Prefix?: Value<string>;
    constructor(properties: S3OutputConfiguration);
}
export interface InferenceSchedulerProperties {
    InferenceSchedulerName?: Value<string>;
    DataUploadFrequency: Value<string>;
    ModelName: Value<string>;
    DataInputConfiguration: DataInputConfiguration;
    DataOutputConfiguration: DataOutputConfiguration;
    ServerSideKmsKeyId?: Value<string>;
    DataDelayOffsetInMinutes?: Value<number>;
    RoleArn: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class InferenceScheduler extends ResourceBase<InferenceSchedulerProperties> {
    static DataInputConfiguration: typeof DataInputConfiguration;
    static DataOutputConfiguration: typeof DataOutputConfiguration;
    static InputNameConfiguration: typeof InputNameConfiguration;
    static S3InputConfiguration: typeof S3InputConfiguration;
    static S3OutputConfiguration: typeof S3OutputConfiguration;
    constructor(properties: InferenceSchedulerProperties);
}
