import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class Code {
    S3ObjectVersion?: Value<string>;
    S3Bucket?: Value<string>;
    ZipFile?: Value<string>;
    S3Key?: Value<string>;
    ImageUri?: Value<string>;
    constructor(properties: Code);
}
export declare class DeadLetterConfig {
    TargetArn?: Value<string>;
    constructor(properties: DeadLetterConfig);
}
export declare class Environment {
    Variables?: {
        [key: string]: Value<string>;
    };
    constructor(properties: Environment);
}
export declare class EphemeralStorage {
    Size: Value<number>;
    constructor(properties: EphemeralStorage);
}
export declare class FileSystemConfig {
    Arn: Value<string>;
    LocalMountPath: Value<string>;
    constructor(properties: FileSystemConfig);
}
export declare class ImageConfig {
    WorkingDirectory?: Value<string>;
    Command?: List<Value<string>>;
    EntryPoint?: List<Value<string>>;
    constructor(properties: ImageConfig);
}
export declare class RuntimeManagementConfig {
    UpdateRuntimeOn: Value<string>;
    RuntimeVersionArn?: Value<string>;
    constructor(properties: RuntimeManagementConfig);
}
export declare class SnapStart {
    ApplyOn: Value<string>;
    constructor(properties: SnapStart);
}
export declare class SnapStartResponse {
    OptimizationStatus?: Value<string>;
    ApplyOn?: Value<string>;
    constructor(properties: SnapStartResponse);
}
export declare class TracingConfig {
    Mode?: Value<string>;
    constructor(properties: TracingConfig);
}
export declare class VpcConfig {
    Ipv6AllowedForDualStack?: Value<boolean>;
    SecurityGroupIds?: List<Value<string>>;
    SubnetIds?: List<Value<string>>;
    constructor(properties: VpcConfig);
}
export interface FunctionProperties {
    Policy?: {
        [key: string]: any;
    };
    Description?: Value<string>;
    TracingConfig?: TracingConfig;
    VpcConfig?: VpcConfig;
    RuntimeManagementConfig?: RuntimeManagementConfig;
    ReservedConcurrentExecutions?: Value<number>;
    SnapStart?: SnapStart;
    FileSystemConfigs?: List<FileSystemConfig>;
    FunctionName?: Value<string>;
    Runtime?: Value<string>;
    KmsKeyArn?: Value<string>;
    PackageType?: Value<string>;
    CodeSigningConfigArn?: Value<string>;
    Layers?: List<Value<string>>;
    Tags?: List<ResourceTag>;
    ImageConfig?: ImageConfig;
    MemorySize?: Value<number>;
    DeadLetterConfig?: DeadLetterConfig;
    Timeout?: Value<number>;
    Handler?: Value<string>;
    Code: Code;
    Role: Value<string>;
    Environment?: Environment;
    EphemeralStorage?: EphemeralStorage;
    Architectures?: List<Value<string>>;
}
export default class Function extends ResourceBase<FunctionProperties> {
    static Code: typeof Code;
    static DeadLetterConfig: typeof DeadLetterConfig;
    static Environment: typeof Environment;
    static EphemeralStorage: typeof EphemeralStorage;
    static FileSystemConfig: typeof FileSystemConfig;
    static ImageConfig: typeof ImageConfig;
    static RuntimeManagementConfig: typeof RuntimeManagementConfig;
    static SnapStart: typeof SnapStart;
    static SnapStartResponse: typeof SnapStartResponse;
    static TracingConfig: typeof TracingConfig;
    static VpcConfig: typeof VpcConfig;
    constructor(properties: FunctionProperties);
}
