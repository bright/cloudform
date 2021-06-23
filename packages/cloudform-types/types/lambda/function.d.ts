import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class VpcConfig {
    SecurityGroupIds?: List<Value<string>>;
    SubnetIds?: List<Value<string>>;
    constructor(properties: VpcConfig);
}
export declare class DeadLetterConfig {
    TargetArn?: Value<string>;
    constructor(properties: DeadLetterConfig);
}
export declare class FileSystemConfig {
    Arn: Value<string>;
    LocalMountPath: Value<string>;
    constructor(properties: FileSystemConfig);
}
export declare class Code {
    S3Bucket?: Value<string>;
    S3Key?: Value<string>;
    S3ObjectVersion?: Value<string>;
    ZipFile?: Value<string>;
    ImageUri?: Value<string>;
    constructor(properties: Code);
}
export declare class TracingConfig {
    Mode?: Value<string>;
    constructor(properties: TracingConfig);
}
export declare class Environment {
    Variables?: {
        [key: string]: Value<string>;
    };
    constructor(properties: Environment);
}
export declare class ImageConfig {
    EntryPoint?: List<Value<string>>;
    Command?: List<Value<string>>;
    WorkingDirectory?: Value<string>;
    constructor(properties: ImageConfig);
}
export interface FunctionProperties {
    Code: Code;
    DeadLetterConfig?: DeadLetterConfig;
    Description?: Value<string>;
    Environment?: Environment;
    FileSystemConfigs?: List<FileSystemConfig>;
    FunctionName?: Value<string>;
    Handler?: Value<string>;
    KmsKeyArn?: Value<string>;
    Layers?: List<Value<string>>;
    MemorySize?: Value<number>;
    ReservedConcurrentExecutions?: Value<number>;
    Role: Value<string>;
    Runtime?: Value<string>;
    Tags?: List<ResourceTag>;
    Timeout?: Value<number>;
    TracingConfig?: TracingConfig;
    VpcConfig?: VpcConfig;
    CodeSigningConfigArn?: Value<string>;
    ImageConfig?: ImageConfig;
    PackageType?: Value<string>;
}
export default class Function extends ResourceBase<FunctionProperties> {
    static VpcConfig: typeof VpcConfig;
    static DeadLetterConfig: typeof DeadLetterConfig;
    static FileSystemConfig: typeof FileSystemConfig;
    static Code: typeof Code;
    static TracingConfig: typeof TracingConfig;
    static Environment: typeof Environment;
    static ImageConfig: typeof ImageConfig;
    constructor(properties: FunctionProperties);
}
